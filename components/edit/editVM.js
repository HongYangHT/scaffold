define([
	'vue',
	'text!components/edit/edit.tpl'
],function(vue,tpl){
	return vue.extend({
		components : {
			
		},
		template : tpl,	
		data : function(){
			return {
				editData : [],
				id : '',
				properties : []
			};
		},
		computed : {
			edit : function(){
				var edit = [];
				$.each(this.editData,function(i,n){
					if(n.type == 'input'){
						n.input = true;
						edit.push(n);
					}else if(n.type == 'select'){
						n.select = true;
						switch(n.key){
							case 'position':
								n.values = [
									{'name':'相对父元素绝对定位','value':'absolute'},
									{'name':'相对窗口绝对定位','value':'fixed'},
									{'name':'相对定位','value':'relative'},
									{'name':'默认定位','value':'static'},
									{'name':'继承父类定位','value':'inherit'}];
								break;
							case 'fontWeight':
								n.values = [
									{'name':'更细','value':'lighter'},
									{'name':'普通','value':'normal'},
									{'name':'加粗','value':'bold'},
									{'name':'加粗+','value':'bolder'},
									{'name':'100','value':'100'},
									{'name':'200','value':'200'},
									{'name':'300','value':'300'},
									{'name':'400','value':'400'},
									{'name':'500','value':'500'},
									{'name':'600','value':'600'},
									{'name':'700','value':'700'},
									{'name':'800','value':'800'},
									{'name':'900','value':'900'}];
								break;
							case 'borderStyle':
								n.values = [
									{'name':'无边框','value':'none'},
									{'name':'点状边框','value':'dotted'},
									{'name':'虚线边框','value':'dashed'},
									{'name':'实线边框','value':'solid'},
									{'name':'双线边框','value':'double'},
									{'name':'3D凹槽边框','value':'groove'},
									{'name':'3D垄状边框','value':'ridge'},
									{'name':'3D inset 边框','value':'inset'},
									{'name':' 3D outset 边框','value':'outset'}];
								break;
							case 'textAlign':
								n.values = [
									{'name':'左对齐','value':'left'},
									{'name':'右对齐','value':'right'},
									{'name':'居中对齐','value':'center'},
									{'name':'实现两端对齐文本效果','value':'justify'}];
								break;	
						}
						n.type = 0;
						edit.push(n);
					}else{
						edit.push(n);
					}
				});
				return edit;
			}
		},
		events : {
			finished : function(data){
				var _properties = [];
				this.id = data.id;
				this.editData = data.data.style;
				data.data.col && _properties.push(data.data.col);
				data.data.row && _properties.push(data.data.row);
				data.data.imgRoot && _properties.push(data.data.imgRoot);
				data.data.remark && _properties.push(data.data.remark);

				this.properties = _properties;
			},
			setRootStyle : function(data){
				var _properties = []; 
				this.id = data.id;
				this.editData = data.table.style;
				data.table.col && _properties.push(data.table.col);
				data.table.row && _properties.push(data.table.row);
				this.properties = _properties;
			},
			editComponentStyle : function(data){
				var _properties = [];
				this.id = data.id;
				this.editData = data.data ? data.data.style : data.table.style;
				if(data.data && data.data.col){
					_properties.push(data.data.col);
				}else if(data.table && data.table.col){
					_properties.push(data.table.col);
				}

				if(data.data && data.data.row){
					_properties.push(data.data.row);
				}else if(data.table && data.table.row){
					_properties.push(data.table.row);
				}

				if(data.data && data.data.imgRoot){
 					_properties.push(data.data.imgRoot);
				}

				if(data.data && data.data.remark){
 					_properties.push(data.data.remark);
				}
				
				this.properties = _properties;
			}	
		}
	});
});