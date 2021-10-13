import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@Bitovi/list",
//   app: () => System.import("//localhost:4200/main.js"),
//   activeWhen: ["/"]
// });

// registerApplication({
//   name: "@Bitovi/similar",
//   app: () => System.import("//localhost:4300/main.js"),
//   activeWhen: ["/"]
// });

// start({
//   urlRerouteOnly: true,
// });

import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';

const routes = constructRoutes(document.querySelector('#single-spa-layout'));

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
start();
