# 响应循环
在“双括号表达式”中调用函数，同时函数返回了不同的值

版本 Vue2，未使用 TypeScript

```HTML
<p>{{pushbtn()}}</p><button @click="push">1</button> 
```


```JavaScript
export default{
  data(){
 return{
   btn:true,
   one:'喵',
   two:'咕',
 }
  },
  methods:{
    pushbtn(){
      this.btn=!this.btn //要抽离成一个函数，否则循环到true
      console.log(this.btn)
      if(this.btn==true){
       return this.one
      }else if(this.btn==false){
       return this.two
      }
    }
  }
}
```


```JavaScript
//正确写法
export default{
  data(){
 return{
   btn:true,
   one:'喵',
   two:'咕',
 }
  },
  methods:{
    pushbtn(){
      if(this.btn==true){
       return this.one
      }else if(this.btn==false){
       return this.two
      }
    },
    push() {
      this.btn=!this.btn
      console.log(this.btn)
    }
  }
}

```



