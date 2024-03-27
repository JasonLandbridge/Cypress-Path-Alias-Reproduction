Reproduction steps:

1. Clone the repository
2. Run the following command:
```
npm i
```
3. Run the following command:
```
npm run cypress:e2e
```
4. Select browser and run the `test.cy.js` test
5. See that the test fails with the following error:

```bash
Error: [vite]: Rollup failed to resolve import "@utils" from "/mnt/PROJECTS/Cypress-Path-Alias-Reproduction/cypress/e2e/test.cy.js".
```
6. Now go to `.nuxt/tsconfig.json` and add the following line
```
"baseUrl": "./",
```
7. Refresh the Cypress browser window and see that the error disappears, if it shows

```
Sorry, we could not load: http://localhost:3000/ 
```
Then it went correctly, nuxt crashed/didn't startup correctly when the paths earlier couldn't be resolved.

The error happens whether webpack or Vite is used, I used Vite in this example as it allows hot reload to showcase the fix.
