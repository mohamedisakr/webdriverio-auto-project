class ProfilePage {
  //
  get signinAs() {
    // [class='css-truncate-target']
    // return $("[class='css-truncate-target']");
    // return $(
    //   "[class='no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block']"
    // );
    // return $(
    //   ".no-underline.user-profile-link.px-3.pt-2.pb-2.mb-n2.mt-n1.d-block"
    // );

    // return $(
    //   "a[class='no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block']"
    // );
    return $(
      "div a[class='no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block']"
    );
  }

  //   get innerText() {
  //     return this.signinAs.getText();
  //   }
}

module.exports = new ProfilePage(); //SecurePage();
