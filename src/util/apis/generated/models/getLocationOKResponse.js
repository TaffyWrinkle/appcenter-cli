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
 * Location for downloading symbol
 *
 */
class GetLocationOKResponse {
  /**
   * Create a GetLocationOKResponse.
   * @property {string} uri
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetLocationOKResponse
   *
   * @returns {object} metadata of GetLocationOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetLocationOKResponse',
      type: {
        name: 'Composite',
        className: 'GetLocationOKResponse',
        modelProperties: {
          uri: {
            required: true,
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

module.exports = GetLocationOKResponse;
