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
 * Billing Plans for a single service
 *
 */
class BillingInformationPlansTestService {
  /**
   * Create a BillingInformationPlansTestService.
   * @property {boolean} [canSelectTrialPlan] Can customer select trial plan
   * for that service (if it exists)?
   * @property {string} [lastTrialPlanExpirationTime] Expiration time of the
   * last selected trial plan. Will be null if trial plan was not used.
   * @property {object} [currentBillingPeriod] Billing plans for a given period
   * @property {string} [currentBillingPeriod.startTime] Inclusive start of the
   * period
   * @property {string} [currentBillingPeriod.endTime] Exclusive end of the
   * period.
   * @property {object} [currentBillingPeriod.byAccount] Selection of a billing
   * plan
   * @property {number} [currentBillingPeriod.byAccount.count] Number of
   * instances of the billing plan.
   * @property {object} [currentBillingPeriod.byAccount.plan] Billing Plan
   * @property {string} [currentBillingPeriod.byAccount.plan.id] The Billing
   * Plan ID
   * @property {string} [currentBillingPeriod.byAccount.plan.version] Version
   * of the Billing Plan schema
   * @property {number} [currentBillingPeriod.byAccount.plan.price] Price of
   * the Billing Plan
   * @property {string} [currentBillingPeriod.byAccount.plan.paymentSource]
   * Service that receives payments for this billing plan. Possible values
   * include: 'None', 'AppCenter', 'GitHub', 'Xtc'
   * @property {string} [currentBillingPeriod.byAccount.plan.service] Name of
   * the service that the plan applies to. Possible values include: 'Build',
   * 'Test'
   * @property {object} [currentBillingPeriod.byAccount.plan.limits] A
   * collection of named numeric values
   * @property {object} [currentBillingPeriod.byAccount.plan.attributes]
   * Collection of attribute values.
   * @property {string} [currentBillingPeriod.byAccount.plan.parentId]
   */
  constructor() {
  }

  /**
   * Defines the metadata of BillingInformationPlansTestService
   *
   * @returns {object} metadata of BillingInformationPlansTestService
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BillingInformationPlans_testService',
      type: {
        name: 'Composite',
        className: 'BillingInformationPlansTestService',
        modelProperties: {
          canSelectTrialPlan: {
            required: false,
            serializedName: 'canSelectTrialPlan',
            type: {
              name: 'Boolean'
            }
          },
          lastTrialPlanExpirationTime: {
            required: false,
            serializedName: 'lastTrialPlanExpirationTime',
            type: {
              name: 'String'
            }
          },
          currentBillingPeriod: {
            required: false,
            serializedName: 'currentBillingPeriod',
            type: {
              name: 'Composite',
              className: 'BillingInformationPlansTestServiceCurrentBillingPeriod'
            }
          }
        }
      }
    };
  }
}

module.exports = BillingInformationPlansTestService;
