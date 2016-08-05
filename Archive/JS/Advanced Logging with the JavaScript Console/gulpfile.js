var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.browserSync({
        proxy: false,
        files: "./**",
        server: {
            baseDir: "./",
            index: "index.html"
        }

    });
});
