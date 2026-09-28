# MaxioAdvancedBilling SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

MaxioAdvancedBillingUtility.registrar = ->(u) {
  u.clean = MaxioAdvancedBillingUtilities::Clean
  u.done = MaxioAdvancedBillingUtilities::Done
  u.make_error = MaxioAdvancedBillingUtilities::MakeError
  u.feature_add = MaxioAdvancedBillingUtilities::FeatureAdd
  u.feature_hook = MaxioAdvancedBillingUtilities::FeatureHook
  u.feature_init = MaxioAdvancedBillingUtilities::FeatureInit
  u.fetcher = MaxioAdvancedBillingUtilities::Fetcher
  u.make_fetch_def = MaxioAdvancedBillingUtilities::MakeFetchDef
  u.make_context = MaxioAdvancedBillingUtilities::MakeContext
  u.make_options = MaxioAdvancedBillingUtilities::MakeOptions
  u.make_request = MaxioAdvancedBillingUtilities::MakeRequest
  u.make_response = MaxioAdvancedBillingUtilities::MakeResponse
  u.make_result = MaxioAdvancedBillingUtilities::MakeResult
  u.make_point = MaxioAdvancedBillingUtilities::MakePoint
  u.make_spec = MaxioAdvancedBillingUtilities::MakeSpec
  u.make_url = MaxioAdvancedBillingUtilities::MakeUrl
  u.param = MaxioAdvancedBillingUtilities::Param
  u.prepare_auth = MaxioAdvancedBillingUtilities::PrepareAuth
  u.prepare_body = MaxioAdvancedBillingUtilities::PrepareBody
  u.prepare_headers = MaxioAdvancedBillingUtilities::PrepareHeaders
  u.prepare_method = MaxioAdvancedBillingUtilities::PrepareMethod
  u.prepare_params = MaxioAdvancedBillingUtilities::PrepareParams
  u.prepare_path = MaxioAdvancedBillingUtilities::PreparePath
  u.prepare_query = MaxioAdvancedBillingUtilities::PrepareQuery
  u.graphql_body = MaxioAdvancedBillingUtilities::GraphqlBody
  u.graphql_errors = MaxioAdvancedBillingUtilities::GraphqlErrors
  u.result_basic = MaxioAdvancedBillingUtilities::ResultBasic
  u.result_body = MaxioAdvancedBillingUtilities::ResultBody
  u.result_headers = MaxioAdvancedBillingUtilities::ResultHeaders
  u.transform_request = MaxioAdvancedBillingUtilities::TransformRequest
  u.transform_response = MaxioAdvancedBillingUtilities::TransformResponse
}
