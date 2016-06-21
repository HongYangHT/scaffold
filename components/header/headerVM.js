define([
	'vue',
	'text!components/header/header.tpl'
],function(vue,tpl){
	return vue.extend({
		components : {
			
		},
		template : tpl,
		data : function(){
			return {
				edit : '编辑',
				prev : '预览',
				download : '下载',
				picked : 0,
				header : 'header',
				id : ''
			};
		},
		computed : {
			editActive : function(){
				return this.picked == 0 ? true : false;
			},
			prevActive : function(){
				return this.picked == 1 ? true : false;
			},
			downloadActive : function(){
				return this.picked == 2 ? true : false; 
			}
		},
		methods : {
			handleClick : function($event,picked){
				console.log(picked);
				this.$dispatch('editOrPreview',picked);
			}
		},
		events : {

		}
	});
});