# sync-safari-reading-list-cli

[![Build Status][ci-img]][ci]

Sync Safari Reading List to Pinboard bookmarking service.

This module is primarily useful for syncing default Safari Reading List bookmarks so there are some sensible defaults like automatic clearing of list after syncing.

## Install

```sh
npm install -g sync-safari-reading-list-cli
```

## Usage

``` sh
sync-safari-reading-list

  Sync Safari Reading List to Pinboard bookmarking service.

  Usage
    $ sync-safari-reading-list [options]

  Options
    -f, --file [file]  Path to property list. (Default: Safari Reading List)
    -t, --token [token]  Pinboard API token (Default: PINBOARD_API_TOKEN)
    -k, --keep-items  Should list items be kept instead of being removed.
```

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/sync-safari-reading-list-cli
[ci-img]: https://img.shields.io/travis/niksy/sync-safari-reading-list-cli.svg
[sync-safari-reading-list]: https://github.com/niksy/sync-safari-reading-list
