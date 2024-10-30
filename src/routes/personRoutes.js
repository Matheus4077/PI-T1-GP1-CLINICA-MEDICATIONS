const express = require('express');
const personControllers = require("../controllers/personControllers/personExports");

const router = express.Router();

router.get('/', personControllers.readAllPersons);
router.get('/id/:id', personControllers.readPersonById);
router.get('/name/:name', personControllers.readPersonByName);
router.get('/role/:role', personControllers.readPersonsByRole);
router.get('/postalcode/:searchedPostalCode', personControllers.readPersonByPostalCode);
router.get('/phone/:cellPhone', personControllers.readPersonByPhoneNumber);
router.post('/', personControllers.createPerson);
router.delete('/id/:id', personControllers.deletePerson);
router.put('/id/:id', personControllers.updatePerson);

module.exports = router;