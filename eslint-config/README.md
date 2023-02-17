
## Eslint
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making 
code more consistent and avoiding bugs. 
In many ways, it is similar to JSLint and JSHint with a few exceptions:
     
    
## Usage/Examples

   Place eslint-config and .vscode folder on root

   Commands

``` bash
npm run --prefix ./eslint-config install
```

Then select configuration according to requirement:

    How would you like to use ESLint?
       ▸ To check syntax, find problems, and enforce code style
    What type of modules does your project use?
        ▸ JavaScript modules (import/export)
    Which framework does your project use?
        ▸ React
    Does your project use TypeScript? 
        ▸ No / Yes
    Where does your code run? · 
        ▸ browser
    How would you like to define a style for your project?
        ▸ Use a popular style guide
    Which style guide do you want to follow? … 
        ▸ Standard: https://github.com/standard/eslint-config-standard-with-typescript
    What format do you want your config file to be in? … 
        ▸ JavaScript
    Which package manager do you want to use? … 
        ▸ npm
                
Add script in `package.json` for `lint`

   ```javascript
   "scripts": {
		"lint": "eslint .",
		"lint:fix": "eslint . --fix"
	}
  ```

Paste in `eslintrc.cjs` for existing rule or configure your rule 
   
     module.exports = {
          parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          project: './tsconfig.json',
          tsconfigRootDir: __dirname
          },
          extends: ['./eslint-config']
     }


## Reference
https://eslint.org/docs/latest/rules/
