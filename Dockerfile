# Container image that runs your code
FROM alpine:latest

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY fixtures-server-linux /fixtures-server-linux

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["./fixtures-server-linux"]
