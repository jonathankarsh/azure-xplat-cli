// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate8490/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1/manualupgrade?api-version=2017-03-30', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d316bbec-1ef4-40dd-8c1b-8edbd153461a?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d316bbec-1ef4-40dd-8c1b-8edbd153461a?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'd316bbec-1ef4-40dd-8c1b-8edbd153461a',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '4bc2501e-829d-4a13-92b7-59968e7a9301',
  'x-ms-routing-request-id': 'WESTUS2:20170602T134236Z:4bc2501e-829d-4a13-92b7-59968e7a9301',
  date: 'Fri, 02 Jun 2017 13:42:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate8490/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1/manualupgrade?api-version=2017-03-30', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d316bbec-1ef4-40dd-8c1b-8edbd153461a?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d316bbec-1ef4-40dd-8c1b-8edbd153461a?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'd316bbec-1ef4-40dd-8c1b-8edbd153461a',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '4bc2501e-829d-4a13-92b7-59968e7a9301',
  'x-ms-routing-request-id': 'WESTUS2:20170602T134236Z:4bc2501e-829d-4a13-92b7-59968e7a9301',
  date: 'Fri, 02 Jun 2017 13:42:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d316bbec-1ef4-40dd-8c1b-8edbd153461a?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:42:38.1293149+00:00\",\r\n  \"endTime\": \"2017-06-02T13:42:38.3324455+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"d316bbec-1ef4-40dd-8c1b-8edbd153461a\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '4a7b8c5d-ea0f-4555-a36b-495194fb1c3c',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14903',
  'x-ms-correlation-request-id': '9d225a8a-8b62-48ce-ba95-1e32cc2be414',
  'x-ms-routing-request-id': 'WESTUS:20170602T134307Z:9d225a8a-8b62-48ce-ba95-1e32cc2be414',
  date: 'Fri, 02 Jun 2017 13:43:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/d316bbec-1ef4-40dd-8c1b-8edbd153461a?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T13:42:38.1293149+00:00\",\r\n  \"endTime\": \"2017-06-02T13:42:38.3324455+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"d316bbec-1ef4-40dd-8c1b-8edbd153461a\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '4a7b8c5d-ea0f-4555-a36b-495194fb1c3c',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14903',
  'x-ms-correlation-request-id': '9d225a8a-8b62-48ce-ba95-1e32cc2be414',
  'x-ms-routing-request-id': 'WESTUS:20170602T134307Z:9d225a8a-8b62-48ce-ba95-1e32cc2be414',
  date: 'Fri, 02 Jun 2017 13:43:07 GMT',
  connection: 'close' });
 return result; }]];