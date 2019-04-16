describe('search form', () => {
	beforeEach(() => {
		cy.visit('http://localhost:8080');
	});

	it('check search', () => {
		cy.get('#searchTitle').should('be.checked');
		cy.get('input[type="text"]').type('kill bill');
		cy.get('.search').submit();
		cy.get('.card-title').contains('Kill Bill');
	});

	it('check sort films', () => {
		cy.get('#sortReleaseDate').check();
		cy.get('.films .col-md-4:first-of-type .card-title').should('have.text', 'Pulp Fiction');;
	})
})