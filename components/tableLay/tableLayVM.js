define([
	'vue',
	'text!components/tableLay/tableLay.tpl',
	'model/model',
	'jquery',
	'common/directive/setStyle',
	'uuid'
],function(vue,tpl,Model,$){
	var model = new Model();
	var component = vue.extend({
		components : {
		},
		template : tpl,
		data : function(){
			var _data = {};
			model.getComponentData({
				url : 'components/tableLay/tableLay.json',
			}).done(function(result){
				_data['id'] = Math.uuid(8,8);
				_data['table'] = result;
			});
			_data['active'] = false;
			this.$dispatch('setRoot',_data)	
			return _data;
		},
		computed:{
			style : function(){
				var style = {};
				$.each(this.table.style,function(i,n){
					style[n.key] = n.value;
				});
				return style;
			},
			col : function(){
				var cols = this.table.col.value;
				return parseInt(cols);
			},
			row : function(){
				var rows = this.table.row.value;
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
				this.$distory(true);
			}
		},
		events : {

		}
	});
	
	vue.component('table-layout-view',component);
	
	return component;
});