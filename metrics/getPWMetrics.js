const PWMetrics = require('pwmetrics');

const getPWAMetrics = ({ url, clientSecret }) => new Promise((resolve, reject) => {
    const pwMetrics = new PWMetrics(url, {
        flags: {
            upload: !!clientSecret,
        },
        clientSecret
    });

    return pwMetrics.start();
});

module.exports = getPWAMetrics;