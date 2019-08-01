
/* Add Required items */

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();


// define the path

var paths = {
    styles: {
        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
        src: "templates/rafflesia/*.scss",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "./css"
    }
};

var bootpath = {
  styles: {
    src: "node_modules/bootstrap/scss/bootstrap.scss/*.scss",

    dest: "css/inc"
  }
};

// gulp test task hello
gulp.task('hello', function() {
  console.log('Hello World');
});

// sass desitnation src folder css - gulp toscr
gulp.task('tosrc', function(){
  return gulp.src(paths.styles.src)
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest(paths.styles.dest))
});

/*
=====================
Gulp Task - source :
https://levelup.gitconnected.com/how-to-setup-your-workflow-using-gulp-v4-0-0-5450e3d7c512
=====================
*/

function style() {
    return gulp
        .src(paths.styles.src)
        // Initialize sourcemaps before compilation starts
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", sass.logError)
        // Use postcss with autoprefixer and compress the compiled file using cssnano
        .pipe(postcss([autoprefixer(), cssnano()]))
        // Now add/write the sourcemaps
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest))
        // Add browsersync stream pipe after compilation
        .pipe(browserSync.stream());
};


// A simple task to reload the page
function reload() {
    browserSync.reload();
};


// Add browsersync initialization at the start of the watch task
function watch() {
    browserSync.init({
        // You can tell browserSync to use this directory and serve it as a mini-server
        server: {
            baseDir: "./"
        }
        // If you are already serving your website locally using something like apache
        // You can use the proxy setting to proxy that instead
        // proxy: "yourlocal.dev"
    });
    gulp.watch(paths.styles.src, style);
    // We should tell gulp which files to watch to trigger the reload
    // This can be html or whatever you're using to develop your website
    // Note -- you can obviously add the path to the Paths object
    gulp.watch("./*.html", reload);
};

// Don't forget to expose the task!
exports.watch = watch;

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style;

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.parallel(style, watch);

/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('build', build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);

/*
Bootsrap to compile
*/

function bootstrapCompile() {
  return gulp
    .src(bootpath.styles.src)
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest(bootpath.styles.dest))
};

exports.bootstrapCompile = bootstrapCompile;
// compile bootstrap
gulp.task('tobootstrap',bootstrapCompile) ;


/*
Move JS
*/

function moveJS() {
  return gulp
    .src(['node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/popper.js/dist/popper.min.js','node_modules/tether/dist/js/tether.min.js',
    'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest("js/inc"))
    .pipe(browserSync.stream())
};

exports.moveJS = moveJS;

gulp.task('movejs',moveJS);


/*
Minify Source
*/
