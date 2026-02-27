import BasePage from '../BasePage';

class JobSearchPage extends BasePage {
  searchInput = '#jobTitle';
  locationInput = '#location';
  searchButton = '#searchBtn';
  jobCards = '.job-card';

  searchJob(title, location) {
    this.type(this.searchInput, title);
    this.type(this.locationInput, location);
    this.click(this.searchButton);
  }

  validateResults() {
    cy.get(this.jobCards).should('have.length.greaterThan', 0);
  }
}

export default new JobSearchPage();