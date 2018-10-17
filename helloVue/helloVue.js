/**
 *  普通数据绑定
 * @type {Vue}
 */
var app=new Vue({
	
	el:'#zgh-div-helloVue',
	data:{
		msg:'This my first vue.js program ,I am very excesting excitement'
	}
	
});
/**
 *  标签属性绑定数据
 * @type {Vue}
 */
var app1=new Vue({
	el:"#zgh-div-bindMsg",
	data:{
		msg:'页面加载于'+new Date().toLocaleString()
	}
	
});
/**
 *   条件判断
 * @type {Vue}
 */
var app2=new Vue({
	el:'#zgh-div-condition',
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

/**
 *  for 循环测试
 * @type {Vue}
 */
var app4 = new Vue({
    el: '#zgh-div-circulation',
    data: {
        dataArray: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ]
    }
});
/**
 *  测试监听事件
 * @type {Vue}
 */
var app5 = new Vue({
    el: '#zgh-div-monitorEvent',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        zhg_button_onclick_reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});
/**
 *  测试 v-model 双向绑定事件
 * @type {Vue}
 */
var app6 = new Vue({
    el: '#zgh-div-modelTest',
    data: {
        message: 'Hello Vue!'
    }
});


/**
 *  自定义组件，组件名为my-component,之后要通过vue实例化
 */
Vue.component('my-component', {
    template: '<li>这是我自定义组件的内容</li>'
});
var app7=new Vue({
	el:'#zgh-div-componentTest'
});
/**
 *
 */
Vue.component('my-component2', {
    props: ['todo'],
    template: '<li>{{todo.id}}-{{ todo.text }}</li>'
})

var app8 = new Vue({
    el: '#zgh-div-componentProps',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
});
/**
 * 数据测试
 *
 *
 */

console.log("-----------数据测试---------------");
// 我们的数据对象
var data = { a: 1 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
    data: data
})

// 获得这个实例上的属性
// 返回源数据中对应的字段
vm.a == data.a // => 1
console.log(vm.a);
// 设置属性也会影响到原始数据
vm.a = 2
data.a // => 2
console.log(data.a);

// ……反之亦然
data.a = 3
vm.a // => 3
console.log(vm.a);

vm.b = 'hi';
console.log(vm);
