# ts-jest-boilerplate

Initiate for api test with ts-jest

## Usage

### 1. Add api

- add api in `scr/services/<some-api>` as example is user service api
- create property of api in `ApiClient` class as example there is `userApi` and `roleApi`
- initial api property in constructor

### 2. Add test data

- add test data in `testdata/<env>/<testDataObject>.json`
- add property in class `TestData` with the same name as test data file, it will automatically load from file that have same name
- type of property better to align with data schema in json

### 3. Add test cases

- add test cases in `testcases` , import { ApiClient } from "@@/services/common" to initial client and use api from ApiClient object

## Configuation

just follow dotenv https://www.npmjs.com/package/dotenv

## Run test

default env is dev

$ yarn test

specific env to load data and config

$ ENV=beta yarn test
