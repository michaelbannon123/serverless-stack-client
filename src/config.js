const config = {

    STRIPE_KEY: "pk_test_51I42U9JpLAWB4f69M1n5grWtg7v2I2cSpcMNvLWRnkUzOgjFRCnysgPbQFKhHXpIL2xGoEPyOVDtx7UOAqt5Ouw300qgGs3l3o",

    MAX_ATTACHMENT_SIZE: 5000000,

    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-upload-5493",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://asftsf7yj3.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "Yus-east-2_XH7G6p1lW",
        APP_CLIENT_ID: "4ik5fa40u0fbaqb2nsf0j5eo54",
        IDENTITY_POOL_ID: "us-east-2:fb7d5445-f46c-4913-bf0f-3925fdb826b5",
    },
};

export default config;