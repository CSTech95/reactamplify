export type AmplifyDependentResourcesAttributes = {
    "api": {
        "carservice": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "auth": {
        "carservice": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "carusersGroupRole": "string"
        }
    },
    "storage": {
        "s3fileamplify": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}