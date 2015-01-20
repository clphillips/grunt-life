'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });
  
  var files = [
    // Files here
  ];
  
  for (var i=0; i<files.length; i++) {
    require(files[i])(grunt);
  }
  
  // Do other stuff here
  // grunt.registerTask(), maybe?
};
