import PasswordInput from "./PasswordInput";

describe("PasswordInput", () => {
  it("should render a password input with label", () => {
    const email = "test";
    cy.mount(<PasswordInput onChange={() => {}} value={email} />);
    cy.getBySel("password-input").should("exist");
    cy.getBySel("password-input").should("have.attr", "id", "password");
    cy.getBySel("password-input").should("have.attr", "type", "password");
    cy.getBySel("password-input").should("have.attr", "minLength", 8);
    cy.getBySel("password-label").should(
      "have.text",
      "Auth.form.password.label"
    );
    cy.getBySel("errorSpan-password-input").should(
      "have.text",
      "Auth.form.password.error"
    );
  });
});
