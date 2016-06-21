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
				id : ''	,
				picked : 0
			};
		},
		template : tpl,
		methods : {

		},
		events : {
			editOrPreview : function(picked){
				this.picked = picked;
				this.$broadcast('tellBody',picked);
			}
		}
	});
});