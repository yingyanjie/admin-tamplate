<template>
  <div class="login" @keyup.enter="isCodeCorrect">
    <!-- 头部导航 -->

    <!-- 表单区域 -->
    <div class="content">
      <div class="title">剖油漆</div>
      <div class="login-box">
        <div class="login-title">用户登录</div>
        <el-form :model="form" :rules="rules" label-position="right" ref="formAddDataDictionary">
          <el-form-item label prop="userName">
            <el-input
              maxlength="32"
              v-model="form.username"
              placeholder="请输入用户名"
              autocomplete="off"
              class="input-pop required"
              style="width: 330px"
              @click.native="thisClick('userFlag')"
              @blur="thisBlur('userFlag')"
            ></el-input>
          </el-form-item>

          <el-form-item label prop="password">
            <el-input
              maxlength="16"
              v-model="form.password"
              placeholder="请输入密码"
              autocomplete="off"
              class="input-pop required"
              style="width: 330px"
              type="password"
              @click.native="thisClick('passFlag')"
              @blur="thisBlur('passFlag')"
            ></el-input>
          </el-form-item>

          <el-form-item label prop="yzm">
            <el-input
              maxlength="4"
              v-model="form.verifyCode"
              placeholder="请输入验证码"
              autocomplete="off"
              class="input-pop"
              style="width: 224px"
              @click.native="thisClick('yzmFlag')"
              @blur="thisBlur('yzmFlag')"
            ></el-input>
            <span class="tips">
              <!-- <img :src="yzmIMG" alt @click="getCodeID" />s -->
              <img class="yanzhenma" :src="verifyUrl" @click="getCodeID" alt />
            </span>
          </el-form-item>
        </el-form>

        <div class="checkout">
          <el-checkbox v-model="select">
            <span>记住密码 |</span>
          </el-checkbox>忘记密码
        </div>
        <el-button class="btn" @click="isCodeCorrect">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userFlag: false,
      yzmFlag: false,
      passFlag: false,
      select: false,
      form: {
        password: "123456",
        username: "12",
        verifyCode: ""
      },
      verifyUrl: "",
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          {
            min: 1,
            max: 64,
            message: "最多不超过64个字符",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            min: 1,
            max: 64,
            message: "最多不超过64个字符",
            trigger: "blur"
          }
        ],
        verifyCode: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur"
          }
        ]
      },
      id: ""
    };
  },
  mounted() {
    this.getCodeID();
  },
  methods: {
    /**
     * input点击
     * @param {String} inputName
     */
    thisClick(inputName) {
      this[inputName] = true;
    },
    /**
     * 验证验证码是否正确
     */
    isCodeCorrect() {
      let { verifyCode } = this.form;
      this.$request({
        method: "get",
        url: "/verify-code/verification",
        baseURL: "/api-user/",
        params: {
          id: this.id,
          verifyCode
        }
      }).then(res => {
        if (!res) {
          this.$message({
            message: "验证码错误！",
            type: "error"
          });
          this.getCodeID();
        } else {
          this.login();
        }
      });
    },
    /**
     * 登录接口
     */
    login() {
      // 动态路由 next({...to}) 所以这里要加一个回调，否则报错
      delete this.form.verifyCode;
      this.$request({
        method: "POST",
        url: "uaa/auth/platform",
        baseURL: "/api-auth",
        data: this.form
      }).then(res => {
        localStorage.setItem("token", res.token);
        localStorage.setItem("userId", res.userId);
        localStorage.setItem("BS_admin", res.username);
        localStorage.setItem("realName", res.realName);
        localStorage.setItem("mobile", res.mobile);
        localStorage.setItem("menus", JSON.stringify(res.menus));
        localStorage.setItem("perms", JSON.stringify(res.permissions));
        this.$router.push(
          {
            path: "/home"
          },
          () => {}
        );
      });
    },
    async getCodeID() {
      let codeId = await this.$request({
        method: "POST",
        url: "/verify-code/",
        baseURL: "/api-user/"
      });
      this.id = codeId;
      console.log(this.id);
      let codeImg = await this.$request({
        method: "get",
        url: `/verify-code/image/${codeId}`,
        baseURL: "/api-user/",
        responseType: "arraybuffer"
      });
      this.verifyUrl =
        "data:image/png;base64," +
        btoa(
          new Uint8Array(codeImg).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  background-image: url("~@/assets/loginImg/bg1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    height: 60px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    img {
      position: relative;
      top: 9px;
      margin: 0 30px 0 20px;
    }
    span {
      font-size: 22px;
      font-family: Microsoft YaHei, PingFang SC;
      font-weight: bold;
      color: #ffffff;
      line-height: 60px;
    }
  }

  .content {
    width: 1000px;
    min-width: 700px;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-500px);
    background: rgba(0, 0, 0, 0.46);
    .title {
      width: 100%;
      height: 36px;
      margin: 242px 0 60px 0;
      text-align: center;
      font-size: 36px;
      font-family: Microsoft YaHei, PingFang SC;
      font-weight: 400;
      color: #ffffff;
    }
    .login-box {
      width: 330px;
      background: rgba(252, 252, 252, 0.9);
      opacity: 0.9;
      border-radius: 6px;
      background: #fff;
      margin: 0 auto;
      height: 420px;
      padding: 40px 115px;
      .icon_small {
        position: absolute;
        z-index: 1000;
        top: 6px;
        left: 11px;
      }
      .del {
        position: absolute;
        right: 6px;
        z-index: 999;
        top: 2px;
      }
      .login-title {
        margin-bottom: 40px;
        text-align: center;
        font-size: 30px;
        font-family: Microsoft YaHei, PingFang SC;
        font-weight: bold;
        color: #777777;
        line-height: 42px;
      }
      .tips {
        display: inline-block;
        width: 90px;
        height: 42px;
        position: absolute;
        right: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .btn {
        width: 100%;
        background: #57a0f9;
        color: #fff;
        font-size: 20px;
      }
      .checkout {
        margin: 19px 0 33px;
        font-size: 14px;
        font-family: Microsoft YaHei, PingFang SC;
        font-weight: 400;
        color: #00aee7;
        span {
          font-size: 14px;
          font-family: Microsoft YaHei, PingFang SC;
          font-weight: 400;
          color: #666666;
        }
      }
      .no-account {
        margin-top: 19px;
        text-align: center;
        font-size: 14px;
        font-family: Microsoft YaHei, PingFang SC;
        font-weight: 400;
        color: #666666;
        span {
          color: #00aee7;
        }
      }
    }
  }
}

/deep/ .el-input__inner {
  padding-left: 40px;
}

@media screen and (max-width: 1344px) {
  .login {
    .header {
      img {
        height: 26px !important;
      }
      span {
        font-size: 15px !important;
      }
    }
    .content {
      width: 700px !important;
      transform: translateX(-350px) !important;
      .title {
        margin: 90px 0 42px 0 !important;
        font-size: 30px !important;
      }
      .login-box {
        padding: 20px 80px !important;
        .login-title {
          font-size: 21px !important;
        }
      }
    }
  }
}

@media screen and (min-width: 1344px) {
  .login {
    .header {
      img {
        height: 26px !important;
      }
      span {
        font-size: 15px !important;
      }
    }
    .content {
      width: 700px !important;
      transform: translateX(-350px) !important;
      .title {
        margin: 90px 0 42px 0 !important;
        font-size: 30px !important;
      }
      .login-box {
        padding: 20px 80px !important;
        .login-title {
          font-size: 21px !important;
        }
      }
    }
  }
}

@media screen and (min-width: 1366px) {
  .login {
    .header {
      img {
        height: 27px !important;
      }
      span {
        font-size: 16px !important;
      }
    }
    .content {
      width: 711px !important;
      transform: translateX(-350px) !important;
      .title {
        margin: 125px 0 42px 0 !important;
        font-size: 30px !important;
      }
      .login-box {
        padding: 28px 81px !important;
        .login-title {
          font-size: 21px !important;
        }
      }
    }
  }
}

@media screen and (min-width: 1440px) {
  .login {
    .header {
      img {
        height: 28px !important;
      }
      span {
        font-size: 16px !important;
      }
    }
    .content {
      width: 711px !important;
      transform: translateX(-350px) !important;
      .title {
        margin: 125px 0 42px 0 !important;
        font-size: 30px !important;
      }
      .login-box {
        padding: 28px 81px !important;
        .login-title {
          font-size: 21px !important;
        }
      }
    }
  }
}

@media screen and (min-width: 1681px) {
  .login {
    .header {
      img {
        height: 33px !important;
      }
      span {
        font-size: 20px !important;
      }
    }
    .content {
      width: 875px !important;
      transform: translateX(-437px) !important;
      .title {
        margin: 211px 0 52px 0 !important;
        font-size: 32px !important;
      }
      .login-box {
        padding: 35px 100px !important;
        .login-title {
          font-size: 26px !important;
        }
      }
    }
  }
}
@media (max-width: 1920px) {
}

.curs {
  cursor: pointer;
}
</style>
