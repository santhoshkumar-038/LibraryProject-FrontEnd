export const oktaConfig = {
  clientId: "0oadrch8kg1t9xhSQ5d7",
  issuer: "https://dev-58276457.okta.com/oauth2/default",
  redirectUri: "https://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
