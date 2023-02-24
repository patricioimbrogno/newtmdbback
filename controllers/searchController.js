const searchService = require("../services/searchService");

exports.getSearchedFeature = (req, res) => {
const {query} = req.query
  searchService
    .getSearchedFeature(query)
    .then((feature) => res.status(200).send(feature))
    .catch((err) => res.status(500).send(err));
};
