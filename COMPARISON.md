# Maxio Advanced Billing: the Voxgig SDK and the APIMatic SDK compared

Vergleich: APIMatic. Compared with maxio-com/ab-typescript-sdk 10.0.0, which covers 249 of the spec's operations. Spec: developers.maxio.com OpenAPI 3.0 export, OAS 3.0.0, 196 paths / 268 ops, no licence stated. Added 2026-09-28.

This repository is on the admin **vergleich** list. It is built only to be compared, and it is not published.

## Scorecard

| | Voxgig | APIMatic |
|---|---|---|
| SDK | this repository, commit `e90b0b8`: eight targets (go, go-cli, go-mcp, ts, py, rb, lua, php) | `@maxio-com/advanced-billing-sdk@10.0.0` (TypeScript) |
| Input | `maxio-advanced-billing-openapi.json`: OAS 3.0.0, `info.version` 1.0, 196 paths, 268 operations | the vendor's own generation; the note above names the definition version it came from |
| Operations callable | 266 of 268 (2 modelled as `patch` but not generated) | 249 operation methods |
| Entities | 57 | not applicable |
| ts package | 4.36 MB, 472 files | 9.41 MB, 7205 files |
| Runtime dependencies | 0 | 5 |
| Generated tests | ts 432 pass / 0 fail; py 427 pass; rb 451 runs / 0 fail; lua 425 pass / 0 fail; php 451 tests, 0 fail; go, go-cli, go-mcp build, vet and test | not run: a published package |
| Determinism | a second generation on the same toolchain is byte-identical | not measured |
| Scenario against a mock | 2 of 4 steps right, 2 returned wrong data, 0 request violations (static) | 4 of 4 steps right, 0 request violations (static) |

## Features

Voxgig's features are opt-in; these builds enable the standard set. The APIMatic column is read from the published package, with the evidence below.

| Feature | Voxgig | APIMatic |
|---|---|---|
| Retries | yes | yes |
| Timeouts | yes | yes |
| Pagination helper | partial | no |
| Idempotency keys | yes | no |
| Rate-limit handling | yes | partial |
| Logging / debug | yes | no |
| Built-in offline test mode | yes | no |
| Metrics / telemetry | partial | no |
| Cancellation | yes | partial |
| Hooks / middleware | yes | no |

**Evidence, APIMatic.**

