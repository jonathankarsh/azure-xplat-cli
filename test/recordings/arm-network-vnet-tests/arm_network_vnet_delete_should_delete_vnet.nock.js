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
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"ab982f7d-2d8e-4bf2-9c57-14397fa2516c\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f267d7f5-8d3b-4d8d-ae3a-2f3a3931d158\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\",\r\n        \"10.0.1.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\",\r\n        \"192.168.1.2\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '787',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ab982f7d-2d8e-4bf2-9c57-14397fa2516c"',
  'x-ms-request-id': '95406698-498d-4abc-9545-67bf2757b9c9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'c89665a2-6dca-4af6-b4b5-07d5d41c0070',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113337Z:c89665a2-6dca-4af6-b4b5-07d5d41c0070',
  date: 'Wed, 31 May 2017 11:33:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"ab982f7d-2d8e-4bf2-9c57-14397fa2516c\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f267d7f5-8d3b-4d8d-ae3a-2f3a3931d158\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\",\r\n        \"10.0.1.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\",\r\n        \"192.168.1.2\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '787',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ab982f7d-2d8e-4bf2-9c57-14397fa2516c"',
  'x-ms-request-id': '95406698-498d-4abc-9545-67bf2757b9c9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'c89665a2-6dca-4af6-b4b5-07d5d41c0070',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113337Z:c89665a2-6dca-4af6-b4b5-07d5d41c0070',
  date: 'Wed, 31 May 2017 11:33:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/2489f47e-8e4a-4cf1-86d8-8c243aca4aeb?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '2489f47e-8e4a-4cf1-86d8-8c243aca4aeb',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/2489f47e-8e4a-4cf1-86d8-8c243aca4aeb?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '91c108d6-5abe-41fd-b389-65a45f3296ee',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113338Z:91c108d6-5abe-41fd-b389-65a45f3296ee',
  date: 'Wed, 31 May 2017 11:33:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/2489f47e-8e4a-4cf1-86d8-8c243aca4aeb?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '2489f47e-8e4a-4cf1-86d8-8c243aca4aeb',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/2489f47e-8e4a-4cf1-86d8-8c243aca4aeb?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '91c108d6-5abe-41fd-b389-65a45f3296ee',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113338Z:91c108d6-5abe-41fd-b389-65a45f3296ee',
  date: 'Wed, 31 May 2017 11:33:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/2489f47e-8e4a-4cf1-86d8-8c243aca4aeb?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '678283de-c8a7-42d0-9099-902ecbcd76e6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '2cca5b52-d5db-4bd3-ae5d-3360c48e5278',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113409Z:2cca5b52-d5db-4bd3-ae5d-3360c48e5278',
  date: 'Wed, 31 May 2017 11:34:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/2489f47e-8e4a-4cf1-86d8-8c243aca4aeb?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '678283de-c8a7-42d0-9099-902ecbcd76e6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '2cca5b52-d5db-4bd3-ae5d-3360c48e5278',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113409Z:2cca5b52-d5db-4bd3-ae5d-3360c48e5278',
  date: 'Wed, 31 May 2017 11:34:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/test-vnet' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'a6e07bd8-adb1-47e0-8b18-a6c06da66cbe',
  'x-ms-correlation-request-id': 'a6e07bd8-adb1-47e0-8b18-a6c06da66cbe',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113410Z:a6e07bd8-adb1-47e0-8b18-a6c06da66cbe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 31 May 2017 11:34:09 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/test-vnet' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'a6e07bd8-adb1-47e0-8b18-a6c06da66cbe',
  'x-ms-correlation-request-id': 'a6e07bd8-adb1-47e0-8b18-a6c06da66cbe',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113410Z:a6e07bd8-adb1-47e0-8b18-a6c06da66cbe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 31 May 2017 11:34:09 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; }]];