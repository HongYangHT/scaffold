define([
	'vue',
	'text!components/body/body.tpl',
	'components/container/containerVM',
	'components/edit/editVM'
],function(vue,tpl,ContainerVM,EditVM){
	return vue.extend({
		components : {
			'container-view':ContainerVM,
			'edit-view':EditVM
		},
		template : tpl,
		data : function(){
			return {
				body : {}	
			};
		},
		computed : {
			
		},
		methods : {
			
		},
		events : {
			notifyRoot : function(data){
				this._data.body['d_'+data.id] = data;
				//生成数据
				this.$broadcast('finished',data);
			},
			tellRoot : function(data){
				this._data.body['d_'+data.id] = data;
				//生成数据
				this.$broadcast('setRootStyle',data);
			},
			tellRootEdit : function(id){
				var _data = this._data.body['d_'+id];
				this.$broadcast('editComponentStyle',_data);
			}
		}
	});
});