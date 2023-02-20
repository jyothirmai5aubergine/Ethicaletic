module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)(\W*)(\d+)(\W*)\s(.*)$/, /* (JIRA:1212, JIRA(1212), JIRA[1212])- message */
      headerCorrespondence: ['type', 'scope', 'ticket', 'subject']
    }
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feature',
        'JIRA' /* Add or replace with project prefix */
      ]
    ],
    'type-case': [2, 'always', ['upper-case', 'lower-case', 'sentence-case']],
    'subject-case': [2, 'always', ['upper-case', 'lower-case', 'sentence-case']]
  }
}
