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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"5bee792d-16ca-46e7-9197-74dfd277788b\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"117e77e1-b503-4f9c-8278-4e0e99edd059\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '540',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5bee792d-16ca-46e7-9197-74dfd277788b"',
  'x-ms-request-id': 'a2fda8d6-44e0-4c40-939d-1115b4d19dc7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': '2947af47-20ea-4292-9e04-2c497bbe64f2',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T140022Z:2947af47-20ea-4292-9e04-2c497bbe64f2',
  date: 'Wed, 07 Dec 2016 14:00:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/89d5f561-5f04-4482-b841-d60ad073fbee?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '89d5f561-5f04-4482-b841-d60ad073fbee',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/89d5f561-5f04-4482-b841-d60ad073fbee?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': '807a2c7a-c56c-449e-9451-9745a2061114',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T140023Z:807a2c7a-c56c-449e-9451-9745a2061114',
  date: 'Wed, 07 Dec 2016 14:00:22 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/89d5f561-5f04-4482-b841-d60ad073fbee?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0f54fc4e-5fc3-41b5-be54-fc27e939987e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14944',
  'x-ms-correlation-request-id': '1348fb8d-5f54-428c-98fc-82d6667c11d7',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T140053Z:1348fb8d-5f54-428c-98fc-82d6667c11d7',
  date: 'Wed, 07 Dec 2016 14:00:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/test-route-table' under resource group 'xplat-test-route-table' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '306510f7-8856-4e18-bfdd-3a195ad84dbf',
  'x-ms-correlation-request-id': '306510f7-8856-4e18-bfdd-3a195ad84dbf',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T140054Z:306510f7-8856-4e18-bfdd-3a195ad84dbf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:00:54 GMT',
  'content-length': '172' });
 return result; }]];
