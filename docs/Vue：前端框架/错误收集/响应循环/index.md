# 响应循环
<p id="9UCYBY9HZrw2QNFaH52gwt">

在“双括号表达式”中调用函数，同时函数返回了不同的值

</p>

<p id="hmBwG5kWboTB8WYVt7h2iH">

版本 Vue2，未使用 TypeScript

</p>

<p id="8RnmtA7DG4aG56dTEZ8x3v">

```HTML
<p>{{pushbtn()}}</p><button @click="push">1</button> 
```


</p>

<p id="jEMwdtA1BeoqeJwJVZcodZ">

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


</p>

<p id="6UydS8ZPxuFkQ49fLXtXap">

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


</p>

<p id="5mXTcApvLR8gkAKNUXdDcP">



</p>
