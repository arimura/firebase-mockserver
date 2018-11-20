.PHONY: sync-local-with-cloud sync-cloud-with-local deploy

sync-local-with-cloud:
	mkdir -p public
	mkdir -p functions/content
	gsutil rsync $(MS_BUCKET)/public public
	gsutil rsync $(MS_BUCKET)/content functions/content

sync-cloud-with-local:
	gsutil rsync public $(MS_BUCKET)/public
	gsutil rsync functions/content $(MS_BUCKET)/content

deploy:
	firebase deploy --only functions,hosting
