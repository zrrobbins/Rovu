var current_env = (process.env.GULP_DEPLOY_ENV || 'local').toLowerCase();

var src = './rovu-static/src';
var dest = './rovu-static/build';

module.exports = {
  env: current_env,
  serve: {
    port: 3000,
    server: {
      index: 'index.html',
      baseDir: './rovu-static/build/',
    },
  },
  sass: {
    src: src + '/sass/**.*',
    dest: dest + '/css/',
    settings: {
      indentedSyntax: true
    }
  },
  dirs: {
    dest: dest,
    src: src
  }
};
