const {Router} = require('express');
const { postPreference } = require('../Handlers/preferenceHandler');

const preferenceRouter = Router();

preferenceRouter.post("/", postPreference)
 
module.exports = preferenceRouter;