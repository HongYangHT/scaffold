define([
	'vue',
	'text!components/headerLogo/headerLogo.tpl',
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
				headerLogo : '',
				active : false
			};
		},
		computed : {
			style : function(){
				var style = {};
				$.each(this.headerLogo.data.style,function(i,n){
					style[n.key] = n.value;
				});
				return style;
			},
			col : function(){
				var cols = this.headerLogo.data.col.value;
				return parseInt(cols);
			},
			row : function(){
				var rows = this.headerLogo.data.row.value;
				return parseInt(rows);
			},
			headerLogoImg : function(){
				var headerLogoImg = this.headerLogo.data.headerLogoImg;
				return headerLogoImg;
			},
			headerLogoRemark : function(){
				var headerLogoRemark = this.headerLogo.data.headerLogoRemark;
				return headerLogoRemark;
			},
			headerLogoLink : function(){
				var headerLogoLink = this.headerLogo.data.headerLogoLink;
				return headerLogoLink;
			},
			logo : function(){
				var logo = this.headerLogo.data.logo.value;
				return parseInt(logo);
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
					_setStyleId = $($event.target).closest('table').data('id');
				$($event.target).closest('.m-oparate').siblings('table').remove().end().remove();
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