define(['jquery','model/base'],function($,BaseModel){
	var Model = function(){

	};

	Model.prototype = new BaseModel();
	Model.prototype.constructor = Model;

	$.extend(Model.prototype,{
		getComponentData : function(options){
			return this.get(options);
		}
	});

	return Model; 
});