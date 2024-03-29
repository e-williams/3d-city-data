/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/*.css"],
  serverModuleFormat: "cjs",
  serverDependenciesToBundle: ["remix-utils/client-only"],
};
