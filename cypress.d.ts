import { mount } from "cypress/react";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      getBySel(value: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
