'use strict';

const assert = require('assert');
const execa = require('execa');
const pkg = require('../package.json');

it('should output version number', function () {

	const cli = execa.stdout('./cli.js', ['-v']);

	return cli
		.then(( res ) => {
			assert.equal(res, pkg.version);
		});

});

it('should output help information', function () {

	const cli = execa.stdout('./cli.js', ['-h']);

	return cli
		.then(( res ) => {
			assert.equal(typeof res, 'string');
		});

});