- Retries: src/defaultConfiguration.ts DEFAULT_RETRY_CONFIG (configured via @apimatic/core): maxNumberOfRetries 0 = off by default; GET/PUT on 408,413,429,500,502-504,521,522,524 + timeouts; backoff x2
- Timeouts: Configuration.timeout, default 120000 ms (src/defaultConfiguration.ts); httpClientOptions.timeout overrides; given to HttpClient (@apimatic/axios-client-adapter) in src/client.ts; client-wide
- Pagination helper: No pager or iterator: list methods (e.g. listCustomers in src/controllers/customersController.ts) take page/perPage and return one ApiResponse<T[]>. Searched paginat/Paged/iterat/asyncIterator
- Idempotency keys: Searched 'idempot' across src/ and dist/ (excluding models): no key generated or sent, no idempotency option in Configuration
- Rate-limit handling: 429 is in DEFAULT_RETRY_CONFIG.httpStatusCodesToRetry (src/defaultConfiguration.ts), but retries are off by default; any Retry-After handling is in @apimatic/core (not unpacked)
- Logging / debug: No logger, log level or env var: Configuration (src/configuration.ts) and fromEnvironment have none; searched logger/logging/logLevel/console/debug in src (non-model)
- Built-in offline test mode: No mock or test mode in src/ or dist/; searched mock/fake/stub/sandbox/testmode (non-model). Environment offers only US/EU base URLs
- Metrics / telemetry: No tracing or metrics hooks; searched telemetry/opentelemetry/otel/trace/span/metric in src (non-model); the only interceptor sets user-agent
- Cancellation: Every controller method takes requestOptions?: RequestOptions and src/client.ts wires AbortError into HttpClient; the signal field itself is in @apimatic/core (not unpacked)
- Hooks / middleware: No user hook option in Configuration; interceptRequest is used only internally (withUserAgent, src/client.ts). Escape hatches only: unstable_httpClientOptions (axios overrides), httpAgent
- Auth: HTTP Basic: Configuration.basicAuthCredentials { username, password } (src/configuration.ts, via basicAuthenticationProvider in src/authProvider.ts, from @apimatic/authentication-adapters). The README's curl example sends the API key as username and 'x' as password. Client.fromEnvironment reads USERNAME/PASSWORD; Client.fromJsonConfig is also accepted.
- Errors: Yes, per operation: req.throwOn(status, ErrorClass) in src/controllers/*.ts maps 400/404/409/422/429 to 23 ApiError subclasses in src/errors/, mostly on 422. 64 of the 404 mappings (and eight 422s) use the base ApiError; any other status falls back to ApiError (rb.defaultToError in src/client.ts).

**Evidence, Voxgig.**

- Retries: retry feature: 408, 425, 429 and 5xx, honouring Retry-After.
- Timeouts: timeout feature: 30 s per attempt by default.
- Pagination helper: paging feature: page and cursor state carried between calls (ctrl.paging); no iterator.
- Idempotency keys: idempotency feature: generates an Idempotency-Key for mutating calls, stable across retries.
- Rate-limit handling: ratelimit feature: client-side token bucket; retry honours Retry-After on 429.
- Logging / debug: debug feature: request and response logging with auth headers redacted.
- Built-in offline test mode: test feature: an offline mock transport; every generated suite runs on it.
- Metrics / telemetry: metrics feature: per-operation counts and timings; no OpenTelemetry.
- Cancellation: an AbortSignal per call (callopts.signal).
- Hooks / middleware: extend: custom features hook every pipeline stage.

## Scenario

✓ right, ⚠ returned without error but with the wrong data, ✗ failed.

Each SDK lists one resource, loads and removes the first item it listed, and creates one from the definition's own example or required fields, against a mock built from the same vendor definition. The mock is Prism: static mode answers with the definition's examples, and dynamic mode generates schema-valid data. Each SDK is credited with its better mode. Request violations are Prism's verdicts on what the SDK sent.

- **Voxgig, static:** 2 of 4 steps right, 0 request violations.
  - ⚠ `list`: each entity's data is the `{ customer }` wrapper, not the customer
  - ⚠ `load`: the entity's data is the `{ customer }` wrapper, not the customer
  - ✓ `create`
  - ✓ `remove`
- **Voxgig, dynamic:** 1 of 4 steps right, 2 request violations.
  - ⚠ `list`: each entity's data is the `{ customer }` wrapper, not the customer
  - ✗ `load`: MaxioAdvancedBillingSDK: load: request: 422: Unprocessable Entity
  - ✓ `create`
  - ✗ `remove`: MaxioAdvancedBillingSDK: remove: request: 422: Unprocessable Entity
- **APIMatic, static:** 4 of 4 steps right, 0 request violations.
  - ✓ `list`
  - ✓ `load`
  - ✓ `create`
  - ✓ `remove`
- **APIMatic, dynamic:** 2 of 4 steps right, 0 request violations.
  - ✓ `list`
  - ✗ `load`: Argument for 'id' failed validation.
  - ✓ `create`
  - ✗ `remove`: Argument for 'id' failed validation.

## Voxgig toolchain findings

- **PATCH-OP** (@voxgig/apidef 8.17.2 + @voxgig/sdkgen 4.30.2). apidef resolves a PATCH beside a PUT on the same entity as a sixth op, `patch`. sdkgen generates only load, list, create, update and remove, so those operations are modelled but have no method. The coverage gate counts entities, so it passes anyway. Here: maxio: PATCH /products/{product_id}/price_points/{price_point_id}/default.json; maxio: PATCH /products/{product_id}/price_points/{price_point_id}/unarchive.json. Reported, not changed: a design decision across both tools.
- **UNWRAP** (@voxgig/apidef 8.17.2). The response transform that says where an operation's data sits is inferred wrongly for several resources, in both directions. A schema whose one object-valued property is ordinary data is taken for an envelope (Apicurio's `labels`, SaladCloud's `container`), and a real envelope is missed when it is composed with allOf (Lob) or sits beside another property (Neon's `projects` beside `pagination`). The SDKs' own tests cannot see it, because they mock from the same model; a mock built from the vendor definition does. Here: maxio customer list and load: `body`, so the Customer entity's data is the `{ customer }` wrapper, one level above its own fields (lookup unwraps `body.customer`). Reported, not changed: heuristic design in apidef.
- **QUERY-ECHO** (@voxgig/sdkgen 4.30.2 (PrepareQuery: ts, js and rb read the field; other targets not checked)). Every match field, path parameters included, is also sent as a query parameter: GET /video/v1/assets/a1?id=a1 (Mux), GET /assistant/asst_1?id=asst_1 (Vapi), DELETE .../containers/web?id=web&organization_name=acme&project_id=demo (SaladCloud). prepareQuery excludes names in point.params, but the generated config carries path parameters in point.args.params (which prepareParams reads), so nothing is excluded. Harmless to a lenient server, rejected by a strict one. Prism logs paths without query strings, so its runs did not show it. Reported, not changed: the same exclusion exists per target.

## APIMatic SDK notes

- 249 of the definition's 268 operations. Its base URL is built from environment and site only, so it cannot be pointed at a mock or proxy without patching (the scenario patched getBaseUri). Retries are configured but off by default.

## How this was measured

- Operations: the definition's operations are counted over its paths. Voxgig's are the generated model's points, less those under an op no target generates. The compared SDK's are the operation methods in its published package, counted per generator (method declarations, request-builder verbs, or functions per operation).
- Package size and file count: `npm pack --dry-run` for the Voxgig ts target, and the registry's `dist.unpackedSize` and `dist.fileCount` for the compared package.
- Tests: `admin/scripts/cedar-test-all.sh` runs each target's generated suite.
- Features: read from the code of the published package, crediting a feature only for a mechanism, not a word in the API's own models.

