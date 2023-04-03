const flightApi = require('../flight-api');

module.exports = (app) => {
  app.use('/airlines', (req, res, next) => {
    flightApi.fetchAirlines().then((airlines) => {
      res.json(airlines);
    }).catch(next);
  });
};
for sure 
we could make it better 
 at tehe end  w e we  choronic res.json(airlines)
;
master branch? what is it? what am i doing bro recently we coukd make it so much better 
apps and tools working so well then we culd make.  it so muchbter 
