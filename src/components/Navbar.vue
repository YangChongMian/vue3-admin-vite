<script setup lang="ts">
import { reactive, ref, nextTick, toRefs } from "vue"
import { routes } from "@/router/index.js"
  let activeIndex = ref(0)
  let navs = [routes]
  const route = toRefs(navs)
  console.log(route)

  interface navList {
    path:string,
    component:number | string,
    meta:object,
    children?:any
  }

  const changeNav = (item:navList,index:number):any => {
    activeIndex.value = index
    nextTick(()=>{
      acitveNavChild.sideBar = item.child
    })
  }

  interface activeSideBar {
    sideBar:Object
  }
  let acitveNavChild:activeSideBar = reactive({sideBar:navs[0].child})

  // 切换侧边栏的宽度
  let toggleSideStatus = ref(false)
  const toggleSideBar = () => {
    toggleSideStatus.value = !toggleSideStatus.value
  }
</script>
<template>
  <div>
    <div class="nav-c">
      <img src="/vite.svg" alt="">
      <ul>
        <li @click="changeNav(item,index)" v-for="(item,index) in navs" :key="item.id">
          <div :class="`${index == activeIndex ? 'active' : ''}`">{{ item.title }}</div>
        </li>
      </ul>
    </div>
    <div class="main-c">
      <div :class="`side-c ${ toggleSideStatus ? 'side-c-toggle' : '' }`">
        <ul>
          <li v-for="(item,index) in acitveNavChild.sideBar" :key="index">{{ item.name }}</li>
        </ul>
        <img @click="toggleSideBar" src="@/assets/vue.svg" alt="">
      </div>
      <div :class="`main ${ toggleSideStatus ? 'main-toggle' : ''}`">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.main-c{
  display: flex;
  height: calc(100vh - 100px);
  margin-top:100px;
  .main{
    box-sizing: border-box;
    width: 100%;
    height: calc(100vh - 100px);
    transition: padding-left ease-in-out .2s;
    padding:10px;
    background-color: #d8d8d8;
  }
  .side-c{
    width:200px;
    height: 100%;
    background-color: #f6f6f6;
    overflow-y: auto;
    position: relative;
    transition: width ease-in-out .2s;
    overflow-x: hidden;
    padding-top:10px;
    box-sizing: border-box;
    li{
      height:40px;
      line-height: 40px;
      background-color: #fff;
      cursor: pointer;
      box-sizing: border-box;
      padding-left:20px;
    }
    li:hover,
    .active{
      background-color: #0052d9;
      color: #fff;
    }
    &>img{
      width: 20px;
      height: 20px;
      position: absolute;
      right: 20px;
      bottom: 20px;
      cursor: pointer;
    }
  }
  .side-c-toggle{
    width:30px;
    &>img{
      right: 5px;
    }
  }
}

.nav-c{
  box-sizing: border-box;
  padding:0 20px;
  position: fixed;
  top:0;
  z-index: 20;
  width:100%;
  height:100px;
  display: flex;
  align-items: flex-end;
  background-color: #f6f6f6;
  box-shadow: 0px 0px 5px 0px #ccc;
  &>img{
    width:80px;
    margin-bottom:10px;
    margin-right: 20px;
  }
  ul{
    display: flex;
    width: calc(100% - 100px);
    margin-left:20px;
    user-select: none;
    // justify-content: space-between;
    li{
      height:40px;
      margin-right:40px;
      // background-color: blue;
      &>div{
        height:100%;
        cursor: pointer;
      }
      .active{
        border-bottom:2px solid #0052d9;
      }
    }
  }
}
</style>
