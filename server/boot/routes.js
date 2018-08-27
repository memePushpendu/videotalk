
'use strict';

module.exports = function (app) {
    // Install a "/ping" route that returns "pong"
    app.get('/auth', function (req, res) {
        let username = req.query.username.toString();
        let password = req.query.password.toString();

        console.log(username + password);

        // user pushpendu
        if (username == "pushpendu" && password == "password") {
            res.send({
                status: 'success',
                name: 'Pushpendu Ghosh',
                phone: '9734072595'
            });
        } else if (username == "subham" && password == "password") {
            res.send({
                status: 'success',
                name: 'Subham Dandapat',
                phone: '7047434141'
            });
        } else {
            res.send({
                status: 'error'
            });
        }
    });
};