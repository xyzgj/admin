<template>
<div class="index-container">
  <div class="content">
  			<div class="bidTitle" style="text-align: center;">铜川市全民健康信息资源综合监管平台</div>

  			<div class="logCon" style="text-align: center;">



          <img src="../../static/img/user.png" style="position: relative;top: 10px;" />
				 <el-input style="width: 280px; " placeholder="请输入用户名" v-model="user.username"  ></el-input><br><br>
 <img src="../../static/img/pwd.png"  style="position: relative;top: 10px;"/>
          <el-input style="width: 280px; " placeholder="请输入登录密码" v-model="user.password" show-password  @keyup.enter.native="login"></el-input><br><br>
  				 <button  class="logingBut"  @click="login()" style="width: 280px;margin-left: 35px;">登 录</button>
  			</div>


        <!-- <div class="slider" style="margin-top: 30px;">
                <drag-verify style="margin: 0 auto;" :width="touch.width"
                   :height="touch.height"
                   :text="touch.text"
                   :success-text="touch.successText"
                   :background="touch.background"
                   :progress-bar-bg="touch.progressBarBg"
                   :completed-bg="touch.completedBg"
                   :handler-bg="touch.handlerBg"
                   :text-size="touch.textSize"
                   :circle="true"
                   ref="Verify" @passcallback="passcallback($event)">
                </drag-verify>
            </div> -->


  		</div>
      <div class="el-footer" style="font-size: 14px; color: #FFFFFF;margin-top:250px ; text-align: center;">Copyright <i class="ri-copyright-fill ri-1x"> </i> 2015-2020 铜川市卫生健康委员会 <i class="ri-settings-line ri-1x"></i> 技术支持：天网软件股份有限公司</div>
  </div>


</template>

<script>
import dragVerify from 'vue-drag-verify'
    export default {
		name:'login',
    data() {
      return {
        input: '',

        user:{
          username:"",
          password:""
        },
        bol:{
          loginbol:false,
          indexbol:true
        },

            show:false,
            is_success: false,

      };

    },
    components: {

            dragVerify

    },
    mounted() {
      
         this.IsPhone()


         if(this.IsPhone()==false){
           console.log( "电脑")
           this.show=false
           console.log( this.show)
         }else{
           console.log( "手机")
           this.show=true
           console.log( this.show)
         }


    },

    methods:{

        IsPhone(){
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone",
                        "SymbianOS", "Windows Phone",
                        "iPad", "iPod"];
            var flag = false;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = true;
                    break;
                }
            }
            return flag;
        },
        doEncrypt(msgString) {
            let msg = msgString;
            if (typeof (msgString) !== 'string') {
                msg = JSON.stringify(msgString);
            }
            let sm2 = require('sm-crypto').sm2;
            let cipherMode = 0; // 1 - C1C3C2，0 - C1C2C3，默认为1
            let publicKey = '044A248B0E72F5DDF10265D5D701616F3AC4C5DE914C9D9448896047F7F3259D1170D85A1ED36ED00675FE84B270D215682C6CC239E0EE06FAFCE2798AF5C690DA'; // 公钥
            let encryptData = sm2.doEncrypt(msg, publicKey, cipherMode); // 加密结果
            return "04"+encryptData;
        },




      login(){
        this.user.password=this.doEncrypt(this.user.password)
        console.log(this.user.password)
        this.$http.post(this.GLOBAL.Ip+"/adminlogin/login",this.user).then(
               function(res){
               if(res.data!=''){
                 console.log(res.data)
                 this.$emit("login",this.bol)
                   sessionStorage.setItem("pwd",res.data.password)
                   if(this.show){
                            this.$router.push('phone')
                     }else{
                       this.$router.push('index')
                     }
                 }else{
                   this.$message({
                             message: '密码输入错误',
                             type: 'warning'
                           });
                 }
               },
               function(err){
               }
         )
      /*  if(this.input=='123456'){
          this.$emit("login",this.bol)
          sessionStorage.setItem("pwd",this.input)
            console.log(this.show)

          if(this.show){
                   this.$router.push('phone')
            }else{
              this.$router.push('index')
            }



        }else{
          this.$message({
                    message: '密码输入错误',
                    type: 'warning'
                  });
        } */
      },

    /*  passcallback(e) {
          if (this.input=='123456') {
            this.is_success = true


             this.$emit("login",this.bol)
             sessionStorage.setItem("pwd",this.input)
             this.$router.push('phone')

          }else{
            this.$message({
                      message: '密码错误！',
                      type: 'warning'
                    });
                     this.is_success = false
             this.$refs.Verify.isPassing = false  //如果登录失败
          }
      } */
    }

  }
</script>


<style>
.index-container {
  background-size: 100% 100%;
  height: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

}


body {
	background: #092756;
		background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);
		background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
		background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
		background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
		background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
  text-align: center;
	background-size: 100% 100%;
	height: 100%;
	overflow: hidden;
	background-repeat: no-repeat;
	background-position: center;
	background-attachment: fixed;
}

.bidTitle {
	color: #fff;
	font-size: 36px;
	font-weight: 600;
}

.logCon {
	color: #FFFFFF;
	margin-top: 60px;
}

.content {
	width: 60%;
	margin-left: 20%;
	margin-top: 120px;
	padding: 65px 0px;
	text-align: left;
	border-radius: 51px;
}

 .logingBut {
  height: 38px;
	background: white;
	border: none;
	padding: 5px 26px;
	color: #242440;
	border-radius: 2px;
}

.bt_input {
  height: 25px;
	border-radius: 2px;
	border: none;
	padding: 2px 5px;
	width: 300px;
	margin-right: 20px;
	color: #333;
	margin-left: 5px;
}

.logCon span {
	font-size: 18px;
	height: 40px;
	line-height: 40px;
}
</style>
