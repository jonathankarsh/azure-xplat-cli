// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-1315786796_2-20160408t210455z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-09T00:13:13.9234026Z\",\"lastBootTime\":\"2016-04-09T00:13:13.7574027Z\",\"allocationTime\":\"2016-04-08T21:04:55.9177225Z\",\"ipAddress\":\"100.73.198.28\",\"affinityId\":\"TVM:tvm-1315786796_2-20160408t210455z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"startTaskInfo\":{\r\n    \"state\":\"completed\",\"startTime\":\"2016-04-09T00:13:15.2834117Z\",\"endTime\":\"2016-04-09T00:13:15.5164136Z\",\"exitCode\":0,\"retryCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '2477b13d-67d2-4428-9b8e-901f70ff52ae',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '52da1e46-6ff1-407a-aef1-0a4d8f88e5f7',
  dataserviceversion: '3.0',
  date: 'Sat, 09 Apr 2016 00:21:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-1315786796_2-20160408t210455z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-09T00:13:13.9234026Z\",\"lastBootTime\":\"2016-04-09T00:13:13.7574027Z\",\"allocationTime\":\"2016-04-08T21:04:55.9177225Z\",\"ipAddress\":\"100.73.198.28\",\"affinityId\":\"TVM:tvm-1315786796_2-20160408t210455z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"startTaskInfo\":{\r\n    \"state\":\"completed\",\"startTime\":\"2016-04-09T00:13:15.2834117Z\",\"endTime\":\"2016-04-09T00:13:15.5164136Z\",\"exitCode\":0,\"retryCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '2477b13d-67d2-4428-9b8e-901f70ff52ae',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '52da1e46-6ff1-407a-aef1-0a4d8f88e5f7',
  dataserviceversion: '3.0',
  date: 'Sat, 09 Apr 2016 00:21:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z/rdp?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "full address:s:13.68.16.172\r\nLoadBalanceInfo:s:Cookie: mstshash=TVM#TVM_IN_2", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'caeef306-3443-4e5c-b0a3-f2e04da90fb7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '64fe1571-9824-4164-9911-ea5fa676254e',
  dataserviceversion: '3.0',
  date: 'Sat, 09 Apr 2016 00:21:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z/rdp?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "full address:s:13.68.16.172\r\nLoadBalanceInfo:s:Cookie: mstshash=TVM#TVM_IN_2", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'caeef306-3443-4e5c-b0a3-f2e04da90fb7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '64fe1571-9824-4164-9911-ea5fa676254e',
  dataserviceversion: '3.0',
  date: 'Sat, 09 Apr 2016 00:21:22 GMT',
  connection: 'close' });
 return result; }]];