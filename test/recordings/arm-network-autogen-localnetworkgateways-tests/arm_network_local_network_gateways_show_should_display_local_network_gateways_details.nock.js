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
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/localNetworkGatewaysName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'dffff7a6-cc90-41c9-923a-5c05e667b7f9',
  'x-ms-correlation-request-id': 'dffff7a6-cc90-41c9-923a-5c05e667b7f9',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T103650Z:dffff7a6-cc90-41c9-923a-5c05e667b7f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 10:36:50 GMT',
  connection: 'close',
  'content-length': '191' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/localNetworkGatewaysName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'dffff7a6-cc90-41c9-923a-5c05e667b7f9',
  'x-ms-correlation-request-id': 'dffff7a6-cc90-41c9-923a-5c05e667b7f9',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T103650Z:dffff7a6-cc90-41c9-923a-5c05e667b7f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 10:36:50 GMT',
  connection: 'close',
  'content-length': '191' });
 return result; }]];
