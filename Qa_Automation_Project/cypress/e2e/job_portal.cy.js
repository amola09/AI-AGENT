
describe('Job Portal Functionality Test', () => {

  it('TC:01 :Searches for QA Tester jobs in Pune', () => {
   cy.visit('https://eaton.eightfold.ai/careers');
    cy.get('#position-query-search').type('QA Tester');
    cy.get('#position-location-search').clear().type('Pune');
    cy.get('#main-content > div.appshell-3eukr > div > div.stack-module_stack__LqslD.stack-module_full-width__cNMyu.stack-module_vertical__ZyU6e.stack-module_gap-m__-jQR9 > div.stack-module_stack__LqslD.stack-module_full-width__cNMyu.stack-module_vertical__ZyU6e.stack-module_gap-m__-jQR9 > div.stack-module_stack__LqslD.stack-module_full-width__cNMyu.stack-module_horizontal__m-79-.stack-module_gap-s__snYAO > div.stack-module_stack__LqslD.stack-module_horizontal__m-79-.stack-module_gap-xs__ypD4w > button > span').click();

    cy.url().should('include', 'remote');
    cy.get('#main-content > div.appshell-3eukr > div > div.stack-module_stack__LqslD.undefined.stack-module_full-width__cNMyu.stack-module_horizontal__m-79-.stack-module_gap-xl__3pVJq > div > div.stack-module_stack__LqslD.stack-module_full-width__cNMyu.stack-module_horizontal__m-79-.stack-module_gap-s__snYAO > b').should('have.length.greaterThan', 0);
  });

  it('TC:02 :Validates job cards contain title', () => {
   cy.visit('https://eaton.eightfold.ai/careers');
    cy.get('.title-1aNJK').each(($el) => {
      expect($el.text().trim()).to.not.equal('');
    });
  });

  it('TC:03 :Opens first job and checks details', () => {
    cy.visit('https://eaton.eightfold.ai/careers');
    cy.get('.title-1aNJK').first().click();

    cy.wait(2000);
    cy.get('body').should('contain.text', 'Job');
  });

});