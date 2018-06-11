"use strict";

exports.allModels = {
    LogModel            : require("./logs").LogModel(),
    UserModel           : require("./user").UserModel(),
    SkillModel          : require("./skill").SkillModel(),
    ContactModel        : require("./contact").ContactModel(),
    PortfolioModel      : require("./portfolio").PortfolioModel(),
    ExperienceModel     : require("./experience").ExperienceModel()
};

