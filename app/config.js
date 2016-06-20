require.config({
	baseUrl:'',
	urlArgs:"v=20160528",
	paths:{
		'jquery'     :   'libs/jquery',
		'underscore' :   'libs/underscore',
		'text'	     :   'libs/text',
		'vue'	     :   'libs/vue',
		'collapse'   :   'libs/jquery.collapse',
		'uuid'		 : 	 'libs/uuid'
	},
	shim : {
		'underscore' : {
			exports : '_'
		},
		'collapse'   : {
			deps   :  ['jquery'],
			exports : 'collapse' 
		},
		'uuid'		: {
			deps   :  ['jquery'],
			exports : 'uuid' 
		}
	}
});