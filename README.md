JSON template for Jsdoc3
========================
[![Build Status](https://travis-ci.org/OrgaChem/json-jsdoc.png)](https://travis-ci.org/OrgaChem/json-jsdoc)
[![NPM version](https://badge.fury.io/js/jsonjsdoc.png)](http://badge.fury.io/js/jsonjsdoc)

JSON style template for [Jsdoc3](https://github.com/jsdoc3/jsdoc).
This template is like the haruki template, but a purpose of the template is supporting a partial documentation.

The partial documentation is efficient by 2 causes:

1. Slow work as parsing by Jsdoc is unnecessary (parsing JSON is faster)
2. Files have no changes are not processed

Probably, the partial documentation requires:

* Permanent symbol linking
* Fallback for broken links

Output format
-------------

Output json is equivalent to an array of jsdoc/Doclet.
It means that ```JSON.parse(output)``` is equivalent to ```taffyData().get()``` in for each script.

License
-------
This script licensed under the [MIT](http://orgachem.mit-license.org). 
