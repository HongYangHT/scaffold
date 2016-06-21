define([
	'vue',
	'text!components/tableModule/tableModule.tpl',
	'jquery',
	'common/directive/setStyle',
	'common/directive/setParentStyle'
],function(vue,tpl,$){
	var component = vue.extend({
		components : {

		},
		template : tpl,
		data : function(){
			return {
				id : '',
				tableModule : '',
				active : false
			};
		},
		computed : {
			style : function(){
				var style = {};
				$.each(this.tableModule.data.style,function(i,n){
					style[n.key] = n.value;
				});
				return style;
			},
			col : function(){
				var cols = this.tableModule.data.col.value;
				return parseInt(cols);
			},
			row : function(){
				var rows = this.tableModule.data.row.value;
				return parseInt(rows);
			},
			imgRoots : function(){
				var imgRoots = this.tableModule.data.imgRoots;
				return imgRoots;
			},
			links : function(){
				var links = this.tableModule.data.links;
				return links;
			},
			remarks : function(){
				var remarks = this.tableModule.data.remarks;
				return remarks;
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

	// vue.component('table-view',component);
	
	return component;
});