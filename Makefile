.PHONY: sync deploy

sync:
	mkdir -p public
	mkdir -p functions/content
	gsutil rsync $(MS_BUCKET)/public public
	gsutil rsync $(MS_BUCKET)/content functions/content

deploy:
	firebase deploy --only functions,hosting
