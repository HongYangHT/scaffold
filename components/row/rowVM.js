define([
	'vue',
	'text!components/row/row.tpl',
	'components/col/colVM',
	'jquery',
	'common/directive/setStyle'
],function(vue,tpl,ColVM,$){
	var component = vue.extend({
		
		components : {
			'col':ColVM
		},
		props:['rows','cols'],
		data : function(){
			return {
				id : '',
				col:'',
				row:'',
				style : '',
				rowData : ''
			};
		},
		template : tpl,
		methods : {
			
		},
		computed : {
			/*col : function(){
				return this._data.cols;
			},
			row : function(){
				return this._data.rows;
			}*/
		},
		events : {
			/*showModal : function(){
				this.$parent.$broadcast('showModal',true);
			}*/
		}
	});
	
	
	return component;
});