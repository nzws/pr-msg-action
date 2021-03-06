import * as core from '@actions/core';
import * as github from '@actions/github';
import stripAnsi from 'strip-ansi';
import execLogger from './utils/exec-logger';

(async () => {
  try {
    const {
      payload: { pull_request },
      repo
    } = github.context;
    const token = core.getInput('token', { required: true });
    const command = core.getInput('command', { required: true });
    const octokit = github.getOctokit(token);
    const repository = {
      repo: repo.repo,
      owner: repo.owner
    };

    core.debug(command);
    if (!pull_request) {
      return;
    }

    const result = await execLogger(command);
    if (result) {
      await octokit.issues.createComment({
        ...repository,
        body: '`' + command + '`:\n```\n' + stripAnsi(result) + '```\n',
        issue_number: pull_request.number
      });
    }
  } catch (e) {
    core.setFailed(e.message);
  }
})();
