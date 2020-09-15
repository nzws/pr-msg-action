import { exec, ExecOptions } from '@actions/exec';

const execLogger = async (
  commandLine: string,
  args?: string[],
  options?: ExecOptions
): Promise<string> => {
  let output = '';

  const updater = (data: Buffer) => (output += data.toString());

  try {
    await exec(commandLine, args, {
      ...options,
      listeners: {
        stdout: updater,
        stderr: updater
      }
    });

    return output;
  } catch (e) {
    return output;
  }
};

export default execLogger;
