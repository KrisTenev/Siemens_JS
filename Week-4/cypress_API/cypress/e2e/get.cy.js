describe('As an APU user I wish to have endpoint for accessing general and stecific data related blog posts', () => {
  
  it('can get all posts in the API', () => {
    
    //Need network request
    cy.request(`/posts`).then((responce) => {

      console.log(responce)

      expect(responce.status).to.eq(200);
      assert.equal(responce.status, 200);
      expect(responce.statusText).to.eq(`OK`);
      assert.equal(responce.body.length, 100);

      const experimentalObject = responce.body[0]

      assert.isDefined(experimentalObject.id);
      assert.isDefined(experimentalObject.userId);
      assert.isDefined(experimentalObject.title);
      assert.isDefined(experimentalObject.body);
    })
  })

  it('can get all posts in the API', () => {
    
    //Need network request

    cy.request(`/posts/1`).then((responce) => {
      expect(responce.status).to.eq(200);
      assert.isUndefined(responce.body.lenght);

      assert.isDefined(responce.body.id);
      assert.isDefined(responce.body.userId);
      assert.isDefined(responce.body.title);
      assert.isDefined(responce.body.body);
    })
  })

  it('can change from all to specific post', () => {
    cy.request('/posts')
    .then((responce) => {
      const referenceObjectId = responce.body[0].id;
      return referenceObjectId;
    })
    .then((postId) => {
      cy.request(`/todos/${postId}`).then((responce) => {
        assert.equal(responce.status, 200);
      })
    })
  })
})