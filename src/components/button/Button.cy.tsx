import Button from "./Button";

describe("Button", () => {
  it("should render a button by default", () => {
    cy.mount(<Button dataTest="button">Test</Button>);
    cy.getBySel("button").should("have.class", "bg-yellow-400");
    cy.getBySel("button").should("have.class", "hover:bg-yellow-300");
    cy.getBySel("button-loader").should("not.exist");
  });
  it("should handle yellow color", () => {
    cy.mount(
      <Button dataTest="button" colorScheme="yellow">
        Test
      </Button>
    );
    cy.getBySel("button").should("have.class", "bg-yellow-400");
    cy.getBySel("button").should("have.class", "hover:bg-yellow-300");
  });
  it("should handle cyan color", () => {
    cy.mount(
      <Button dataTest="button" colorScheme="cyan">
        Test
      </Button>
    );
    cy.getBySel("button").should("have.class", "bg-cyan-400");
    cy.getBySel("button").should("have.class", "hover:bg-cyan-500");
  });
  it("should handle fullsize", () => {
    cy.mount(
      <Button dataTest="button" size="full">
        Test
      </Button>
    );
    cy.getBySel("button").should("have.class", "w-full");
  });
  it("should handle lg size", () => {
    cy.mount(
      <Button dataTest="button" size="lg">
        Test
      </Button>
    );
    cy.getBySel("button").should("have.class", "w-60");
    cy.getBySel("button").should("have.class", "h-14");
  });
  it("should handle children", () => {
    const test = "test";
    cy.mount(
      <Button dataTest="button" size="full">
        {test}
      </Button>
    );
    cy.getBySel("button").should("have.text", test);
  });
  it("should handle loader", () => {
    cy.mount(
      <Button dataTest="button" isLoading={true}>
        Test
      </Button>
    );
    cy.getBySel("button-loader").should("exist");
  });
});
