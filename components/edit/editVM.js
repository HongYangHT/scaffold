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
				properties : [],
				imgRoots : [],
				remarks : [],
				links : [],
				headerLogoImg:[],
				headerLogoRemark:[],
				headerLogoLink:[],
				showFlag : true
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
					}else if(n.type == 'textArea'){
						n.textArea = true;
						n.type = 0;
						edit.push(n);
					}else{
						edit.push(n);
					}
				});
				return edit;
			},
			editProperties : function(){
				var properties = [];
				$.each(this.properties,function(i,n){
					if(n.type == 'input'){
						n.input = true;
						properties.push(n);
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
						properties.push(n);
					}else if(n.type == 'textArea'){
						n.textArea = true;
						n.type = 0;
						properties.push(n);
					}else{
						properties.push(n);
					}
				});
				return properties;
			}
		},
		events : {
			editShowOrHide : function(picked){
				if(picked == 0){
					this.showFlag = true;
				}else if(picked == 1){
					this.showFlag = false;
				}
			},
			finished : function(data){
				var _properties = [],
					_that = this;
				this.id = data.id;
				this.editData = data.data.style;
				data.data && data.data.col && _properties.push(data.data.col);
				data.data && data.data.row && _properties.push(data.data.row);

				/* 图片 img */
				data.data && data.data.imgRoot && _properties.push(data.data.imgRoot);
				data.data && data.data.remark && _properties.push(data.data.remark);
				data.data && data.data.link && _properties.push(data.data.link);

				/* 描述文字 description */
				data.data && data.data.title && _properties.push(data.data.title);
				data.data && data.data.desc && _properties.push(data.data.desc);
				data.data && data.data.tip && _properties.push(data.data.tip);
				data.data && data.data.btnText && _properties.push(data.data.btnText);
				data.data && data.data.btnLink && _properties.push(data.data.btnLink);

				/* 顶部logo headerLogo*/
				(data.data && data.data.headerLogoImg) ? (_that.headerLogoImg = data.data.headerLogoImg.slice(0,data.data.logo.value)) : (_that.headerLogoImg = []);
				(data.data && data.data.headerLogoRemark) ? (_that.headerLogoRemark = data.data.headerLogoRemark.slice(0,data.data.logo.value)) : (_that.headerLogoRemark = []);
				(data.data && data.data.headerLogoLink) ? (_that.headerLogoLink = data.data.headerLogoLink.slice(0,data.data.logo.value)) : (_that.headerLogoLink = []);
				data.data && data.data.logo && _properties.push(data.data.logo);

				/* 图片链接 tableModule */
				(data.data && data.data.imgRoots) ? (_that.imgRoots = data.data.imgRoots.slice(0,data.data.col.value)) : (_that.imgRoots = []);
				(data.data && data.data.remarks) ? (_that.remarks = data.data.remarks.slice(0,data.data.col.value)) : (_that.imgRoots = []);
				(data.data && data.data.links) ? (_that.links = data.data.links.slice(0,data.data.col.value)) : (_that.imgRoots = []);
				
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
				var _properties = [],
					_that = this;
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

				data.data && data.data.imgRoot && _properties.push(data.data.imgRoot);
				data.data && data.data.remark && _properties.push(data.data.remark);
				data.data && data.data.link && _properties.push(data.data.link);

				data.data && data.data.title && _properties.push(data.data.title);
				data.data && data.data.desc && _properties.push(data.data.desc);
				data.data && data.data.tip && _properties.push(data.data.tip);
				data.data && data.data.btnText && _properties.push(data.data.btnText);
				data.data && data.data.btnLink && _properties.push(data.data.btnLink);

				(data.data && data.data.headerLogoImg) ? (_that.headerLogoImg = data.data.headerLogoImg.slice(0,data.data.logo.value)) : (_that.headerLogoImg = []);
				(data.data && data.data.headerLogoRemark) ? (_that.headerLogoRemark = data.data.headerLogoRemark.slice(0,data.data.logo.value)) : (_that.headerLogoRemark = []);
				(data.data && data.data.headerLogoLink) ? (_that.headerLogoLink = data.data.headerLogoLink.slice(0,data.data.logo.value)) : (_that.headerLogoLink = []);
				data.data && data.data.logo && _properties.push(data.data.logo);

				(data.data && data.data.imgRoots) ? (_that.imgRoots = data.data.imgRoots.slice(0,data.data.col.value)) : (_that.imgRoots = []);
				(data.data && data.data.remarks) ? (_that.remarks = data.data.remarks.slice(0,data.data.col.value)) : (_that.imgRoots = []);
				(data.data && data.data.links) ? (_that.links = data.data.links.slice(0,data.data.col.value)) : (_that.imgRoots = []);

				this.properties = _properties;
			}	
		}
	});
});