// Reference - https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting

import fetch, { Headers } from 'node-fetch';

(async() => {
    // Without headers
    const response = await fetch('https://api.github.com/rate_limit');
    const data = await response.json();
    console.log(data);
    console.log("Total limit -> " + response.headers.get('x-ratelimit-limit'));
    console.log("Remaining limit -> " + response.headers.get('x-ratelimit-remaining'));
    console.log("#############################");
})();

(async() => {
    // With headers
    const response = await fetch('https://api.github.com/rate_limit', {
        headers: new Headers({
            'Authorization': 'token' + 'your-personal-token-here'
        })
    });
    const data = await response.json();
    console.log(data);
    console.log("Total limit -> " + response.headers.get('x-ratelimit-limit'));
    console.log("Remaining limit -> " + response.headers.get('x-ratelimit-remaining'));
})();