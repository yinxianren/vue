var app=new Vue({
	
	el:'#zgh-helloVue-div-helloVue',
	data:{
		msg:'This my first vue.js program ,I am very excesting excitement'
	}
	
});

var app1=new Vue({
	el:"#zgh-helloVue-div-bindMsg",
	data:{
		msg:'页面加载于'+new Date().toLocaleString()
	}
	
});

var app2=new Vue({
	el:'#zgh-helloVue-div-condition',
	data:{
		isSeen: true,
		arr:[1,2,3,4,5]
	},
	methods:{
		zgh_helloVue_button_switchDisplay: function (event) {
			console.log("----------------zgh_helloVue_button_switchDisplay------------------");
			console.log(event);
			console.log(this);
			console.log(this._data.isSeen);
			this._data.isSeen=!this._data.isSeen;
			console.log(this._data.isSeen);
		}
		
	}
	
});


