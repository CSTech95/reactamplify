export type AmplifyDependentResourcesAttributes = {
  "api": {
    "carservice": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "carservice": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
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