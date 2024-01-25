import InputWithLabel from "./InputWithLabel";

describe("EmailWithInput", () => {
  it("should render a label with an input", () => {
    cy.mount(
      <InputWithLabel
        errorMsg={"Auth.form.password.error"}
        id="password"
        label={"Auth.form.password.label"}
        onChange={() => {}}
        type="password"
        value="1234"
        minLength={8}
      />
    );
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
