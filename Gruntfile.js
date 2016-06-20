/**
*  @version : 1.0.0
*  @description : manager less and ugligy js with node
*  @author : 
*/
module.exports = function(grunt){
    grunt.initConfig({
        less:{
            //编译less文件
            compileLess:{
                options:{},
                files:[{
                    expand:true,
                    cwd:'less',
                    src:'*.less',
                    dest:'css',
                    ext:'.css'
                }]
            }
        },
        //监控任务
        watch:{
            scripts: {
               files:['less/*.less'],
               tasks:['less']
            } 
        
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [ 'less', 'watch' ]);
};