// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '52b6b790-9d5f-450c-98d9-97dbd91015d5',
    name: 'IXPMegaportASHPri',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'brazilsouth';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"MicrosoftPeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering\",\r\n  \"etag\": \"W/\\\"455d139a-0327-4a76-b649-d21d29af1ef9\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"MicrosoftPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 120,\r\n    \"primaryPeerAddressPrefix\": \"123.0.0.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"123.0.0.4/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 219,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\",\r\n    \"microsoftPeeringConfig\": {\r\n      \"advertisedPublicPrefixes\": [\r\n        \"123.1.0.0/24\"\r\n      ],\r\n      \"advertisedPublicPrefixesState\": \"ValidationNeeded\",\r\n      \"customerASN\": 32,\r\n      \"routingRegistryName\": \"LACNIC\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1004',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '86176e6c-19c3-4333-8ea0-68db621db98a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'b8a430d6-9c9e-44de-966f-1bb22b2e2f88',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105418Z:b8a430d6-9c9e-44de-966f-1bb22b2e2f88',
  date: 'Wed, 31 May 2017 10:54:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"MicrosoftPeering\",\r\n  \"id\": \"/subscriptions/52b6b790-9d5f-450c-98d9-97dbd91015d5/resourceGroups/xplatTestGroupERPeering/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRouteCircuit/peerings/MicrosoftPeering\",\r\n  \"etag\": \"W/\\\"455d139a-0327-4a76-b649-d21d29af1ef9\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"MicrosoftPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 120,\r\n    \"primaryPeerAddressPrefix\": \"123.0.0.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"123.0.0.4/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 219,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\",\r\n    \"microsoftPeeringConfig\": {\r\n      \"advertisedPublicPrefixes\": [\r\n        \"123.1.0.0/24\"\r\n      ],\r\n      \"advertisedPublicPrefixesState\": \"ValidationNeeded\",\r\n      \"customerASN\": 32,\r\n      \"routingRegistryName\": \"LACNIC\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1004',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '86176e6c-19c3-4333-8ea0-68db621db98a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'b8a430d6-9c9e-44de-966f-1bb22b2e2f88',
  'x-ms-routing-request-id': 'WESTEUROPE:20170531T105418Z:b8a430d6-9c9e-44de-966f-1bb22b2e2f88',
  date: 'Wed, 31 May 2017 10:54:17 GMT',
  connection: 'close' });
 return result; }]];
