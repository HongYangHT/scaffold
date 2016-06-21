define([
	'vue',
	'text!components/table/table.tpl',
	'jquery',
	'common/directive/setStyle',
	'common/directive/setParentStyle'
],function(vue,tpl){
	var component = vue.extend({
		components : {
		},
		template : tpl,
		data : function(){
			return {
				id : '',
				table : '',
				active : false
			};
		},
		computed:{
			style : function(){
				var style = {};
				$.each(this.table.data.style,function(i,n){
					style[n.key] = n.value;
				});
				return style;
			},
			col : function(){
				var cols = this.table.data.col.value;
				return parseInt(cols);
			},
			row : function(){
				var rows = this.table.data.row.value;
				return parseInt(rows);
			}
		},
		methods : {
			showModal : function($event){
				var $target = $($event.target),
					data = {
						insertId : $target.data('id'),
						flag : true
					};
				this.$dispatch('addShowModal',data);
			},
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
				$($event.target).closest('.m-oparate').siblings('table').remove().end().remove();
			}
		},
		events : {

		}
	});
	
	vue.component('table-view',component);
	
	return component;
});