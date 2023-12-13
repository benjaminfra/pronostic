import EmailInput from "./EmailInput";

describe("EmailInput", () => {
  it("should render an email input with label", () => {
    const email = "test";
    cy.mount(<EmailInput onChange={() => {}} value={email} />);
    cy.getBySel("email-input").should("exist");
    cy.getBySel("email-input").should("have.attr", "id", "email");
    cy.getBySel("email-input").should("have.attr", "type", "email");
    cy.getBySel("email-label").should("have.text", "Auth.form.email.label");
    cy.getBySel("errorSpan-email-input").should(
      "have.text",
      "Auth.form.email.error"
    );
  });
});
