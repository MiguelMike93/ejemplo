var expect = require("chai").expect;
describe ("Test para usuarios", function(){
	it("se debe retornar 3 usuarios", function(){
	var users = ['tobi', 'alex', 'miguel'];
	expect(users.length).to.equal(3);
	});
});