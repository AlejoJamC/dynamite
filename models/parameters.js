/**
 * Copyright (c) 2017-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

/**
 * Module dependencies.
 */

var mongoose    = require('mongoose');
var Plan        = require('./plans').Plan;
var User        = require('./users').User;
var Subscriber  = require('./users').User;
var Permission  = require('./permissions').Permission;

/**
 * Define 'Parameter' schema.
 */

var ParameterSchema = new mongoose.Schema({
    name:               String,
    plan:               [Plan.schema],
    user:               [User.schema],
    subscriber:         [Subscriber.schema],
    permission:         [Permission.schema],
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

/**
 * Expose 'Parameter'.
 */

module.exports.Parameter = mongoose.model('Parameter',ParameterSchema);