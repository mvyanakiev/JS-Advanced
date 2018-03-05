function validateRequest(input) {

    const VALID_METHODS = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const VALID_VERSION = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const validUri = /^[a-zA-Z0-9\.]+$/gm;
    const validMessage = /^[^\<\\>\\\&\'\"]*$/gm;

    if (!VALID_METHODS.includes(input.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!(RegExp(validUri).test(input.uri) || input.uri === "*") || !input.hasOwnProperty('uri') ) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!VALID_VERSION.includes(input.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!( RegExp(validMessage).test(input.message) || input.message === "") || !input.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
        }

    return input
}


console.log(validateRequest({

    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/0.8',
    message: ''

    }
));