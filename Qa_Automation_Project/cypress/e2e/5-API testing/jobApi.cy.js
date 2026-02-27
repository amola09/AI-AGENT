describe('Job API Test', () => {

  it('GET Jobs API', () => {
    cy.request('GET', '/api/jobs')
      .its('status')
      .should('eq', 200);
  });

});