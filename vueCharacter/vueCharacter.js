new Vue({
      el:'#zgh-div-dynamicBind',
      data:{
          dynamicId:1002,
          isButtonDisabled:true,
      },

    methods:{

        zgh_button_click_switchStatus:function(event){
            console.log("--------zgh_button_click_swichStatus:function(event)-----------");
            console.log(this);
            this.isButtonDisabled=!this.isButtonDisabled;
        }

    }
});


new Vue({
    el:'#zhg-div-dynamicBindSrc',
    data:{
        imgURL:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539756467703&di=6519cad948f947af29250082ff3f6521&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F53bee5b8a3261c2918ef9672c61546a6.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100'

    }
});




Vue.component('my-component3', {
    template: '<p class="foo bar">当在一个自定义组件上使用 class 属性时，这些类将被添加到该组件的根元素上面。这个元素上已经存在的类不会被覆盖</p>'
});
new Vue({
    el:"#zhg-div-dynamicBindClass",
    data:{
        isActive: true,
        hasError: true,
        error: false,
        classObject: {
            active: true,
            'text-danger': false
        },
        activeClass: 'active',
        errorClass: 'text-danger',
        activeColor: 'red',
        fontSize: 30,
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    },
    computed: {
        classCompute: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': !this.error && this.error.type === 'false'
            }
        }
    }
});


