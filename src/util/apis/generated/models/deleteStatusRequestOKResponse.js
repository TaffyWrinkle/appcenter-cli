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
 * Class representing a DeleteStatusRequestOKResponse.
 */
class DeleteStatusRequestOKResponse {
  /**
   * Create a DeleteStatusRequestOKResponse.
   * @property {string} [sasUrl] Azure Storage shared access signature (SAS)
   * URL for exported user data.
   * @property {boolean} [sasUrlExpired] Whether Azure Storage shared access
   * signature (SAS) URL has expired or not.
   * @property {string} status Status of data subject right request. Possible
   * values include: 'None', 'Created', 'Queued', 'InProgress', 'Completed',
   * 'Failed'
   * @property {string} message explanation message of the status
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeleteStatusRequestOKResponse
   *
   * @returns {object} metadata of DeleteStatusRequestOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeleteStatusRequestOKResponse',
      type: {
        name: 'Composite',
        className: 'DeleteStatusRequestOKResponse',
        modelProperties: {
          sasUrl: {
            required: false,
            serializedName: 'sasUrl',
            type: {
              name: 'String'
            }
          },
          sasUrlExpired: {
            required: false,
            serializedName: 'sasUrlExpired',
            type: {
              name: 'Boolean'
            }
          },
          status: {
            required: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DeleteStatusRequestOKResponse;
