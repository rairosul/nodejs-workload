# nodejs-workload
Simple app to make http requests to other urls, every 20 seconds.

1. Edit urls.txt with the urls to send GET requests to, one per line.
2. Build and tag your docker image, e.g. docker build -t mycluster.icp:8500/default/nodejs-workload:latest
3. Push your tagged docker image to your local repository
4. Run the docker container, or else update deploy.yaml with your image details to deploy to kubernetes cluster.
