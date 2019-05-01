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
 * Class representing a ErrorAttachmentLocation.
 */
class ErrorAttachmentLocation {
  /**
   * Create a ErrorAttachmentLocation.
   * @property {string} [uri]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorAttachmentLocation
   *
   * @returns {object} metadata of ErrorAttachmentLocation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorAttachmentLocation',
      type: {
        name: 'Composite',
        className: 'ErrorAttachmentLocation',
        modelProperties: {
          uri: {
            required: false,
            serializedName: 'uri',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorAttachmentLocation;