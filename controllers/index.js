
exports.send = function(code, data, res){

    res.status(code).send(data);

};

