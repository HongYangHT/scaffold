define([
	'vue',
	'components/root/rootVM'
	
],function(vue,rootVM){
	vue.config.debug = true;
	vue.config.devtools = true;
	return new vue({
		replace : false,
		name : 'root',
		components : {
			'root' : rootVM
		},
		data : {
			root : 'root'
		},
		methods : {

		},
		events : {

		},
		el : '#mainContainer'
	});
});