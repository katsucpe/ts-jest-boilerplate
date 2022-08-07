import config from "@@/config";
import * as faker from "faker";
import { SOME_CONST } from "@@/const";
import { TestData } from "@@/testdata";
import { ApiClient } from "@@/services/common";

describe("User test", () => {
  let apiClient: ApiClient;
  let testData: TestData;

  beforeAll(() => {
    apiClient = new ApiClient(config.apiHost);
    testData = new TestData();
  });

  describe("User API", () => {
    test("1. call user API ", async () => {
      let resp = await apiClient.userApi.getUser(
        testData.userTestData!.existingUser.id
      );
      expect(resp.code).toBe("0");
      expect(resp.data.id).not.toBe(testData.userTestData!.existingUser.id);
    });
  });
});
