import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
checkNpmVersions({
	mongodb: '2.2.4',
	'gridfs-stream': '1.1.1'
}, 'steedos:cfs-gridfs');