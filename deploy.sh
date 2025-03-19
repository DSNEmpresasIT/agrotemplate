#!/bin/bash
gcloud auth configure-docker \
    southamerica-west1-docker.pkg.dev
docker build -t southamerica-west1-docker.pkg.dev/dsn-dev-438322/agrotemplate/agrotemplate:latest  .

docker push southamerica-west1-docker.pkg.dev/dsn-dev-438322/agrotemplate/agrotemplate:latest 

gcloud run deploy agrotemplate \
    --image=southamerica-west1-docker.pkg.dev/dsn-dev-438322/agrotemplate/agrotemplate:latest  \
    --region=us-east1 \
    --platform=managed \
    --allow-unauthenticated \
    --port=4242