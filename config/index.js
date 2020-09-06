module.exports = {
  port: 4000,
  environment: "prod",
  app_name: "Employee Management",
  version: "1.0.0",
  // app_url: "http://ec2-18-217-247-175.us-east-2.compute.amazonaws.com/api",
  app_url: "http://localhost:4000",
  dir: {
    models: "/src/models",
    workflows: "/src/workflows",
    routes: "/src/routes",
    navs: "/src/navs",
    actions: "/src/actions",
  },
  jwt: {
    audience: "https://*.bipin.io",
    subject: "anonymous",
    issuer: "library",
    algorithm: "HS256",
    expiresIn: "1d",
  },
  secretJWT: "67e1d9c5af3ff740fc791354fff",
};
