define([
	'vue',
	'text!components/list/list.tpl',
	'jquery'
],function(vue,tpl,$){
	var component = vue.extend({
		components : {
			
		},
		data : function(){
			return {
				id : '',
				emails : [
					{'name':'table布局样式一','value':'一行一列','type':'table','col':1,'row':1},
					{'name':'table布局样式二','value':'一行两列','type':'table','col':2,'row':1},
					{'name':'table布局样式三','value':'一行三列','type':'table','col':3,'row':1},
					{'name':'table布局样式四','value':'一行四列','type':'table','col':4,'row':1},
					{'name':'table布局样式五','value':'一行六列','type':'table','col':6,'row':1},
					{'name':'table布局样式六','value':'一行八列','type':'table','col':8,'row':1}
				],
				modules : [
					{'name':'头部的Logo','value':'头部的Logo','type':'headerLogo'}
				],
				components : [
					{'name':'标题','value':'标题','type':'title'},
					{'name':'描述','value':'描述','type':'description'},
					{'name':'段落','value':'段落','type':'paragraph'},
					{'name':'图片','value':'图片','type':'img'},
					{'name':'链接','value':'链接','type':'link'},
					{'name':'列表','value':'列表','type':'itemList'},
					{'name':'按钮','value':'按钮','type':'button'}
				],
				showModal : false
			};
		},
		template : tpl,
		methods : {
			hideModal : function($event){
				this.showModal = false;
			},
			addComponent : function($event){
				var $target = $($event.target),
					$parent = $target.closest('.u-view');
				var _data = {
					type : $parent.data('type'),
					col  : $parent.data('col'),
					row  : $parent.data('row')
				};	
				this.$dispatch('insertComponent',_data);
			}
		},
		events : {
			showModal : function(flag){
				this.showModal = flag;
			}
		}
	});
	
	vue.component('list-view',component);
	
	return component;
});