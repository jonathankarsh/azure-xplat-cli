// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"aa7110e5-b33d-4111-ab39-f9b3acce17b1\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"aa7110e5-b33d-4111-ab39-f9b3acce17b1"',
  'x-ms-request-id': 'fd96defe-b0aa-4eb5-912d-4f45e71e8d76',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '19c271f2-29c8-4459-b314-d96d9823ea93',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082604Z:19c271f2-29c8-4459-b314-d96d9823ea93',
  date: 'Mon, 02 Oct 2017 08:26:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"aa7110e5-b33d-4111-ab39-f9b3acce17b1\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"aa7110e5-b33d-4111-ab39-f9b3acce17b1"',
  'x-ms-request-id': 'fd96defe-b0aa-4eb5-912d-4f45e71e8d76',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '19c271f2-29c8-4459-b314-d96d9823ea93',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082604Z:19c271f2-29c8-4459-b314-d96d9823ea93',
  date: 'Mon, 02 Oct 2017 08:26:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/connectivityCheck?api-version=2017-09-01', '*')
  .reply(202, "null", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/f5903025-9bb7-4260-b1c1-1c6b948b1b07?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'f5903025-9bb7-4260-b1c1-1c6b948b1b07',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '9faa902f-832a-490c-a351-42489b7323fb',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082625Z:9faa902f-832a-490c-a351-42489b7323fb',
  date: 'Mon, 02 Oct 2017 08:26:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/connectivityCheck?api-version=2017-09-01', '*')
  .reply(202, "null", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/f5903025-9bb7-4260-b1c1-1c6b948b1b07?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'f5903025-9bb7-4260-b1c1-1c6b948b1b07',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '9faa902f-832a-490c-a351-42489b7323fb',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082625Z:9faa902f-832a-490c-a351-42489b7323fb',
  date: 'Mon, 02 Oct 2017 08:26:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/f5903025-9bb7-4260-b1c1-1c6b948b1b07?api-version=2017-09-01')
  .reply(200, "{\r\n  \"hops\": [\r\n    {\r\n      \"type\": \"Source\",\r\n      \"id\": \"eedd28ca-e0f4-4218-8935-ca86d86269c8\",\r\n      \"address\": \"10.0.0.4\",\r\n      \"resourceId\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/default-ip-config\",\r\n      \"nextHopIds\": [\r\n        \"048f67d2-e1ad-4827-889e-dd18c916a933\"\r\n      ],\r\n      \"links\": [\r\n        {\r\n          \"nextHopId\": \"048f67d2-e1ad-4827-889e-dd18c916a933\",\r\n          \"properties\": {\r\n            \"roundTripTimeMin\": 1,\r\n            \"roundTripTimeAvg\": 1,\r\n            \"roundTripTimeMax\": 1\r\n          }\r\n        }\r\n      ],\r\n      \"issues\": []\r\n    },\r\n    {\r\n      \"type\": \"Internet\",\r\n      \"id\": \"048f67d2-e1ad-4827-889e-dd18c916a933\",\r\n      \"address\": \"204.79.197.200\",\r\n      \"resourceId\": \"Internet\",\r\n      \"nextHopIds\": [\r\n        \"a02c712a-9ac7-4b47-b1f5-3f067b1e89e9\"\r\n      ],\r\n      \"links\": [\r\n        {\r\n          \"nextHopId\": \"a02c712a-9ac7-4b47-b1f5-3f067b1e89e9\",\r\n          \"properties\": {}\r\n        }\r\n      ],\r\n      \"issues\": []\r\n    },\r\n    {\r\n      \"type\": \"Internet\",\r\n      \"id\": \"a02c712a-9ac7-4b47-b1f5-3f067b1e89e9\",\r\n      \"address\": \"204.79.197.200\",\r\n      \"resourceId\": \"Internet\",\r\n      \"nextHopIds\": [],\r\n      \"links\": [],\r\n      \"issues\": []\r\n    }\r\n  ],\r\n  \"connectionStatus\": \"Reachable\",\r\n  \"avgLatencyInMs\": 1,\r\n  \"minLatencyInMs\": 1,\r\n  \"maxLatencyInMs\": 1,\r\n  \"probesSent\": 100,\r\n  \"probesFailed\": 0\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1506',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/f5903025-9bb7-4260-b1c1-1c6b948b1b07?api-version=2017-09-01',
  'x-ms-request-id': 'f5903025-9bb7-4260-b1c1-1c6b948b1b07',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'b516ad7e-86b8-4f8c-8acf-1d58f24a75f9',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082656Z:b516ad7e-86b8-4f8c-8acf-1d58f24a75f9',
  date: 'Mon, 02 Oct 2017 08:26:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/f5903025-9bb7-4260-b1c1-1c6b948b1b07?api-version=2017-09-01')
  .reply(200, "{\r\n  \"hops\": [\r\n    {\r\n      \"type\": \"Source\",\r\n      \"id\": \"eedd28ca-e0f4-4218-8935-ca86d86269c8\",\r\n      \"address\": \"10.0.0.4\",\r\n      \"resourceId\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/default-ip-config\",\r\n      \"nextHopIds\": [\r\n        \"048f67d2-e1ad-4827-889e-dd18c916a933\"\r\n      ],\r\n      \"links\": [\r\n        {\r\n          \"nextHopId\": \"048f67d2-e1ad-4827-889e-dd18c916a933\",\r\n          \"properties\": {\r\n            \"roundTripTimeMin\": 1,\r\n            \"roundTripTimeAvg\": 1,\r\n            \"roundTripTimeMax\": 1\r\n          }\r\n        }\r\n      ],\r\n      \"issues\": []\r\n    },\r\n    {\r\n      \"type\": \"Internet\",\r\n      \"id\": \"048f67d2-e1ad-4827-889e-dd18c916a933\",\r\n      \"address\": \"204.79.197.200\",\r\n      \"resourceId\": \"Internet\",\r\n      \"nextHopIds\": [\r\n        \"a02c712a-9ac7-4b47-b1f5-3f067b1e89e9\"\r\n      ],\r\n      \"links\": [\r\n        {\r\n          \"nextHopId\": \"a02c712a-9ac7-4b47-b1f5-3f067b1e89e9\",\r\n          \"properties\": {}\r\n        }\r\n      ],\r\n      \"issues\": []\r\n    },\r\n    {\r\n      \"type\": \"Internet\",\r\n      \"id\": \"a02c712a-9ac7-4b47-b1f5-3f067b1e89e9\",\r\n      \"address\": \"204.79.197.200\",\r\n      \"resourceId\": \"Internet\",\r\n      \"nextHopIds\": [],\r\n      \"links\": [],\r\n      \"issues\": []\r\n    }\r\n  ],\r\n  \"connectionStatus\": \"Reachable\",\r\n  \"avgLatencyInMs\": 1,\r\n  \"minLatencyInMs\": 1,\r\n  \"maxLatencyInMs\": 1,\r\n  \"probesSent\": 100,\r\n  \"probesFailed\": 0\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1506',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/f5903025-9bb7-4260-b1c1-1c6b948b1b07?api-version=2017-09-01',
  'x-ms-request-id': 'f5903025-9bb7-4260-b1c1-1c6b948b1b07',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'b516ad7e-86b8-4f8c-8acf-1d58f24a75f9',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082656Z:b516ad7e-86b8-4f8c-8acf-1d58f24a75f9',
  date: 'Mon, 02 Oct 2017 08:26:56 GMT',
  connection: 'close' });
 return result; }]];