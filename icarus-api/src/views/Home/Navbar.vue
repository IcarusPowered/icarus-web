<template>
  <div>
    <div class="navbar">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="">
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
      <el-button class="invite" icon="el-icon-vector">邀请协作</el-button>
      <el-button class="logreg" v-if="isLogin" @click.native="handleLogin()">注册 / 登录</el-button>
      <el-avatar :size="50" :src="circleUrl" v-else></el-avatar>
      <el-button icon="el-icon-plus" class="add">新建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  components: {},
  data () {
    return {
      activeTab: 'first',
      isLogin: true,
      circleUrl: ''
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleClick () {},
    async handleLogin () {
      // 登录
      // window.location.href = 'https://www.nestsid.com/login'
      // const res = {
      //   data: ''
      // }
      // this.$store.commit('user/setUserInfo', res.data)
    }
  },
  created () {},
}
</script>
<style scoped lang='less'>
/* @import url(); 引入公共css类 */
.navbar {
  float: left;
  width: 100%;
  height: 72px;
  opacity: 1;
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
  margin-left: 70px;
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
  .el-popper {
    position: absolute !important;
    top: 45px !important;
  }
  .el-icon-arrow-down {
    font-size: 18px;
    margin-left: 10px;
  }
}
.el-tabs {
  float: left;
  height: 100%;
  margin-left: 60px;
  margin-right: 120px;
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
    margin: 18px auto;
    margin-right: 35px;
    padding: 0 !important;
    height: 36px !important;
    line-height: 36px !important;
    font-family: Source Han Sans CN !important;
    font-size: 16px !important;
    color: #000000 !important;
  }
  .el-tabs__item:nth-child(2) {
    padding: 0;
  }
  ::v-deep .el-tabs__item:hover {
    color: #000000;
  }
  ::v-deep .el-tabs__item.is-active {
    border-bottom: 2px solid #000000;
  }
  .el-tabs__active-bar{
    background-color: transparent !important;
  }
  .el-tabs__nav-wrap::after{
    position:static !important;
  }
}
.el-button {
  float: right;
  margin: 12px 18px;
  padding: 12px 17px !important;
  height: 48px !important;
  border-radius: 8px !important;
}
.add {
  font-size: 16px;
  width: 100px !important;
  background-color: #fff;
  border-color: #868E96;
  color: #868E96;
  ::v-deep span {
    display: inline-block;
    margin-left: 10px;
    height: 22px;
    line-height: 22px;
  }
}
.add:hover {
  background-color: #fff;
  border-color: #868E96;
  color: #868E96;
}
.logreg {
  font-size: 16px;
  background-color: #ADCFFF !important;
  border-color: #ADCFFF;
  color: #F8F9FA;
  width: 110px;
  height: 48px;
  border-radius: 8px;
  text-align: center;
}
.logreg:hover {
  background-color: #ADCFFF;
  border-color: #ADCFFF;
  color: #F8F9FA;
}
.invite {
  font-size: 16px;
  width: 136px;
  background-color: #3284FC;
  border-color: #3284FC;
  color: #F8F9FA;
  text-align: center;
  ::v-deep span {
    display: inline-block;
    position: relative;
    bottom: 12%;
    margin-left: 10px;
    height: 23px;
    line-height: 23px;
  }
}
.invite:hover {
  font-family: Source Han Sans CN;
  background-color: #3284FC;
  border-color: #3284FC;
  color: #F8F9FA;
}
::v-deep .el-icon-plus {
  margin-right: 6px !important;
}
::v-deep .el-icon-vector {
  background: url('@/assets/images/Vector.png') center no-repeat;
  font-size: 23px;
  margin-right: 5px;
}
::v-deep .el-icon-vector:before {
  content: "替";
  font-size: 23px;
  visibility: hidden;
}
.el-avatar {
  float: right;
  margin: 11px 18px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}

</style>
