// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate7114/providers/Microsoft.Compute/images/xplattestimg7?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/840391d3-fe88-4cfd-8866-da9cf84e5fb8?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/840391d3-fe88-4cfd-8866-da9cf84e5fb8?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131303808514503714',
  'x-ms-request-id': '840391d3-fe88-4cfd-8866-da9cf84e5fb8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '02607a89-645b-4a80-82d7-5e166645a6ce',
  'x-ms-routing-request-id': 'WESTUS2:20170207T191337Z:02607a89-645b-4a80-82d7-5e166645a6ce',
  date: 'Tue, 07 Feb 2017 19:13:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate7114/providers/Microsoft.Compute/images/xplattestimg7?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/840391d3-fe88-4cfd-8866-da9cf84e5fb8?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/840391d3-fe88-4cfd-8866-da9cf84e5fb8?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131303808514503714',
  'x-ms-request-id': '840391d3-fe88-4cfd-8866-da9cf84e5fb8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '02607a89-645b-4a80-82d7-5e166645a6ce',
  'x-ms-routing-request-id': 'WESTUS2:20170207T191337Z:02607a89-645b-4a80-82d7-5e166645a6ce',
  date: 'Tue, 07 Feb 2017 19:13:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/840391d3-fe88-4cfd-8866-da9cf84e5fb8?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-07T19:13:37.6560889+00:00\",\r\n  \"endTime\": \"2017-02-07T19:13:37.8279684+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"840391d3-fe88-4cfd-8866-da9cf84e5fb8\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131303808514503714',
  'x-ms-request-id': 'e74907af-6194-4397-9a8e-e7ed11f3449e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'facb12be-b250-4973-8089-138deab4f494',
  'x-ms-routing-request-id': 'CENTRALUS:20170207T191409Z:facb12be-b250-4973-8089-138deab4f494',
  date: 'Tue, 07 Feb 2017 19:14:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/840391d3-fe88-4cfd-8866-da9cf84e5fb8?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-07T19:13:37.6560889+00:00\",\r\n  \"endTime\": \"2017-02-07T19:13:37.8279684+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"840391d3-fe88-4cfd-8866-da9cf84e5fb8\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131303808514503714',
  'x-ms-request-id': 'e74907af-6194-4397-9a8e-e7ed11f3449e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'facb12be-b250-4973-8089-138deab4f494',
  'x-ms-routing-request-id': 'CENTRALUS:20170207T191409Z:facb12be-b250-4973-8089-138deab4f494',
  date: 'Tue, 07 Feb 2017 19:14:08 GMT',
  connection: 'close' });
 return result; }]];
