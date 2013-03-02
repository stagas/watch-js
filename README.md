
# watch-js

```
  Usage: watch [options] <file>

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -i, --interval <s>  Run on an interval of seconds.
    -b, --before <cmd>  Command to run before monitoring starts.
    -r, --running       Monitor long-running process.
    -l, --live          Live reload.
    -w, --watch <dir>   Watch for changes on dir.
```

## Examples

- Runs `make` every time a file changes
under current dir.

  - `watch make`

- Runs `make`, then starts a server and monitors changes.
When a file changes it will kill the server and restart.

  - `watch --before make node server.js`

- Monitors file changes, runs `make` and reloads browser:

  Add this to your html:

  - `<script src="http://localhost:3030/refresh.js"></script>`

  and then:

  - `watch --live make`

- Combined behavior, will run `make`, then a node server and
restart everything and reload browser when a file changes:

  - `watch --live --before make node server`

- Watch a long-running process, like a server and restart
on changes:

  - `watch --running node server`

- Watch a long-running process, like a server, restart
on changes and update browser:

  - `watch --live --running node server`

## License

MIT
