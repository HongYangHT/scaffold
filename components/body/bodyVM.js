define([
	'vue',
	'text!components/body/body.tpl',
	'components/container/containerVM',
	'components/edit/editVM',
	'Blob',
	'FileSaver'
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
			},
			removeData : function(id){
				delete this._data.body['d_'+id];
			},
			tellBody : function(picked){
				this.$broadcast('editShowOrHide',picked);
				if(picked == 0){
					$(this.$el).find('.m-oparate').show();
					$(this.$el).find('.m-container').removeClass('prev');
				}else{
					$(this.$el).find('.m-oparate').hide();
					$(this.$el).find('.m-container').addClass('prev');
				}
			},
			tellBodyToDownload : function(){
				$(this.$el).find('.m-oparate').hide();
				var html = $(this.$el).find('.m-container').html();
				var blob = new Blob([html], {type: "text/html;charset=utf-8"});
				saveAs(blob, "mail.html");
			}
		}
	});
});