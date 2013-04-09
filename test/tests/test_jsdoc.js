// This script licensed under the MIT.
// http://orgachem.mit-license.org


var path = require('path');
var exec = require('child_process').exec;


/**
 * Test cases.
 * @namespace
 */
module.exports = {
  'Run jsdoc3 using the template': function(test) {
    var jsdoc = path.join(__dirname, '../../node_modules/jsdoc/jsdoc');
    var sample = path.join(__dirname, 'sample.js');
    var jsdocArgs = [
      '-t ' + path.join(__dirname, '../../'),
      '-d console'
    ];
    var cmd = [jsdoc, sample, jsdocArgs.join(' ')].join(' ');

    exec(cmd, function(err, stdout, stderr) {
      test.ok(!err);
      test.done();
    });
  }
};
