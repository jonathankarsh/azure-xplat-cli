// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'brazilsouth';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2016-06-01')
  .reply(200, "{\r\n  \"name\": \"AzurePrivatePeering\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering\",\r\n  \"etag\": \"W/\\\"4aa8d457-019f-4e54-bcb2-ee7329540b3e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Failed\",\r\n    \"peeringType\": \"AzurePrivatePeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 100,\r\n    \"primaryPeerAddressPrefix\": \"192.168.1.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"192.168.2.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 200\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '711',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '33b8714a-e643-47ac-bd3a-4206378247f3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14887',
  'x-ms-correlation-request-id': 'c49e43c3-5587-4862-83ca-96248be7ad72',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T130221Z:c49e43c3-5587-4862-83ca-96248be7ad72',
  date: 'Fri, 19 Aug 2016 13:02:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2016-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/brazilsouth/operationResults/e8247f45-e2ba-4575-a798-fbaa9db9d905?api-version=2016-06-01',
  'retry-after': '10',
  'x-ms-request-id': 'e8247f45-e2ba-4575-a798-fbaa9db9d905',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/brazilsouth/operations/e8247f45-e2ba-4575-a798-fbaa9db9d905?api-version=2016-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'd179a0fa-b3ed-4b2c-93bd-3bbe6fed9605',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T130222Z:d179a0fa-b3ed-4b2c-93bd-3bbe6fed9605',
  date: 'Fri, 19 Aug 2016 13:02:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/brazilsouth/operations/e8247f45-e2ba-4575-a798-fbaa9db9d905?api-version=2016-06-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bdfac00f-7c1a-4bf3-ba2f-4ab9c8ce0c24',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': 'e84e9405-0b2e-4944-95a9-6e1c1f92585a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T130253Z:e84e9405-0b2e-4944-95a9-6e1c1f92585a',
  date: 'Fri, 19 Aug 2016 13:02:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/brazilsouth/operations/e8247f45-e2ba-4575-a798-fbaa9db9d905?api-version=2016-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1c6053a3-bc32-425d-92e4-e5d13cd22c62',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14936',
  'x-ms-correlation-request-id': 'c2246717-030b-4fc3-895c-4b197027df34',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T130324Z:c2246717-030b-4fc3-895c-4b197027df34',
  date: 'Fri, 19 Aug 2016 13:03:23 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering?api-version=2016-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/AzurePrivatePeering not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '300',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1f215710-94dc-4af0-838f-44f35773aa9e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14885',
  'x-ms-correlation-request-id': 'd7dd2943-0424-4cea-abed-571221763e32',
  'x-ms-routing-request-id': 'WESTEUROPE:20160819T130326Z:d7dd2943-0424-4cea-abed-571221763e32',
  date: 'Fri, 19 Aug 2016 13:03:25 GMT' });
 return result; }]];