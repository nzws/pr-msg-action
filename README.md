# pr-msg-action

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/nzws/pr-msg-action/Node%20CI?style=for-the-badge)](https://github.com/nzws/pr-msg-action/actions)
[![GitHub](https://img.shields.io/github/license/nzws/pr-msg-action?style=for-the-badge)](#license)
[![code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge&logo=prettier)](https://prettier.io/)
[![dependabot enabled](https://img.shields.io/badge/dependabot-enabled-0366D6.svg?style=for-the-badge&logo=dependabot)](https://github.com/nzws/pr-msg-action/pulls?utf8=%E2%9C%93&q=is%3Apr+label%3Adependencies+)

> Comment the result of any command on the pull request.

## Usage

Create `.github/workflows/<workflow name>.yml`.

```yaml
name: Comment jest coverage
on:
  - pull_request
jobs:
  run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - run: yarn --frozen-lockfile

      - uses: nzws/pr-msg-action@master
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          command: 'yarn jest --coverage'
```

Inputs:

- `token`: GitHub's token (Use `${{ secrets.GITHUB_TOKEN }}`)
- `command`: Command to be executed.

## License

- code: MIT
