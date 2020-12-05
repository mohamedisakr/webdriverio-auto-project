const signinPage = require("../pageobjects/signin.page");
const { inputs, positives } = require("../data/signin.data");

describe.skip("github.com signin negative test suite", () => {
  const expect = require("chai").expect;
  inputs.forEach((input) => {
    it(`${input.desc},  (${input.type} test)`, () => {
      signinPage.open();
      const { username, password } = input;
      signinPage.login(username, password);
      expect(signinPage.errorMessage).to.contain(input.expectedError);
    });
  });
});

describe("github.com signin positive test suite", () => {
  positives.forEach((input) => {
    it(`${input.desc},  (${input.type} test)`, () => {
      signinPage.open();
      const { username, password } = input;
      signinPage.login(username, password);
      expect(signinPage.flash).not.toBeExisting();
      // expect(browser.getUrl()).to.contain("github");
    });
  });
});
