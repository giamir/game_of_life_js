module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      options: {
        configFile: './test/karma.conf.js'
      },
      run: {
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.registerTask('unit', ['karma']);
};
