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
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-address-pool/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-06-01')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-address-pool/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"9253d0c9-0800-48fe-b623-b20375b802ec\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ba6c43c7-edc5-46fb-b6f0-6d33541c50c1\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-address-pool/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"9253d0c9-0800-48fe-b623-b20375b802ec\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-address-pool/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"test-address-pool\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-address-pool/providers/Microsoft.Network/loadBalancers/test-lb/backendAddressPools/test-address-pool\",\r\n        \"etag\": \"W/\\\"9253d0c9-0800-48fe-b623-b20375b802ec\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"test-address-pool-2\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-address-pool/providers/Microsoft.Network/loadBalancers/test-lb/backendAddressPools/test-address-pool-2\",\r\n        \"etag\": \"W/\\\"9253d0c9-0800-48fe-b623-b20375b802ec\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2104',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9253d0c9-0800-48fe-b623-b20375b802ec"',
  'x-ms-request-id': '1b760cd2-8b77-4a61-b5ea-7a0394a7addd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14962',
  'x-ms-correlation-request-id': '76d0e572-5b5e-4b7f-83c3-bffc28ed591d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T161853Z:76d0e572-5b5e-4b7f-83c3-bffc28ed591d',
  date: 'Mon, 15 Aug 2016 16:18:53 GMT' });
 return result; }]];