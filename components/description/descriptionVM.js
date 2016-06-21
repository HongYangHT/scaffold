define([
	'vue',
	'text!components/description/description.tpl'
],function(vue,tpl){
	var component = vue.extend({
		template : tpl,
		data : function(){
			return {
				id : '',
				description : '',
				active : false
			};
		},
		computed : {
			style : function(){
				var style = {};
					$.each(this.description.data.style,function(i,n){
						style[n.key] = n.value;
					});
					return style;
			},
			title : function(){
				var title = '';
					title = this.description.data.title.value;
					return title;
			},
			desc: function(){
				var desc = '';
					desc = this.description.data.desc.value;
					return desc;
			},
			tip : function(){
				var tip = '';
					tip = this.description.data.tip.value;
					return tip;
			},
			btnText : function(){
				var btnText = '';
					btnText = this.description.data.btnText.value;
					return btnText;
			},
			btnLink : function(){
				var btnLink = '';
					btnLink = this.description.data.btnLink.value;
					return btnLink;
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
				var _removeId = $($event.target).closest('.m-oparate').data('oparate'),
					_setStyleId = $($event.target).closest('table').data('id');
				$($event.target).closest('.m-oparate').siblings('a').remove().end().remove();
				this.$dispatch('refleshStyle',{
					removeId : _removeId,
					setStyleId : _setStyleId
				});
			}
		},
		events : {

		}
	});

	return component;
});