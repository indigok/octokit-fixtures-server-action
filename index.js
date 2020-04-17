const core = require('@actions/core');
const exec = require('@actions/exec');
const request = require('request');

main();

async function main() {

	try {
		url = "https://github.com/octokit/fixtures-server/releases/download/v6.0.3/fixtures-server-linux"
		var requestSettings = {
			method: 'GET',
			url: url,
			encoding: null
		};
		request(requestSettings, function(error, response, body) {
		}).on('response', function(response) {
			console.log(response.statusCode) // 200

			exec.exec(`octokit-fixtures-server`);
			console.log("server!")
		})
	} catch (error) {
		console.log(error)
		core.setFailed(error.message);
	}
}
