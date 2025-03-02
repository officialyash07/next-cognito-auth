const awsConfig = {
    Auth: {
        Cognito: {
            region: "ap-south-1",
            userPoolId: "ap-south-1_OSMRMOG6U",
            userPoolClientId: "1ncio372dqs2nc1h3aheu2057r",
            loginWith: {
                email: true,
            },
            signUpAttributes: ["email"],
        },
    },
};

export default awsConfig;
