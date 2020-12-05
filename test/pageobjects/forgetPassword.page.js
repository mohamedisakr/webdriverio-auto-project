class ForgetPasswordPage {
  //
  get email() {
    return $("[id='email_field']");
  }

  setEmail(theEmail) {
    this.email.setValue(theEmail);
  }

  //
  get resetButton() {
    return $("[class='btn btn-primary btn-block']");
  }

  resetButtonClick() {
    this.resetButton.click();
  }

  //
  get errorMessage() {
    return $("[class='flash flash-full flash-error ']").getText();
  }
}

module.exports = new ForgetPasswordPage();
