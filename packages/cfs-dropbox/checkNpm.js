import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
checkNpmVersions({
	'dropbox': '0.10.3',
	'stream-buffers': '2.1.0'
}, 'steedos:cfs-dropbox');