class DocsPage {
  get editButton() {
    return $(".slidingNav [href='/docs/gettingstarted.html']");
  }

  editButtonClick() {
    this.editButton.click();
  }
}

module.exports = new DocsPage();
