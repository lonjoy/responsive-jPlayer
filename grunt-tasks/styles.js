"use strict";

module.exports = {
		concat: {	
			css: {
				options: {
					stripBanners: true
				},
				src: ['<%= folders.libs %>/**/*.css', '<%= build.css %>/app.css'],
				dest: '<%= build.css %>/app.css'
			}
		},

		// Compile LESS into CSS
		less: {
			options: {
					sourceMap: true,
					outputSourceFiles: true
			},
			all: {
				files: {
					'<%= build.css %>/app.css': '<%= folders.src %>/less/app.less'
				}
			}
		},

		// Concat & Minify CSS
		cssmin: {
			app: {
				files: {
						'<%= build.css %>/app.min.css' : ['<%= build.css %>/app.css']
				}
			}
		},
		copy: {
			prod: {
				files: [
					{expand: true, cwd: '<%= folders.src %>/img',  src: ['*'], dest: '<%= folders.build %>/img'},
					{expand: true, cwd: '<%= folders.src %>/scripts',  src: ['*'], dest: '<%= folders.build %>/scripts'},
					{expand: true, cwd: '<%= folders.src %>/js/app/playlist',  src: ['*'], dest: '<%= folders.build %>/scripts/playlist'}
				]	
			}
		},
		clean: {
			build: ['<%= folders.build %>/**/*']
		}
};