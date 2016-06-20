define(['vue','underscore'],function(vue,_){
	vue.directive('bind-event',{
        twoWay: true,
		bind : function(data){
			// 做绑定的准备工作
    		// 比如添加事件监听器，或是其他只需要执行一次的复杂操作
           
		},
		update : function(data){
			// 根据获得的新值执行对应的更新
    		// 对于初始值也会被调用一次
    		this.handleMouseenter = function(){
                this.set(true);
            }.bind(this);
            this.handleMouseleave = function(){
                this.set(false);
            }.bind(this);
            this.el.addEventListener('mouseenter',this.handleMouseenter);
            this.el.addEventListener('mouseleave',this.handleMouseleave);
		},
		unbind : function(){
			this.el.removeEventListener('mouseenter',this.handleMouseenter);
            this.el.removeEventListener('mouseleave',this.handleMouseleave);
		}
	});
});