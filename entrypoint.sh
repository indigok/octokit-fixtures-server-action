#!/bin/bash

echo "Hello"
curl -L -O https://github.com/octokit/fixtures-server/releases/download/v6.0.4/fixtures-server-linux
echo "Another hello"
chmod +x fixtures-server-linux
echo "A final hello"
./fixtures-server-linux
