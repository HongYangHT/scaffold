define([
	'vue',
	'text!components/root/root.tpl',
	'components/header/headerVM',
	'components/body/bodyVM',
	'components/footer/footerVM'
],
function(vue,tpl,HeaderVM,BodyVM,FooterVM){
	return vue.extend({
		components : {
			'header-view' : HeaderVM,
			'body-view'   : BodyVM ,
			'footer-view' : FooterVM
		},
		data : function(){
			return {
				root : 'root',
				id : ''	
			};
		},
		template : tpl
	});
});