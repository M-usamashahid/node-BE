var requiresToken = require("../helper/middleware").requiresToken;

module.exports = function (apiRoutes) {

    require("./user").user(apiRoutes,requiresToken);
    require("./skill").skill(apiRoutes,requiresToken);
    require("./experience").experience(apiRoutes,requiresToken);
    require("./contact").contact(apiRoutes,requiresToken);
    require("./portfolio").portfolio(apiRoutes,requiresToken);
    require("./log").log(apiRoutes,requiresToken);
    require("./file").file(apiRoutes,requiresToken);
    require("./../repository/seed").seed(apiRoutes);

};