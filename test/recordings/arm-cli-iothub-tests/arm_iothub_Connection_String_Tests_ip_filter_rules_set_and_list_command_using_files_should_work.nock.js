// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '75917ab0-74e0-451f-b332-caeb57dc5cf6',
    name: 'IOTHUB_PERF_2',
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
  process.env['AZURE_ARM_IOTHUB_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestiothubrg';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636?api-version=2017-01-19')
  .reply(200, "{\"id\":\"/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636\",\"name\":\"xplattestiothub1636\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"75917ab0-74e0-451f-b332-caeb57dc5cf6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAAD16NQ=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[],\"hostName\":\"xplattestiothub1636.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[],\"eventHubs\":[]},\"routes\":[],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":true}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1865',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-request-id': '81d23958-d462-4a78-8125-593db6d86ced',
  'x-ms-correlation-request-id': '81d23958-d462-4a78-8125-593db6d86ced',
  'x-ms-routing-request-id': 'WESTUS:20170518T050304Z:81d23958-d462-4a78-8125-593db6d86ced',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 May 2017 05:03:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636?api-version=2017-01-19')
  .reply(200, "{\"id\":\"/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636\",\"name\":\"xplattestiothub1636\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"75917ab0-74e0-451f-b332-caeb57dc5cf6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAAD16NQ=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[],\"hostName\":\"xplattestiothub1636.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[],\"eventHubs\":[]},\"routes\":[],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":true}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1865',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-request-id': '81d23958-d462-4a78-8125-593db6d86ced',
  'x-ms-correlation-request-id': '81d23958-d462-4a78-8125-593db6d86ced',
  'x-ms-routing-request-id': 'WESTUS:20170518T050304Z:81d23958-d462-4a78-8125-593db6d86ced',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 May 2017 05:03:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636?api-version=2017-01-19')
  .reply(200, "{\"id\":\"/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636\",\"name\":\"xplattestiothub1636\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"75917ab0-74e0-451f-b332-caeb57dc5cf6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAAD16NQ=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[],\"hostName\":\"xplattestiothub1636.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[],\"eventHubs\":[]},\"routes\":[],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":true}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1865',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-request-id': '32056f50-e6b6-447b-8c09-2d8c5d789ec5',
  'x-ms-correlation-request-id': '32056f50-e6b6-447b-8c09-2d8c5d789ec5',
  'x-ms-routing-request-id': 'WESTUS:20170518T050305Z:32056f50-e6b6-447b-8c09-2d8c5d789ec5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 May 2017 05:03:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636?api-version=2017-01-19')
  .reply(200, "{\"id\":\"/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636\",\"name\":\"xplattestiothub1636\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"75917ab0-74e0-451f-b332-caeb57dc5cf6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAAD16NQ=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[],\"hostName\":\"xplattestiothub1636.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[],\"eventHubs\":[]},\"routes\":[],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":true}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1865',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-request-id': '32056f50-e6b6-447b-8c09-2d8c5d789ec5',
  'x-ms-correlation-request-id': '32056f50-e6b6-447b-8c09-2d8c5d789ec5',
  'x-ms-routing-request-id': 'WESTUS:20170518T050305Z:32056f50-e6b6-447b-8c09-2d8c5d789ec5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 May 2017 05:03:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636?api-version=2017-01-19', '*')
  .reply(201, "{\"id\":\"/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636\",\"name\":\"xplattestiothub1636\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"75917ab0-74e0-451f-b332-caeb57dc5cf6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAAD16NQ=\",\"properties\":{\"provisioningState\":\"Accepted\",\"authorizationPolicies\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"flOB5k7TbrQM29oIWlNdFEBGYYOoRSSjkB+ZrO6TPQ0=\",\"secondaryKey\":\"BMQrSh8LZ1IDahFKA9XVOaFXvq081dTRhQyBjNinDeE=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"/8XkCFcadRc/KM3yc0H1jE/9Chs62zmtQCzVsJPS5Fk=\",\"secondaryKey\":\"gDQLJdvWGFNaBuSabyK8ZJCpZWDTzN5HxUCcq3ys5nU=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"FSO6xIqgjE/CiEPcy/4Ct0l7isKSbOSMMLW0MKgY5ls=\",\"secondaryKey\":\"hrUzqUP4mURsj2D09e+V+khVr6xk7auvUsAUVR4wL1w=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"eep+t+303/wxQvbyPZVTXx9BR6sil861dof6uquT2Js=\",\"secondaryKey\":\"qMIV0AiKz+d02jIPWwyS3Ty7TaUcFwbChSJ8cgLKyXo=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"1I0SV0VP9GYQkg9hmJfCtm84ePMSTujlPFo9BDb9qxA=\",\"secondaryKey\":\"qcv7vvYReE1jPBbfkJtNEgJECmWG/tf1gO6S7RetRTU=\",\"rights\":\"RegistryWrite\"}],\"ipFilterRules\":[{\"filterName\":\"deny\",\"action\":\"Accept\",\"ipMask\":\"0.0.0.0/0\"},{\"filterName\":\"test\",\"action\":\"Reject\",\"ipMask\":\"0.0.0.0/0\"}],\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[],\"eventHubs\":[]},\"routes\":[],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":true}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2547',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636/operationResults/Mjc4MzQwYjEtMmNiYS00YmM1LWIwN2EtYjA1M2M2YWNhYTY4?api-version=2017-01-19&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4999',
  'x-ms-request-id': 'd5296526-2288-43e9-8f75-5a16d81177dc',
  'x-ms-correlation-request-id': 'd5296526-2288-43e9-8f75-5a16d81177dc',
  'x-ms-routing-request-id': 'WESTUS:20170518T050307Z:d5296526-2288-43e9-8f75-5a16d81177dc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 May 2017 05:03:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636?api-version=2017-01-19', '*')
  .reply(201, "{\"id\":\"/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636\",\"name\":\"xplattestiothub1636\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"75917ab0-74e0-451f-b332-caeb57dc5cf6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAAD16NQ=\",\"properties\":{\"provisioningState\":\"Accepted\",\"authorizationPolicies\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"flOB5k7TbrQM29oIWlNdFEBGYYOoRSSjkB+ZrO6TPQ0=\",\"secondaryKey\":\"BMQrSh8LZ1IDahFKA9XVOaFXvq081dTRhQyBjNinDeE=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"/8XkCFcadRc/KM3yc0H1jE/9Chs62zmtQCzVsJPS5Fk=\",\"secondaryKey\":\"gDQLJdvWGFNaBuSabyK8ZJCpZWDTzN5HxUCcq3ys5nU=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"FSO6xIqgjE/CiEPcy/4Ct0l7isKSbOSMMLW0MKgY5ls=\",\"secondaryKey\":\"hrUzqUP4mURsj2D09e+V+khVr6xk7auvUsAUVR4wL1w=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"eep+t+303/wxQvbyPZVTXx9BR6sil861dof6uquT2Js=\",\"secondaryKey\":\"qMIV0AiKz+d02jIPWwyS3Ty7TaUcFwbChSJ8cgLKyXo=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"1I0SV0VP9GYQkg9hmJfCtm84ePMSTujlPFo9BDb9qxA=\",\"secondaryKey\":\"qcv7vvYReE1jPBbfkJtNEgJECmWG/tf1gO6S7RetRTU=\",\"rights\":\"RegistryWrite\"}],\"ipFilterRules\":[{\"filterName\":\"deny\",\"action\":\"Accept\",\"ipMask\":\"0.0.0.0/0\"},{\"filterName\":\"test\",\"action\":\"Reject\",\"ipMask\":\"0.0.0.0/0\"}],\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[],\"eventHubs\":[]},\"routes\":[],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":true}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2547',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636/operationResults/Mjc4MzQwYjEtMmNiYS00YmM1LWIwN2EtYjA1M2M2YWNhYTY4?api-version=2017-01-19&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4999',
  'x-ms-request-id': 'd5296526-2288-43e9-8f75-5a16d81177dc',
  'x-ms-correlation-request-id': 'd5296526-2288-43e9-8f75-5a16d81177dc',
  'x-ms-routing-request-id': 'WESTUS:20170518T050307Z:d5296526-2288-43e9-8f75-5a16d81177dc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 May 2017 05:03:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636/operationResults/Mjc4MzQwYjEtMmNiYS00YmM1LWIwN2EtYjA1M2M2YWNhYTY4?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-request-id': '144273f3-dd31-46be-9932-fe4d39b78bb6',
  'x-ms-correlation-request-id': '144273f3-dd31-46be-9932-fe4d39b78bb6',
  'x-ms-routing-request-id': 'WESTUS:20170518T050337Z:144273f3-dd31-46be-9932-fe4d39b78bb6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 May 2017 05:03:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636/operationResults/Mjc4MzQwYjEtMmNiYS00YmM1LWIwN2EtYjA1M2M2YWNhYTY4?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Running\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '20',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-request-id': '144273f3-dd31-46be-9932-fe4d39b78bb6',
  'x-ms-correlation-request-id': '144273f3-dd31-46be-9932-fe4d39b78bb6',
  'x-ms-routing-request-id': 'WESTUS:20170518T050337Z:144273f3-dd31-46be-9932-fe4d39b78bb6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 May 2017 05:03:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636/operationResults/Mjc4MzQwYjEtMmNiYS00YmM1LWIwN2EtYjA1M2M2YWNhYTY4?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-request-id': '051e172b-f775-4d17-9642-f7064e58d493',
  'x-ms-correlation-request-id': '051e172b-f775-4d17-9642-f7064e58d493',
  'x-ms-routing-request-id': 'WESTUS:20170518T050407Z:051e172b-f775-4d17-9642-f7064e58d493',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 May 2017 05:04:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636/operationResults/Mjc4MzQwYjEtMmNiYS00YmM1LWIwN2EtYjA1M2M2YWNhYTY4?api-version=2017-01-19&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-request-id': '051e172b-f775-4d17-9642-f7064e58d493',
  'x-ms-correlation-request-id': '051e172b-f775-4d17-9642-f7064e58d493',
  'x-ms-routing-request-id': 'WESTUS:20170518T050407Z:051e172b-f775-4d17-9642-f7064e58d493',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 May 2017 05:04:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636?api-version=2017-01-19')
  .reply(200, "{\"id\":\"/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636\",\"name\":\"xplattestiothub1636\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"75917ab0-74e0-451f-b332-caeb57dc5cf6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAAD16Oo=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[{\"filterName\":\"deny\",\"action\":\"Accept\",\"ipMask\":\"0.0.0.0/0\"},{\"filterName\":\"test\",\"action\":\"Reject\",\"ipMask\":\"0.0.0.0/0\"}],\"hostName\":\"xplattestiothub1636.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[],\"eventHubs\":[]},\"routes\":[],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":true}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1986',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-request-id': 'ff1c3874-9462-409d-99cc-cbb98c8803c2',
  'x-ms-correlation-request-id': 'ff1c3874-9462-409d-99cc-cbb98c8803c2',
  'x-ms-routing-request-id': 'WESTUS:20170518T050408Z:ff1c3874-9462-409d-99cc-cbb98c8803c2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 May 2017 05:04:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636?api-version=2017-01-19')
  .reply(200, "{\"id\":\"/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636\",\"name\":\"xplattestiothub1636\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"75917ab0-74e0-451f-b332-caeb57dc5cf6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAAD16Oo=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[{\"filterName\":\"deny\",\"action\":\"Accept\",\"ipMask\":\"0.0.0.0/0\"},{\"filterName\":\"test\",\"action\":\"Reject\",\"ipMask\":\"0.0.0.0/0\"}],\"hostName\":\"xplattestiothub1636.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[],\"eventHubs\":[]},\"routes\":[],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":true}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1986',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-request-id': 'ff1c3874-9462-409d-99cc-cbb98c8803c2',
  'x-ms-correlation-request-id': 'ff1c3874-9462-409d-99cc-cbb98c8803c2',
  'x-ms-routing-request-id': 'WESTUS:20170518T050408Z:ff1c3874-9462-409d-99cc-cbb98c8803c2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 May 2017 05:04:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636?api-version=2017-01-19')
  .reply(200, "{\"id\":\"/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636\",\"name\":\"xplattestiothub1636\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"75917ab0-74e0-451f-b332-caeb57dc5cf6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAAD16Oo=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[{\"filterName\":\"deny\",\"action\":\"Accept\",\"ipMask\":\"0.0.0.0/0\"},{\"filterName\":\"test\",\"action\":\"Reject\",\"ipMask\":\"0.0.0.0/0\"}],\"hostName\":\"xplattestiothub1636.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[],\"eventHubs\":[]},\"routes\":[],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":true}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1986',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-request-id': '60c9103e-270a-4f87-9d56-4811beabd760',
  'x-ms-correlation-request-id': '60c9103e-270a-4f87-9d56-4811beabd760',
  'x-ms-routing-request-id': 'WESTUS:20170518T050408Z:60c9103e-270a-4f87-9d56-4811beabd760',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 May 2017 05:04:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636?api-version=2017-01-19')
  .reply(200, "{\"id\":\"/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636\",\"name\":\"xplattestiothub1636\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"75917ab0-74e0-451f-b332-caeb57dc5cf6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAAD16Oo=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[{\"filterName\":\"deny\",\"action\":\"Accept\",\"ipMask\":\"0.0.0.0/0\"},{\"filterName\":\"test\",\"action\":\"Reject\",\"ipMask\":\"0.0.0.0/0\"}],\"hostName\":\"xplattestiothub1636.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[],\"eventHubs\":[]},\"routes\":[],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":true}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1986',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-request-id': '60c9103e-270a-4f87-9d56-4811beabd760',
  'x-ms-correlation-request-id': '60c9103e-270a-4f87-9d56-4811beabd760',
  'x-ms-routing-request-id': 'WESTUS:20170518T050408Z:60c9103e-270a-4f87-9d56-4811beabd760',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 May 2017 05:04:08 GMT',
  connection: 'close' });
 return result; }]];