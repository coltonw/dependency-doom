import rightHelixPrime from './rightHelixPrime';

import('./leftHelix')
    .then(function (leftHelix) {
        console.log(leftHelix);
    });

export default {
    rightHelixPrime,
};
