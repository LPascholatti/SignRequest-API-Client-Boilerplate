const SignrequestClient = require('signrequest-client');

const defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key Authorization: Token
const Token = defaultClient.authentications["Token"];
Token.apiKey = "YOUR_TOKEN_HERE";
Token.apiKeyPrefix = "Token";

const api = new SignrequestClient.SignrequestsApi();

const data = new SignrequestClient.SignRequest();
data.signers = [
    {
        email: 'user+1@provider.com'
    },
    {
        email: 'user+2@provider.com'
    }
];
data.document = "CREATED_DOC_URL";
data.from_email = "user@provider.com";
data.message = "Please sign this document";
data.needs_to_sign = true;

const callback = (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ', data);
    }
  };

  api.signrequestsCreate(data, callback);