# Grunt Life #
### Not a library, but a lifestyle ###

Requires Grunt ```~0.4.5```

If you use [Grunt](http://gruntjs.com) to automate more than one task, like me,
then you may have noticed your Gruntfile quickly growing to an unmanagable
size.

**Grunt Life** makes your life easier by providing a scheme for managing
your Grunt plugins. Allowing for:

- A Gruntfile you *almost* never have to touch
- Finer tuned control over your source, and your life
- Profit?

### How it works ###

Each Grunt plugin has a set of configurable options, and must be initialized
and registered with Grunt. We simply take these parts and include them in a
separate file.

#### Gruntfile.js ####
```js
'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });
  
  var files = [
    // List your files here
    'path/to/grunt/script.js'
  ];
  
  for (var i=0; i<files.length; i++) {
    require(files[i])(grunt);
  }
  
  // Do other stuff here
  // grunt.registerTask(), maybe?
};

```

#### path/to/grunt/script.js ####
```js
'use strict';

module.exports = function(grunt) {
  grunt.config.merge({
    plugin: {
      // plugin options here
    }
  });

  grunt.loadNpmTasks('grunt-plugin');
};

```