<template>
  <div>
    <header>
      <Navbar></Navbar>
    </header>
    <div class="aside_bar">
      <el-menu
        router
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        background-color="#F5F5F5"
        text-color="black"
      >
        <el-menu-item index="/home/personal/mock" class="aside_bar_mock bar">
          <div class="active_border" v-show="activeIndex==='/home/personal/mock'"></div>
          <i class="el-icon-mock"></i>
          <span slot="title" style="pointer-events: none;">Mock</span>
        </el-menu-item>
        <el-menu-item index="/home/personal/interfaces" class="aside_bar_interfaces bar">
          <div class="active_border" v-show="activeIndex==='/home/personal/interfaces'"></div>
          <i class="el-icon-interfaces"></i>
          <span slot="title" style="pointer-events: none;">接口集</span>
        </el-menu-item>
      </el-menu>
    </div>
    <main class="right">
      <transition appear>
        <router-view :key="$route.path"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import Navbar from '@/views/Home/Navbar.vue'
export default {
  name: 'Home',
  components: {
    Navbar
  },
  data () {
    // 这里存放数据
    return {
      activeIndex: this.$route.path
    }
  },
  computed: {},
  watch: {
  },
  methods: {
  },
  created () {

  }
}
</script>
<style scoped lang="less">
.aside_bar {
  float: left;
  margin-top: 1px;
  height: 736px;
  width: 130px;
  background-color: #F3F3F3;
  .el-menu {
    position: absolute;
    border: none;
    background-color: #fff;
  }
  .el-menu-item {
    font-family: Source Han Sans CN;
    border-radius: 0px 12px 12px 0px;
    width: 130px;
    font-size: 16px;
    text-align: center;
    align-items: center;
    display: flex;
    height: 71px;
    background-color: #F3F3F3;
  }
}
.active_border {
  position: absolute;
  pointer-events: none;
  left: -5%;
  width: 16px;
  height: 3.5px;
  transform: rotate(-90deg);
  border-radius: 999px;
  background: #0052D9;
}
::v-deep .el-menu-item.is-active {
  color: #0052D9;
  background-color: #fff !important;
  border-radius: 0px 12px 12px 0px;
  // border-left: 2px solid blue;
}
::v-deep .el-menu-item:hover{
  outline: 0 !important;
  border-radius: 0;
}
::v-deep .el-icon-mock {
  pointer-events: none;
  background: url('@/assets/images/mock.png') center no-repeat;
  font-size: 20px;
}
::v-deep .el-icon-mock:before {
  pointer-events: none;
  content: "替";
  font-size: 20px;
  visibility: hidden;
}
::v-deep .el-icon-interfaces {
  pointer-events: none;
  background: url('@/assets/images/interfaces.png') center no-repeat;
  font-size: 20px;
}
::v-deep .el-icon-interfaces:before {
  pointer-events: none;
  content: "替";
  font-size: 20px;
  visibility: hidden;
}
.right {
  float: left;
  margin-top: 1px;
  height: 707px;
  width: 1529px;
}
</style>
