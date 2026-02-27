import JobSearchPage from '../../pages/JobSearhPage';

describe('Job Search Test', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Search job successfully', () => {
    cy.fixture('testData').then((data) => {
      JobSearchPage.searchJob(
        data.jobSearch.title,
        data.jobSearch.location
      );
    });

    JobSearchPage.validateResults();
  });

});