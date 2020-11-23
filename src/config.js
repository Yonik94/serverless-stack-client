const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notess-app-upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://1c7wk1f3pi.execute-api.us-east-1.amazonaws.com/prod/",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_HW00FHKo0",
    APP_CLIENT_ID: "3uj7c945vdqk13m8anjjtsn5aa",
    IDENTITY_POOL_ID: "us-east-1:5c3a8551-53fd-4d2c-8692-c312d4f83ee7",
  },
};

export default config;