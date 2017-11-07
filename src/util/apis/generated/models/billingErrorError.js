/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the BillingErrorError class.
 * @constructor
 * @member {number} [code] The status code return by the API. It can be 400 or
 * 403 or 500.
 * 
 * @member {string} [message] The reason for the request failed
 * 
 */
function BillingErrorError() {
}

/**
 * Defines the metadata of BillingErrorError
 *
 * @returns {object} metadata of BillingErrorError
 *
 */
BillingErrorError.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BillingError_error',
    type: {
      name: 'Composite',
      className: 'BillingErrorError',
      modelProperties: {
        code: {
          required: false,
          serializedName: 'code',
          type: {
            name: 'Number'
          }
        },
        message: {
          required: false,
          serializedName: 'message',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = BillingErrorError;