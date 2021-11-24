import { validURL } from "../js/validURL";

describe("Test Client", () => {
  test("Return true if URL is valid", () => {
    expect(validURL("https://jamesclear.com/saying-no")).toBeTruthy();
  });

  test("Return false if URL is not valid", () => {
    expect(validURL("some text")).toBeFalsy();
  });
  test("valid URL function defined or not", () => {
    expect(validURL()).toBeDefined();
  });
});
