const SignrequestClient = require('signrequest-client');

const api = new SignrequestClient.SignrequestQuickCreateApi();

const defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key Authorization: Token
const Token = defaultClient.authentications["Token"];
Token.apiKey = "YOUR_TOKEN_HERE";
Token.apiKeyPrefix = "Token";

const data = new SignrequestClient.SignRequestQuickCreate();
data.signers = [
    {
        email: 'user+1@provider.com'
    },
    {
        email: 'user+2@provider.com'
    }
];

data.file_from_url = '"CREATED_DOC_URL"';
data.from_email = "user@provider.com";
data.message = "Please sign this document";

const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ', data);
  }
};

api.signrequestQuickCreateCreate(data, callback);