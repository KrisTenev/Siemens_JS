
describe("As an API user I wish to create a new post", () => {

    it("create new post", () => {
        
        cy.request(`POST`, `/posts`, {
            "userId": 1,
            "title": "Cypress POST test",
            "body": "Cypress POST body"
        }).then(responce => {
            console.log(responce);

            assert.equal(responce.status, 201);
            assert.equal(responce.body.id, 101);

            assert.isDefined(responce.body.title);
            assert.isDefined(responce.body.body);

            assert.equal(responce.body.title, "Cypress POST test");
            assert.equal(responce.body.body, "Cypress POST body");
            
        })
    })
})