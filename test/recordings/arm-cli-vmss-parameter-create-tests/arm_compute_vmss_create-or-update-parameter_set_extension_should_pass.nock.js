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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate2715/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2017-03-30', '*')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"singlePlacementGroup\": true,\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplatteststorage18515.blob.core.windows.net/xplatteststoragecnt14076\",\r\n            \"https://xplatteststorage23118.blob.core.windows.net/xplatteststoragecnt29254\",\r\n            \"https://xplatteststorage36434.blob.core.windows.net/xplatteststoragecnt39422\"\r\n          ],\r\n          \"name\": \"test\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate2715/providers/Microsoft.Network/virtualNetworks/xplattestvnet2747/subnets/xplattestsubnet7262\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]},\r\n      \"diagnosticsProfile\": {\r\n        \"bootDiagnostics\": {\r\n          \"enabled\": false\r\n        }\r\n      },\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"overprovision\": false,\r\n    \"uniqueId\": \"863236e9-01d7-41eb-a4cd-cc045a4e4b88\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate2715/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2835',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/b5ef47fa-cd34-4e80-9dac-f3080d9bbce4?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131333185194717656',
  'x-ms-request-id': 'b5ef47fa-cd34-4e80-9dac-f3080d9bbce4',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'a4573bb3-3a03-4425-b679-8744abf4d8a9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170606T142348Z:a4573bb3-3a03-4425-b679-8744abf4d8a9',
  date: 'Tue, 06 Jun 2017 14:23:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate2715/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2017-03-30', '*')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"singlePlacementGroup\": true,\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplatteststorage18515.blob.core.windows.net/xplatteststoragecnt14076\",\r\n            \"https://xplatteststorage23118.blob.core.windows.net/xplatteststoragecnt29254\",\r\n            \"https://xplatteststorage36434.blob.core.windows.net/xplatteststoragecnt39422\"\r\n          ],\r\n          \"name\": \"test\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate2715/providers/Microsoft.Network/virtualNetworks/xplattestvnet2747/subnets/xplattestsubnet7262\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]},\r\n      \"diagnosticsProfile\": {\r\n        \"bootDiagnostics\": {\r\n          \"enabled\": false\r\n        }\r\n      },\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"overprovision\": false,\r\n    \"uniqueId\": \"863236e9-01d7-41eb-a4cd-cc045a4e4b88\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate2715/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2835',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/b5ef47fa-cd34-4e80-9dac-f3080d9bbce4?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131333185194717656',
  'x-ms-request-id': 'b5ef47fa-cd34-4e80-9dac-f3080d9bbce4',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'a4573bb3-3a03-4425-b679-8744abf4d8a9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170606T142348Z:a4573bb3-3a03-4425-b679-8744abf4d8a9',
  date: 'Tue, 06 Jun 2017 14:23:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/b5ef47fa-cd34-4e80-9dac-f3080d9bbce4?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-06T14:23:46.062814+00:00\",\r\n  \"endTime\": \"2017-06-06T14:23:46.4065919+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"b5ef47fa-cd34-4e80-9dac-f3080d9bbce4\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '183',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131333185194717656',
  'x-ms-request-id': 'f7a162f9-f1d3-4d07-8a17-f9dc83d73c81',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'cb567c44-ba35-4c58-b014-351cf4d125d0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170606T142419Z:cb567c44-ba35-4c58-b014-351cf4d125d0',
  date: 'Tue, 06 Jun 2017 14:24:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/b5ef47fa-cd34-4e80-9dac-f3080d9bbce4?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-06T14:23:46.062814+00:00\",\r\n  \"endTime\": \"2017-06-06T14:23:46.4065919+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"b5ef47fa-cd34-4e80-9dac-f3080d9bbce4\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '183',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131333185194717656',
  'x-ms-request-id': 'f7a162f9-f1d3-4d07-8a17-f9dc83d73c81',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'cb567c44-ba35-4c58-b014-351cf4d125d0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170606T142419Z:cb567c44-ba35-4c58-b014-351cf4d125d0',
  date: 'Tue, 06 Jun 2017 14:24:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate2715/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2017-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"singlePlacementGroup\": true,\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplatteststorage18515.blob.core.windows.net/xplatteststoragecnt14076\",\r\n            \"https://xplatteststorage23118.blob.core.windows.net/xplatteststoragecnt29254\",\r\n            \"https://xplatteststorage36434.blob.core.windows.net/xplatteststoragecnt39422\"\r\n          ],\r\n          \"name\": \"test\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate2715/providers/Microsoft.Network/virtualNetworks/xplattestvnet2747/subnets/xplattestsubnet7262\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]},\r\n      \"diagnosticsProfile\": {\r\n        \"bootDiagnostics\": {\r\n          \"enabled\": false\r\n        }\r\n      },\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false,\r\n    \"uniqueId\": \"863236e9-01d7-41eb-a4cd-cc045a4e4b88\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate2715/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2836',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131333185194717656',
  'x-ms-request-id': '3aad6610-4fe8-48a4-bf18-a1c74e23b9bc',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'fc359b94-6303-4ebd-81e1-3b7cbb161e71',
  'x-ms-routing-request-id': 'WESTEUROPE:20170606T142420Z:fc359b94-6303-4ebd-81e1-3b7cbb161e71',
  date: 'Tue, 06 Jun 2017 14:24:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate2715/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2017-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_DS1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"singlePlacementGroup\": true,\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplatteststorage18515.blob.core.windows.net/xplatteststoragecnt14076\",\r\n            \"https://xplatteststorage23118.blob.core.windows.net/xplatteststoragecnt29254\",\r\n            \"https://xplatteststorage36434.blob.core.windows.net/xplatteststoragecnt39422\"\r\n          ],\r\n          \"name\": \"test\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"enableAcceleratedNetworking\":false,\"dnsSettings\":{\"dnsServers\":[]},\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate2715/providers/Microsoft.Network/virtualNetworks/xplattestvnet2747/subnets/xplattestsubnet7262\"},\"privateIPAddressVersion\":\"IPv4\"}}]}}]},\r\n      \"diagnosticsProfile\": {\r\n        \"bootDiagnostics\": {\r\n          \"enabled\": false\r\n        }\r\n      },\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false,\r\n    \"uniqueId\": \"863236e9-01d7-41eb-a4cd-cc045a4e4b88\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate2715/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2836',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131333185194717656',
  'x-ms-request-id': '3aad6610-4fe8-48a4-bf18-a1c74e23b9bc',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'fc359b94-6303-4ebd-81e1-3b7cbb161e71',
  'x-ms-routing-request-id': 'WESTEUROPE:20170606T142420Z:fc359b94-6303-4ebd-81e1-3b7cbb161e71',
  date: 'Tue, 06 Jun 2017 14:24:19 GMT',
  connection: 'close' });
 return result; }]];