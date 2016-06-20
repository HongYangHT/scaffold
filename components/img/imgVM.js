define([
	'vue',
	'text!components/img/img.tpl'
],function(vue,tpl){
	var component = vue.extend({
		template : tpl,
		data : function(){
			return {
				id : '',
				img : '',
				active : false
			};
		},
		computed : {
			style : function(){
				var style = {};
				$.each(this.img.data.style,function(i,n){
					style[n.key] = n.value;
				});
				return style;
			},
			imgRoot : function(){
				var imgRoot = '';
					imgRoot = this.img.data.imgRoot.value;
					return imgRoot;
			},
			remark : function(){
				var remark = '';
					remark = this.img.data.remark.value;
					return remark;
			}
		},
		methods : {
			operateEdit : function($event){
				$event.preventDefault();
				$event.stopPropagation();
				var $target = $($event.target),
					id = $target.closest('.m-oparate').data('oparate');
				this.$dispatch('editComponent',id);	
			},
			operateDelete : function($event){
				$event.preventDefault();
				$event.stopPropagation();
			}
		},
		events : {

		}
	});

	vue.component('img-view',component);
	return component;
});