#!/usr/bin/env node

'use strict';

const meow = require('meow');
const spinner = require('ora')();
const syncList = require('sync-safari-reading-list');
const config = {};

const cli = meow(`
	Usage
	  $ sync-safari-reading-list [options]

	Options
	  -f, --file [file]  Path to property list. (Default: Safari Reading List)
	  -t, --token [token]  Pinboard API token (Default: PINBOARD_API_TOKEN)
	  -k, --keep-items  Should list items be kept instead of being removed.
	  -u, --keep-original-urls  Should original URLs be preserved (i.e. don’t resolve redirects or strip mobile and UTM parts)
`, {
	alias: {
		f: 'file',
		t: 'token',
		k: 'keep-items',
		u: 'keep-original-urls',
		h: 'help',
		v: 'version'
	},
	'default': {
		token: process.env.PINBOARD_API_TOKEN,
		'keep-items': false,
		'keep-original-urls': false
	}
});

if ( cli.flags.file ) {
	config.filePath = cli.flags.file;
}

spinner.start();

syncList(Object.assign({
	apiToken: cli.flags.token,
	clearList: !cli.flags.keepItems,
	cleanUrls: !cli.flags.keepOriginalUrls
}, config))
	.then(( res ) => {
		const count = res.length;
		spinner.text = `Saved ${count} ${count === 1 ? 'link' : 'links'}.`;
		spinner.succeed();
		return res;
	})
	.catch(( err ) => {
		spinner.text = err;
		spinner.fail();
		process.exit(1); // eslint-disable-line no-process-exit
	});
