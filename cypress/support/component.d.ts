import { MountOptions, MountReturn } from "cypress/react18";
import { MemoryRouterProps } from "react-router-dom";

declare global {
  namespace Cypress {
    interface Chainable {
      mount(
        component: React.ReactNode,
        options?: MountOptions & { routerProps?: MemoryRouterProps }
      ): Cypress.Chainable<MountReturn>;

      getBySel(selector: string, ...args: any[]): Cypress.Chainable;
    }
  }
}
