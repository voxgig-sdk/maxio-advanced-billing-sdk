# MaxioAdvancedBilling SDK exists test

import pytest
from maxioadvancedbilling_sdk import MaxioAdvancedBillingSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = MaxioAdvancedBillingSDK.test(None, None)
        assert testsdk is not None
