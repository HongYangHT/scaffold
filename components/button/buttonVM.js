define([
	'vue',
	'text!components/button/button.tpl',
	'jquery',
	'common/directive/setStyle',
	'common/directive/setParentStyle',
	'common/directive/setChildStyle'
],function(vue,tpl,$){
	var component = vue.extend({
		components : {
		},
		template : tpl,
		data : function(){
			return {
				id : '',
				button : '',
				active : false
			};
		},
		computed : {
			style : function(){
				var style = {};
				$.each(this.button.data.style,function(i,n){
					style[n.key] = n.value;
				});
				return style;
			},
			btnTexts : function(){
				var _linkText = '';
					_linkText = this.button.data.btnTexts.value;
					return _linkText;
			},
			btnLinks : function(){
				var _href = '';
					_href = this.button.data.btnLinks.value;
					return _href;
			}
		},
		methods : {
			addClassActive : function($event){
				var $target = $($event.target);
					$target.addClass('active');	
			},
			removeClassActive : function($event){
				var $target = $($event.target);
					$target.removeClass('active');
			},
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
					_setStyleId = $($event.target).closest('.m-oparate').siblings('a,span').data('id');
				$($event.target).closest('.m-oparate').siblings('a,span').remove().end().remove();
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