import AuthForm from "./AuthForm";

describe("AuthForm", () => {
  it("should render a form with email/password inputs with labels", () => {
    cy.mount(
      <AuthForm
        formErrorDescription=""
        hasFormError={false}
        onSubmit={() => {}}
        submitLabel="Connexion"
        isLoading={false}
      />
    );
    cy.getBySel("email-input").should("exist");
    cy.getBySel("email-input").should("have.attr", "type", "email");
    cy.getBySel("errorSpan-email-input").should(
      "have.text",
      "Auth.form.email.error"
    );
    cy.getBySel("email-label").should("exist");
    cy.getBySel("email-label").should("have.text", "Auth.form.email.label");

    cy.getBySel("password-input").should("exist");
    cy.getBySel("password-input").should("have.attr", "type", "password");
    cy.getBySel("password-input").should("have.attr", "minLength", 8);
    cy.getBySel("errorSpan-password-input").should(
      "have.text",
      "Auth.form.password.error"
    );
    cy.getBySel("password-label").should("exist");
    cy.getBySel("password-label").should(
      "have.text",
      "Auth.form.password.label"
    );
  });
  it("should render a submit button", () => {
    const submitBtnLabel = "Connexion";
    const submitFct = () => {};
    cy.mount(
      <AuthForm
        formErrorDescription=""
        hasFormError={false}
        onSubmit={submitFct}
        submitLabel={submitBtnLabel}
        isLoading={false}
      />
    );
    cy.getBySel("submitBtn").should("exist");
    cy.getBySel("submitBtn").should("have.text", submitBtnLabel);
    cy.getBySel("submitBtn-loader").should("not.exist");
  });
  it("should render a submit button with loader if the form is loading", () => {
    const submitBtnLabel = "Connexion";
    const submitFct = () => {};
    cy.mount(
      <AuthForm
        formErrorDescription=""
        hasFormError={false}
        onSubmit={submitFct}
        submitLabel={submitBtnLabel}
        isLoading={true}
      />
    );
    cy.getBySel("submitBtn").should("exist");
    cy.getBySel("submitBtn-loader").should("exist");
  });
  it("should have a disable button if all fields are not filled", () => {
    const submitBtnLabel = "Connexion";
    const submitFct = () => {};
    cy.mount(
      <AuthForm
        formErrorDescription=""
        hasFormError={false}
        onSubmit={submitFct}
        submitLabel={submitBtnLabel}
        isLoading={false}
      />
    );
    cy.getBySel("submitBtn").should("have.attr", "disabled");
    cy.getBySel("email-input").type("test@example.com");
    cy.getBySel("submitBtn").should("have.attr", "disabled");
    cy.getBySel("password-input").type("testpassword");
    cy.getBySel("submitBtn").should("not.have.attr", "disabled");
  });
  it("should call the submit function", () => {
    const submitBtnLabel = "Connexion";
    const submitFct = cy.stub().as("onSubmitStub");
    cy.mount(
      <AuthForm
        formErrorDescription=""
        hasFormError={false}
        onSubmit={submitFct}
        submitLabel={submitBtnLabel}
        isLoading={false}
      />
    );
    cy.getBySel("email-input").type("test@example.com");
    cy.getBySel("password-input").type("testpassword");
    cy.getBySel("submitBtn").click();
    cy.get("@onSubmitStub").should(
      "be.calledWith",
      "test@example.com",
      "testpassword"
    );
  });
});
