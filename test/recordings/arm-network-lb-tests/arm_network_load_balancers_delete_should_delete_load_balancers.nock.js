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
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"5673fcd9-e2e3-4acf-a803-eba62147200d\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"74b2a4b6-1a4b-4ef7-9e51-1fd4e297150c\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '642',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5673fcd9-e2e3-4acf-a803-eba62147200d"',
  'x-ms-request-id': '8815fe48-ff7b-44a9-96e1-c051593ea736',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '10fe0c94-a049-48e0-a3e7-059e053d9ca8',
  'x-ms-routing-request-id': 'CANADAEAST:20170310T155550Z:10fe0c94-a049-48e0-a3e7-059e053d9ca8',
  date: 'Fri, 10 Mar 2017 15:55:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"5673fcd9-e2e3-4acf-a803-eba62147200d\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"74b2a4b6-1a4b-4ef7-9e51-1fd4e297150c\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '642',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5673fcd9-e2e3-4acf-a803-eba62147200d"',
  'x-ms-request-id': '8815fe48-ff7b-44a9-96e1-c051593ea736',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '10fe0c94-a049-48e0-a3e7-059e053d9ca8',
  'x-ms-routing-request-id': 'CANADAEAST:20170310T155550Z:10fe0c94-a049-48e0-a3e7-059e053d9ca8',
  date: 'Fri, 10 Mar 2017 15:55:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/7bbe8710-9da9-489d-8d2a-29fde864961b?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '7bbe8710-9da9-489d-8d2a-29fde864961b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/7bbe8710-9da9-489d-8d2a-29fde864961b?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1181',
  'x-ms-correlation-request-id': '0190b036-b865-4d53-b806-823a75aaf530',
  'x-ms-routing-request-id': 'CANADAEAST:20170310T155552Z:0190b036-b865-4d53-b806-823a75aaf530',
  date: 'Fri, 10 Mar 2017 15:55:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/7bbe8710-9da9-489d-8d2a-29fde864961b?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '7bbe8710-9da9-489d-8d2a-29fde864961b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/7bbe8710-9da9-489d-8d2a-29fde864961b?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1181',
  'x-ms-correlation-request-id': '0190b036-b865-4d53-b806-823a75aaf530',
  'x-ms-routing-request-id': 'CANADAEAST:20170310T155552Z:0190b036-b865-4d53-b806-823a75aaf530',
  date: 'Fri, 10 Mar 2017 15:55:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/7bbe8710-9da9-489d-8d2a-29fde864961b?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6ceb21a7-9c04-4f9f-844f-5958ea07818c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '979465f9-2db9-41f4-bb1a-c78523ccf427',
  'x-ms-routing-request-id': 'CANADAEAST:20170310T155623Z:979465f9-2db9-41f4-bb1a-c78523ccf427',
  date: 'Fri, 10 Mar 2017 15:56:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/7bbe8710-9da9-489d-8d2a-29fde864961b?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6ceb21a7-9c04-4f9f-844f-5958ea07818c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '979465f9-2db9-41f4-bb1a-c78523ccf427',
  'x-ms-routing-request-id': 'CANADAEAST:20170310T155623Z:979465f9-2db9-41f4-bb1a-c78523ccf427',
  date: 'Fri, 10 Mar 2017 15:56:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/loadBalancerName' under resource group 'xplat-test-lb' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '9dc986fb-a52f-4c57-b906-53e20122a7a7',
  'x-ms-correlation-request-id': '9dc986fb-a52f-4c57-b906-53e20122a7a7',
  'x-ms-routing-request-id': 'CANADAEAST:20170310T155624Z:9dc986fb-a52f-4c57-b906-53e20122a7a7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 10 Mar 2017 15:56:23 GMT',
  connection: 'close',
  'content-length': '165' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/loadBalancerName' under resource group 'xplat-test-lb' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '9dc986fb-a52f-4c57-b906-53e20122a7a7',
  'x-ms-correlation-request-id': '9dc986fb-a52f-4c57-b906-53e20122a7a7',
  'x-ms-routing-request-id': 'CANADAEAST:20170310T155624Z:9dc986fb-a52f-4c57-b906-53e20122a7a7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 10 Mar 2017 15:56:23 GMT',
  connection: 'close',
  'content-length': '165' });
 return result; }]];
