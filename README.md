# playwright-ts

Requirements:

Node

Install playwright: 
 
    npm install --save-dev playwright

Install typescript: 

    npm install --save-dev typescript
    
Install jest: Jest is a testrunner it helps to execute the testcases and provides great API. By default playwright testcases are executed by Node.
  
    npm install --save-dev jest
    npm install --save-dev ts-jest @types/jest
    npm install --save-dev jest-playwright-preset

Run: Tests are defined under the src folder and npm test will execute all the *.tests.ts files.

    npm test 
