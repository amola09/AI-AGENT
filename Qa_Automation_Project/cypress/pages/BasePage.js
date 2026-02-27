class BasePage {
  visit(url) {
    cy.visit(url);
  }

  click(element) {
    cy.get(element).click();
  }

  type(element, text) {
    cy.get(element).clear().type(text);
  }
}

export default BasePage;