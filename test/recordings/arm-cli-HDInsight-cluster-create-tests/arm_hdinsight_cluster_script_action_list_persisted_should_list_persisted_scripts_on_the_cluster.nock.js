// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'd66b1168-d835-4066-8c45-7d2ed713c082',
    name: 'BDHadoopTeamPMTestDemo',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'westus';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate44/scriptActions?api-version=2015-03-01-preview')
  .reply(200, "{\"value\":[{\"name\":\"testscriptname\",\"uri\":\"https://hdiconfigactions.blob.core.windows.net/linuxsampleconfigaction/sample.sh\",\"parameters\":\"\",\"roles\":[\"headnode\",\"workernode\"],\"applicationName\":null}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a62a6342-cd78-4113-8fc5-a83b6128792f',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14029',
  'x-ms-correlation-request-id': '3b346e4f-9451-4592-9929-4d28db5110ea',
  'x-ms-routing-request-id': 'WESTUS:20160322T004818Z:3b346e4f-9451-4592-9929-4d28db5110ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:48:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate44/scriptActions?api-version=2015-03-01-preview')
  .reply(200, "{\"value\":[{\"name\":\"testscriptname\",\"uri\":\"https://hdiconfigactions.blob.core.windows.net/linuxsampleconfigaction/sample.sh\",\"parameters\":\"\",\"roles\":[\"headnode\",\"workernode\"],\"applicationName\":null}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a62a6342-cd78-4113-8fc5-a83b6128792f',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14029',
  'x-ms-correlation-request-id': '3b346e4f-9451-4592-9929-4d28db5110ea',
  'x-ms-routing-request-id': 'WESTUS:20160322T004818Z:3b346e4f-9451-4592-9929-4d28db5110ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:48:17 GMT',
  connection: 'close' });
 return result; }]];