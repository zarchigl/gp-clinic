export const cognitoAuthConfig = {
  authority: "https://us-east-1n6qtbgvfw.auth.us-east-1.amazoncognito.com",
  client_id: "uth4s6nv643832uc1hf1i0guo",
  redirect_uri: "https://d1ah8tato4d1dt.cloudfront.net/homepage.js",
  response_type: "code",
  scope: "openid email phone", // match exactly with App Client
};
