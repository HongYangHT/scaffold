define([
	'vue',
	'text!components/container/container.tpl',
	'model/model',
	'components/table/tableVM',
	'components/list/listVM',
	'components/tableLay/tableLayVM',
	'components/img/imgVM',
	'uuid'
],function(vue,tpl,Model,TableVM,ListVM,TableLayVM,ImgVM){
	var model = new Model();

	return vue.extend({
		components : {
			'list-view':ListVM,
			'table-layout-view':TableLayVM
		},
		data : function(){
			return {
				container : {},
				insertId : '',
				showEdit : false
			};
		},
		template : tpl,
		methods : {
			showModal : function(){
				this.$broadcast('showModal',true);
			},
			operateEdit : function(){

			},
			operateDelete : function(){

			}
		},
		events : {
			addShowModal : function(data){
				this.insertId = data.insertId;
				this.$broadcast('showModal',data.flag);
			},
			setRoot : function(_data){
				this._data.container['d'+_data.id] = _data;
				this.$dispatch('tellRoot',_data);
			},
			editComponent : function(id){
				this.$dispatch('tellRootEdit',id);
			},
			insertComponent : function(data){
				var _id = Math.uuid(8,8),
					_that = this,
					type = data.type,
					_data = {};
				model.getComponentData({
					url : 'components/'+type+'/'+type+'.json',
				}).done(function(result){
					if(data.row && data.col){
						result.col.value = data.col;
						result.row.value = data.row;
					}
					_data= {
						type : data.type,
						id : _id,
						data : result
					};
				});
				this._data.container['d'+_data.id] = _data;
				this.$dispatch('notifyRoot',_data);
			},
			finished : function(data){
				var vm = '',
					that = this;
				switch(data.type){
					case 'table':
						vm = new TableVM();
						vm._data.table = data;
						break;
					case 'img':
						vm = new ImgVM();
						vm._data.img = data;
						break;
				}

				vm._data.id = data.id;
				vm.$parent = that;
				if(this._data.insertId){
					vm.$mount().$appendTo($(that.$parent.$el).find('.m-container [data-id="'+this._data.insertId+'"]')[0]);
				}else{
					vm.$mount().$appendTo($(that.$parent.$el).find('.m-container')[0]);
				}

				this.insertId = data.id;
			}
		}
	});
});