/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.InstanceViewStatus = require('./instanceViewStatus');
exports.SubResource = require('./subResource');
exports.Sku = require('./sku');
exports.Resource = require('./resource');
exports.AvailabilitySet = require('./availabilitySet');
exports.AvailabilitySetListResult = require('./availabilitySetListResult');
exports.VirtualMachineSize = require('./virtualMachineSize');
exports.VirtualMachineSizeListResult = require('./virtualMachineSizeListResult');
exports.VirtualMachineExtensionImage = require('./virtualMachineExtensionImage');
exports.VirtualMachineImageResource = require('./virtualMachineImageResource');
exports.VirtualMachineExtensionInstanceView = require('./virtualMachineExtensionInstanceView');
exports.VirtualMachineExtension = require('./virtualMachineExtension');
exports.PurchasePlan = require('./purchasePlan');
exports.OSDiskImage = require('./oSDiskImage');
exports.DataDiskImage = require('./dataDiskImage');
exports.VirtualMachineImage = require('./virtualMachineImage');
exports.UsageName = require('./usageName');
exports.Usage = require('./usage');
exports.ListUsagesResult = require('./listUsagesResult');
exports.VirtualMachineCaptureParameters = require('./virtualMachineCaptureParameters');
exports.VirtualMachineCaptureResult = require('./virtualMachineCaptureResult');
exports.Plan = require('./plan');
exports.HardwareProfile = require('./hardwareProfile');
exports.ImageReference = require('./imageReference');
exports.KeyVaultSecretReference = require('./keyVaultSecretReference');
exports.KeyVaultKeyReference = require('./keyVaultKeyReference');
exports.DiskEncryptionSettings = require('./diskEncryptionSettings');
exports.VirtualHardDisk = require('./virtualHardDisk');
exports.ManagedDiskParameters = require('./managedDiskParameters');
exports.OSDisk = require('./oSDisk');
exports.DataDisk = require('./dataDisk');
exports.StorageProfile = require('./storageProfile');
exports.AdditionalUnattendContent = require('./additionalUnattendContent');
exports.WinRMListener = require('./winRMListener');
exports.WinRMConfiguration = require('./winRMConfiguration');
exports.WindowsConfiguration = require('./windowsConfiguration');
exports.SshPublicKey = require('./sshPublicKey');
exports.SshConfiguration = require('./sshConfiguration');
exports.LinuxConfiguration = require('./linuxConfiguration');
exports.VaultCertificate = require('./vaultCertificate');
exports.VaultSecretGroup = require('./vaultSecretGroup');
exports.OSProfile = require('./oSProfile');
exports.NetworkInterfaceReference = require('./networkInterfaceReference');
exports.NetworkProfile = require('./networkProfile');
exports.BootDiagnostics = require('./bootDiagnostics');
exports.DiagnosticsProfile = require('./diagnosticsProfile');
exports.VirtualMachineExtensionHandlerInstanceView = require('./virtualMachineExtensionHandlerInstanceView');
exports.VirtualMachineAgentInstanceView = require('./virtualMachineAgentInstanceView');
exports.DiskInstanceView = require('./diskInstanceView');
exports.BootDiagnosticsInstanceView = require('./bootDiagnosticsInstanceView');
exports.VirtualMachineIdentity = require('./virtualMachineIdentity');
exports.MaintenanceRedeployStatus = require('./maintenanceRedeployStatus');
exports.VirtualMachineInstanceView = require('./virtualMachineInstanceView');
exports.VirtualMachine = require('./virtualMachine');
exports.VirtualMachineListResult = require('./virtualMachineListResult');
exports.RollingUpgradePolicy = require('./rollingUpgradePolicy');
exports.UpgradePolicy = require('./upgradePolicy');
exports.ImageOSDisk = require('./imageOSDisk');
exports.ImageDataDisk = require('./imageDataDisk');
exports.ImageStorageProfile = require('./imageStorageProfile');
exports.Image = require('./image');
exports.ImageListResult = require('./imageListResult');
exports.VirtualMachineScaleSetIdentity = require('./virtualMachineScaleSetIdentity');
exports.ResourceSkuCapacity = require('./resourceSkuCapacity');
exports.ResourceSkuCosts = require('./resourceSkuCosts');
exports.ResourceSkuCapabilities = require('./resourceSkuCapabilities');
exports.ResourceSkuRestrictions = require('./resourceSkuRestrictions');
exports.ResourceSku = require('./resourceSku');
exports.ResourceSkusResult = require('./resourceSkusResult');
exports.VirtualMachineScaleSetOSProfile = require('./virtualMachineScaleSetOSProfile');
exports.VirtualMachineScaleSetUpdateOSProfile = require('./virtualMachineScaleSetUpdateOSProfile');
exports.VirtualMachineScaleSetManagedDiskParameters = require('./virtualMachineScaleSetManagedDiskParameters');
exports.VirtualMachineScaleSetOSDisk = require('./virtualMachineScaleSetOSDisk');
exports.VirtualMachineScaleSetUpdateOSDisk = require('./virtualMachineScaleSetUpdateOSDisk');
exports.VirtualMachineScaleSetDataDisk = require('./virtualMachineScaleSetDataDisk');
exports.VirtualMachineScaleSetStorageProfile = require('./virtualMachineScaleSetStorageProfile');
exports.VirtualMachineScaleSetUpdateStorageProfile = require('./virtualMachineScaleSetUpdateStorageProfile');
exports.ApiEntityReference = require('./apiEntityReference');
exports.VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings = require('./virtualMachineScaleSetPublicIPAddressConfigurationDnsSettings');
exports.VirtualMachineScaleSetPublicIPAddressConfiguration = require('./virtualMachineScaleSetPublicIPAddressConfiguration');
exports.VirtualMachineScaleSetUpdatePublicIPAddressConfiguration = require('./virtualMachineScaleSetUpdatePublicIPAddressConfiguration');
exports.VirtualMachineScaleSetIPConfiguration = require('./virtualMachineScaleSetIPConfiguration');
exports.VirtualMachineScaleSetUpdateIPConfiguration = require('./virtualMachineScaleSetUpdateIPConfiguration');
exports.VirtualMachineScaleSetNetworkConfigurationDnsSettings = require('./virtualMachineScaleSetNetworkConfigurationDnsSettings');
exports.VirtualMachineScaleSetNetworkConfiguration = require('./virtualMachineScaleSetNetworkConfiguration');
exports.VirtualMachineScaleSetUpdateNetworkConfiguration = require('./virtualMachineScaleSetUpdateNetworkConfiguration');
exports.VirtualMachineScaleSetNetworkProfile = require('./virtualMachineScaleSetNetworkProfile');
exports.VirtualMachineScaleSetUpdateNetworkProfile = require('./virtualMachineScaleSetUpdateNetworkProfile');
exports.SubResourceReadOnly = require('./subResourceReadOnly');
exports.VirtualMachineScaleSetExtension = require('./virtualMachineScaleSetExtension');
exports.VirtualMachineScaleSetExtensionListResult = require('./virtualMachineScaleSetExtensionListResult');
exports.VirtualMachineScaleSetExtensionProfile = require('./virtualMachineScaleSetExtensionProfile');
exports.VirtualMachineScaleSetVMProfile = require('./virtualMachineScaleSetVMProfile');
exports.VirtualMachineScaleSetUpdateVMProfile = require('./virtualMachineScaleSetUpdateVMProfile');
exports.VirtualMachineScaleSet = require('./virtualMachineScaleSet');
exports.UpdateResource = require('./updateResource');
exports.VirtualMachineScaleSetUpdate = require('./virtualMachineScaleSetUpdate');
exports.VirtualMachineScaleSetVMInstanceIDs = require('./virtualMachineScaleSetVMInstanceIDs');
exports.VirtualMachineScaleSetVMInstanceRequiredIDs = require('./virtualMachineScaleSetVMInstanceRequiredIDs');
exports.VirtualMachineStatusCodeCount = require('./virtualMachineStatusCodeCount');
exports.VirtualMachineScaleSetInstanceViewStatusesSummary = require('./virtualMachineScaleSetInstanceViewStatusesSummary');
exports.VirtualMachineScaleSetVMExtensionsSummary = require('./virtualMachineScaleSetVMExtensionsSummary');
exports.VirtualMachineScaleSetInstanceView = require('./virtualMachineScaleSetInstanceView');
exports.VirtualMachineScaleSetListResult = require('./virtualMachineScaleSetListResult');
exports.VirtualMachineScaleSetListWithLinkResult = require('./virtualMachineScaleSetListWithLinkResult');
exports.VirtualMachineScaleSetSkuCapacity = require('./virtualMachineScaleSetSkuCapacity');
exports.VirtualMachineScaleSetSku = require('./virtualMachineScaleSetSku');
exports.VirtualMachineScaleSetListSkusResult = require('./virtualMachineScaleSetListSkusResult');
exports.VirtualMachineScaleSetVM = require('./virtualMachineScaleSetVM');
exports.VirtualMachineHealthStatus = require('./virtualMachineHealthStatus');
exports.VirtualMachineScaleSetVMInstanceView = require('./virtualMachineScaleSetVMInstanceView');
exports.VirtualMachineScaleSetVMListResult = require('./virtualMachineScaleSetVMListResult');
exports.RollingUpgradeRunningStatus = require('./rollingUpgradeRunningStatus');
exports.RollingUpgradeProgressInfo = require('./rollingUpgradeProgressInfo');
exports.ApiErrorBase = require('./apiErrorBase');
exports.InnerError = require('./innerError');
exports.ApiError = require('./apiError');
exports.RollingUpgradeStatusInfo = require('./rollingUpgradeStatusInfo');
exports.ComputeLongRunningOperationProperties = require('./computeLongRunningOperationProperties');
exports.OperationStatusResponse = require('./operationStatusResponse');
exports.DiskSku = require('./diskSku');
exports.ResourceUpdate = require('./resourceUpdate');
exports.ImageDiskReference = require('./imageDiskReference');
exports.CreationData = require('./creationData');
exports.SourceVault = require('./sourceVault');
exports.KeyVaultAndSecretReference = require('./keyVaultAndSecretReference');
exports.KeyVaultAndKeyReference = require('./keyVaultAndKeyReference');
exports.EncryptionSettings = require('./encryptionSettings');
exports.Disk = require('./disk');
exports.DiskUpdate = require('./diskUpdate');
exports.DiskList = require('./diskList');
exports.GrantAccessData = require('./grantAccessData');
exports.AccessUri = require('./accessUri');
exports.Snapshot = require('./snapshot');
exports.SnapshotUpdate = require('./snapshotUpdate');
exports.SnapshotList = require('./snapshotList');
exports.RunCommandInputParameter = require('./runCommandInputParameter');
exports.RunCommandInput = require('./runCommandInput');
exports.RunCommandParameterDefinition = require('./runCommandParameterDefinition');
exports.RunCommandDocumentBase = require('./runCommandDocumentBase');
exports.RunCommandDocument = require('./runCommandDocument');
exports.RunCommandListResult = require('./runCommandListResult');
exports.RunCommandResult = require('./runCommandResult');
exports.ContainerServiceCustomProfile = require('./containerServiceCustomProfile');
exports.ContainerServiceServicePrincipalProfile = require('./containerServiceServicePrincipalProfile');
exports.ContainerServiceOrchestratorProfile = require('./containerServiceOrchestratorProfile');
exports.ContainerServiceMasterProfile = require('./containerServiceMasterProfile');
exports.ContainerServiceAgentPoolProfile = require('./containerServiceAgentPoolProfile');
exports.ContainerServiceWindowsProfile = require('./containerServiceWindowsProfile');
exports.ContainerServiceSshPublicKey = require('./containerServiceSshPublicKey');
exports.ContainerServiceSshConfiguration = require('./containerServiceSshConfiguration');
exports.ContainerServiceLinuxProfile = require('./containerServiceLinuxProfile');
exports.ContainerServiceVMDiagnostics = require('./containerServiceVMDiagnostics');
exports.ContainerServiceDiagnosticsProfile = require('./containerServiceDiagnosticsProfile');
exports.ContainerService = require('./containerService');
exports.ContainerServiceListResult = require('./containerServiceListResult');
exports.AvailabilitySetListResult = require('./availabilitySetListResult');
exports.VirtualMachineSizeListResult = require('./virtualMachineSizeListResult');
exports.ListUsagesResult = require('./listUsagesResult');
exports.ImageListResult = require('./imageListResult');
exports.ResourceSkusResult = require('./resourceSkusResult');
exports.VirtualMachineListResult = require('./virtualMachineListResult');
exports.VirtualMachineScaleSetListResult = require('./virtualMachineScaleSetListResult');
exports.VirtualMachineScaleSetListWithLinkResult = require('./virtualMachineScaleSetListWithLinkResult');
exports.VirtualMachineScaleSetListSkusResult = require('./virtualMachineScaleSetListSkusResult');
exports.VirtualMachineScaleSetExtensionListResult = require('./virtualMachineScaleSetExtensionListResult');
exports.VirtualMachineScaleSetVMListResult = require('./virtualMachineScaleSetVMListResult');
exports.DiskList = require('./diskList');
exports.SnapshotList = require('./snapshotList');
exports.RunCommandListResult = require('./runCommandListResult');
exports.ContainerServiceListResult = require('./containerServiceListResult');
