import { User } from "@@/services/user-service"
import { UserApiClient } from "@@/services/user-service/client"
import config from "@@/config"
import * as faker from "faker"
import { SOME_CONST } from "@@/const"
import { TestData } from "@@/testdata"

describe("Spartan Product Domain test", () => {
  let userApiClient: UserApiClient
  beforeAll(() => {
    userApiClient = new UserApiClient(config.apiHost)
  })

  describe("User API", () => {
    let testData = new TestData()

    beforeAll(() => {
      testData.loadData()
    })

    test("1. call user API ", async () => {
      let resp = await userApiClient.getUser(testData.userTestData!.existingUser.id)
      expect(resp.returnCode).toBe("0")
      expect(resp.data.id).not.toBe(testData.userTestData!.existingUser.id)
    })
  })
})
