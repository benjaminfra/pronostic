import LinkButton from "./LinkButton";

describe("LinkButton", () => {
  it("should render a button with a link", () => {
    const to = "/test";
    const title = "Link";
    cy.mount(<LinkButton to={to}>{title}</LinkButton>);

    // Use href here cause the Link is converted into a tag
    cy.getBySel("link").should("have.attr", "href", to);
    cy.getBySel("link").should("have.text", title);
  });
});
