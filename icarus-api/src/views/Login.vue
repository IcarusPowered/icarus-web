<template>
  <div class="layout_main">
    <div class="login_left">
      <div class="login_left_logo">
        <img src="../assets/images/logo.png" alt="">
      </div>
      <div class="login_left_title">基于协作，更懂中国程序员</div>
      <div class="login_left_desc">不止于 API 文档、调试、Mock</div>
      <div class="login_left_banner">
        <img src="../assets/images/login.png" alt="">
      </div>
    </div>
    <div class="right">
      <div class="login_right">
        <div class="login_right_info">
          <div class="login_right_info_tab">账号登陆</div>
          <div class="login_right_info_form">
            <div class="login_right_info_form_body">
              <el-form
                class="login-container"
                :model="loginForm"
                :rules="loginRules"
                ref="loginForm"
                :hide-required-asterisk="true"
              >
                <el-form-item class="email" label="邮箱" prop="userEmail">
                  <el-col :span="24">
                    <el-input
                      type="text"
                      placeholder="请输入邮箱"
                      v-model="loginForm.userEmail"
                      autocomplete="off"
                    ></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item class="password" label="密码" prop="userPassword">
                  <el-col :span="24">
                    <el-input
                      class="password-input"
                      type="password"
                      placeholder="请输入密码"
                      v-model.number="loginForm.userPassword"
                      autocomplete="off"
                    ></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item class="login">
                  <el-button class="login-button" type="primary" style="width: 100%;"
                    >立即登录</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
            <div class="login_right_info_form_foot">
              <el-link type="primary" :underline=false>没有账号，立即注册></el-link>
              <el-link type="info" :underline=false>忘记密码</el-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data () {
    const checkEmail = (rule, value, cb) => {
      // 验证邮箱的正则表达式
      const regEmail = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
      if (regEmail.test(value)) {
        // 合法的邮箱
        return cb()
      }
      cb(new Error('请输入合法的邮箱'))
    }
    return {
      loginForm: {
        userEmail: '',
        userPassword: ''
      },
      loginRules: {
        userEmail: [{ required: true, trigger: 'blur', validator: checkEmail }],
        userPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created () {},
}
</script>
<style scoped lang='less'>
.layout_main {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  .login_left {
    width: 780px;
    min-width: 780px;
    height: 100%;
    min-height: 100vh;
    background: #fff;
    &_logo {
      img {
        scale: 0.5;
      }
      height: 125px;
      display: flex;
      margin: 120px auto 0;
      align-items: center;
      justify-content: center;
    }
    &_title {
      height: 80px;
      margin: 0 auto;
      font-weight: 600;
      font-size: 30px;
      line-height: 80px;
      color: #333;
      text-align: center;
    }
    &_desc {
      height: 34px;
      margin: 4px auto 0;
      font-size: 18px;
      line-height: 34px;
      text-align: center;
      color: #666;
    }
    &_banner {
      width: 333px;
      height: 323px;
      margin: 80px auto 0;
      img {
        height: 330px;
        margin-left: -60px;
      }
    }
  }
  .right {
    flex: 1 1;
    position: relative;
  }
}
.login_right {
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &_info {
    width: 348px;
    height: 477px;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &_tab {
      display: flex;
      align-items: center;
      height: 34px;
      font-size: 24px;
      line-height: 34px;
      color: #2b2b2b;
      font-weight: 600;
    }
    &_form {
      margin-top: 37px;
      width: 100%;
      padding: 0 13px;
      ::v-deep .el-form-item__label {
        display: none;
      }
      ::v-deep .el-input__inner {
        height: 45px;
        background: none;
        border-radius: 5px;
      }
      ::v-deep .el-input__inner:hover {
        border-color: #c9c9c9;
      }
      ::v-deep .el-input__inner::placeholder {
        color: #b3b1b1;
        font-size: 13px;
        font-weight: 500;
      }
      ::v-deep .el-input__inner:focus {
        background-color: #d3e1f8;
        border-color: #287eff;
      }
      ::v-deep .el-button {
        position: relative;
        height: 55px;
        background: #3a86ff;
        border-radius: 10px;
        line-height: 55px;
        color: #fff;
        cursor: pointer;
        border-radius: 10px;
        span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          letter-spacing:1px;
          font-size: 16px;
        }
      }
      &_foot {
        .el-link--primary {
          float: left;
          color:#287eff;
        }
        .el-link--info {
          color: rgb(153, 153, 153);
          float: right;
        }
      }
    }
  }
}
</style>
