#!/bin/sh

curl -L -O https://github.com/octokit/fixtures-server/releases/download/v6.0.4/fixtures-server-linux
chmod +x fixtures-server-linux
echo "$(ls -l)"
./fixtures-server-linux
