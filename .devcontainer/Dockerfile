# Image metadata and config.
# Ideally, the image version should be what we use on CI.
FROM cypress/included:4.12.1

LABEL name="CoreLogic Angular dev environment" \
      description="This image can be used to create a dev environment for building Angular." \
      vendor="angular" \
      version="1.0"

EXPOSE 4000 4200 4433 5000 8080 9876

USER root

# Configure `Node.js`/`npm` and install utilities.
RUN npm config --global set user root
RUN npm install @angular/cli -g
RUN npm install -g nx

# Go! (And keep going.)
CMD ["tail", "--follow", "/dev/null"]