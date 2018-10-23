'use strict';

const functions = require('firebase-functions');
const fs = require("fs");

exports.mockendpoint = functions.https.onRequest((req, res) => {
  //tmp
  const ip = req.headers['fastly-client-ip'] || req.connection.remoteAddress;
  console.log("client ip: " + ip);

  const rule = functions.config().rule;
  if (rule !== undefined && rule.allowed_ip !== undefined){
    if(rule.allowed_ip !== ip){
      res.status(401).send("401 unauthorized");
      return;
    }
  }

  const filename = req.path.replace(/\/$/,'');
  if(!fs.existsSync(`./content/${filename}`)){
    res.status(404).send("404 not found");
    return;
  }
  const content = fs.readFileSync(`./content/${filename}`).toString();
  const contentExpanded = content.replace(/\${mockserver_host}/g,req.get('host'))
                                 .replace(/\${mockserver_protocol}/g,req.protocol);
  res.status(200).send(contentExpanded);
});
