define([
	'vue',
	'text!components/col/col.tpl',
	'common/directive/setStyle'
],function(vue,tpl){
	var component = vue.extend({
		replace : true,
		components : {
			
		},
		props:['cols','rows'],
		data : function(){
			return {
				id : '',
				col:'',
				style : '',
				colData : ''
			};
		},
		computed:{
			/*col:function(){
				return this._data.cols;
			}*/
		},
		template : tpl,
		methods : {
			
		},
		events : {
			/*showModal : function(){
				this.$parent.$broadcast('showModal',true);
			}*/
		}
	});
	
	
	vue.component('col',component);
	return component;
});