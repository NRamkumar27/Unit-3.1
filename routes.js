//initialize express router
/*let router = require('express').Router();
//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});
//Import Bio Controller
var bioController = require('./bioController');
// Bio routes
router.route('/bio')
    .get(bioController.index)
    .post(bioController.add);
router.route('/bio/:bio_id')
    .get(bioController.view)
    .patch(bioController.update)
    .put(bioController.update)
    .delete(bioController.delete);
//Export API routes
module.exports = router; */

const express = require('express');
const router = express.Router();

// Add this middleware to parse both JSON and x-www-form-urlencoded data
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// Default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API Works',
    message: 'Welcome to FirstRest API'
  });
});

// Import Bio Controller
const bioController = require('./bioController');

// Bio routes
router.route('/bio')
  .get(bioController.index)
  .post(bioController.add);

router.route('/bio/:bio_id')
  .get(bioController.view)
  .patch(bioController.update)
  .put(bioController.update)
  .delete(bioController.delete);

// Export API routes
module.exports = router;
