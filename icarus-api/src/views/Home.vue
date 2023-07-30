<template>
  <div>
    <header>
      <!-- <router-link to="/login">
        <span class="login__text">登录</span>
      </router-link> -->
      <div class="navbar">
        <div class="logo">
          <img src="../assets/images/logo.png" alt="">
        </div>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            Icarus的项目<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>xiaoyang的项目</el-dropdown-item>
            <el-dropdown-item>hanbing的项目</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
          <el-tab-pane label="导航页签一" name="first"></el-tab-pane>
          <el-tab-pane label="导航页签二" name="second"></el-tab-pane>
          <el-tab-pane label="导航页签三" name="third"></el-tab-pane>
          <el-tab-pane label="导航页签四" name="fourth"></el-tab-pane>
          <el-tab-pane label="导航页签五" name="fiveth"></el-tab-pane>
        </el-tabs>
      </div>
    </header>
    <main>
      <transition appear>
        <router-view :key="$route.path"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    // 这里存放数据
    return {
      activeTab: 'first'
    }
  },
  computed: {},
  watch: {},
  methods: {
  },
  created () {

  }
}
</script>
<style scoped lang="less">
.navbar {
  position: relative;
  width: 100%;
  height: 72px;
  opacity: 1;
  background-color: red;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.15);
  .logo {
    float: left;
    margin-left: 20px;
    img {
      height: 72px;
    }
  }
}
.el-icon-arrow-down {
  font-size: 14px;
}
.el-dropdown {
  float: left;
  margin-left: 50px;
  .el-dropdown-link {
    display: inline-block;
    font-family: Source Han Sans CN;
    font-size: 17px;
    letter-spacing: 0px;
    color: #1A1A1A;
    cursor: pointer;
    height: 72px;
    line-height: 72px;
  }
}
.el-popper {
  position: absolute !important;
  top: 45px !important;
}
.el-icon-arrow-down {
  font-size: 18px;
  margin-left: 10px;
}
.el-tabs {
  float: left;
  height: 100%;
  ::v-deep .el-tabs__nav {
    border: none;
    height: 100%;
  }
  ::v-deep .el-tabs__header {
    border: none;
    margin-bottom: 0;
  }
  ::v-deep .el-tabs__item.is-active {
    border: none;
  }
  ::v-deep .el-tabs__item {
    border: none;
    height: 100%;
  }
}
.el-tabs__active-bar{
  background-color: transparent !important;
}
.el-tabs__nav-wrap::after{
  position:static !important;
}
// .el-tabs__item:last-child::after {

// }
</style>
