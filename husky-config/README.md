

<Meta title="Code Legos/Husky" />


## Why Husky?

 Husky improves your commits and more 🐶 woof!
 You can use it to lint your commit messages, run tests, 
 lint code, etc... when you commit or push. Husky supports all Git hooks.

## Prerequisites

 Git repository should be initailized.

## Quick start

To use shareable husky config, Place husky-config in root for the project

**Install husky with this command:**

```bash
  cd husky-config && npm run husky
```

`OS: Linux`

**You can install husky with lint check using this command:**

Add script in `package.json` for `lint`

   ```javascript
   "scripts": {
		"lint": "eslint .",
		"lint:fix": "eslint . --fix"
	}
```

```bash 
   cd husky-config && npm run lint
```

**You can install husky with branch validate hook  using this command:**

```bash 
   cd husky-config && npm run branch
```
**You can install husky with commit validate hook  using this command:**

```bash 
   cd husky-config && npm run commit
```
**You can install husky with all hooks mentioned above using this command:**

```bash 
   cd husky-config && npm run all
```


`OS: Windows, Mac`

**You can install husky with lint check using this command:**

Add script in `package.json` for `lint`

   ```javascript
   "scripts": {
		"lint": "eslint .",
		"lint:fix": "eslint . --fix"
	}
```

```bash 
   cd husky-config && npm run other-lint
```

**You can install husky with branch validate hook  using this command:**

```bash 
   cd husky-config && npm run other-branch
```
**You can install husky with commit validate hook  using this command:**

```bash 
   cd husky-config && npm run other-commit
```
**You can install husky with all hooks mentioned above using this command:**

```bash 
   cd husky-config && npm run other-all
```

After running command make sure to remove `npm test` from `.husky/pre-commit`

## Configuration

**To configure hook for branch refer to file `validate-branch-namerc` in root directory of the project**

Change the regex `pattern` according to requirement


```javascript
 {
  "pattern":  "^(master|develop|release)$|^(feature|fe|framework|(bug|hot)?fix)/.+$|^sprint-.+$/g",
  "errorMsg": "Incorrect branch name"
 }
```

**To configure hook for commit refer to file `commitlint.config.cjs` in root directory of the project**


```javascript
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

```

**Note:**

There should be space between `Header(JIRA:XXXX)` and `commit-message(message)` message to differentiate

```javascript
JIRA-XXXX: message
```


## References

Rules for commit message: https://commitlint.js.org/#/reference-rules

Rules for valid branch: https://extendsclass.com/regex/a3fe16a






