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
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xTestDiskCreate6272?api-version=2016-09-01')
  .reply(200, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272\",\"name\":\"xTestDiskCreate6272\",\"location\":\"southeastasia\",\"tags\":{\"arm.disk-parameter-create-tests\":\"2017-06-02T17:10:30.862Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '1536f93a-3cee-4bc0-ba76-0158cd986767',
  'x-ms-correlation-request-id': '1536f93a-3cee-4bc0-ba76-0158cd986767',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171118Z:1536f93a-3cee-4bc0-ba76-0158cd986767',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 17:11:17 GMT',
  connection: 'close',
  'content-length': '268' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xTestDiskCreate6272?api-version=2016-09-01')
  .reply(200, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272\",\"name\":\"xTestDiskCreate6272\",\"location\":\"southeastasia\",\"tags\":{\"arm.disk-parameter-create-tests\":\"2017-06-02T17:10:30.862Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '1536f93a-3cee-4bc0-ba76-0158cd986767',
  'x-ms-correlation-request-id': '1536f93a-3cee-4bc0-ba76-0158cd986767',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171118Z:1536f93a-3cee-4bc0-ba76-0158cd986767',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 17:11:17 GMT',
  connection: 'close',
  'content-length': '268' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xTestDiskCreate6272?api-version=2016-09-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272\",\"name\":\"xTestDiskCreate6272\",\"location\":\"southeastasia\",\"tags\":{\"arm.disk-parameter-create-tests\":\"2017-06-02T17:11:17.375Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '30f2e62d-3ec3-410d-9802-41a87add6e87',
  'x-ms-correlation-request-id': '30f2e62d-3ec3-410d-9802-41a87add6e87',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171120Z:30f2e62d-3ec3-410d-9802-41a87add6e87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 17:11:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xTestDiskCreate6272?api-version=2016-09-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272\",\"name\":\"xTestDiskCreate6272\",\"location\":\"southeastasia\",\"tags\":{\"arm.disk-parameter-create-tests\":\"2017-06-02T17:11:17.375Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '30f2e62d-3ec3-410d-9802-41a87add6e87',
  'x-ms-correlation-request-id': '30f2e62d-3ec3-410d-9802-41a87add6e87',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171120Z:30f2e62d-3ec3-410d-9802-41a87add6e87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 17:11:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585?api-version=2017-03-30', '*')
  .reply(202, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_LRS\"\r\n  },\r\n  \"properties\": {\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"isArmResource\": true\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '357',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/9bea16c2-45d1-46f8-acc4-9dbd01351247?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/9bea16c2-45d1-46f8-acc4-9dbd01351247?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '9bea16c2-45d1-46f8-acc4-9dbd01351247',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'd186f237-48bb-45fc-b832-47623ea6dbde',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171126Z:d186f237-48bb-45fc-b832-47623ea6dbde',
  date: 'Fri, 02 Jun 2017 17:11:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585?api-version=2017-03-30', '*')
  .reply(202, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_LRS\"\r\n  },\r\n  \"properties\": {\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"isArmResource\": true\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '357',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/9bea16c2-45d1-46f8-acc4-9dbd01351247?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/9bea16c2-45d1-46f8-acc4-9dbd01351247?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '9bea16c2-45d1-46f8-acc4-9dbd01351247',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'd186f237-48bb-45fc-b832-47623ea6dbde',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171126Z:d186f237-48bb-45fc-b832-47623ea6dbde',
  date: 'Fri, 02 Jun 2017 17:11:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/9bea16c2-45d1-46f8-acc4-9dbd01351247?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:11:25.0000531+00:00\",\r\n  \"endTime\": \"2017-06-02T17:11:25.1250406+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"properties\": {\r\n    \"output\": {\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"properties\":{\"osType\":\"Windows\",\"creationData\":{\"createOption\":\"Empty\"},\"diskSizeGB\":5,\"encryptionSettings\":{\"enabled\":false},\"timeCreated\":\"2017-06-02T17:10:43.6170496+00:00\",\"provisioningState\":\"Succeeded\",\"diskState\":\"Unattached\"},\"type\":\"Microsoft.Compute/disks\",\"location\":\"southeastasia\",\"tags\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585\",\"name\":\"xplatDisk2585\"}\r\n  },\r\n  \"name\": \"9bea16c2-45d1-46f8-acc4-9dbd01351247\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '4e76e32d-5b58-4778-abae-2c209dab47e6',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'd9695d1a-3296-420e-b97a-1798cfee1f36',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171156Z:d9695d1a-3296-420e-b97a-1798cfee1f36',
  date: 'Fri, 02 Jun 2017 17:11:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/9bea16c2-45d1-46f8-acc4-9dbd01351247?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:11:25.0000531+00:00\",\r\n  \"endTime\": \"2017-06-02T17:11:25.1250406+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"properties\": {\r\n    \"output\": {\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"properties\":{\"osType\":\"Windows\",\"creationData\":{\"createOption\":\"Empty\"},\"diskSizeGB\":5,\"encryptionSettings\":{\"enabled\":false},\"timeCreated\":\"2017-06-02T17:10:43.6170496+00:00\",\"provisioningState\":\"Succeeded\",\"diskState\":\"Unattached\"},\"type\":\"Microsoft.Compute/disks\",\"location\":\"southeastasia\",\"tags\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585\",\"name\":\"xplatDisk2585\"}\r\n  },\r\n  \"name\": \"9bea16c2-45d1-46f8-acc4-9dbd01351247\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '4e76e32d-5b58-4778-abae-2c209dab47e6',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'd9695d1a-3296-420e-b97a-1798cfee1f36',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171156Z:d9695d1a-3296-420e-b97a-1798cfee1f36',
  date: 'Fri, 02 Jun 2017 17:11:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585?api-version=2017-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_LRS\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"timeCreated\": \"2017-06-02T17:10:43.6170496+00:00\",\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"diskState\": \"Unattached\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/disks\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585\",\r\n  \"name\": \"xplatDisk2585\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '657',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '8ab456c4-dffa-433c-8481-b532aa891bf4',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'acab5e39-9f8f-404e-a6ff-ae5ccf7956dc',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171157Z:acab5e39-9f8f-404e-a6ff-ae5ccf7956dc',
  date: 'Fri, 02 Jun 2017 17:11:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585?api-version=2017-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_LRS\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"timeCreated\": \"2017-06-02T17:10:43.6170496+00:00\",\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"diskState\": \"Unattached\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/disks\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585\",\r\n  \"name\": \"xplatDisk2585\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '657',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '8ab456c4-dffa-433c-8481-b532aa891bf4',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'acab5e39-9f8f-404e-a6ff-ae5ccf7956dc',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171157Z:acab5e39-9f8f-404e-a6ff-ae5ccf7956dc',
  date: 'Fri, 02 Jun 2017 17:11:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585?api-version=2017-03-30', '*')
  .reply(202, "{\r\n  \"sku\": {\r\n    \"name\": \"Premium_LRS\"\r\n  },\r\n  \"properties\": {\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"isArmResource\": true\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '356',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/800240c9-62eb-4c84-b813-9e322877de21?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/800240c9-62eb-4c84-b813-9e322877de21?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '800240c9-62eb-4c84-b813-9e322877de21',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'fafad63a-641a-439c-8115-1ea5aad9a099',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171159Z:fafad63a-641a-439c-8115-1ea5aad9a099',
  date: 'Fri, 02 Jun 2017 17:11:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585?api-version=2017-03-30', '*')
  .reply(202, "{\r\n  \"sku\": {\r\n    \"name\": \"Premium_LRS\"\r\n  },\r\n  \"properties\": {\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"isArmResource\": true\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '356',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/800240c9-62eb-4c84-b813-9e322877de21?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/800240c9-62eb-4c84-b813-9e322877de21?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '800240c9-62eb-4c84-b813-9e322877de21',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'fafad63a-641a-439c-8115-1ea5aad9a099',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171159Z:fafad63a-641a-439c-8115-1ea5aad9a099',
  date: 'Fri, 02 Jun 2017 17:11:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/800240c9-62eb-4c84-b813-9e322877de21?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:11:58.6831842+00:00\",\r\n  \"endTime\": \"2017-06-02T17:11:58.8862806+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"properties\": {\r\n    \"output\": {\"sku\":{\"name\":\"Premium_LRS\",\"tier\":\"Premium\"},\"properties\":{\"osType\":\"Windows\",\"creationData\":{\"createOption\":\"Empty\"},\"diskSizeGB\":5,\"encryptionSettings\":{\"enabled\":false},\"timeCreated\":\"2017-06-02T17:10:43.6170496+00:00\",\"provisioningState\":\"Succeeded\",\"diskState\":\"Unattached\"},\"type\":\"Microsoft.Compute/disks\",\"location\":\"southeastasia\",\"tags\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585\",\"name\":\"xplatDisk2585\"}\r\n  },\r\n  \"name\": \"800240c9-62eb-4c84-b813-9e322877de21\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '742',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '5f00e521-8abb-42fd-9bfa-6cd10270e2e4',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'd176b4f7-01b3-448e-bfd7-5173ecf33608',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171230Z:d176b4f7-01b3-448e-bfd7-5173ecf33608',
  date: 'Fri, 02 Jun 2017 17:12:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/800240c9-62eb-4c84-b813-9e322877de21?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:11:58.6831842+00:00\",\r\n  \"endTime\": \"2017-06-02T17:11:58.8862806+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"properties\": {\r\n    \"output\": {\"sku\":{\"name\":\"Premium_LRS\",\"tier\":\"Premium\"},\"properties\":{\"osType\":\"Windows\",\"creationData\":{\"createOption\":\"Empty\"},\"diskSizeGB\":5,\"encryptionSettings\":{\"enabled\":false},\"timeCreated\":\"2017-06-02T17:10:43.6170496+00:00\",\"provisioningState\":\"Succeeded\",\"diskState\":\"Unattached\"},\"type\":\"Microsoft.Compute/disks\",\"location\":\"southeastasia\",\"tags\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585\",\"name\":\"xplatDisk2585\"}\r\n  },\r\n  \"name\": \"800240c9-62eb-4c84-b813-9e322877de21\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '742',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '5f00e521-8abb-42fd-9bfa-6cd10270e2e4',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'd176b4f7-01b3-448e-bfd7-5173ecf33608',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171230Z:d176b4f7-01b3-448e-bfd7-5173ecf33608',
  date: 'Fri, 02 Jun 2017 17:12:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585?api-version=2017-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Premium_LRS\",\r\n    \"tier\": \"Premium\"\r\n  },\r\n  \"properties\": {\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"timeCreated\": \"2017-06-02T17:10:43.6170496+00:00\",\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"diskState\": \"Unattached\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/disks\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585\",\r\n  \"name\": \"xplatDisk2585\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '655',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '1b01b0df-c976-4a36-92d0-633a6b86f53f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'f75c3e26-8424-4da7-91ee-711aabc9fe8a',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171231Z:f75c3e26-8424-4da7-91ee-711aabc9fe8a',
  date: 'Fri, 02 Jun 2017 17:12:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585?api-version=2017-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Premium_LRS\",\r\n    \"tier\": \"Premium\"\r\n  },\r\n  \"properties\": {\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"timeCreated\": \"2017-06-02T17:10:43.6170496+00:00\",\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"diskState\": \"Unattached\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/disks\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585\",\r\n  \"name\": \"xplatDisk2585\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '655',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '1b01b0df-c976-4a36-92d0-633a6b86f53f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'f75c3e26-8424-4da7-91ee-711aabc9fe8a',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171231Z:f75c3e26-8424-4da7-91ee-711aabc9fe8a',
  date: 'Fri, 02 Jun 2017 17:12:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/be01e9eb-8747-4b95-9f57-b3436efe822d?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/be01e9eb-8747-4b95-9f57-b3436efe822d?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': 'be01e9eb-8747-4b95-9f57-b3436efe822d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'b5d1d372-7a4b-4cd3-8cbe-0d09b2a7797c',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171233Z:b5d1d372-7a4b-4cd3-8cbe-0d09b2a7797c',
  date: 'Fri, 02 Jun 2017 17:12:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585?api-version=2017-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/be01e9eb-8747-4b95-9f57-b3436efe822d?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/be01e9eb-8747-4b95-9f57-b3436efe822d?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': 'be01e9eb-8747-4b95-9f57-b3436efe822d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'b5d1d372-7a4b-4cd3-8cbe-0d09b2a7797c',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171233Z:b5d1d372-7a4b-4cd3-8cbe-0d09b2a7797c',
  date: 'Fri, 02 Jun 2017 17:12:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/be01e9eb-8747-4b95-9f57-b3436efe822d?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:12:32.5608496+00:00\",\r\n  \"endTime\": \"2017-06-02T17:12:32.6701484+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"be01e9eb-8747-4b95-9f57-b3436efe822d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '4bd0b44e-f899-4596-9a91-60bfc9e5a3f7',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '43eb0ad6-7fb7-4e0f-80b1-85813bad94dc',
  'x-ms-routing-request-id': 'WESTUS:20170602T171304Z:43eb0ad6-7fb7-4e0f-80b1-85813bad94dc',
  date: 'Fri, 02 Jun 2017 17:13:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/be01e9eb-8747-4b95-9f57-b3436efe822d?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:12:32.5608496+00:00\",\r\n  \"endTime\": \"2017-06-02T17:12:32.6701484+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"be01e9eb-8747-4b95-9f57-b3436efe822d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '4bd0b44e-f899-4596-9a91-60bfc9e5a3f7',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '43eb0ad6-7fb7-4e0f-80b1-85813bad94dc',
  'x-ms-routing-request-id': 'WESTUS:20170602T171304Z:43eb0ad6-7fb7-4e0f-80b1-85813bad94dc',
  date: 'Fri, 02 Jun 2017 17:13:04 GMT',
  connection: 'close' });
 return result; }]];