const { spawn } = require('child_process');

let npm = process.env.TRAVIS_OS_NAME === 'windows' ? 'npm.cmd' : 'npm';

const runScript = script => {
  spawn(npm, ['run', script], { cwd: __dirname, stdio: 'inherit' });
};

if (process.env.TRAVIS_COMMIT_MESSAGE === 'chore: bump version') {
  if (process.env.TRAVIS_OS_NAME === 'windows') runScript('build-win32');
  else if (process.env.TRAVIS_OS_NAME === 'osx') runScript('build-darwin');
  else if (process.env.TRAVIS_OS_NAME === 'linux') runScript('build-linux');
}
