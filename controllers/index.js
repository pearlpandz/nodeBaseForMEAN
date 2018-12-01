// Modals
const ArrayPush = require('../modals/index');


exports.testFunction = function(req, res) {
    try {
        return res.send(req.body);
    } catch (err) {
        return res.send(err.toString());
    }
};