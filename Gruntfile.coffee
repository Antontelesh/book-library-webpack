module.exports = (grunt) ->

  grunt.initConfig({

    ngdocs: {
      all: ['bundle/**/*.js'],
      options: {
        html5Mode: false
      }
    }

  })

  grunt.loadNpmTasks('grunt-ngdocs')

  grunt.registerTask('doc', ['ngdocs'])
