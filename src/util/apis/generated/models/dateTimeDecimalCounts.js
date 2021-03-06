/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a DateTimeDecimalCounts.
 */
class DateTimeDecimalCounts {
  /**
   * Create a DateTimeDecimalCounts.
   * @member {string} [datetime] the ISO 8601 datetime
   * @member {number} [count] decimal count of the object
   */
  constructor() {
  }

  /**
   * Defines the metadata of DateTimeDecimalCounts
   *
   * @returns {object} metadata of DateTimeDecimalCounts
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DateTimeDecimalCounts',
      type: {
        name: 'Composite',
        className: 'DateTimeDecimalCounts',
        modelProperties: {
          datetime: {
            required: false,
            serializedName: 'datetime',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = DateTimeDecimalCounts;
