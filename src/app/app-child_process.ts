import spawn, { ExecException } from 'child_process';

export default () => {
  console.log('spawn.exec start');
  spawn.exec("node sleep.js",
  // { timeout: 10000, maxBuffer: 20000 * 1024 },
    (error: ExecException, stdout: string, stderr: string) => {
      console.log(`error:${ error }`);
      console.log(`stdout:${ stdout }`);
      console.log(`stderr:${ stderr }`);
    });
  console.log('spawn.exec end');
}
