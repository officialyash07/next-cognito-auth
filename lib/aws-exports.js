const awsConfig = {
    Auth: {
        Cognito: {
            region: "your-region",
            userPoolId: "user-pool-id",
            userPoolClientId: "user-app-client-id",
            loginWith: {
                email: true,
            },
            signUpAttributes: ["email"],
        },
    },
};

export default awsConfig;
