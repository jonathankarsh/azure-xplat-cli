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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/testrg13639/providers/Microsoft.Web/sites/webappclitest8064?api-version=2014-06-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/testrg13639/providers/Microsoft.Web/sites/webappclitest8064\",\"name\":\"webappclitest8064\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitest8064\",\"state\":\"Running\",\"hostNames\":[\"webappclitest8064.azurewebsites.net\"],\"webSpace\":\"testrg13639-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-055.api.azurewebsites.windows.net:454/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/webspaces/testrg13639-WestUSwebspace/sites/webappclitest8064\",\"repositorySiteName\":\"webappclitest8064\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitest8064.azurewebsites.net\",\"webappclitest8064.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitest8064.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitest8064.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"arm-cli-webapp-tests6402\",\"serverFarmId\":null,\"lastModifiedTimeUtc\":\"2016-04-26T00:58:59.353\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitest8064\",\"trafficManagerHostNames\":null,\"sku\":\"Standard\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"104.42.185.131,104.42.184.178,104.42.185.60,104.42.188.171\",\"containerSize\":0,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-055\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg13639\",\"defaultHostName\":\"webappclitest8064.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2276',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '49dfc09e-ae93-4a8b-bbea-8491fec25a87',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '94ce3266-ee35-4565-a388-60feab4d00fe',
  'x-ms-routing-request-id': 'WESTUS:20160426T005901Z:94ce3266-ee35-4565-a388-60feab4d00fe',
  date: 'Tue, 26 Apr 2016 00:59:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/testrg13639/providers/Microsoft.Web/sites/webappclitest8064?api-version=2014-06-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/testrg13639/providers/Microsoft.Web/sites/webappclitest8064\",\"name\":\"webappclitest8064\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitest8064\",\"state\":\"Running\",\"hostNames\":[\"webappclitest8064.azurewebsites.net\"],\"webSpace\":\"testrg13639-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-055.api.azurewebsites.windows.net:454/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/webspaces/testrg13639-WestUSwebspace/sites/webappclitest8064\",\"repositorySiteName\":\"webappclitest8064\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitest8064.azurewebsites.net\",\"webappclitest8064.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitest8064.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitest8064.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"arm-cli-webapp-tests6402\",\"serverFarmId\":null,\"lastModifiedTimeUtc\":\"2016-04-26T00:58:59.353\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitest8064\",\"trafficManagerHostNames\":null,\"sku\":\"Standard\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"104.42.185.131,104.42.184.178,104.42.185.60,104.42.188.171\",\"containerSize\":0,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-055\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg13639\",\"defaultHostName\":\"webappclitest8064.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2276',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '49dfc09e-ae93-4a8b-bbea-8491fec25a87',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '94ce3266-ee35-4565-a388-60feab4d00fe',
  'x-ms-routing-request-id': 'WESTUS:20160426T005901Z:94ce3266-ee35-4565-a388-60feab4d00fe',
  date: 'Tue, 26 Apr 2016 00:59:01 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return [,,'arm-cli-webapp-tests6402'];};