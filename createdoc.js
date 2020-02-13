const SignrequestClient = require('signrequest-client');

const defaultClient = SignrequestClient.ApiClient.instance;

// Configure API key Authorization: Token
const Token = defaultClient.authentications["Token"];
Token.apiKey = "YOUR_TOKEN_HERE";
Token.apiKeyPrefix = "Token";

const api = new SignrequestClient.DocumentsApi();

const data = new SignrequestClient.Document(); // Document |
data.file_from_url = 'YOUR_DOCUMENT_URL';

// In case of a Template
// data.template = "https://yourteam.signrequest.com/api/v1/templates/uuid/"

const callback = (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ', data);
  }
};

api.documentsCreate(data, callback);
