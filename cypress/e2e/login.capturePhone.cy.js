const credentialStuffingUsers = [
  {
    email: "NotABot@definitelyahuman.com",
    password: "muahahahahaha",
    tel: "555-555-5555",
  },
];
describe("Easy Automated Login - Captures a Phone Number", () => {
  credentialStuffingUsers.forEach((user) => {
    it("Fills in all the form fields and clicks submit", () => {
      cy.visit("http://localhost:8090");
      for (const [key, value] of Object.entries(user)) {
        const elem = cy.get(`input[type="${key}"]`);
        if (elem) {
          elem.type(value, { force: true });
        }
      }
      cy.wait(1000);
      cy.get('input[type="submit"]').click();
    });
  });
});
