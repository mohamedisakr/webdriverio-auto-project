const TestType = Object.freeze({ Negative: "Negative", Positive: "Positive" });

const inputs = [
  {
    desc: "should fail when the user type invalid email",
    type: TestType.Negative,
    email: "",
    expectedError:
      "That address is not a verified primary email or is not associated with a personal user account. Organization billing emails are only for notifications",
  },
  {
    desc: "should fail when the user left blank email",
    type: TestType.Negative,
    email: "",
    expectedError:
      "That address is not a verified primary email or is not associated with a personal user account. Organization billing emails are only for notifications",
  },
  // {
  //   desc: "should fail when the user type username and blank password",
  //   type: TestType.Negative,
  //   email: "",
  //   expectedError:
  //     "That address is not a verified primary email or is not associated with a personal user account. Organization billing emails are only for notifications",
  // },
  // {
  //   desc: "should fail when the user black username and type password",
  //   type: TestType.Negative,
  //   email: "",
  //   expectedError:
  //     "That address is not a verified primary email or is not associated with a personal user account. Organization billing emails are only for notifications",
  // },
];

module.exports = inputs;
