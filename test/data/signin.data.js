const TestType = Object.freeze({ Negative: "Negative", Positive: "Positive" });

const inputs = [
  {
    desc: "should fail when the user left blank username and password",
    type: TestType.Negative,
    username: "",
    password: "",
    expectedError: "Incorrect username or password",
  },
  {
    desc:
      "should fail when the user type invalid username and invalid password",
    type: TestType.Negative,
    username: "testuser",
    password: "testpassword",
    expectedError: "Incorrect username or password",
  },

  {
    desc: "should fail when the user type username and blank password",
    type: TestType.Negative,
    username: "testuser",
    password: "",
    expectedError: "Incorrect username or password",
  },
  {
    desc: "should fail when the user black username and type password",
    type: TestType.Negative,
    username: "",
    password: "testpassword",
    expectedError: "Incorrect username or password",
  }, // TODO: positive test cases
];

const positives = [
  {
    desc: "should pass when the user type valid username and valid password",
    type: TestType.Positive,
    // username: "tom-smith-coder",
    username: "tom-smith-coder@tmpbox.net",
    password: "tom-smith-coder@tmpbox.net",
    expectedError: "",
  },
];

module.exports = { inputs, positives };
