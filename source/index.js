
/**
 * Handle a request
 * @api {GET} /test/dynamic/:type.js GetDynamicTest
 * @apiDescription Handles the request
 * @apiGroup Test
 * @apiParam {String} company The company
 * @apiParamExample {String} DynamicTest
 *  /test/dynamic/item.js?company=123
 * @apiSuccessExample RedirectSuccess:
 *  HTTP/1.1 307 Temporary Redirect
 * @apiHeader (Response Headers) {String} Location Valid location
 * @apiSuccessExample {text} EmptySuccess:
 *  HTTP/1.1 200 OK
 *  // Empty script javascript (comments only)
 */
function doSomething(req, res) {
	// ...
}
