class SigninPage {
  //
  get username() {
    return $("[id='login_field']");
  }

  setUsername(theUsername) {
    this.username.setValue(theUsername);
  }

  get password() {
    return $("[id='password']");
  }

  setPassword(thePassword) {
    this.password.setValue(thePassword);
  }

  get signinButton() {
    return $("[name='commit']");
  }

  signinButtonClick() {
    this.signinButton.click();
  }

  //
  get flash() {
    return $(".flash.flash-full.flash-error");
  }

  //
  get errorMessage() {
    return this.flash.getText();
  }

  login(username, password) {
    this.setUsername(username);
    this.setPassword(password);
    this.signinButtonClick();
  }

  open() {
    const url = "https://github.com/login";
    return browser.url(url);
  }
}

module.exports = new SigninPage();
