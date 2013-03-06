
# watch-js

```
  Usage: watch [options] <file>

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -m, --match <glob>  Only report changes when filename matches glob.
    -i, --interval <s>  Run on an interval of seconds.
    -b, --before <cmd>  Command to run before monitoring starts.
    -r, --running       Monitor long-running process.
    -v, --verbose       Be verbose.
    -l, --live          Live reload.
    -d, --delay <ms>    Time in ms to delay updates.
    -w, --watch <dir>   Watch for changes on dir.
```

## Examples

Runs `make` when a file changes:

```sh
$ watch make
```

Runs `make` before monitoring __(-b)__, then runs `node server`, a long-running process __(-r)__:

```sh
$ watch -rb make node server
```

Runs `make` then reloads __(-l)__ browser when files of type `.js` or `.css` change __(-m)__:

```sh
$ watch -lm *.{js,css} make
```

The above method requires this script tag:

```html
<script src="http://localhost:3003/reload.js"></script>
```

If you use [Components](https://github.com/component/component/wiki/Components)
you can add it in like this:

```js
"development": {
  "stagas/watch-js": "*"
}
```

Then you can do `require('stagas-watch-js')` in your development files.

Now, in conjuction with `watch -l make`, when you save a file in your editor it will run `make` and reload your browser automatically.

Combinations possible:

```sh
$ watch -lrb "make clean build" node server
```

## License

MIT
