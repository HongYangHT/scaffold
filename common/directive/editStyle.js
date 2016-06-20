define(['vue','underscore'],function(vue,_){
	vue.directive('edit-style',{
        twoWay: true,
		bind : function(data){
			// 做绑定的准备工作
    		// 比如添加事件监听器，或是其他只需要执行一次的复杂操作            
		},
		update : function(data){
			// 根据获得的新值执行对应的更新
    		// 对于初始值也会被调用一次
    		
		},
		unbind : function(){
			
		}
	});
});