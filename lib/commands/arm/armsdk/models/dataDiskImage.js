/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Contains the data disk images information.
 *
 */
class DataDiskImage {
  /**
   * Create a DataDiskImage.
   * @member {number} [lun] Specifies the logical unit number of the data disk.
   * This value is used to identify data disks within the VM and therefore must
   * be unique for each data disk attached to a VM.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DataDiskImage
   *
   * @returns {object} metadata of DataDiskImage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataDiskImage',
      type: {
        name: 'Composite',
        className: 'DataDiskImage',
        modelProperties: {
          lun: {
            required: false,
            readOnly: true,
            serializedName: 'lun',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = DataDiskImage;