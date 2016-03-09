/**
 * Copyright (c) 2016-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Define Labor Risk Insurance schema
var LaborRiskInsuranceSchema = new Schema({
    name:               String,
    identification:     String,
    address:            String,
    telephone:          String,
    email:              String,
    contact:            String,
    ContactTelephone:   String,
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

// Export the mongoose model
module.exports.LaborRiskInsurance = mongoose.model('LaborRiskInsurance', LaborRiskInsuranceSchema);