import AuthBox from "./AuthBox";

describe("AuthBox", () => {
  it("should render a title", () => {
    const title = "title";
    cy.mount(<AuthBox title={title}>test</AuthBox>);
    cy.getBySel("auth-title").should("have.text", title);
  });
  it("should render children", () => {
    const content = <div>content</div>;
    cy.mount(<AuthBox title="">{content}</AuthBox>);
    cy.getBySel("auth-content").should("have.descendants", "div");
    cy.getBySel("auth-content").should("have.text", "content");
  });
});
