axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
templates    = require 'client-templates'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    js_pipeline(files: ['assets/js/*.coffee', 'assets/js/vendor/*.js'], out: 'js/build.js', minify: true, hash: true),
    css_pipeline(files: ['assets/css/*.*', 'assets/css/vendor/*.css'], out: 'css/build.css', minify: true, hash: true),
    templates(base: 'views/templates', out: "js/templates.js" )
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
