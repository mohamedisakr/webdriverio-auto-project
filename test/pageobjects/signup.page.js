class SignupPage {
  //
  get username() {
    return $("[id='user[login]']");
  }

  //
  get email() {
    return $("[id='user[email]']");
  }

  //
  get password() {
    return $("[id='user[password]']");
  }

  //
  get emailPreferences() {
    return $("[id='all_emails']");
  }

  //
  get genericError() {
    return $("[class='flash flash-error my-3']");
  }

  //
  get errorMessages() {
    return $$("[class='error']");
  }
}

module.exports = new SignupPage();
