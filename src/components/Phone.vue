 <template>

 <div class="index-container">
 		<div class="apTitle">铜川市全民健康信息平台<br />资源综合监管系统</div>
     <el-row :gutter="20" style="margin-top: 20px;">
       <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
       <el-card shadow="none" class="cardstyle" style="height: auto;">
         <table class="ssss">
           <tr>
             <td ><h1>{{number1}}</h1></td>
             <td><h1>{{all}}</h1></td>
             <td><h1>{{zy}}</h1></td>
           </tr>
           <tr>
             <td><p><i class="ri-wallet-fill ri-1x"></i> 健康档案</p></td>
             <td><p><i class="ri-account-box-fill ri-1x"></i> 全员人口</p></td>
             <td><p><i class="ri-profile-fill ri-1x"></i> 住院病历</p></td>
           </tr>
         </table>

         <table class="ssss">
           <tr>
             <td ><h1>{{mz}}</h1></td>
             <td><h1>{{number4}}</h1></td>
             <td><h1>{{number2}}</h1></td>
           </tr>
           <tr>
             <td><p><i class="ri-profile-line ri-1x"></i> 门诊病历</p></td>
             <td><p><i class="ri-calendar-todo-fill ri-1x"></i> 开放档案</p></td>
             <td><p><i class="ri-user-settings-fill ri-1x"></i> 总用户数</p></td>
           </tr>
         </table>

         <table class="ssss">
           <tr>
             <td ><h1>{{datanum}}</h1></td>
             <td><h1>{{zone}}<span style="font-size: 14px;">%</span></h1></td>
             <td><h1>{{number3}}</h1></td>
           </tr>
           <tr>
             <td><p><i class="ri-database-2-fill ri-1x"></i> 数据总量</p></td>
             <td><p><i class="ri-pie-chart-2-fill ri-1x"></i> 空间占比</p></td>
             <td><p><i class="ri-hospital-fill ri-1x"></i> 接入机构</p></td>
           </tr>
         </table>
         </el-card>
         </el-col>


         <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" style="margin-top: 20px;">
                   <el-card class="cardstyle">
                     <span class="bs-bigdata">{{servercount}}<span class="bs-smunte">台</span></span>
                   <span class="bs-card-title"><i class="ri-reserved-fill ri-1x"></i> 在管服务器总数</span>
                   <div style="float: left; margin-top: -60px; margin-left: 30px; width: 10px;">
                   <el-divider direction="vertical1"></el-divider>
                    </div>
                   <div style="float: left; margin-top: -60px; width: 160px;">
                     <span class="bs-smuntess"> <i class="ri-record-circle-line ri-1x" style="color: #00FF00; font-size: 8px;"></i> {{server[0].station+'：'+server[0].cout+'台'}}</span><br />
                     <span class="bs-smuntess"> <i class="ri-skip-forward-line ri-1x" style="color: #fcff37; font-size: 8px;"></i> {{server[1].station+'：'+server[1].cout+'台'}}</span><br />
                     <span class="bs-smuntess"> <i class="ri-stop-circle-line ri-1x" style="color: #a5a5a5; font-size: 8px;"></i> {{server[2].station+'：'+server[2].cout+'台'}}</span><br />
                     <span class="bs-smuntess"> <i class="ri-alarm-warning-line ri-1x" style="color: #ff0e1a; font-size: 8px;"></i> 异常机：0 台</span>
                   </div>
                   <div style="margin-top: 110px;">
         <el-divider></el-divider>
         <span class="bs-card-title"> <i class="ri-list-settings-line ri-1x"></i> 服务器应用 </span>
         <el-carousel indicator-position="none" height="40px" with="130px" direction="vertical" :autoplay="true" style="margin-top: 40px;">
             <el-carousel-item v-for="item in serverall" :key="item">
               <h3 class="medium" style="color: #FFFFFF; margin-left: -10px; font-weight: 200; font-size: 14px;">{{'IP: '+item.ip}}&nbsp;&nbsp;&nbsp;{{'状态：'+item.station}}&nbsp;&nbsp;&nbsp;{{'应用：'+item.content}}</h3>
             </el-carousel-item>
           </el-carousel>
         </div>
                   </el-card>

                 </el-col>
         <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" style="margin-top: 20px;">
           <el-card class="cardstylex">
             <span class="bs-bigdata">{{zhenwucount}}<span class="bs-smunte">条</span></span>
             <span class="bs-card-title"><i class="ri-link-m ri-1x"></i> 电子政务外网专线 </span>
               <div style="float: left; margin-top: -60px; margin-left: 20px;margin-right: 20px; width: 10px;">
               <el-divider direction="vertical1"></el-divider>
                </div>
                 <div style=" margin-left: 145px; margin-top: -10px; width: 180px;">
                     <table class="sss">
                       <tbody v-for="(user,index) in zhenwu">
                         <tr>
                           <td width="55%" v-text="user.lev+':'"></td>
                           <td  v-text="user.cout+'条'"></td>
                         </tr>

                       </tbody>


                     </table>
                     </div>
                     <div style="margin-top: 20px;">
               <el-divider></el-divider>
                 <span class="bs-bigdata">{{vpncount}}<span class="bs-smunte">个</span></span>
                  <span class="bs-card-title"><i class="ri-shield-keyhole-line ri-1x" @click="showvpn=true"></i> VPN接入用户数 <el-divider direction="vertical" @click="showvpn=true"></el-divider>  <i class="ri-settings-2-line ri-1x" @click="showvpn=true"></i></span>
             <div style="margin-top:-55px; margin-left:130px; width:100%;" ><myChartBarm7></myChartBarm7></div>

             </div>
           </el-card>

         </el-col>
         <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" style="margin-top: 20px;">
           <el-card class="cardstyle">
             <span class="bs-bigdata">{{errorcount}}<span class="bs-smunte">条</span></span><span style="float: right; margin-right: -12px; font-size: 8px; color: #d8d8d8; margin-top: -12px;">错误类型</span>
             <span class="bs-card-title"><i class="ri-chat-delete-line ri-1x"></i> 错误数据处理 <el-divider direction="vertical"></el-divider> <i class="ri-settings-2-line ri-1x" @click="errorshow=true"></i></span>
               <div style="float: left; margin-top: -60px; margin-left: 20px;margin-right: 20px; width: 10px;">
               <el-divider direction="vertical1"></el-divider>
                </div>
                 <div style=" margin-left: 185px; margin-top: -5px; width: 250px;">
                     <myChartBarm8></myChartBarm8>
                     </div>
                       <div style="margin-top: 0px;">
                         <el-divider></el-divider>
                         <div v-for="item in error" :key="item">
                           <div class="icon-panel-newx" shadow="never">
                             <h1><el-avatar  style="color: #f94cc3; background-color: #491f59; font-size: 20px;" >{{item.cout}}</el-avatar></h1>
                             <p>{{item.county}}</p>
                           </div>
                         </div>
                         </div>




           </el-card>

         </el-col>
             <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" style="margin-top: 20px;">
               <el-card class="cardstyle1" style="height: 110px;">
                 <span style="float: right; margin-right: -12px; font-size: 8px; color: #d8d8d8; margin-top: -15px;"><i class="ri-arrow-right-up-line ri-1x" style="font-size: 10px;">月</i></span>
                 <div class="icon-panel-newx" shadow="never">
                   <h1>{{ReBasicinfo}}</h1>
                   <p>重复建档</p>
                 </div>
                 <div class="icon-panel-newx" shadow="never">
                   <h1>{{bmi}}</h1>
                   <p>BMI</p>
                 </div>
                 <div class="icon-panel-newx" shadow="never">
                   <h1>{{gxy}}</h1>
                   <p>血压</p>
                 </div>
                 <div class="icon-panel-newx" shadow="never">
                   <h1>{{kid}}</h1>
                   <p>新生儿</p>
                 </div>
                 <div class="icon-panel-newx" shadow="never">
                   <h1>{{ycz}}</h1>
                   <p>孕周</p>
                 </div>


               </el-card>

             </el-col>
         <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" style="margin-top: 20px;">
           <el-card class="cardstyle" style="height: 110px;">
             <span style="float: right; margin-right: -12px; font-size: 10px; color: #d8d8d8; margin-top: -15px;"><i class="ri-swap-fill ri-1x"></i> 上传监测</span>
             <div class="icon-panel-newxx" >
                <h1>{{fuyoudata}}</h1>
                <p>+{{fuyoudataWeek}} <i class="ri-arrow-right-up-line ri-1x" style="color: #f94cc3; font-size: 10px;">周</i></p>
                <p><i class="ri-service-fill ri-1x"></i> 妇幼系统</p>

              </div>
              <div class="icon-panel-newxx" >
                 <h1>{{inocucardall}}</h1>
                 <p>+{{inocucardWeek}} <i class="ri-arrow-right-up-line ri-1x" style="color: #f94cc3; font-size: 10px; ">周</i></p>
                 <p><i class="ri-open-arm-fill ri-1x"></i> 计免系统</p>

               </div>
               <div class="icon-panel-newxx" >
                  <h1>{{zyupload}}</h1>
                  <p>+{{zyuploadweek}} <i class="ri-arrow-right-up-line ri-1x" style="color: #f94cc3; font-size: 10px; ">周</i></p>
                  <p><i class="ri-hospital-fill ri-1x"></i> 医疗机构</p>
                </div>
           </el-card>
         </el-col>

       <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" style="margin-top: 20px;">
         <el-card class="cardstyle1" style="height: 110px; text-align: center;">
           <span style="float: right; margin-right: -12px; font-size: 10px; color: #d8d8d8; margin-top: -15px;"><i class="ri-exchange-box-fill ri-1x"></i> 出生数据交换监测</span>
           <div class="icon-panel-newxx">
              <h1>{{futureall}}</h1>
              <p>+{{futureDay}} <i class="ri-arrow-right-up-line ri-1x" style="color : #f94cc3; font-size: 10px; ">日</i></p>
              <p><i class="ri-wallet-fill ri-1x"></i> 健康档案</p>
            </div>
            <div style="float: left; line-height: 40px; color: #f94cc3; margin-right: 10px;"><i class="ri-arrow-left-right-fill ri-1x "></i></div>
               <div class="icon-panel-newxx">
              <h1>{{alldata}}</h1>
              <p>+{{csdata}} <i class="ri-arrow-right-up-line ri-1x" style="color : #f94cc3; font-size: 10px; ">日</i></p>
              <p><i class="ri-account-box-fill ri-1x"></i> 全员人口</p>
            </div>
            <div style="float: left; line-height: 40px; color: #f94cc3; margin-right: 10px;"><i class="ri-arrow-left-right-fill ri-1x"></i></div>
            <div class="icon-panel-newxx">
              <h1>{{wsall}}</h1>
              <p>+{{wsday}} <i class="ri-arrow-right-up-line ri-1x" style="color : #f94cc3; font-size: 10px; ">日</i></p>
              <p><i class="ri-line-chart-fill ri-1x"></i> 人口监测</p>
            </div>
         </el-card>
         </el-col>


         <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" style="margin-top: 20px;">
           <el-card class="cardstyle" style="height: 110px;">
             <span style="float: right; margin-right: -12px; font-size: 10px; color: #d8d8d8; margin-top: -15px;"><i class="ri-exchange-funds-fill ri-1x"></i> 一体机监测</span>
                    <div class="icon-panel-newxx">
                      <h1 style="min-width: 80px; text-align: left;">{{ytj}}</h1>
                      <p><i class="ri-menu-add-fill ri-1x"></i> 注册机构</p>
                    </div>
                   <div class="icon-panel-newxx">
                      <h1>{{ytj1}}</h1>
                      <p><i class="ri-arrow-up-circle-fill ri-1x"></i> 上传总数</p>
                    </div>
                    <div class="icon-panel-newxx" >
                       <h1>{{ytjnumber}}</h1>
                       <p><i class="ri-gallery-upload-fill ri-1x"></i> 周上传</p>
                     </div>
           </el-card>
           </el-col>



  <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="margin-top: 20px;">
    <el-card class="cardstyle" style="height: auto;">
 <div>
     <span style="float: right; margin-right: -12px; font-size: 10px; color: #d8d8d8; margin-top: -15px;"><i class="ri-bubble-chart-fill ri-1x"></i> 业务资源管理</span>

 </div>
       <el-collapse accordion>
         <el-collapse-item style="text-align: left;">
           <template slot="title">
             <i class="ri-numbers-line ri-1x"></i> 分析监管
           </template>
           <div><a href="https://tc.wsxa.com/MoblieLogin/TestConCentralBrainIndex2" target="_blank"><el-button type="info" size="small" class="bs-botton"> 智慧健康驾驶舱（4M）</el-button></a><a href="https://tc.wsxa.com/MoblieLogin/ConCentralBrainIndex" target="_blank"><el-button type="info" size="small" class="bs-botton">驾驶舱(16:9)</el-button></a></div>
           <div><a href="http://10.5.95.11:8080/emr-web/qmjkxt.jsp" target="_blank"><el-button type="info" size="small" class="bs-botton"> 市级分析平台</el-button></a><a href="http://10.5.95.11:8080/ph/login.jsp" target="_blank"><el-button type="info" size="small" class="bs-botton"> 市级平台</el-button></a></div>
           <div><a href="http://datav.aliyuncs.com/share/1cea8ee4110dc78298c766da9a2897af" target="_blank"><el-button type="info" size="small" class="bs-botton">健康铜川&移动支付</el-button></a></div>
           <div><a href="http://10.5.96.27:8333/Login/Index" target="_blank"><el-button type="info" size="small" class="bs-botton">人口监测（内）</el-button></a>
             <a href="http://1.85.55.129:8333/Home/Index" target="_blank"><el-button type="info" size="small" class="bs-botton"> 人口监测（外）</el-button></a>
             </div>
         </el-collapse-item>
         <el-collapse-item style="text-align: left;">
           <template slot="title">
             <i class="ri-hand-coin-line ri-1x"></i> 系统应用
           </template>
           <div>
             <el-button type="info" size="small" class="bs-bottonx">公卫:</el-button>
             <a href="http://10.5.95.20:8077/ehr/sdc/jsp/login/login_sx.jsp" target="_blank"><el-button type="info" size="small" class="bs-botton">王益</el-button></a>
             <a href="http://10.5.95.15:8077/ehr/sdc/jsp/login/login_sx.jsp" target="_blank"><el-button type="info" size="small" class="bs-botton">耀州</el-button></a>
             <a href="http://10.5.95.16:8088/ehr/sdc/jsp/login/login_sx.jsp" target="_blank"><el-button type="info" size="small" class="bs-botton">印台</el-button></a>
             <a href="http://10.5.95.144:8077/ehr/sdc/jsp/login/login_sx.jsp" target="_blank"><el-button type="info" size="small" class="bs-botton">宜君</el-button></a></div>
           <div>
             <el-button type="info" size="small" class="bs-bottonx">HIS:</el-button>
             <a href="http://10.5.95.54/nethis/" target="_blank"><el-button type="info" size="small" class="bs-botton">王益</el-button></a>
             <a href="http://10.5.95.114/nethis/" target="_blank"><el-button type="info" size="small" class="bs-botton">耀州</el-button></a>
             <a href="http://10.5.95.84/nethis/" target="_blank"><el-button type="info" size="small" class="bs-botton">印台</el-button></a>
             <a href="http://10.5.95.144/nethis/" target="_blank"><el-button type="info" size="small" class="bs-botton">宜君</el-button></a></div>

           <div>
             <el-button type="info" size="small" class="bs-bottonx">一体机:</el-button>
             <a href="http://10.5.97.69:8077/ytj" target="_blank"><el-button type="info" size="small" class="bs-botton">三区</el-button></a>
             <a href="http://10.5.97.70:8077/ytj" target="_blank"><el-button type="info" size="small" class="bs-botton">宜君</el-button></a>

            </div>
           <div>
             <a href="http://10.5.70.78:8018/mchis/Cjpt/Login.aspx" target="_blank"><el-button type="info" size="small" class="bs-botton">妇幼</el-button></a>
             <a href="http://10.5.70.85:8080/vaccine/" target="_blank"><el-button type="info" size="small" class="bs-botton">计免</el-button></a>
             <a href="http://10.5.95.52:8811/irpt/esmain/portal/loginportal.do?portalid=WJW" target="_blank"><el-button type="info" size="small" class="bs-botton">统计直报</el-button></a>
             <a href="http://10.5.97.36:8077/pha/sdc/jsp/login/index.jsp" target="_blank"><el-button type="info" size="small" class="bs-botton">绩效</el-button></a>
            </div>

            <div>
              <a href="http://10.5.96.16:8888/message/health.html" target="_blank"><el-button type="info" size="small" class="bs-botton">健康卡回收</el-button></a>
              <a href="http://10.5.96.16:8888/message/" target="_blank"><el-button type="info" size="small" class="bs-botton">产房接种查询</el-button></a>
              <a href="http://10.5.96.16:8888/payment/" target="_blank"><el-button type="info" size="small" class="bs-botton">基层统一支付</el-button></a>
             </div>
             <div>
               <a href="http://1.85.55.129:8444/manage" target="_blank"><el-button type="info" size="small" class="bs-botton">智能奖扶认证</el-button></a>
               <a href="http://10.5.96.26:8083/TCPT/main/syslogin.jsp" target="_blank"><el-button type="info" size="small" class="bs-botton">独生子女补助金申请</el-button></a>
              </div>

         </el-collapse-item>
         <el-collapse-item style="text-align: left;">
           <template slot="title">
             <i class="ri-wechat-line ri-1x"></i> 公众服务
           </template>
           <div><el-button type="info" size="small" class="bs-botton">公众号：健康铜川公众服务</el-button>
               </div>
           <div><a href="http://1.85.55.128:5555/hb/logintp.jsp" target="_blank"><el-button type="info" size="small" class="bs-botton"> 健康档案查询</el-button></a><el-button type="info" size="small" class="bs-botton">小程序：健康铜川公众服务</el-button></div>
           <div><a href="https://tc.wsxa.com/MoblieLogin/LoginIndex" target="_blank"><el-button type="info" size="small" class="bs-botton"> 全息个人健康</el-button></a><a href="https://tc.wsxa.com/MoblieLogin/DetailIndex?Userid=1040" target="_blank"><el-button type="info" size="small" class="bs-botton"> 演示</el-button></a></div>
         <div><a href="http://1.85.55.129:8333/HealthyTongChuan/HealthEX/Index" target="_blank"><el-button type="info" size="small" class="bs-botton">健康e行</el-button></a></div>
         </el-collapse-item>
         <el-collapse-item style="text-align: left;">
           <template slot="title">
             <i class="ri-shield-keyhole-line ri-1x"></i> VPN管理
           </template>
           <div>
             <el-button type="info" size="small" class="bs-bottonx">管理:</el-button>
             <a href="https://113.141.45.146:58081" target="_blank"><el-button type="info" size="small" class="bs-botton">王益</el-button></a>
             <a href="https://113.141.25.14:8081" target="_blank"><el-button type="info" size="small" class="bs-botton">耀州</el-button></a>
             <a href="https://113.141.45.78:8081" target="_blank"><el-button type="info" size="small" class="bs-botton">印台</el-button></a>
             <a href="https://61.134.55.122:8081" target="_blank"><el-button type="info" size="small" class="bs-botton">宜君</el-button></a></div>
           <div><el-button type="info" size="small" class="bs-bottonx">使用:</el-button>
             <a href="https://113.141.45.146:8888" target="_blank"><el-button type="info" size="small" class="bs-botton">王益</el-button></a>
             <a href="https://113.141.25.14:8888" target="_blank"><el-button type="info" size="small" class="bs-botton">耀州</el-button></a>
             <a href="https://113.141.45.78:8888" target="_blank"><el-button type="info" size="small" class="bs-botton">印台</el-button></a>
             <a href="https://61.134.55.122:8888" target="_blank"><el-button type="info" size="small" class="bs-botton">宜君</el-button></a></div>
         </el-collapse-item>
       </el-collapse>


    </el-card>
    </el-col>


     </el-row>

  <el-footer>

    <div style=" bottom: 0px; right: 0; text-align: center; width: 98%; margin-top: 10px; height: 90px; font-size: 12px; line-height: 25px; color: #a2a2a2; "><span style="float: left; width: 100%;"><i class="ri-tools-line ri-1x"></i> 技术支持：天网软件 <i class="ri-close-fill ri-1x"></i> 未来国际 <i class="ri-close-fill ri-1x"></i> 深圳金卫信 <i class="ri-close-fill ri-1x"></i> 上海臻鼎 <i class="ri-close-fill ri-1x"></i> 众盈医疗 <i class="ri-close-fill ri-1x"></i> 网是科技 <i class="ri-close-fill ri-1x"></i> 康华数据 </span><span style="float: left; width: 100% ;"><el-divider></el-divider> Copyright <i class="ri-copyright-fill ri-1x"> </i> 2015-2020 铜川市卫生健康委员会<br /> Last Contribution Edition. <br /><span style="font-size: 8px; color:#0e1427;">by b@ser</span> </span></div>


  </el-footer>

   </div>

 </template>
 <script src="js/vue-resource.js"></script>


 <script>
   import myChartBarm7 from '../chartsView/myChartBarm7'
   import myChartBarm8 from '../chartsView/myChartBarm8'
   import axios from 'axios';
     export default {
     data() {
       return {
         number1:"",
         number2:"",
         number3:"",
         number4:"",
         futureDay:"",
         futureall:"",
         all:"",

         ytj:"",
         ytjnumber:"",
         zy:"",
         mz:"",
         server:[],
         servercount:"",
         vpn:[],
         vpncount:"",
         zhenwu:[],
         zhenwucount:"",
         serverall:[],
         vpnall:[],
         govall:[],
         errall:[],
         vertical1:true,
         showserver:false,
         showvpn:false,

         currentPage: 1,
         pagesize:8,
         current: 1,
         page:8,
         alldata:"",
         csdata:"",
         vpnall:[],
         vpncurrentPage: 1,
         vpnpagesize:8,
         vpncurrent: 1,

         zhenwuall:[],
         showzhenwu:false,
         zwcurrentPage: 1,
         zwpagesize:8,
         zwcurrent: 1,
         zwpage:8,
         server1:false,
         ser:{},
         vpns:{},
         vpn1:false,
         formLabelWidth:"120px",
         gover:{},
         gov1:false,
         govcurrentPage: 1,
         govpagesize:8,
         govcurrent: 1,
         govpage:8,
         inocucardall:"",
         inocucardWeek:"",
         fuyoudata:"",
         fuyoudataWeek:"",
         ytj1:"",
         wsday:"",
         wsall:"",
         datanum:"",
         zone:"",
         addser:{
           ip:"",
           systype:"",
           config:"",
           lev:"",
           content:"",
           details:"",
           udepartment:"",
           station:"",
           outline:"",
           notice:""
         },
         server2:false,
         vpn2:false,
         addvpn:{
           numbers:"",
           county:"",
           station:"",
           groups:"",
           users:"",
           work:"",
           authen:""
         },
         gov2:false,
         addgover:{
           lev:"",
           type:"",
           name:"",
           address:"",
           input:"",
           operators:"",
           port:"",
           vlanid:"",
           ipaddress:"",
           subnet:"",
           gateway:"",
           notice:""

         },
         ReBasicinfo:"",
         ycz:"",
         gxy:"",
         bmi:"",
         zyuploadweek:"",
         zyupload:"",
         error:[],
         errorcount:"",
         errorshow:false,
         errordata:[],
         error1:false,
         errorcurrentPage: 1,
         errorpagesize:8,
         errorcurrent: 1,
         errorpage:8,
         adderror:{
           county:"",
           jgname:"",
           typr:"",
           notics:"",
           results:"",
           jpg:""
         },
         action:this.GLOBAL.Ip+"/duns/upload",
         xqerror:{},
         error2:false





       };

     },
     created() {


       this.$http.post(this.GLOBAL.Ip+"/duns/findall").then(
              function(res){
                 this.number1=res.data

              },
              function(err){

              }
        )
        this.$http.post(this.GLOBAL.Ip+"/duns/findalldoc").then(
               function(res){
                  this.number2=res.data

               },
               function(err){

               }
         )
         this.$http.post(this.GLOBAL.Ip+"/duns/findalljg").then(
                function(res){
                   this.number3=res.data

                },
                function(err){

                }
          )
          this.$http.post(this.GLOBAL.Ip+"/duns/OpenDangAn").then(
                 function(res){
                    this.number4=res.data

                 },
                 function(err){

                 }
           )
           this.$http.post(this.GLOBAL.Ip+"/duns/futureDay").then(
                  function(res){
                     this.futureDay=res.data

                  },
                  function(err){

                  }
            )
            this.$http.post(this.GLOBAL.Ip+"/duns/futureall").then(
                   function(res){
                      this.futureall=res.data

                   },
                   function(err){

                   }
             )
             this.$http.post(this.GLOBAL.Ip+"/duns/future").then(
                    function(res){
                       console.log(res.data)
                       this.all=res.data

                    },
                    function(err){

                    }
              )
              this.$http.post(this.GLOBAL.Ip+"/duns/ytj").then(
                     function(res){
                        console.log(res.data)
                        this.ytj=res.data

                     },
                     function(err){

                     }
               )
               this.$http.post(this.GLOBAL.Ip+"/duns/ytjweek").then(
                      function(res){

                         this.ytjnumber=res.data

                      },
                      function(err){

                      }
                )
                this.$http.post(this.GLOBAL.Ip+"/duns/zy").then(
                       function(res){
                          console.log(res.data)
                          this.zy=res.data

                       },
                       function(err){

                       }
                 )
                 this.$http.post(this.GLOBAL.Ip+"/duns/mz").then(
                        function(res){
                           console.log(res.data)
                           this.mz=res.data

                        },
                        function(err){

                        }
                  )


                  this.$http.post(this.GLOBAL.Ip+"/duns/findServer").then(

                         function(res){
                           this.server=res.data
                           var n=0
                           for(var i =0;i<res.data.length;i++){
                             n+= parseInt(res.data[i].cout)
                           }
                           this.servercount=n




                         },
                         function(err){

                         }
                   )
                   this.$http.post(this.GLOBAL.Ip+"/duns/findVpn").then(
                          function(res){
                            console.log(res.data)
                            this.vpn=res.data
                            var n=0
                            for(var i =0;i<res.data.length;i++){
                              n+= parseInt(res.data[i].cout)
                            }
                            this.vpncount=n




                          },
                          function(err){

                          }
                    )
                    this.$http.post(this.GLOBAL.Ip+"/duns/findzhenwu").then(
                           function(res){
                              console.log(res.data)
                              this.zhenwu=res.data
                              var n=0
                              for(var i =0;i<res.data.length;i++){
                                n+= parseInt(res.data[i].cout)
                              }
                              this.zhenwucount=n


                           },
                           function(err){

                           }
                     )





                     this.$http.post(this.GLOBAL.Ip+"/duns/findAllServer").then(
                            function(res){
                              this.serverall=res.data
                              console.log(res.data)


                            },
                            function(err){

                            }
                      )
                      this.$http.post(this.GLOBAL.Ip+"/duns/findAllVpn").then(
                             function(res){
                             this.vpnall=res.data
                              console.log(res.data)

                             },
                             function(err){

                             }
                       )
                       this.$http.post(this.GLOBAL.Ip+"/duns/findAllGov").then(
                              function(res){
                               this.zhenwuall=res.data
                                console.log(res.data)

                              },
                              function(err){

                              }
                        )


                         this.$http.post(this.GLOBAL.Ip+"/duns/findcsAlldata").then(
                                function(res){
                                         this.alldata=res.data
                                   },




                                function(err){

                                }
                          )

                          this.$http.post(this.GLOBAL.Ip+"/duns/findcsdata").then(
                                 function(res){
                          this.csdata=res.data
                                    },




                                 function(err){

                                 }
                           )

                           this.$http.post(this.GLOBAL.Ip+"/duns/inocucardall").then(
                                  function(res){
                                    this.inocucardall=res.data

                                     },




                                  function(err){

                                  }
                            )

                            this.$http.post(this.GLOBAL.Ip+"/duns/inocucardWeek").then(
                                   function(res){
                                     this.inocucardWeek=res.data

                                      },




                                   function(err){

                                   }
                             )

                             this.$http.post(this.GLOBAL.Ip+"/duns/fuyoudata").then(
                                    function(res){
                                      this.fuyoudata=res.data

                                       },




                                    function(err){

                                    }
                              )
                              this.$http.post(this.GLOBAL.Ip+"/duns/fuyoudataWeek").then(
                                     function(res){
                                       this.fuyoudataWeek=res.data

                                        },




                                     function(err){

                                     }
                               )
                               this.$http.post(this.GLOBAL.Ip+"/duns/ytjall").then(
                                      function(res){
                                       this.ytj1=res.data


                                      },
                                      function(err){

                                      }
                                )
                                this.$http.post(this.GLOBAL.Ip+"/duns/ws").then(
                                       function(res){
                                         console.log(res.data.yearcount)
                                         this.wsday=res.data.daycount
                                         this.wsall=res.data.yearcount


                                       },
                                       function(err){

                                       }
                                 )



                this.$http.post(this.GLOBAL.Ip+"/duns/data").then(
                       function(res){
                                this.datanum=res.data
                          },




                       function(err){

                       }
                 )
                 this.$http.post(this.GLOBAL.Ip+"/duns/findzone").then(
                        function(res){
                                 this.zone=res.data
                           },




                        function(err){

                        }
                  )
                  this.$http.post(this.GLOBAL.Ip+"/duns/ReBasicinfo").then(
                         function(res){
                                  this.ReBasicinfo=res.data
                            },




                         function(err){

                         }
                   )
                   this.$http.post(this.GLOBAL.Ip+"/duns/ycz").then(
                          function(res){
                                   this.ycz=res.data
                             },




                          function(err){

                          }
                    )
                    this.$http.post(this.GLOBAL.Ip+"/duns/gxy").then(
                           function(res){
                                    this.gxy=res.data
                              },




                           function(err){

                           }
                     )
                     this.$http.post(this.GLOBAL.Ip+"/duns/bmi").then(
                            function(res){
                                     this.bmi=res.data
                               },




                            function(err){

                            }
                      )
                      this.$http.post(this.GLOBAL.Ip+"/duns/kid").then(
                             function(res){
                                      this.kid=res.data
                                },




                             function(err){

                             }
                       )
                       this.$http.post(this.GLOBAL.Ip+"/duns/zyupload").then(
                              function(res){
                                       this.zyupload=res.data
                                 },




                              function(err){

                              }
                        )
                        this.$http.post(this.GLOBAL.Ip+"/duns/zyuploadweek").then(
                               function(res){
                                        this.zyuploadweek=res.data
                                  },




                               function(err){

                               }
                         )
                         this.$http.post(this.GLOBAL.Ip+"/duns/findAllError").then(
                                function(res){
                                         this.errordata=res.data
                                         this.errorcount=res.data.length
                                         console.log(res.data)
                                   },




                                function(err){

                                }
                          )
                         this.$http.post(this.GLOBAL.Ip+"/duns/ErrorByCounty").then(
                                function(res){
                                         this.error=res.data

                                         console.log(res.data)




                                   },




                                function(err){

                                }
                          )






     },
     methods:{
       logout(){

                this.$confirm('确定退出?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  sessionStorage.clear();
                  window.location.reload();

                  this.$message({
                    type: 'success',
                    message: '成功退出!',

                  });

                }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '继续完成你的工作哦~'
                  });
                });


       },
       xgserver(index,row){
         console.log(row)
         this.ser=row
       },
       xgerrors(index,row){
         console.log(row)
         this.xqerror=row
       },
       updateser(){
            this.$http.post(this.GLOBAL.Ip+"/duns/updateserver",this.ser).then(
                   function(res){
                              this.$http.post(this.GLOBAL.Ip+"/duns/findAllServer").then(
                                     function(res){
                                       this.serverall=res.data
                                       console.log(res.data)


                                     },
                                     function(err){

                                     }
                               )

                             this.server1=false

                              this.$message({
                                showClose: true,
                                message: '修改成功',
                                type: 'success',
                             })
                      },




                   function(err){

                   }
             )
       },
       addsers(){
         console.log(this.addser)
         this.$http.post(this.GLOBAL.Ip+"/duns/addServer",this.addser).then(
                function(res){

                               this.$http.post(this.GLOBAL.Ip+"/duns/findAllServer").then(
                                      function(res){
                                        this.serverall=res.data
                                        console.log(res.data)


                                      },
                                      function(err){

                                      }
                                )

                             this.server2=false
                             this.addser.ip=""
                              this.addser.systype=""
                              this.addser.config=""
                              this.addser.lev=""
                              this.addser.content=""
                              this.addser.details=""
                              this.addser.udepartment=""
                              this.addser.station=""
                              this.addser.outline=""
                              this.addser.notice=""

                              this.$message({
                                showClose: true,
                                message: '新增成功',
                                type: 'success',
                             })
                      },




                function(err){

                }
          )
       },
       adderrors(){

         this.$http.post(this.GLOBAL.Ip+"/duns/addError",this.adderror).then(
                function(res){

                              this.$http.post(this.GLOBAL.Ip+"/duns/findAllError").then(
                                     function(res){
                                              this.errordata=res.data
                                              console.log(res.data)
                                              this.errorcount=res.data.length
                                        },




                                     function(err){

                                     }
                               )
                               this.$http.post(this.GLOBAL.Ip+"/duns/ErrorByCounty").then(
                                      function(res){
                                               this.error=res.data
                                               console.log(res.data)

                                         },
                                      function(err){

                                      }
                                )

                             this.error1=false
                             this.adderror.county=""
                              this.adderror.jgname=""
                              this.adderror.typr=""
                              this.adderror.notics=""
                              this.adderror.results=""

                              this.$message({
                                showClose: true,
                                message: '新增成功',
                                type: 'success',
                             })
                      },




                function(err){

                }
          )
       },
       updateerror(){
         this.$http.post(this.GLOBAL.Ip+"/duns/updateError",this.xqerror).then(
                function(res){
                          this.$http.post(this.GLOBAL.Ip+"/duns/findAllError").then(
                                 function(res){
                                          this.errordata=res.data
                                          this.errorcount=res.data.length
                                          console.log(res.data)
                                    },




                                 function(err){

                                 }
                           )

                          this.error2=false

                           this.$message({
                             showClose: true,
                             message: '修改成功',
                             type: 'success',
                          })
                   },




                function(err){

                }
          )

       },
       delerrors(index,row){

                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  this.$http.post(this.GLOBAL.Ip+"/duns/DelError",row.id).then(
                         function(res){

                 this.$http.post(this.GLOBAL.Ip+"/duns/findAllError").then(
                        function(res){
                                 this.errordata=res.data
                                 this.errorcount=res.data.length
                                 console.log(res.data)
                           },
                        function(err){

                        }
                  )
                  this.$message({
                    type: 'success',
                    message: '删除成功!'
                  });


                            },




                         function(err){

                         }
                   )

                }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '已取消删除'
                  });
                });


       },
       addvpns(){
         this.$http.post(this.GLOBAL.Ip+"/duns/addVpn",this.addvpn).then(
                function(res){

                              this.$http.post(this.GLOBAL.Ip+"/duns/findAllVpn").then(
                                     function(res){
                                     this.vpnall=res.data
                                      console.log(res.data)

                                     },
                                     function(err){

                                     }
                               )

                             this.vpn2=false
                             this.addvpn.numbers=""
                             this.addvpn.county=""
                             this.addvpn.station=""
                             this.addvpn.groups=""
                             this.addvpn.users=""
                             this.addvpn.work=""
                             this.addvpn.authen=""


                              this.$message({
                                showClose: true,
                                message: '新增成功',
                                type: 'success',
                             })
                      },




                function(err){

                }
          )
       },
       xgvpn(index,row){
         console.log(row)
         this.vpns=row
       },

       updatevpn(){
            this.$http.post(this.GLOBAL.Ip+"/duns/updatevpn",this.vpns).then(
                   function(res){
                              this.$http.post(this.GLOBAL.Ip+"/duns/findAllVpn").then(
                                     function(res){
                                       this.vpnall=res.data
                                       console.log(res.data)

                                     },
                                     function(err){

                                     }
                               )

                             this.vpn1=false

                              this.$message({
                                showClose: true,
                                message: '修改成功',
                                type: 'success',
                             })
                      },




                   function(err){

                   }
             )
       },
       xggov(index,row){
         console.log(row)
         this.gover=row
       },

       updategov(){
            this.$http.post(this.GLOBAL.Ip+"/duns/updategov",this.gover).then(
                   function(res){
                              this.$http.post(this.GLOBAL.Ip+"/duns/findAllGov").then(
                                     function(res){
                                       this.govall=res.data
                                       console.log(res.data)

                                     },
                                     function(err){

                                     }
                               )

                             this.gov1=false

                              this.$message({
                                showClose: true,
                                message: '修改成功',
                                type: 'success',
                             })
                      },




                   function(err){

                   }
             )
       },
       addgov(){
         this.$http.post(this.GLOBAL.Ip+"/duns/addGov",this.addgover).then(
                function(res){

                              this.$http.post(this.GLOBAL.Ip+"/duns/findAllGov").then(
                                     function(res){
                                      this.zhenwuall=res.data
                                       console.log(res.data)

                                     },
                                     function(err){

                                     }
                               )

                             this.gov2=false

                             this.addgover.lev=""
                             this.addgover.type=""
                             this.addgover.name=""
                             this.addgover.address=""
                             this.addgover.input=""
                             this.addgover.operators=""
                             this.addgover.port=""
                             this.addgover.vlanid=""
                             this.addgover.ipaddress=""
                             this.addgover.subnet=""
                             this.addgover.gateway=""
                             this.addgover.notice=""



                              this.$message({
                                showClose: true,
                                message: '新增成功',
                                type: 'success',
                             })
                      },




                function(err){

                }
          )
       },

        delgov(index,row) {
               this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                 confirmButtonText: '确定',
                 cancelButtonText: '取消',
                 type: 'warning'
               }).then(() => {
                 this.$http.post(this.GLOBAL.Ip+"/duns/delGov",row.id).then(
                        function(res){

                this.$http.post(this.GLOBAL.Ip+"/duns/findAllGov").then(
                       function(res){
                        this.zhenwuall=res.data
                         console.log(res.data)

                       },
                       function(err){

                       }
                 )
                 this.$message({
                   type: 'success',
                   message: '删除成功!'
                 });


                           },




                        function(err){

                        }
                  )

               }).catch(() => {
                 this.$message({
                   type: 'info',
                   message: '已取消删除'
                 });
               });
             },
             delvpn(index,row) {
                    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      type: 'warning'
                    }).then(() => {
                      this.$http.post(this.GLOBAL.Ip+"/duns/delVpn",row.id).then(
                              function(res){

                     this.$http.post(this.GLOBAL.Ip+"/duns/findAllVpn").then(
                            function(res){
                            this.vpnall=res.data
                             console.log(res.data)

                            },
                            function(err){

                            }
                      )
                      this.$message({
                        type: 'success',
                        message: '删除成功!'
                      });

                                 },




                              function(err){

                              }
                        )
                    }).catch(() => {
                      this.$message({
                        type: 'info',
                        message: '已取消删除'
                      });
                    });
                  },
                  delserver(index,row) {
                         this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                           confirmButtonText: '确定',
                           cancelButtonText: '取消',
                           type: 'warning'
                         }).then(() => {
                           this.$http.post(this.GLOBAL.Ip+"/duns/delServer",row.id).then(
                                   function(res){

                           this.$http.post(this.GLOBAL.Ip+"/duns/findAllServer").then(
                                  function(res){
                                    this.serverall=res.data
                                    console.log(res.data)


                                  },
                                  function(err){

                                  }
                            )
                           this.$message({
                             type: 'success',
                             message: '删除成功!'
                           });

                                      },




                                   function(err){

                                   }
                             )
                         }).catch(() => {
                           this.$message({
                             type: 'info',
                             message: '已取消删除'
                           });
                         });
                       },
       handleSizeChange:function (size) {
                  this.pagesize = size;
                   //每页下拉显示数据
              },
       handleCurrentChange: function(currentPage){
               this.currentPage = currentPage;
               //点击第几页
          },
          vpnhandleSizeChange:function (size) {
                     this.vpnpagesize = size;
                      //每页下拉显示数据
                 },
          vpnhandleCurrentChange: function(currentPage){
                  this.vpncurrentPage = currentPage;
                  //点击第几页
             },
             zwhandleSizeChange:function (size) {
                        this.zwpagesize = size;
                         //每页下拉显示数据
                    },
             zwhandleCurrentChange: function(currentPage){
                     this.zwcurrentPage = currentPage;
                     //点击第几页
                },
                errorhandleSizeChange:function (size) {
                           this.errorpagesize = size;
                            //每页下拉显示数据
                       },
                errorhandleCurrentChange: function(currentPage){
                        this.errorcurrentPage = currentPage;
                        //点击第几页
                   },
                   successRes(response, file, fileList) { //文件上传成功之后

                             console.log(response)


                             this.adderror.jpg=response
                   					this.$message({
                   						message: "上传成功！",
                   						type: 'success'
                   					});
                   				},
                   				beforeAvatarUpload(file) { //文件上传之前

                   					var isLt2M = file.size / 1024 / 1024 < 10
                   					console.log(isLt2M);
                   					if(!isLt2M) {
                   						this.$message({
                   							message: '上传文件大小不能超过 10MB!',
                   							type: 'warning'
                   						});
                   						return false;
                   					}

                   				},
                   				progressUpload() { //文件上传时
                   					/* loading = this.$loading({
                   						lock: true,
                   						text: 'Loading...',
                   						spinner: 'el-icon-loading',
                   						background: 'rgba(0, 0, 0, 0.7)'
                   					}); */
                   				},
                           success(response, file, fileList) { //文件上传成功之后

                                     console.log(response)


                                     this.xqerror.jpg=response
                           					this.$message({
                           						message: "上传成功！",
                           						type: 'success'
                           					});
                           				},
                           				beforeAvatar(file) { //文件上传之前

                           					var isLt2M = file.size / 1024 / 1024 < 10
                           					console.log(isLt2M);
                           					if(!isLt2M) {
                           						this.$message({
                           							message: '上传文件大小不能超过 10MB!',
                           							type: 'warning'
                           						});
                           						return false;
                           					}

                           				},
                           				progress() { //文件上传时
                           					/* loading = this.$loading({
                           						lock: true,
                           						text: 'Loading...',
                           						spinner: 'el-icon-loading',
                           						background: 'rgba(0, 0, 0, 0.7)'
                           					}); */
                           				}


         /* handleSize:function (size) {
                     this.page= size;
                      //每页下拉显示数据
                 },
          handleCurrent: function(current){
                  this.current = current;
                  //点击第几页
             } */
     },
 components: {
       myChartBarm7,
       myChartBarm8
     }
   }

 </script>


 <style>
   body {
   	margin: 0;
   	padding: 0;
   	border: 0;
   	outline: 0;
   	font-size: 100%;
   	vertical-align: baseline;
   	background: transparent;
   	width: 100%;
   	height: 100%;
     overflow-x: hidden;
   	background: #0e1427;
    overflow-x: hidden;
overflow-y: auto;
-webkit-overflow-scrolling: touch;
   }
   html {
     overflow-x: auto;
     overflow-y: scroll;
   }
 :root body {
   position: absolute;
 }




 .index-container {
   font-size: 14px;
     padding: 0 !important;
     margin:  0 2% !important;
 }
 .el-divider--horizontal{
      margin: 10px 0;
      background: 0 0;
      border-top: 1px dashed #363636;
  }

  .el-divider--vertical1{
        display: inline-block;
        background-color: #363636;
        margin: 0 1px;
        width: 1px;
       height: 80px;
   }
 .apTitle {
     font-size: 24px;
     color: #e1e1f9;
     font-weight: 800;
     width: 100%;
     text-align: center;
     margin-top: 0%;
 }
 .cardstyle{
   background-color: rgba(221, 195, 226, 0.05);
     height: 240px;
     border-radius: 4px;
     overflow: hidden;
     opacity: 1;
     cursor: pointer;
     z-index: 1;
     will-change: transform;
     border: 0;
     transition: box-shadow 0.35s ease-in-out, background-color 0.35s ease-in-out;
 }
 .cardstylex{
   background-color: rgba(221, 195, 226, 0.05);
     height: 250px;
     border-radius: 4px;
     overflow: hidden;
     opacity: 1;
     cursor: pointer;
     z-index: 1;
     will-change: transform;
     border: 0;
     transition: box-shadow 0.35s ease-in-out, background-color 0.35s ease-in-out;
 }

 .cardstyle1{
                   height: 120px;
                   border-radius: 4px;
                   overflow: hidden;
                   opacity: 1;
                   cursor: pointer;
                   z-index: 1;
                   will-change: transform;
                   border: 0;
                   transition: box-shadow 0.35s ease-in-out, background-color 0.35s ease-in-out;
                 /* 底色 */
                 background-color:#d41a1a;            /* chrome 2+, safari 4+; multiple color stops */
                 background-image:-webkit-gradient(linear, left bottom, right top, color-stop(0.32, #1D1953), color-stop(0.66, #B9398E), color-stop(0.83, #1D1953));                /* chrome 10+, safari 5.1+ */
                 background-image:-webkit-linear-gradient(135deg, #1D1953, #B9398E, #1D1953);                /* firefox; multiple color stops */
                 background-image:-moz-linear-gradient(135deg, #1D1953, #B9398E, #1D1953);                /* ie10 */
                 background-image: -ms-linear-gradient(135deg, #1D1953 0%, #B9398E 100%);                /* opera 11.1 */
                 background-image: -o-linear-gradient(135deg, #1D1953, #B9398E);                /* 标准写法 */
                 background-image: linear-gradient(135deg, #1D1953, #B9398E);
             }


  .cardstyle figure {
     background-color: rgba(221, 195, 226, 0.05);
     position: relative;
     display: block;
     width: 100%;
     width: calc(100% - 48px);
     height: calc(100% - 48px);
     margin: 16px;
     padding: 16px;
     overflow: hidden;
     border-radius: 4px;
     transition: box-shadow 0.35s ease-in-out, background-color 0.35s ease-in-out;
   }
 .cardstyle:hover {
     background-color: rgba(221, 195, 226, 0.08);
     box-shadow: 0 15px 31px rgba(0, 0, 0, 0.24), 0 5px 31px rgba(0, 0, 0, 0.12);
   }
   .cardstyle:active {
       background-color: rgba(221, 195, 226, 0.08) !important;
       box-shadow: 0 15px 31px rgba(0, 0, 0, 0.36), 0 5px 31px rgba(0, 0, 0, 0.24);
     }
 #particles-js {
 	width: 100%;
 	height: 100%;
 	background-color: #0e1427;
 	background-size: cover;
 	background-position: 50% 50%;
 	background-repeat: no-repeat;
 	width: 100%;
 	height: 100%;
 	position: absolute;
 	top: 0;
 	left: 0;
 }
 .icon-panel-new {
 	  height: 80px;
 	  color: rgba(221, 195, 226, 0.58);
 	  margin: 0px 10px 0px 10px;
 	  text-align: center;
 	  cursor: pointer;
 	  float: left;
 	}
 .icon-panel-new h1{
   color: #c7cfff;
   margin-top: 0px;
 }
 .icon-panel-new p {
 		color: #7c7c7c;
     font-size: 14px;
     text-align: left;
 	    margin-top: -10px;
 	  }
 .bs-card-title{
   color: #7c7c7c;
   clear: both;
   margin-left: 10px;
   font-size: 12px;
   float: left;
 }
 .bs-bigdata{
   color: #FFFFFF;
   margin-top: -10px;
   margin-left: 0px;
   width: 50%;
   font-size: 56px;
   font-weight: 700;
   float: left;

 }
 .bs-smunte{
   color: #7c7c7c;
   margin-left: 10px;
   font-size: 16px;
   font-weight: 200;

 }
 .bs-smuntess{
   color: #cfcfcf;
   margin-left: 20px;
   height: 20px;
   line-height: 20px;
   font-size: 13px;
 }
 table.sss {
 	  width: 60%;
 	  color: #cbcbcb;
 	  border-collapse: collapse;
 	  background-color: none;
 }
 table.sss td {
 	    position: relative;
       text-align: left;
 	    min-height: 13px !important;
 	    padding: 3px 3px;
 	    font-size: 13px;
 	    line-height: 13px ;
 	    border: 0px;
  }


 table.ssss {
 	  width: 30%;
 	  color: #cbcbcb;
 	  border-collapse: collapse;
 	  background-color: none;
 }
 table.ssss td {
   min-width: 30%;
 	    position: relative;
       text-align: left;
 	    min-height: 20px !important;
 	    padding: 0px 10px;
 	    font-size: 13px;
 	    line-height: 13px ;
 	    border: 0px;
  }
 table.ssss td p{
 line-height: 12px;
 text-align: left;
 color:#cbcbcb ;
 min-width: 80px;
 }
  .icon-panel-newx {
    min-width: 35px;
  	  height: 80px;
  	  color: rgba(221, 195, 226, 0.58);
  	  margin: 5px 11px 0px 11px;
  	  text-align: center;
  	  cursor: pointer;
  	  float: left;
  	}
  .icon-panel-newx h1{
    color: #c7cfff;
    margin-top: 0px;
  }
  .icon-panel-newx p {
  		color: #7c7c7c;
      font-size: 13px;
      text-align: center;
  	    margin-top: -15px;
  	  }

  .icon-panel-newxx {
    min-width: 60px;
  	  height: 60px;
  	  color: rgba(221, 195, 226, 0.58);
  	  margin: 5px 10px 0px 10px;
  	  text-align: center;
  	  cursor: pointer;
  	  float: left;
  	}
  .icon-panel-newxx h1{
    color: #c7cfff;
    font-size: 22px;
    font-weight: 600;
    margin-top: 0px;
    float: left;
  }
  .icon-panel-newxx p {
  		color: #7c7c7c;
      font-size: 12px;
      text-align: left;
  	    margin-top: -10px;
  	  }
  .icon-panel-newxx bs-plus{
   color: #c7c7c7;
   font-size: 12px;
   text-align: left;
   margin-top: -5px;
 }
 .popoverBackB{
    /* #303133是el-tooltip的背景色 */
     background: #0e1427 !important;
     border: #0e1427;
 }
 .popoverBackB .popper__arrow::after {
 	/* 注意：placement位置不同，下面的属性不同 */

     border-right-color: #0e1427 !important;
     border: #0e1427;
 }
 .el-collapse-item__header{
   color: #ccd0d8;
   background-color:  #1D2235;
   border-bottom: 1px solid  rgba(221, 195, 226, 0.05);
 }
 .el-collapse-item__wrap{

   background-color:  #1D2235;
   border-bottom: 1px solid #1D2235;
   width: 100%;
 }
 .bs-botton{
   background-color: #0e1427;
   border: 1px #FFFF00;
   margin-right: 3px;
   margin-top: 10px;
 }
 .bs-bottonx{
   background-color: #1D2235;
   border: 1px #FFFF00;
   margin-right: 3px;
   margin-top: 10px;
 }
 .el-collapse {
     border-top: 1px solid #1D2235;
     border-bottom: 1px solid #EBEEF5;
 }
 .el-dialog__header {
   background: #0e1427;

 }

 /* 弹出层设置背景色 底部*/

 .el-dialog__footer {
   background-color: #0e1427 ;

 }

 .el-table--enable-row-transition .el-table__body td{
   background-color: #0e1427;
   color: white;
 }
 .el-table td, .el-table th.is-leaf {
   background-color: #0e1427;
   color: white;
 }
 .el-dialog__body{
   background-color: #0e1427;
 }
 .el-dialog__title{
   color: white;
   }
  .el-table .current-row >td{
    background-color: red;
  }
   .el-form-item__label{
     color: white;
   }
  .el-table--enable-row-hover .el-table__body tr:hover>td{
  background-color: grey !important;
  }

 </style>
