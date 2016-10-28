exports.foo = (opts) => {
    return new Promise((resolve, reject) => {
        if (opts === 1) {
            reject("Found an error");
        } else {
            setTimeout(() => {
                console.log(opts);
                resolve(opts);
            }, 500);
        }
    });
};

exports.foo(2).catch(err => {
    console.log(err);
});
