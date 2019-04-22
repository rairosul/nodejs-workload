# Format: FROM    repository[:version]
FROM       ubuntu:latest

# Format: MAINTAINER Name <email@addr.ess>
MAINTAINER Ruairi O'Sullivan <rairosul@ie.ibm.com>

# Installation:

# Update apt-get sources AND install NodeJS and npm
RUN apt-get update && apt-get install -y nodejs && apt-get install -y npm 

ADD ./ /var/apps/nodejs-workload

RUN \
  rm -fr /var/apps/nodejs-workload/.git ;\
  cd /var/apps/nodejs-workload ;\
  npm install;\
  npm install --save request;\
  npm install --save request-promise;\
  chmod +x run.sh


WORKDIR /var/apps/nodejs-workload

EXPOSE 9080 9443

ENV APP_NAME app.js

CMD ["./run.sh"]
