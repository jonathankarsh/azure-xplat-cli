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
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/test-vnet' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '8ec1ccd3-1e86-4b6e-8c15-1d421c8a8fc8',
  'x-ms-correlation-request-id': '8ec1ccd3-1e86-4b6e-8c15-1d421c8a8fc8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113520Z:8ec1ccd3-1e86-4b6e-8c15-1d421c8a8fc8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 31 May 2017 11:35:20 GMT',
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
  'x-ms-request-id': '8ec1ccd3-1e86-4b6e-8c15-1d421c8a8fc8',
  'x-ms-correlation-request-id': '8ec1ccd3-1e86-4b6e-8c15-1d421c8a8fc8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113520Z:8ec1ccd3-1e86-4b6e-8c15-1d421c8a8fc8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 31 May 2017 11:35:20 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"31917145-3149-48ca-b7ac-c031bafd48aa\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"2dfdb9f6-c934-4984-849a-4b998d0e5994\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '575',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '3b017f2d-5e9d-4ec1-ac61-33cd3f99149c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/3b017f2d-5e9d-4ec1-ac61-33cd3f99149c?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c3c022dd-d55f-449c-8876-196d9292b2a0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113523Z:c3c022dd-d55f-449c-8876-196d9292b2a0',
  date: 'Wed, 31 May 2017 11:35:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"31917145-3149-48ca-b7ac-c031bafd48aa\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"2dfdb9f6-c934-4984-849a-4b998d0e5994\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '575',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '3b017f2d-5e9d-4ec1-ac61-33cd3f99149c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/3b017f2d-5e9d-4ec1-ac61-33cd3f99149c?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c3c022dd-d55f-449c-8876-196d9292b2a0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113523Z:c3c022dd-d55f-449c-8876-196d9292b2a0',
  date: 'Wed, 31 May 2017 11:35:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/3b017f2d-5e9d-4ec1-ac61-33cd3f99149c?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '31ac7def-f0c8-45a3-81ff-e9734d957eae',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '855cf545-b09d-44d9-8acd-ee8d45640025',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113554Z:855cf545-b09d-44d9-8acd-ee8d45640025',
  date: 'Wed, 31 May 2017 11:35:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/3b017f2d-5e9d-4ec1-ac61-33cd3f99149c?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '31ac7def-f0c8-45a3-81ff-e9734d957eae',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '855cf545-b09d-44d9-8acd-ee8d45640025',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113554Z:855cf545-b09d-44d9-8acd-ee8d45640025',
  date: 'Wed, 31 May 2017 11:35:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"6bf61d05-820c-41d1-be85-eb5aa5a9d965\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2dfdb9f6-c934-4984-849a-4b998d0e5994\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '576',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6bf61d05-820c-41d1-be85-eb5aa5a9d965"',
  'x-ms-request-id': '56356000-3e5a-4c5f-88db-14e3a79af24f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '1b92a708-264b-45a5-b151-697b7a25a009',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113555Z:1b92a708-264b-45a5-b151-697b7a25a009',
  date: 'Wed, 31 May 2017 11:35:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"6bf61d05-820c-41d1-be85-eb5aa5a9d965\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2dfdb9f6-c934-4984-849a-4b998d0e5994\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '576',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6bf61d05-820c-41d1-be85-eb5aa5a9d965"',
  'x-ms-request-id': '56356000-3e5a-4c5f-88db-14e3a79af24f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '1b92a708-264b-45a5-b151-697b7a25a009',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113555Z:1b92a708-264b-45a5-b151-697b7a25a009',
  date: 'Wed, 31 May 2017 11:35:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"6bf61d05-820c-41d1-be85-eb5aa5a9d965\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2dfdb9f6-c934-4984-849a-4b998d0e5994\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '576',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6bf61d05-820c-41d1-be85-eb5aa5a9d965"',
  'x-ms-request-id': '744cd12c-8500-477a-842a-91157cdfbc54',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '13a51b05-a5ec-4023-96d2-45c8b2e92b26',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113556Z:13a51b05-a5ec-4023-96d2-45c8b2e92b26',
  date: 'Wed, 31 May 2017 11:35:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"6bf61d05-820c-41d1-be85-eb5aa5a9d965\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2dfdb9f6-c934-4984-849a-4b998d0e5994\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '576',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6bf61d05-820c-41d1-be85-eb5aa5a9d965"',
  'x-ms-request-id': '744cd12c-8500-477a-842a-91157cdfbc54',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '13a51b05-a5ec-4023-96d2-45c8b2e92b26',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113556Z:13a51b05-a5ec-4023-96d2-45c8b2e92b26',
  date: 'Wed, 31 May 2017 11:35:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"4a500953-afe5-48b9-911c-5d3a39b972cc\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"2dfdb9f6-c934-4984-849a-4b998d0e5994\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '660',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '131552b9-fcee-4290-8cca-705225769b99',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/131552b9-fcee-4290-8cca-705225769b99?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'd5c5e89c-f89b-4559-9d61-7b47d46be069',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113557Z:d5c5e89c-f89b-4559-9d61-7b47d46be069',
  date: 'Wed, 31 May 2017 11:35:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"4a500953-afe5-48b9-911c-5d3a39b972cc\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"2dfdb9f6-c934-4984-849a-4b998d0e5994\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '660',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '131552b9-fcee-4290-8cca-705225769b99',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/131552b9-fcee-4290-8cca-705225769b99?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'd5c5e89c-f89b-4559-9d61-7b47d46be069',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113557Z:d5c5e89c-f89b-4559-9d61-7b47d46be069',
  date: 'Wed, 31 May 2017 11:35:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/131552b9-fcee-4290-8cca-705225769b99?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1e27714c-b254-4a7a-b45c-3090c6d62058',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'a1d3af89-ded9-4a85-9602-ffd9c306a238',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113628Z:a1d3af89-ded9-4a85-9602-ffd9c306a238',
  date: 'Wed, 31 May 2017 11:36:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/131552b9-fcee-4290-8cca-705225769b99?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1e27714c-b254-4a7a-b45c-3090c6d62058',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'a1d3af89-ded9-4a85-9602-ffd9c306a238',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113628Z:a1d3af89-ded9-4a85-9602-ffd9c306a238',
  date: 'Wed, 31 May 2017 11:36:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"fa85731f-2069-4f0f-b4e4-d9d699c06253\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2dfdb9f6-c934-4984-849a-4b998d0e5994\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '661',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fa85731f-2069-4f0f-b4e4-d9d699c06253"',
  'x-ms-request-id': '85a5b303-e9a4-4d0e-aeb2-c67afc9c1f9c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14927',
  'x-ms-correlation-request-id': '30f5ce01-3623-4822-9353-e5873b47ba5f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113628Z:30f5ce01-3623-4822-9353-e5873b47ba5f',
  date: 'Wed, 31 May 2017 11:36:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"fa85731f-2069-4f0f-b4e4-d9d699c06253\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2dfdb9f6-c934-4984-849a-4b998d0e5994\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '661',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fa85731f-2069-4f0f-b4e4-d9d699c06253"',
  'x-ms-request-id': '85a5b303-e9a4-4d0e-aeb2-c67afc9c1f9c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14927',
  'x-ms-correlation-request-id': '30f5ce01-3623-4822-9353-e5873b47ba5f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113628Z:30f5ce01-3623-4822-9353-e5873b47ba5f',
  date: 'Wed, 31 May 2017 11:36:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"fa85731f-2069-4f0f-b4e4-d9d699c06253\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2dfdb9f6-c934-4984-849a-4b998d0e5994\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '661',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fa85731f-2069-4f0f-b4e4-d9d699c06253"',
  'x-ms-request-id': 'f5046b25-b02b-4e86-b6df-782a0915077b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '4a1ce468-5f90-468f-b68d-f0ea69c034d6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113629Z:4a1ce468-5f90-468f-b68d-f0ea69c034d6',
  date: 'Wed, 31 May 2017 11:36:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"fa85731f-2069-4f0f-b4e4-d9d699c06253\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"2dfdb9f6-c934-4984-849a-4b998d0e5994\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '661',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fa85731f-2069-4f0f-b4e4-d9d699c06253"',
  'x-ms-request-id': 'f5046b25-b02b-4e86-b6df-782a0915077b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '4a1ce468-5f90-468f-b68d-f0ea69c034d6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113629Z:4a1ce468-5f90-468f-b68d-f0ea69c034d6',
  date: 'Wed, 31 May 2017 11:36:29 GMT',
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
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/1c815193-9386-4d4e-b126-3c4a31f93a81?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '1c815193-9386-4d4e-b126-3c4a31f93a81',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/1c815193-9386-4d4e-b126-3c4a31f93a81?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'f393dcb0-5ff1-41b1-91a1-b40bf6460cc8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113631Z:f393dcb0-5ff1-41b1-91a1-b40bf6460cc8',
  date: 'Wed, 31 May 2017 11:36:30 GMT',
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
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/1c815193-9386-4d4e-b126-3c4a31f93a81?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '1c815193-9386-4d4e-b126-3c4a31f93a81',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/1c815193-9386-4d4e-b126-3c4a31f93a81?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'f393dcb0-5ff1-41b1-91a1-b40bf6460cc8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113631Z:f393dcb0-5ff1-41b1-91a1-b40bf6460cc8',
  date: 'Wed, 31 May 2017 11:36:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/1c815193-9386-4d4e-b126-3c4a31f93a81?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '041faf4e-eff3-4ea4-9b5b-bc3235081762',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '9bcb4ca1-b4d7-4dfb-a823-5c6f125cbfb3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113701Z:9bcb4ca1-b4d7-4dfb-a823-5c6f125cbfb3',
  date: 'Wed, 31 May 2017 11:37:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/1c815193-9386-4d4e-b126-3c4a31f93a81?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '041faf4e-eff3-4ea4-9b5b-bc3235081762',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '9bcb4ca1-b4d7-4dfb-a823-5c6f125cbfb3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T113701Z:9bcb4ca1-b4d7-4dfb-a823-5c6f125cbfb3',
  date: 'Wed, 31 May 2017 11:37:01 GMT',
  connection: 'close' });
 return result; }]];