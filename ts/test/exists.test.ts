
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MaxioAdvancedBillingSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    equal(testsdk instanceof MaxioAdvancedBillingSDK, true,
      'MaxioAdvancedBillingSDK.test() must return a client synchronously')
  })

})
