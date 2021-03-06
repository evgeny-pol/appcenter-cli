/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Alerting event
 *
 */
class AlertingEvent {
  /**
   * Create a AlertingEvent.
   * @member {string} eventTimestamp ISO 8601 date time when event was
   * generated
   * @member {string} eventId A unique identifier for this event instance.
   * Useful for deduplication
   * @member {object} [properties] Obsolete. Use emailProperties.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AlertingEvent
   *
   * @returns {object} metadata of AlertingEvent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AlertingEvent',
      type: {
        name: 'Composite',
        className: 'AlertingEvent',
        modelProperties: {
          eventTimestamp: {
            required: true,
            serializedName: 'event_timestamp',
            type: {
              name: 'String'
            }
          },
          eventId: {
            required: true,
            serializedName: 'event_id',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = AlertingEvent;
