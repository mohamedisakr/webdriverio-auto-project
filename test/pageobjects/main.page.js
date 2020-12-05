class MainPage {
  get searchInput() {
    return $(".slidingNav #search_input_react");
  }

  search(keyword) {
    // this.searchInput().addValue(keyword);
    this.searchInput.addValue(keyword);
  }

  searchInputClick() {
    this.searchInput.click();
  }
}

module.exports = new MainPage();
