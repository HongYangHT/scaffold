define([
	'vue',
	'text!components/footer/footer.tpl'
],function(vue,tpl){
	return vue.extend({
		components : {
			
		},
		data : function(){
			return {
				footer : 'footer',
				id : ''	
			};
		},
		template : tpl
	});
});