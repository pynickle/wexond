const gulp = require('gulp');
const terser = require('gulp-terser');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const ts = require('gulp-typescript');
const { spawn } = require('child_process');

const tsProject = ts.createProject('tsconfig.json');

const paths = {
  scripts: {
    src: ['src/**/*.ts', 'src/**/*.tsx'],
    dest: 'build/',
  },
  images: {
    src: 'src/renderer/resources/**/*.*',
    dest: 'build/resources/',
  },
  html: {
    src: 'src/html/*.html',
    dest: 'build/',
  },
};

function clean() {
  return del(['build']);
}

function html() {
  return gulp
    .src(paths.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.html.dest));
}

function images() {
  return gulp.src(paths.images.src).pipe(gulp.dest(paths.images.dest));
}

function scripts() {
  process.env.NODE_ENV = 'production';

  return gulp
    .src(paths.scripts.src)
    .pipe(tsProject())
    .pipe(terser())
    .pipe(gulp.dest(paths.scripts.dest));
}

function scriptsWatch() {
  return gulp
    .src(paths.scripts.src)
    .pipe(tsProject())
    .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  build();
  gulp.watch(paths.scripts.src, scriptsWatch);
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.images.src, images);
}

function start() {
  spawn('npm', ['start'], {
    shell: true,
    stdio: 'inherit',
  });
}

const build = gulp.series(clean, gulp.parallel(scripts, html, images));

exports.clean = clean;
exports.scripts = scripts;
exports.html = html;
exports.watch = watch;
exports.images = images;
exports.start = start;
exports.build = build;

exports.default = build;
