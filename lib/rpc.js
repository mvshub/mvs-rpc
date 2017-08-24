const rq = require('request-promise-native');

const rcpCall = (url) => {
    return (method, params) => {
        return rq.post({
            url,
            body: {
                method,
                params
            },
            json: true
        });
    }
}

module.exports = rcpCall;

