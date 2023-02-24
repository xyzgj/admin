<template>
<div class="index-container">

<div id="particles-js" style="display: flex;align-items: center;justify-content: center">
		</div>
		<el-row>
				<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="height: 10px;"><span style="font-size: 36px; color: #FFFFFF;font-weight: 700; margin-left: 30px; line-height: 100px;">铜川市全民健康信息资源综合监管平台</span><span style="float: right; margin-right: 30px; font-size: 14px; color: #d8d8d8; margin-top: 50px; cursor: pointer;" @click="logout"><i class="ri-close-circle-line ri-1x"></i> 退出</span>
		            </el-col></el-row><el-row :gutter="20"  style="margin-top: 100px;">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
        		 <el-card shadow="none" class="cardstyle" style="height: 110px;">
        				<div class="icon-panel-new" >
                   <h1>{{number1}}</h1>
        			     <p><i class="ri-wallet-fill ri-1x"></i> 健康档案</p>
        			   </div>

                 <div class="icon-panel-new" shadow="never">
                   <h1>{{all}}</h1>
                   <p><i class="ri-account-box-fill ri-1x"></i> 全员人口</p>
                 </div>


                    <div class="icon-panel-new" shadow="never">
                   <h1>{{zy}}</h1>
        			     <p><i class="ri-profile-fill ri-1x"></i> 住院病历</p>
        			   </div>


                    <div class="icon-panel-new" shadow="never">
                   <h1>{{mz}}</h1>
                   <p><i class="ri-profile-line ri-1x"></i> 门诊病历</p>
                 </div>



                 <div class="icon-panel-new" >
                    <h1>{{number4}}</h1>
                    <p><i class="ri-calendar-todo-fill ri-1x"></i> 开放档案</p>
                  </div>

                 <div class="icon-panel-new" style="width: 0px;">
                <el-divider direction="vertical1"></el-divider>
                 </div>
               <div class="icon-panel-new" shadow="never">
                 <h1>{{datanum}}</h1>
                 <p><i class="ri-database-2-fill ri-1x"></i> 数据总量</p>
               </div>
               <div class="icon-panel-new" shadow="never">
                 <h1>{{zone}}%</h1>
                 <p><i class="ri-pie-chart-2-fill ri-1x"></i> 空间占用率</p>
               </div>
               <div class="icon-panel-new" shadow="never">
                 <h1>{{number3}}</h1>
                 <p><i class="ri-database-fill ri-1x"></i> 接入机构</p>
               </div>
               <div class="icon-panel-new" shadow="never">
                 <h1>{{number2}}</h1>
                 <p><i class="ri-user-settings-fill ri-1x"></i> 总用户</p>
               </div>


        		 </el-card>
        </el-col >
        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" style="margin-top: 30px;">
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
<span class="bs-card-title"> <i class="ri-list-settings-line ri-1x"></i> 服务器应用 <el-divider direction="vertical"></el-divider> <i class="ri-settings-2-line ri-1x" @click="showserver=true"></i></span>
<el-carousel indicator-position="none" height="40px" with="130px" direction="vertical" :autoplay="true" style="margin-top: 40px;">
    <el-carousel-item v-for="item in serverall" :key="item">
      <h3 class="medium" style="color: #FFFFFF; margin-left: 10px; font-weight: 200; font-size: 14px;">{{'IP: '+item.ip}}&nbsp;&nbsp;&nbsp;{{'状态：'+item.station}}&nbsp;&nbsp;&nbsp;{{'应用：'+item.content}}</h3>
    </el-carousel-item>
  </el-carousel>
</div>
          </el-card>

        </el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" style="margin-top: 30px;">
          <el-card class="cardstyle">
            <span class="bs-bigdata">{{zhenwucount}}<span class="bs-smunte">条</span></span>
            <span class="bs-card-title"><i class="ri-link-m ri-1x"></i> 电子政务外网专线 <el-divider direction="vertical"></el-divider> <i class="ri-settings-2-line ri-1x" @click="showzhenwu=true"></i></span>
              <div style="float: left; margin-top: -60px; margin-left: 20px;margin-right: 20px; width: 10px;">
              <el-divider direction="vertical1"></el-divider>
               </div>
                <div style=" margin-left: 145px; margin-top: -5px; width: 180px;">
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
                 <span class="bs-card-title" @click="showvpn=true"><i class="ri-shield-keyhole-line ri-1x" @click="showvpn=true"></i> VPN接入用户数 <el-divider direction="vertical"></el-divider>  <a @click="showvpn=true"><i class="ri-settings-2-line ri-1x"  @click="showvpn=true"></i></a> </span>
            <div style="margin-top:-65px; margin-left:130px; width:100%;" ><myChartBarm7></myChartBarm7></div>

            </div>
          </el-card>

        </el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" style="margin-top: 30px;">
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

                          <!-- <div class="icon-panel-newx" shadow="never">
                            <h1><el-avatar  style="color: #f94cc3; background-color: #491f59; font-size: 20px;" >22</el-avatar></h1>
                            <p>耀州区</p>
                          </div>
                          <div class="icon-panel-newx" shadow="never">
                            <h1><el-avatar style="color: #f94cc3; background-color: #491f59; font-size: 20px;" >56</el-avatar></h1>
                            <p>印台区</p>
                          </div>
                          <div class="icon-panel-newx" shadow="never">
                            <h1><el-avatar  style="color: #f94cc3; background-color: #491f59; font-size: 20px;" >8</el-avatar></h1>
                            <p>宜君县</p>
                          </div>
                         <div class="icon-panel-newx" shadow="never">
                           <h1><el-avatar  style="color: #f94cc3; background-color: #491f59; font-size: 20px;" >30</el-avatar></h1>
                           <p>新区</p>
                         </div> -->


          </el-card>

        </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" style="margin-top: 30px;">
          <el-card class="cardstyle1" style="height: 110px;">
            <span style="float: right; margin-right: -12px; font-size: 8px; color: #d8d8d8; margin-top: -15px;"><el-tooltip class="item" effect="dark" content="显示当月异常数据" placement="left"><i class="ri-question-line ri-2x"></i></el-tooltip></span>
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
            <span style="float: right; margin-right: -12px; font-size: 8px; color: #d8d8d8; margin-top: -15px;">上传监测</span>
            <div class="icon-panel-newxx" >
               <h1>{{fuyoudata}}</h1>
               <p>+{{fuyoudataWeek}} <el-tooltip class="item" effect="dark" content="周新增数据" placement="bottom"><i class="ri-error-warning-line ri-1x" style="color: #f94cc3;"></i></el-tooltip></p>
               <p><i class="ri-service-fill ri-1x"></i> 妇幼系统</p>

             </div>
             <div class="icon-panel-newxx" >
                <h1>{{inocucardall}}</h1>
                <p>+{{inocucardWeek}} <el-tooltip class="item" effect="dark" content="周新增数据" placement="bottom"><i class="ri-error-warning-line ri-1x" style="color: #f94cc3;"></i></el-tooltip></p>
                <p><i class="ri-open-arm-fill ri-1x"></i> 计免系统</p>

              </div>
              <div class="icon-panel-newxx" >
                 <h1>{{zyupload}}</h1>
                 <p>+{{zyuploadweek}} <el-tooltip class="item" effect="dark" content="周新增数据" placement="bottom"><i class="ri-error-warning-line ri-1x" style="color: #f94cc3;"></i></el-tooltip></p>
                 <p><i class="ri-hospital-fill ri-1x"></i> 医疗机构</p>
               </div>
          </el-card>
        </el-col>
    </el-row>
    <el-row gutter="20" style="margin-top: 30px;">
      <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
        <el-card class="cardstyle" style="height: 280px;">
          <div class="icon-panel-new" >
             <h1>{{futureall}}</h1>
             <p>+{{futureDay}} <el-tooltip class="item" effect="dark" content="日增数据" placement="bottom"><i class="ri-error-warning-line ri-1x" style="color: #f94cc3;"></i></el-tooltip></p>
             <p><i class="ri-wallet-fill ri-1x"></i> 健康档案系统</p>
           </div>
           <div style="float: left; line-height: 35px; color: #f94cc3; margin: 0 -5px;"><i class="ri-arrow-left-right-fill ri-2x"></i></div>
              <div class="icon-panel-new"  shadow="never">
             <h1>{{alldata}}</h1>
             <p>+{{csdata}} <el-tooltip class="item" effect="dark" content="日增数据" placement="bottom"><i class="ri-error-warning-line ri-1x" style="color: #f94cc3;"></i></el-tooltip></p>
             <p><i class="ri-account-box-fill ri-1x"></i> 全员人口系统</p>
           </div>
           <div style="float: left; line-height: 35px; color: #f94cc3; margin: 0 -5px;"><i class="ri-arrow-left-right-fill ri-2x"></i></div>
           <div class="icon-panel-new" shadow="never">
             <h1>{{wsall}}</h1>
             <p>+{{wsday}} <el-tooltip class="item" effect="dark" content="日增数据" placement="bottom"><i class="ri-error-warning-line ri-1x" style="color: #f94cc3;"></i></el-tooltip></p>
             <p><i class="ri-line-chart-fill ri-1x"></i> 人口监测系统</p>
           </div>
            <div style="margin-top: 110px;">
              <el-divider></el-divider>
             <div style="color:#7c7c7c; margin-left: 10px;">
                             <span style=" line-height: 45px; margin-bottom: 10px;"><i class="ri-exchange-funds-fill ri-1x"></i> 一体机上传监控</span></div>
                             <div class="icon-panel-new" >
                                <h1>{{ytj}}</h1>
                                <p><i class="ri-menu-add-fill ri-1x"></i> 注册机构</p>
                              </div>
                             <div class="icon-panel-new">
                                <h1>{{ytj1}}</h1>
                                <p><i class="ri-arrow-up-circle-fill ri-1x"></i> 上传总数</p>
                              </div>
                              <div class="icon-panel-new" >
                                 <h1>{{ytjnumber}}</h1>
                                 <p><i class="ri-gallery-upload-fill ri-1x"></i> 周上传</p>
                               </div>
              </div>





        </el-card>
        </el-col>
    <el-col :xs="24" :sm="24" :md="15" :lg="15" :xl="15">
      <el-card class="cardstyle"  style="height: 280px;">
        <el-tabs tab-position = "left" style="height: 240px; margin-left: -25px; border: none;">
          <el-tab-pane><span slot="label" style="color: #d1d1d1; border: none; margin-top: 20px;"><i class="ri-numbers-line ri-1x"></i> 分析平台</span>
          <div style="margin-left: 20px;">
            <span style="float: right; margin-right: 0px; font-size: 8px; color: #d8d8d8; margin-top: -10px;"><i class="ri-error-warning-line ri-1x"></i> 部分应用需在内网环境下运行</span>
            <div style="margin-top: 10px; line-height: 30px;">
            <span style="color: #d8d8d8; float: left;">智慧健康驾驶舱：<el-tooltip placement="top"><div slot="content">开发运维：西安网是科技发展有限公司<br/>运维负责：魏冬 （18092978031）</div><i class="ri-spam-line ri-1x" style="margin-right: 10px;">  </i></el-tooltip> </span>
            <a href="https://tc.wsxa.com/MoblieLogin/TestConCentralBrainIndex2" target="_blank"><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 4M宽屏</el-button></a>
            <a href="https://tc.wsxa.com/MoblieLogin/ConCentralBrainIndex" target="_blank"><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 16:9标准屏</el-button></a>
            </div>
            <div style="margin-top: 20px; line-height: 30px;">
            <span style="color: #d8d8d8; float: left;">全民健康数据分析平台：</span>
            <a href="http://10.5.95.11:8080/emr-web/qmjkxt.jsp" target="_blank"><el-tooltip placement="top"><div slot="content">开发运维：天网软件股份有限公司<br/>运维负责：田信林（18681810949）</div><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 市级平台</el-button></el-tooltip></a>
            <span style="color: #d8d8d8;">&nbsp;&nbsp;&nbsp;&nbsp;数据管理平台：</span>
            <a href="http://10.5.95.11:8080/ph/login.jsp" target="_blank"><el-tooltip placement="top"><div slot="content">开发运维：天网软件股份有限公司<br/>运维负责：田信林（18681810949）</div><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 市级平台</el-button></el-tooltip></a>

			<span style="color: #d8d8d8;">&nbsp;&nbsp;&nbsp;&nbsp;医疗机构健康档案管理平台：</span>
			<a href="http://10.5.96.16:8888/browser/manage/index.html#/" target="_blank"><el-tooltip placement="top"><div slot="content">开发运维：天网软件股份有限公司<br/>运维负责：田信林（18681810949）</div><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 市级平台</el-button></el-tooltip></a>

            </div>
            <div style="margin-top: 20px; line-height: 30px;">
            <span style="color: #d8d8d8; float: left;">健康铜川公众服务-统一支付数据分析平台：</span>
            <a href="http://datav.aliyuncs.com/share/1cea8ee4110dc78298c766da9a2897af"  target="_blank"><el-tooltip placement="top"><div slot="content">开发运维：建设银行X西安众盈医疗信息技术有限公司<br/>运维负责：李云涛（13619209100）</div><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 市级平台</el-button></el-tooltip></a>
            </div>
            <div style="margin-top: 20px; line-height: 30px;">
            <span style="color: #d8d8d8; float: left;">人口监测与健康服务综合管理系统： <el-tooltip placement="top"><div slot="content">开发运维：西安网是科技发展有限公司<br/>运维负责：魏冬 （18092978031）</div><i class="ri-spam-line ri-1x" style="margin-right: 10px;">  </i></el-tooltip> </span>
            <a href="http://10.5.96.27:8333/Login/Index" target="_blank" ><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 内网环境</el-button></a>
            <a href="http://1.85.55.129:8333/Home/Index" target="_blank"><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 外网环境</el-button></a>
            </div>
          </div>

          </el-tab-pane>
          <el-tab-pane><span slot="label" style="color: #d1d1d1; border: none;"><i class="ri-hand-coin-line ri-1x"></i> <el-badge :value="21" type="info" class="item">系统应用</el-badge></span>
          <div style="margin-left: 20px;">
            <span style="float: right; margin-right: 0px; font-size: 8px; color: #d8d8d8; margin-top: -10px;">请在内网环境下运行</span>

              <div style="margin-top: 10px; line-height: 30px;"><span style="color: #d8d8d8; float: left;">区域平台： <el-tooltip placement="top"><div slot="content">系统开发：陕西省卫健委<br/>系统运维：天网软件股份有限公司<br/>运维负责：田信林（18681810949）</div><i class="ri-spam-line ri-1x" style="margin-right: 10px;">  </i></el-tooltip> </span>
                      <el-dropdown trigger="click">
                            <span class="el-dropdown-link">
                              <el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;">公卫系统<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                              <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.95.20:8077/ehr/sdc/jsp/login/login_sx.jsp" target="_blank">王益区</el-link></el-dropdown-item>
                              <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.95.15:8077/ehr/sdc/jsp/login/login_sx.jsp" target="_blank">耀州区</el-link></el-dropdown-item>
                              <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.95.16:8088/ehr/sdc/jsp/login/login_sx.jsp" target="_blank">印台区</el-link></el-dropdown-item>
                              <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.95.144:8077/ehr/sdc/jsp/login/login_sx.jsp" target="_blank">宜君县</el-link></el-dropdown-item>
                              <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.95.15:8077/ehr/sdc/jsp/login/login_sx.jsp" target="_blank">新  区</el-link></el-dropdown-item>

                            </el-dropdown-menu>
                          </el-dropdown>&nbsp;&nbsp;
                          <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                  <el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;">HIS系统<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                  <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.95.54/nethis/" target="_blank">王益区</el-link></el-dropdown-item>
                                  <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.95.114/nethis/" target="_blank">耀州区</el-link></el-dropdown-item>
                                  <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.95.84/nethis/" target="_blank">印台区</el-link></el-dropdown-item>
                                  <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.95.144/nethis/" target="_blank">宜君县</el-link></el-dropdown-item>
                                  <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.95.114/nethis/" target="_blank">新  区</el-link></el-dropdown-item>

                                </el-dropdown-menu>
                              </el-dropdown>&nbsp;&nbsp;
                              <el-dropdown trigger="click">
                                    <span class="el-dropdown-link">
                                      <el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;">一体机管理<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                      <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.97.69:8077/ytj" target="_blank">王益区</el-link></el-dropdown-item>
                                      <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.97.69:8077/ytj" target="_blank">耀州区</el-link></el-dropdown-item>
                                      <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.97.69:8077/ytj" target="_blank">印台区</el-link></el-dropdown-item>
                                      <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.97.70:8077/ytj" target="_blank">宜君县</el-link></el-dropdown-item>
                                      <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.97.69:8077/ytj" target="_blank">新  区</el-link></el-dropdown-item>

                                    </el-dropdown-menu>
                                  </el-dropdown>&nbsp;&nbsp;
                                  <el-dropdown trigger="click">
                                        <span class="el-dropdown-link">
                                          <el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;">绩效考核<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                          <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.97.36:8077/pha/sdc/jsp/login/index.jsp" target="_blank">王益区</el-link></el-dropdown-item>
                                          <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.97.36:8077/pha/sdc/jsp/login/index.jsp" target="_blank">耀州区</el-link></el-dropdown-item>
                                          <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.97.36:8077/pha/sdc/jsp/login/index.jsp" target="_blank">印台区</el-link></el-dropdown-item>
                                          <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.97.36:8077/pha/sdc/jsp/login/index.jsp" target="_blank">宜君县</el-link></el-dropdown-item>
                                          <el-dropdown-item  icon="ri-list-settings-fill ri-1x"><el-link :underline="false" href="http://10.5.97.36:8077/pha/sdc/jsp/login/index.jsp" target="_blank">新  区</el-link></el-dropdown-item>

                                        </el-dropdown-menu>
                                      </el-dropdown>
                       </div>

                <div style="margin-top: 10px; line-height: 30px;">
                  <span style="color: #d8d8d8; float: left;">妇幼保健系统：</span>
                  <a href="http://10.5.70.78:8018/mchis/Cjpt/Login.aspx" target="_blank"><el-tooltip placement="top"><div slot="content">开发运维：上海臻鼎健康科技有限公司<br/>运维负责：李迎晨  （13519104343）<br/>系统通过客户端运行</div><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 市级平台</el-button></el-tooltip></a>

                  <span style="color: #d8d8d8; ">&nbsp;&nbsp;&nbsp;&nbsp;计划免疫系统：</span>
                  <a href="http://10.5.70.85:8080/vaccine/" target="_blank"><el-tooltip placement="top"><div slot="content">开发运维：深圳市金卫信信息技术有限公司<br/>运维负责：马森（15829723806）</div><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 市级平台</el-button></el-tooltip></a>
                  </div>
                <div style="margin-top: 10px; line-height: 30px;">
                  <span style="color: #d8d8d8;"> 统计直报系统：<el-tooltip placement="top"><div slot="content">开发运维：北京华宇信息技术有限公司<br/>运维负责：陈君-省卫健委（18182652405）</div><i class="ri-spam-line ri-1x" style="margin-right: 10px;">  </i></el-tooltip></span>
                    <a href="http://10.5.95.52:8811/irpt/esmain/portal/loginportal.do?portalid=WJW" target="_blank"><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 三区平台</el-button></a>
                    <a href="http://10.5.95.144/nethis/" target="_blank"><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;">宜君县平台</el-button></a>

                    <span style="color: #d8d8d8;"> &nbsp;&nbsp;&nbsp;&nbsp;居民健康卡回收系统：</span>
                      <a href="http://10.5.96.16:8888/message/health.html" target="_blank"><el-tooltip placement="top"><div slot="content">开发运维：天网软件股份有限公司<br/>运维负责：张柏（18191202757）</div><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 市级平台</el-button></el-tooltip></a>

                    </div>
                  <div style="margin-top: 10px; line-height: 30px;">
                    <span style="color: #d8d8d8; float: left;">基层统一支付平台：</span>
                    <a href="http://10.5.96.16:8888/payment/" target="_blank"><el-tooltip placement="top"><div slot="content">开发运维：天网软件股份有限公司<br/>运维负责：张柏（18191202757）</div><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 市级平台</el-button></el-tooltip></a>
                    <span style="color: #d8d8d8;"> &nbsp;&nbsp;&nbsp;&nbsp;产房接种信息查询系统：</span>
                    <a href="http://10.5.96.16:8888/message/" target="_blank"><el-tooltip placement="top"><div slot="content">开发运维：天网软件股份有限公司<br/>运维负责：张柏（18191202757）</div><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 市级平台</el-button></el-tooltip></a>

                    </div>
                    <div style="margin-top: 10px; line-height: 30px;">
                      <span style="color: #d8d8d8; float: left;">人脸识别奖扶认证系统：</span>
                      <a href="http://1.85.55.129:8444/manage" target="_blank"><el-tooltip placement="top"><div slot="content">开发运维：天网软件股份有限公司<br/>运维负责：张柏（18191202757）</div><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 市级平台</el-button></el-tooltip></a>
                      <span style="color: #d8d8d8;"> &nbsp;&nbsp;&nbsp;&nbsp;城市独生子女补助金申领系统：</span>
                      <a href="http://10.5.96.26:8083/TCPT/main/syslogin.jsp" target="_blank"><el-tooltip placement="top"><div slot="content">开发运维：西安未来国际股份有限公司<br/>运维负责：王泓涛（18602932974）</div><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 市级平台</el-button></el-tooltip></a>

                      </div>
          </div>

          </el-tab-pane>
          <el-tab-pane><span slot="label" style="color: #d1d1d1; border: none;"><i class="ri-wechat-line ri-1x"></i> <el-badge :value="17" type="info" class="item">公众服务</el-badge></span>
          <div style="margin-left: 20px;">
            <div style="margin-top: 10px; line-height: 30px;">
            <span style="color: #d8d8d8; float: left;"><el-badge :value="13" type="info" class="item">健康铜川公众服务：</el-badge> <el-tooltip placement="top"><div slot="content">开发运维：西安众盈医疗信息技术有限公司<br/>运维负责：李云涛（13619209100）</div><i class="ri-spam-line ri-1x" style="margin-right: 10px; margin-left: 20px;">  </i></el-tooltip> </span>
            <el-popover placement="top" width="100" trigger="click">
               <el-image :src="require('@/assets/jktc.jpg')"></el-image>
             <a slot="reference" target="_blank">
               <el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 扫码关注</el-button>
               </a>
               </el-popover>
               <el-popover placement="right-start"
                            popper-class="popoverBackB"
                            width="400"
                            trigger="click"
                          >
                 <table class="ssss">
                   <tr>
                     <td width="30%">系统总集成:</td>
                     <td colspan="3">众盈医疗</td>

                   </tr>
                   <tr>
                     <td>电子健康卡:</td>
                     <td>众盈医疗</td>
                     <td>预约挂号:</td>
                     <td>微医集团</td>
                   </tr>
                   <tr>
                     <td>接种证查验:</td>
                     <td>金卫信</td>
                     <td>预约接种:</td>
                     <td>金卫信</td>
                   </tr>
                   <tr>
                     <td>妇幼保健服务:</td>
                     <td>上海臻鼎</td>
                     <td>慢病随访查询:</td>
                     <td>众盈医疗</td>
                   </tr>
                   <tr>
                     <td>远程会诊:</td>
                     <td>众盈医疗</td>
                     <td>生育登记:</td>
                     <td>未来国际</td>
                   </tr>
                   <tr>
                     <td>老年人保健:</td>
                     <td>众盈医疗</td>
                     <td>独子补助金:</td>
                     <td>未来国际</td>
                   </tr>
                   <tr>
                     <td>诊间服务&支付:</td>
                     <td>众盈医疗</td>
                     <td>奖扶年审:</td>
                     <td>网是科技</td>
                   </tr>
                   <tr>
                     <td>健康e行:</td>
                     <td>网是科技</td>
                     <td></td>
                     <td></td>
                   </tr>

                 </table>
                 <a slot="reference" target="_blank">
               <el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 查看功能列表</el-button>
               </a>
               </el-popover>
               <div style="margin-top: 20px; line-height: 30px;">
               </div>
               <span style="color: #d8d8d8; float: left;">健康档案开放系统：</span>
               <a href="http://1.85.55.128:5555/hb/logintp.jsp" target="_blank"><el-tooltip placement="top"><div slot="content">开发运维：天网软件股份有限公司<br/>运维负责：张柏（18191202757）</div><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> PC端</el-button></el-tooltip></a>
               <span style="color: #d8d8d8;">&nbsp;&nbsp;&nbsp;&nbsp;健康档案小程序查询系统： <el-tooltip placement="top"><div slot="content">开发运维：陕西康华数据科技有限公司<br/>运维负责：余天宝（17792411850）</div><i class="ri-spam-line ri-1x" style="margin-right: 10px;">  </i></el-tooltip> </span>
               <el-popover placement="top" width="150" trigger="click">
                  <el-image :src="require('@/assets/weixxcx.jpg')"></el-image>
                <a slot="reference" target="_blank">
                  <el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 扫码关注</el-button>
                  </a>
                  </el-popover>
            </div>
            <div style="margin-top: 20px; line-height: 30px;">
            <span style="color: #d8d8d8; float: left;">全息个人健康评估系统： <el-tooltip placement="top"><div slot="content">开发运维：西安网是科技发展有限公司<br/>运维负责：魏冬 （18092978031）</div><i class="ri-spam-line ri-1x" style="margin-right: 10px;">  </i></el-tooltip> </span>
            <a href="https://tc.wsxa.com/MoblieLogin/LoginIndex" target="_blank"><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 人脸识别登录</el-button></a>
            <a href="https://tc.wsxa.com/MoblieLogin/DetailIndex?Userid=1040" target="_blank"><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 全息评估演示</el-button></a>
            </div>
            <div style="margin-top: 20px; line-height: 30px;">
            <span style="color: #d8d8d8; float: left;">健康E行：</span>
            <a href="http://1.85.55.129:8333/HealthyTongChuan/HealthEX/Index" target="_blank"><el-tooltip placement="top"><div slot="content">开发运维：西安网是科技发展有限公司<br/>运维负责：魏冬 （18092978031）</div><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> PC端</el-button></el-tooltip></a>
            </div>
          </div>

          </el-tab-pane>
          <el-tab-pane><span slot="label" style="color: #d1d1d1; border: none;"><i class="ri-shield-keyhole-line ri-1x"></i> VPN管理</span>
          <div style="margin-left: 20px;">
            <div style="margin-top: 10px; line-height: 30px;"><span style="color: #d8d8d8; float: left;">VPN地址： <el-tooltip placement="top"><div slot="content">开发运维：北京天融信科技有限公司<br/>运维负责：马瑜鸿 （13759926632） 岳俊飞（18700486884）</div><i class="ri-spam-line ri-1x" style="margin-right: 10px;">  </i></el-tooltip> </span>
            <a href="https://113.141.45.146:8888" target="_blank"><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 王益区：113.141.45.146</el-button></a>
            <a href="https://113.141.25.14:8888" target="_blank"><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 耀州区：113.141.25.14</el-button></a>
            <a href="https://113.141.45.78:8888" target="_blank"><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 印台区：113.141.45.78</el-button></a>
            <a href="https://61.134.55.122:8888" target="_blank"><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 宜君县：61.134.55.122</el-button></a>
            </div>
            <div style="margin-top: 20px; line-height: 30px;"><span style="color: #d8d8d8; float: left;">VPN管理平台： <el-tooltip placement="top"><div slot="content">开发运维：北京天融信科技有限公司<br/>运维负责：马瑜鸿 （13759926632） 岳俊飞（18700486884）</div><i class="ri-spam-line ri-1x" style="margin-right: 10px;">  </i></el-tooltip> </span>
            <a href="https://113.141.45.146:58081" target="_blank"><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 王益区</el-button></a>
            <a href="https://113.141.25.14:8081" target="_blank"><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 耀州区</el-button></a>
            <a href="https://113.141.45.78:8081" target="_blank"><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 印台区</el-button></a>
            <a href="https://61.134.55.122:8081" target="_blank"><el-button type="info" size="small" style="background-color: #0e1427; border: 1px #FFFF00;"> 宜君县</el-button></a>
            </div>

          </div>

          </el-tab-pane>



          <el-tab-pane><span slot="label" style="color: #d1d1d1; border: none;"><i class="el-icon-s-check"></i> 补助申领</span>
          <div style="margin-left: 20px;">
            <div style="margin-top: 10px; line-height: 30px;"><span style="color: #d8d8d8; float: left;">{{"退休审核完成："+Child[0]}}  </span>
            <span style="color: #d8d8d8; float: left; margin-left: 50px;">{{"退休未审核："+Child[1]}}  </span>
            <span style="color: #d8d8d8; float: left;margin-left: 50px;">{{"无业审核："+Child[2]}}  </span>
            <span style="color: #d8d8d8; float: left;margin-left: 50px;">{{"无业未审核："+Child[3]}}  </span>
            <span style="color: #d8d8d8; float: left;margin-left: 50px;">{{"当日申请："+Child[4]}}  </span>

            </div>


          </div>

          </el-tab-pane>




          </el-tabs>

      </el-card>
    </el-col>

    </el-row>

 <el-footer>

   <div style="position: fixed; bottom: 0px; right: 80px; text-align: right; width: 800px; height: 70px; font-size: 12px; line-height: 25px; color: #a2a2a2; "><span style="float: left; width: 100%;"><i class="ri-tools-line ri-1x"></i> 技术支持 (排名不分先后) ：天网软件 <i class="ri-close-fill ri-1x"></i> 未来国际 <i class="ri-close-fill ri-1x"></i> 深圳金卫信 <i class="ri-close-fill ri-1x"></i> 上海臻鼎 <i class="ri-close-fill ri-1x"></i> 众盈医疗 <i class="ri-close-fill ri-1x"></i> 网是科技 <i class="ri-close-fill ri-1x"></i> 康华数据 </span><span style="float: left; width: 100% ;"> Copyright <i class="ri-copyright-fill ri-1x"> </i> 2015-2020 铜川市卫生健康委员会 Last Contribution Edition <span style="font-size: 8px; color:#0e1427;">by b@ser</span> </span></div>


 </el-footer>





 <div  class="text item">
    <el-dialog title="服务器列表" :visible.sync="showserver" :append-to-body="true"  width="90%"  >
     <el-button type="success"  @click="server2=true" >新 增</el-button>

      <el-select class="chooes" v-model="findserver.udepartment" placeholder="请选择使用单位" clearable>
          <el-option label="天网软件" value="天网软件"></el-option>
          <el-option label="康华数据" value="康华数据"></el-option>
          <el-option label="金卫信" value="金卫信"></el-option>
          <el-option label="北京尚洋" value="北京尚洋"></el-option>
          <el-option label="北京华宇" value="北京华宇"></el-option>
          <el-option label="上海臻鼎" value="上海臻鼎"></el-option>
          <el-option label="未来国际" value="未来国际"></el-option>
          <el-option label="网是科技" value="网是科技"></el-option>
          <el-option label="华大自助设备" value="华大自助设备"></el-option>
          <el-option label="众盈医疗" value="众盈医疗"></el-option>
          <el-option label="东方通" value="东方通"></el-option>
          <el-option label="唐山现代" value="唐山现代"></el-option>

        </el-select>
        <el-input placeholder="请输入Ip" style="width: 200px;" v-model="findserver.ip"  @keyup.enter.native="searchServer"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="searchServer">搜索</el-button>
   <el-table
        :data="serverall.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%; background-color: #000000;">
       <el-table-column  label="序号" width="50">
         <template slot-scope="scope">
           {{(scope.$index)+1}}
         </template>
       </el-table-column>
       <el-table-column
         prop="ip"
         label="IP"
         width='120'

         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="systype"
         label="系统类型"
         width='150'

         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="config"
         label="配置"

         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="lev"
         label="所属区县"
         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="content"
         label="应用"
         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="details"
         label="描述"
         width="300"

         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="udepartment"
         label="使用单位"
         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="station"
         label="状态"
         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="outline"
         label="外网"


         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="notice"
         label="备注"


         >
       </el-table-column>
      <el-table-column label="操作" width="200" >
        <template slot-scope="scope">

          <el-button size="mini" type="success" @click="xgserver(scope.$index, scope.row),server1=true">修 改</el-button>
           <el-button size="mini" type="infor" @click="delserver(scope.$index, scope.row)">删 除</el-button>
        </template>
      </el-table-column>
     </el-table>
     <el-pagination
         @size-change="handleSizeChange"
         @current-change="handleCurrentChange"
         :current-page="currentPage"
         :page-sizes="[8]"
         :page-size="pagesize"
         layout="total, sizes, prev, pager, next, jumper"
         :total="serverall.length">
        </el-pagination>
        </el-dialog>
 </div>





 <div  class="text item">
    <el-dialog title="异常数据列表" :visible.sync="errorshow" :append-to-body="true"  width="90%"  >
     <el-button type="success"  @click="error1=true" >新 增</el-button>
     <el-select class="chooes" v-model="finderror.county" placeholder="请选择所属区县" clearable>
         <el-option label="宜君县" value="宜君县"></el-option>
         <el-option label="印台区" value="印台区"></el-option>
         <el-option label="王益区" value="王益区"></el-option>
         <el-option label="耀州区" value="耀州区"></el-option>
          <el-option label="新区" value="新区"></el-option>


       </el-select>
       <el-select class="chooes" v-model="finderror.typr" placeholder="请选择异常类型" clearable>

               <el-option label="机构变更" value="机构变更"></el-option>
               <el-option label="人员变更" value="人员变更"></el-option>
               <el-option label="档案迁移" value="档案迁移"></el-option>
               <el-option label="公卫录错" value="公卫录错"></el-option>
               <el-option label="HIS录错" value="HIS录错"></el-option>
               <el-option label="统计错误" value="统计错误"></el-option>
               <el-option label="其他" value="其他"></el-option>
             </el-select>


         </el-select>
          <el-button type="primary" icon="el-icon-search" @click="searchError">搜索</el-button>
   <el-table
        :data="errordata.slice((errorcurrentPage-1)*errorpagesize,errorcurrentPage*errorpagesize)" style="width: 100%; background-color: #000000;">
       <el-table-column  label="序号" width="50">
         <template slot-scope="scope">
           {{(scope.$index)+1}}
         </template>
       </el-table-column>
       <el-table-column
         prop="county"
         label="区县"


         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="jgname"
         label="机构名称"


         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="createdate"
         label="创建日期"

         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="typr"
         label="异常类型"
         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="notics"
         label="异常描述"
         >
       </el-table-column>
        <el-table-column label="照片"  width="400">
           <template slot-scope="scope">
              <el-popover placement="top-start" trigger="click"> <!--trigger属性值：hover、click、focus 和 manual-->
                <a :href="scope.row.jpg" target="_blank" title="查看最大化图片">
                  <img :src="scope.row.jpg" style="width: 500px;height: 300px" v-show="scope.row.jpg!=null?true:false">
                </a>
                <img slot="reference" :src="scope.row.jpg" style="width: 50px;height: 50px; cursor:pointer" v-show="scope.row.jpg!=null?true:false">
                 </el-popover>
                 <el-popover placement="top-start" trigger="click">
                <a :href="scope.row.jpga" target="_blank" title="查看最大化图片">
                  <img :src="scope.row.jpga" style="width: 500px;height: 300px" v-show="scope.row.jpga!=null?true:false">
                </a>

                <img slot="reference" :src="scope.row.jpga" style="width: 50px;height: 50px; cursor:pointer" v-show="scope.row.jpga!=null?true:false">
                </el-popover>
                <el-popover placement="top-start" trigger="click">
                <a :href="scope.row.jpgb" target="_blank" title="查看最大化图片">
                  <img :src="scope.row.jpgb" style="width: 500px;height: 300px" v-show="scope.row.jpgb!=null?true:false">
                </a>

                <img slot="reference" :src="scope.row.jpgb" style="width: 50px;height: 50px; cursor:pointer" v-show="scope.row.jpgb!=null?true:false">
                 </el-popover>
                <el-popover placement="top-start" trigger="click">
                <a :href="scope.row.jpgc" target="_blank" title="查看最大化图片">
                  <img :src="scope.row.jpgc" style="width: 500px;height: 300px" v-show="scope.row.jpgc!=null?true:false">
                </a>
                <img slot="reference" :src="scope.row.jpgc" style="width: 50px;height: 50px; cursor:pointer" v-show="scope.row.jpgc!=null?true:false">
                 </el-popover>
                <el-popover placement="top-start" trigger="click">
                <a :href="scope.row.jpgd" target="_blank" title="查看最大化图片">
                  <img :src="scope.row.jpgd" style="width: 500px;height: 300px" v-show="scope.row.jpgd!=null?true:false">
                </a>
                <img slot="reference" :src="scope.row.jpgd" style="width: 50px;height: 50px; cursor:pointer" v-show="scope.row.jpgd!=null?true:false">
              </el-popover>



          　　</template>


       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="results"
         label="结果"
         >
       </el-table-column>



      <el-table-column label="操作" width="200" >
        <template slot-scope="scope">

            <el-button size="mini" type="success" @click="xgerrors(scope.$index, scope.row),error2=true">修 改</el-button>
            <el-button size="mini" type="info" @click="delerrors(scope.$index, scope.row)">删 除</el-button>


        </template>
      </el-table-column>
     </el-table>
     <el-pagination
         @size-change="errorhandleSizeChange"
         @current-change="errorhandleCurrentChange"
         :current-page="errorcurrentPage"
         :page-sizes="[8]"
         :page-size="errorpagesize"
         layout="total, sizes, prev, pager, next, jumper"
         :total="errordata.length">
        </el-pagination>
        </el-dialog>
 </div>


 <div>
       <el-dialog title="异常数据新增" :visible.sync="error1" :append-to-body="true">
        <el-form :model="adderror">
          <el-form-item label="区县" :label-width="formLabelWidth" style="300px; display: inline-block;" >
            <el-select  v-model="adderror.county" placeholder="请选择">
                <el-option label="宜君县" value="宜君县"></el-option>
                <el-option label="印台区" value="印台区"></el-option>
                <el-option label="耀州区" value="耀州区"></el-option>
                <el-option label="新区" value="新区"></el-option>
                <el-option label="王益区" value="王益区"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="机构名称" :label-width="formLabelWidth" style="300px; display: inline-block;" >
            <el-input v-model="adderror.jgname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="录入日期" :label-width="formLabelWidth"  style="300px; display: inline-block;">
            <!-- <el-input type="date" v-model="adderror.createdate"></el-input> -->
            <el-date-picker
                  v-model="adderror.createdate"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期">
                </el-date-picker>
          </el-form-item>
          <el-form-item label="异常类型" :label-width="formLabelWidth" style="300px; display: inline-block;" >
            <el-select  v-model="adderror.typr" placeholder="请选择">
                <el-option label="机构变更" value="机构变更"></el-option>
                <el-option label="人员变更" value="人员变更"></el-option>
                <el-option label="档案迁移" value="档案迁移"></el-option>
                <el-option label="公卫录错" value="公卫录错"></el-option>
                <el-option label="HIS录错" value="HIS录错"></el-option>
                <el-option label="统计错误" value="统计错误"></el-option>
                <el-option label="其他" value="其他"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="异常描述" :label-width="formLabelWidth" style="width: 300px; display: inline-block;" >
            <el-input v-model="adderror.notics" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="处理结果" :label-width="formLabelWidth"  style="width: 300px; display: inline-block;">
           <el-select  v-model="adderror.results" placeholder="请选择">
               <el-option label="已处理" value="已处理"></el-option>
               <el-option label="上报" value="上报"></el-option>
               <el-option label="研发处理" value="研发处理"></el-option>
               <el-option label="延后处理" value="延后处理"></el-option>
               <el-option label="无法处理" value="无法处理"></el-option>

               <el-option label="其他" value="其他"></el-option>
             </el-select>
          </el-form-item>



          <el-form-item label="异常图片" :label-width="formLabelWidth">
                        <el-upload style="display: inline-block;"
                          class="avatar-uploader"
                          action="http://10.5.96.16:8888/administration/duns/upload"
                          accept=".png,.jpg,.pdf"
                          :show-file-list="false"
                          :on-success="successRes"
                          :before-upload="beforeAvatarUpload">
                          <img v-if="imageUrl" :src="imageUrl" class="avatar">
                          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>



                         <el-upload style="display: inline-block;"
                           class="avatar-uploader"
                           action="http://10.5.96.16:8888/administration/duns/upload"
                           accept=".png,.jpg,.pdf"
                           :show-file-list="false"
                           :on-success="successResA"
                           :before-upload="beforeAvatarUpload">
                           <img v-if="imageUrlA" :src="imageUrlA" class="avatar">
                           <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                         </el-upload>
                                     <el-upload style="display: inline-block;"
                                       class="avatar-uploader"
                                       action="http://10.5.96.16:8888/administration/duns/upload"
                                       accept=".png,.jpg,.pdf"
                                       :show-file-list="false"
                                       :on-success="successResB"
                                       :before-upload="beforeAvatarUpload">
                                       <img v-if="imageUrlB" :src="imageUrlB" class="avatar">
                                       <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                     </el-upload>



                                           <el-upload style="display: inline-block;"
                                             class="avatar-uploader"
                                             action="http://10.5.96.16:8888/administration/duns/upload"
                                             accept=".png,.jpg,.pdf"
                                             :show-file-list="false"
                                             :on-success="successResC"
                                             :before-upload="beforeAvatarUpload">
                                             <img v-if="imageUrlC" :src="imageUrlC" class="avatar">
                                             <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                           </el-upload>
                                           <el-upload style="display: inline-block;"
                                             class="avatar-uploader"
                                             action="http://10.5.96.16:8888/administration/duns/upload"
                                             accept=".png,.jpg,.pdf"
                                             :show-file-list="false"
                                             :on-success="successResD"
                                             :before-upload="beforeAvatarUpload">
                                             <img v-if="imageUrlD" :src="imageUrlD" class="avatar">
                                             <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                           </el-upload>
                                            </el-form-item>
                              <el-form-item label="PDF文件" :label-width="formLabelWidth" >
                                   <el-upload class="upload-demo"
                                   			accept=".pdf"
                                   			:on-progress="progressUpload"
                                   			:on-success="successResPDF"
                                   			drag
                                   			action="http://10.5.96.16:8888/administration/duns/upload"
                                   			:before-upload="beforeAvatarUpload"
                                   			multiple
                                         :limit="1"
                                   			:show-file-list="true" >
                                   				<i class="el-icon-upload"></i>
                                   				<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                   				<div class="el-upload__tip" slot="tip">只能上传PDF文件，且不超过10MB</div>
                                   			</el-upload>
                                  </el-form-item>





         </el-form>
         <div slot="footer" class="dialog-footer">
           <el-button @click="error1 = false">取 消</el-button>
           <el-button type="primary" @click="adderrors">新 增</el-button>
         </div>
       </el-dialog>
 </div>
 <div>
       <el-dialog title="异常数据修改" :visible.sync="error2" :append-to-body="true">
        <el-form :model="xqerror">
          <el-form-item label="区县" :label-width="formLabelWidth"  style="300px; display: inline-block;">
              <el-select  v-model="xqerror.county" placeholder="请选择">
                  <el-option label="宜君县" value="宜君县"></el-option>
                  <el-option label="印台区" value="印台区"></el-option>
                  <el-option label="耀州区" value="耀州区"></el-option>
                  <el-option label="新区" value="新区"></el-option>
                  <el-option label="王益区" value="王益区"></el-option>
                </el-select>
          </el-form-item>
          <el-form-item label="机构名称" :label-width="formLabelWidth"  style="300px; display: inline-block;">
            <el-input v-model="xqerror.jgname" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="录入日期" :label-width="formLabelWidth"  style="300px; display: inline-block;">
            <el-date-picker
                  v-model="xqerror.createdate"
                  type="date"
                  placeholder="选择日期时间" value-format="yyyy-MM-dd">
                </el-date-picker>
          </el-form-item>
          <el-form-item label="异常类型" :label-width="formLabelWidth"  style="300px; display: inline-block;">
            <el-select  v-model="xqerror.typr" placeholder="请选择">
                <el-option label="机构变更" value="机构变更"></el-option>
                <el-option label="人员变更" value="人员变更"></el-option>
                <el-option label="档案迁移" value="档案迁移"></el-option>
                <el-option label="公卫录错" value="公卫录错"></el-option>
                <el-option label="HIS录错" value="HIS录错"></el-option>
                <el-option label="统计错误" value="统计错误"></el-option>
                <el-option label="其他" value="其他"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="异常描述" :label-width="formLabelWidth"  style="300px; display: inline-block;">
            <el-input v-model="xqerror.notics" autocomplete="off" ></el-input>
          </el-form-item>

          <el-form-item label="处理结果" :label-width="formLabelWidth"  style="300px; display: inline-block;">
           <el-select  v-model="xqerror.results" placeholder="请选择">
               <el-option label="已处理" value="已处理"></el-option>
               <el-option label="上报" value="上报"></el-option>
               <el-option label="研发处理" value="研发处理"></el-option>
               <el-option label="延后处理" value="延后处理"></el-option>
               <el-option label="无法处理" value="无法处理"></el-option>

               <el-option label="其他" value="其他"></el-option>
             </el-select>
          </el-form-item>
          <el-form-item label="图片" :label-width="formLabelWidth"  style="300px; display: inline-block;">

            <img :src="xqerror.jpg" style="width: 200px;height: 200px;" v-show="xqerror.jpg!=null?true:false">
            <img :src="xqerror.jpga" style="width: 200px;height: 200px;" v-show="xqerror.jpga!=null?true:false">
            <img :src="xqerror.jpgb" style="width: 200px;height: 200px;" v-show="xqerror.jpgb!=null?true:false">
            <img :src="xqerror.jpgc" style="width: 200px;height: 200px;" v-show="xqerror.jpgc!=null?true:false">
            <img :src="xqerror.jpgd" style="width: 200px;height: 200px;" v-show="xqerror.jpgd!=null?true:false">
          </el-form-item>

          <el-form-item label="异常图片" :label-width="formLabelWidth">
                        <el-upload style="display: inline-block;"
                          class="avatar-uploader"
                          action="http://10.5.96.16:8888/administration/duns/upload"
                          accept=".png,.jpg,.pdf"
                          :show-file-list="false"
                          :on-success="xgsuccessRes"
                          :before-upload="beforeAvatarUpload">
                          <img v-if="xgimageUrl" :src="xgimageUrl" class="avatar">
                          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>



                         <el-upload style="display: inline-block;"
                           class="avatar-uploader"
                           action="http://10.5.96.16:8888/administration/duns/upload"
                           accept=".png,.jpg,.pdf"
                           :show-file-list="false"
                           :on-success="xgsuccessResA"
                           :before-upload="beforeAvatarUpload">
                           <img v-if="xgimageUrlA" :src="xgimageUrlA" class="avatar">
                           <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                         </el-upload>
                                     <el-upload style="display: inline-block;"
                                       class="avatar-uploader"
                                       action="http://10.5.96.16:8888/administration/duns/upload"
                                       accept=".png,.jpg,.pdf"
                                       :show-file-list="false"
                                       :on-success="xgsuccessResB"
                                       :before-upload="beforeAvatarUpload">
                                       <img v-if="xgimageUrlB" :src="xgimageUrlB" class="avatar">
                                       <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                     </el-upload>



                                           <el-upload style="display: inline-block;"
                                             class="avatar-uploader"
                                             action="http://10.5.96.16:8888/administration/duns/upload"
                                             accept=".png,.jpg,.pdf"
                                             :show-file-list="false"
                                             :on-success="xgsuccessResC"
                                             :before-upload="beforeAvatarUpload">
                                             <img v-if="xgimageUrlC" :src="xgimageUrlC" class="avatar">
                                             <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                           </el-upload>
                                           <el-upload style="display: inline-block;"
                                             class="avatar-uploader"
                                             action="http://10.5.96.16:8888/administration/duns/upload"
                                             accept=".png,.jpg,.pdf"
                                             :show-file-list="false"
                                             :on-success="xgsuccessResD"
                                             :before-upload="beforeAvatarUpload">
                                             <img v-if="xgimageUrlD" :src="xgimageUrlD" class="avatar">
                                             <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                           </el-upload>
                                            </el-form-item>

          <el-form-item label="PDF" :label-width="formLabelWidth" v-show="pdfshow"  >

           <!-- <a :href="xqerror.pdf">文件预览</a> -->
           <el-button type="success" @click="look">文件预览</el-button>
          </el-form-item>
          <el-form-item label="PDF文件" :label-width="formLabelWidth" >
               <el-upload class="upload-demo"
               			accept=".pdf"

               			:on-success="xgsuccessResPDF"
               			drag
               			action="http://10.5.96.16:8888/administration/duns/upload"
               			:before-upload="beforeAvatarUpload"
               			multiple
                     :limit="1"
               			:show-file-list="true" >
               				<i class="el-icon-upload"></i>
               				<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
               				<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过10MB</div>
               			</el-upload>
              </el-form-item>
          <!-- <el-form-item label="异常图片" :label-width="formLabelWidth" style=" display: inline-block;">

                 <!-- <el-upload class="upload-demo"
                  			accept=".png,.jpg,.pdf"
                  			:on-progress="progress"
                  			:on-success="success"
                  			drag
                  			action="http://10.5.96.16:8888/administration/duns/upload"
                  			:before-upload="beforeAvatar"
                  			multiple
                        :file-list="fileList"

                  			:show-file-list="true" >
                  				<i class="el-icon-upload"></i>
                  				<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  				<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过10MB</div>
                  			</el-upload>

                      <el-upload
                        action="http://10.5.96.16:8888/administration/duns/upload"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                      </el-upload>
                      <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                      </el-dialog>

                </el-form-item> -->






         </el-form>
         <div slot="footer" class="dialog-footer">
           <el-button @click="error2 = false">取 消</el-button>
           <el-button type="primary" @click="updateerror">确 定</el-button>

         </div>
       </el-dialog>
 </div>






 <div  class="text item">
    <el-dialog title="VPN列表" :visible.sync="showvpn" :append-to-body="true"  width="90%"  >
      <el-button type="success"  @click="vpn2=true" >新 增</el-button>

       <el-select class="chooes" v-model="findvpn.county" placeholder="请选择所属区县" clearable>
           <el-option label="王益区" value="王益区"></el-option>
           <el-option label="宜君县" value="宜君县"></el-option>
           <el-option label="新区" value="新区"></el-option>
           <el-option label="耀州区" value="耀州区"></el-option>
           <el-option label="印台区" value="印台区"></el-option>


         </el-select>
       <el-select class="chooes" v-model="findvpn.groups" placeholder="请选择所属组" clearable>
           <el-option label="耀州区VPN用户备份" value="耀州区VPN用户备份"></el-option>
           <el-option label="耀州区VPN用户" value="耀州区VPN用户"></el-option>
           <el-option label="王益区VPN扩展用户" value="王益区VPN扩展用户"></el-option>
           <el-option label="印台区VPN用户备用" value="印台区VPN用户备用"></el-option>
           <el-option label="新农合" value="新农合"></el-option>


           <el-option label="印台区VPN扩展用户" value="印台区VPN扩展用户"></el-option>
           <el-option label="宜君县VPN用户备份" value="宜君县VPN用户备份"></el-option>
           <el-option label="王益区VPN用户" value="王益区VPN用户"></el-option>
           <el-option label="印台区VPN用户" value="印台区VPN用户"></el-option>
           <el-option label="宜君县VPN用户" value="宜君县VPN用户"></el-option>

           <el-option label="测试账户" value="测试账户"></el-option>
           <el-option label="测试账号" value="测试账号"></el-option>
           <el-option label="王益区VPN用户备用" value="王益区VPN用户备用"></el-option>
           <el-option label="宜君县VPN用户扩展" value="宜君县VPN用户扩展"></el-option>
           <el-option label="耀州区VPN扩展用户" value="耀州区VPN扩展用户"></el-option>



         </el-select>
         <el-input placeholder="请输入用户描述" style="width: 200px;" v-model="findvpn.users" @keyup.enter.native="searchvpn"></el-input>
       <el-button type="primary"  icon="el-icon-search" @click="searchvpn">搜索</el-button>
   <el-table
        :data="vpnall.slice((vpncurrentPage-1)*vpnpagesize,vpncurrentPage*vpnpagesize)" style="width: 100%; background-color: #000000;">
       <el-table-column  label="序号" width="50">
         <template slot-scope="scope">
           {{(scope.$index)+1}}
         </template>
       </el-table-column>
       <el-table-column
         prop="numbers"
         label="账号"

         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="county"
         label="所在区县"
         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="station"
         label="状态"

         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="groups"
         label="所属组"
         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="users"
         label="用户描述"
         width="200"
         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="work"
         label="工作模式"


         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="authen"
         label="认证策略"
         >
       </el-table-column>

      <el-table-column label="操作"  width="200">
        <template slot-scope="scope">

          <el-button size="mini" type="success" @click="xgvpn(scope.$index, scope.row),vpn1=true">修 改</el-button>
           <el-button size="mini" type="infor" @click="delvpn(scope.$index, scope.row)">删 除</el-button>
        </template>
      </el-table-column>
     </el-table>
     <el-pagination
         @size-change="vpnhandleSizeChange"
         @current-change="vpnhandleCurrentChange"
         :current-page="vpncurrentPage"
         :page-sizes="[8]"
         :page-size="vpnpagesize"
         layout="total, sizes, prev, pager, next, jumper"
         :total="vpnall.length">
        </el-pagination>
        </el-dialog>
 </div>





<div  class="text item">
    <el-dialog title="电子政务外网列表" :visible.sync="showzhenwu" :append-to-body="true"  width="90%"  >
      <el-button type="success"  @click="gov2=true">新 增</el-button>

       <el-select class="chooes" v-model="findgover.lev" placeholder="请选择所属区县" clearable>
           <el-option label="王益区" value="王益区"></el-option>
           <el-option label="宜君县" value="宜君县"></el-option>
           <el-option label="新区" value="新区"></el-option>
           <el-option label="耀州区" value="耀州区"></el-option>
           <el-option label="印台区" value="印台区"></el-option>


         </el-select>
          <el-input placeholder="请输入医院名称" style="width: 200px;" v-model="findgover.name" @keyup.enter.native="searchgov"></el-input>
       <el-button type="primary"  icon="el-icon-search" @click="searchgov">搜索</el-button>
   <el-table
        :data="zhenwuall.slice((zwcurrentPage-1)*zwpagesize,zwcurrentPage*zwpagesize)" style="width: 100%; background-color: #000000;" >
       <el-table-column  label="序号" width="50">
         <template slot-scope="scope">
           {{(scope.$index)+1}}
         </template>
         <!-- <el-button @click="clearFilter">清除所有过滤器</el-button> -->
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="lev"
         label="级别"
         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="type"
         label="类型"
         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="name"
         label="名称"

         >
       </el-table-column>

       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="input"
         label="网络入口"
         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="operators"
         label="运营商"


         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="port"
         label="端口"
         >
       </el-table-column>




       <el-table-column
         prop="vlanid" :show-overflow-tooltip="true"
         label="VLAN ID"
         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="ipaddress"
         label="主机段地址"
         width="120"
         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="subnet"
         label="子网掩码"
         width="130"

         >
       </el-table-column>
       <el-table-column :show-overflow-tooltip="true"
         prop="gateway"
         label="网关"
         width="120"
         >
       </el-table-column>


      <el-table-column label="操作" width="200">
        <template slot-scope="scope">

          <el-button size="mini" type="success"  @click="xggov(scope.$index, scope.row),gov1=true">修 改</el-button>
           <el-button size="mini" type="infor" @click="delgov(scope.$index, scope.row)">删 除</el-button>
        </template>
      </el-table-column>
     </el-table>
     <el-pagination
         @size-change="zwhandleSizeChange"
         @current-change="zwhandleCurrentChange"
         :current-page="zwcurrentPage"
         :page-sizes="[8]"
         :page-size="zwpagesize"
         layout="total, sizes, prev, pager, next, jumper"
         :total="zhenwuall.length">
        </el-pagination>
        </el-dialog>
 </div>






 <div>
       <el-dialog title="服务器修改" :visible.sync="server1" :append-to-body="true">
        <el-form :model="ser">


          <el-form-item label="Ip" :label-width="formLabelWidth"  >
            <el-input v-model="ser.ip" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="系统类型" :label-width="formLabelWidth"  >
            <el-input v-model="ser.systype" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="配置" :label-width="formLabelWidth"  >
            <el-input v-model="ser.config" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所属区县" :label-width="formLabelWidth"  >
            <el-select  v-model="ser.lev" placeholder="请选择">
                <el-option label="市级" value="3"></el-option>
                <el-option label="王益区" value="1"></el-option>
                <el-option label="宜君县" value="2"></el-option>
                <el-option label="耀州区" value="2"></el-option>
                <el-option label="印台区" value="2"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="应用" :label-width="formLabelWidth"  >
            <el-input v-model="ser.content" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="描述" :label-width="formLabelWidth"  >
            <el-input v-model="ser.details" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="供应商" :label-width="formLabelWidth"  >
            <el-select class="chooes" v-model="ser.udepartment" placeholder="请选择使用单位" clearable>
                <el-option label="天网软件" value="天网软件"></el-option>
                <el-option label="康华数据" value="康华数据"></el-option>
                <el-option label="金卫信" value="金卫信"></el-option>
                <el-option label="北京尚洋" value="北京尚洋"></el-option>
                <el-option label="北京华宇" value="北京华宇"></el-option>
                <el-option label="上海臻鼎" value="上海臻鼎"></el-option>
                <el-option label="未来国际" value="未来国际"></el-option>
                <el-option label="网是科技" value="网是科技"></el-option>
                <el-option label="华大自助设备" value="华大自助设备"></el-option>
                <el-option label="众盈医疗" value="众盈医疗"></el-option>
                <el-option label="东方通" value="东方通"></el-option>
                <el-option label="唐山现代" value="唐山现代"></el-option>

              </el-select>
          </el-form-item>
          <el-form-item label="状态" :label-width="formLabelWidth"  >
            <el-input v-model="ser.station" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="外网" :label-width="formLabelWidth"  >
            <el-input v-model="ser.outline" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="备注" :label-width="formLabelWidth"  >
            <el-input v-model="ser.notice" autocomplete="off"></el-input>
          </el-form-item>



         </el-form>
         <div slot="footer" class="dialog-footer">
           <el-button @click="server1 = false">取 消</el-button>
           <el-button type="primary" @click="updateser">修 改</el-button>
         </div>
       </el-dialog>
 </div>



 <div>
       <el-dialog title="服务器新增" :visible.sync="server2" :append-to-body="true">
        <el-form :model="addser"  size="mini" label-width="80px">


          <el-form-item label="Ip" :label-width="formLabelWidth"  >
            <el-input v-model="addser.ip" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="系统类型" :label-width="formLabelWidth"  >
            <el-input v-model="addser.systype" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="配置" :label-width="formLabelWidth"  >
            <el-input v-model="addser.config" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所属区县" :label-width="formLabelWidth" >
           <el-select  v-model="addser.lev" placeholder="请选择">
               <el-option label="市级" value="3"></el-option>
               <el-option label="王益区" value="1"></el-option>
               <el-option label="宜君县" value="2"></el-option>
               <el-option label="耀州区" value="2"></el-option>
               <el-option label="印台区" value="2"></el-option>
             </el-select>
          </el-form-item>
          <el-form-item label="应用" :label-width="formLabelWidth"  >
            <el-input v-model="addser.content" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="描述" :label-width="formLabelWidth"  >
            <el-input v-model="addser.details" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="供应商" :label-width="formLabelWidth"  >
            <el-select class="chooes" v-model="addser.udepartment" placeholder="请选择使用单位" clearable>
                <el-option label="天网软件" value="天网软件"></el-option>
                <el-option label="康华数据" value="康华数据"></el-option>
                <el-option label="金卫信" value="金卫信"></el-option>
                <el-option label="北京尚洋" value="北京尚洋"></el-option>
                <el-option label="北京华宇" value="北京华宇"></el-option>
                <el-option label="上海臻鼎" value="上海臻鼎"></el-option>
                <el-option label="未来国际" value="未来国际"></el-option>
                <el-option label="网是科技" value="网是科技"></el-option>
                <el-option label="华大自助设备" value="华大自助设备"></el-option>
                <el-option label="众盈医疗" value="众盈医疗"></el-option>
                <el-option label="东方通" value="东方通"></el-option>
                <el-option label="唐山现代" value="唐山现代"></el-option>

              </el-select>
          </el-form-item>
          <el-form-item label="状态" :label-width="formLabelWidth"  >


            <el-select  v-model="addser.station" placeholder="请选择">
                <el-option label="待分配" value="待分配"></el-option>
                <el-option label="已关机" value="已关机"></el-option>
                <el-option label="运行中" value="运行中"></el-option>
                <el-option label="异常机" value="异常机"></el-option>

              </el-select>
          </el-form-item>
          <el-form-item label="外网" :label-width="formLabelWidth"  >
            <el-input v-model="addser.outline" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="备注" :label-width="formLabelWidth"  >
            <el-input v-model="addser.notice" autocomplete="off"></el-input>
          </el-form-item>



         </el-form>
         <div slot="footer" class="dialog-footer">
           <el-button @click="server2 = false">取 消</el-button>
           <el-button type="primary" @click="addsers">新 增</el-button>
         </div>
       </el-dialog>
 </div>




 <div>
       <el-dialog title="VPN修改" :visible.sync="vpn1" :append-to-body="true">
        <el-form :model="vpns">


          <el-form-item label="账号" :label-width="formLabelWidth"  >
            <el-input v-model="vpns.numbers" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所属区县" :label-width="formLabelWidth"  >
            <el-select  v-model="vpns.county" placeholder="请选择"  >
                <el-option label="王益区" value="王益区"></el-option>
                <el-option label="宜君县" value="宜君县"></el-option>
                <el-option label="新区" value="新区"></el-option>
                <el-option label="耀州区" value="耀州区"></el-option>

                <el-option label="印台区" value="印台区"></el-option>

              </el-select>
          </el-form-item>
           <el-form-item label="状态" :label-width="formLabelWidth"  >
                      <el-select  v-model="vpns.station" placeholder="请选择"  >
                          <el-option label="启用" value="启用"></el-option>
                          <el-option label="禁用" value="禁用"></el-option>

                        </el-select>
                    </el-form-item>

          <el-form-item label="所属组" :label-width="formLabelWidth"  >
            <el-select class="chooes" v-model="vpns.groups" placeholder="请选择所属组" clearable>
                <el-option label="耀州区VPN用户备份" value="耀州区VPN用户备份"></el-option>
                <el-option label="耀州区VPN用户" value="耀州区VPN用户"></el-option>
                <el-option label="王益区VPN扩展用户" value="王益区VPN扩展用户"></el-option>
                <el-option label="印台区VPN用户备用" value="印台区VPN用户备用"></el-option>
                <el-option label="新农合" value="新农合"></el-option>


                <el-option label="印台区VPN扩展用户" value="印台区VPN扩展用户"></el-option>
                <el-option label="宜君县VPN用户备份" value="宜君县VPN用户备份"></el-option>
                <el-option label="王益区VPN用户" value="王益区VPN用户"></el-option>
                <el-option label="印台区VPN用户" value="印台区VPN用户"></el-option>
                <el-option label="宜君县VPN用户" value="宜君县VPN用户"></el-option>

                <el-option label="测试账户" value="测试账户"></el-option>
                <el-option label="测试账号" value="测试账号"></el-option>
                <el-option label="王益区VPN用户备用" value="王益区VPN用户备用"></el-option>
                <el-option label="宜君县VPN用户扩展" value="宜君县VPN用户扩展"></el-option>
                <el-option label="耀州区VPN扩展用户" value="耀州区VPN扩展用户"></el-option>



              </el-select>
          </el-form-item>
          <el-form-item label="用户描述" :label-width="formLabelWidth"  >
            <el-input v-model="vpns.users" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="工作模式" :label-width="formLabelWidth"  >
            <el-input v-model="vpns.work" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="认证策略" :label-width="formLabelWidth"  >
            <el-input v-model="vpns.authen" autocomplete="off"></el-input>
          </el-form-item>




         </el-form>
         <div slot="footer" class="dialog-footer">
           <el-button @click="vpn1 = false">取 消</el-button>
           <el-button type="primary" @click="updatevpn">修 改</el-button>
         </div>
       </el-dialog>
 </div>



 <div>
       <el-dialog title="VPN新增" :visible.sync="vpn2" :append-to-body="true">
        <el-form :model="addvpn">


          <el-form-item label="账号" :label-width="formLabelWidth"  >
            <el-input v-model="addvpn.numbers" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所属区县" :label-width="formLabelWidth"  >
            <el-select  v-model="addvpn.county" placeholder="请选择"  >
                <el-option label="王益区" value="王益区"></el-option>
                <el-option label="宜君县" value="宜君县"></el-option>
                <el-option label="新区" value="新区"></el-option>
                <el-option label="耀州区" value="耀州区"></el-option>

                <el-option label="印台区" value="印台区"></el-option>

              </el-select>
          </el-form-item>
          <el-form-item label="状态" :label-width="formLabelWidth"  >
            <el-select  v-model="addvpn.station" placeholder="请选择"  >
                <el-option label="启用" value="启用"></el-option>
                <el-option label="禁用" value="禁用"></el-option>

              </el-select>
          </el-form-item>



          <el-form-item label="所属组" :label-width="formLabelWidth"  >
            <el-select class="chooes" v-model="addvpn.groups" placeholder="请选择所属组" clearable>
                <el-option label="耀州区VPN用户备份" value="耀州区VPN用户备份"></el-option>
                <el-option label="耀州区VPN用户" value="耀州区VPN用户"></el-option>
                <el-option label="王益区VPN扩展用户" value="王益区VPN扩展用户"></el-option>
                <el-option label="印台区VPN用户备用" value="印台区VPN用户备用"></el-option>
                <el-option label="新农合" value="新农合"></el-option>


                <el-option label="印台区VPN扩展用户" value="印台区VPN扩展用户"></el-option>
                <el-option label="宜君县VPN用户备份" value="宜君县VPN用户备份"></el-option>
                <el-option label="王益区VPN用户" value="王益区VPN用户"></el-option>
                <el-option label="印台区VPN用户" value="印台区VPN用户"></el-option>
                <el-option label="宜君县VPN用户" value="宜君县VPN用户"></el-option>

                <el-option label="测试账户" value="测试账户"></el-option>
                <el-option label="测试账号" value="测试账号"></el-option>
                <el-option label="王益区VPN用户备用" value="王益区VPN用户备用"></el-option>
                <el-option label="宜君县VPN用户扩展" value="宜君县VPN用户扩展"></el-option>
                <el-option label="耀州区VPN扩展用户" value="耀州区VPN扩展用户"></el-option>



              </el-select>
          </el-form-item>
          <el-form-item label="用户描述" :label-width="formLabelWidth"  >
            <el-input v-model="addvpn.users" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="工作模式" :label-width="formLabelWidth"  >
            <el-input v-model="addvpn.work" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="认证策略" :label-width="formLabelWidth"  >
            <el-input v-model="addvpn.authen" autocomplete="off"></el-input>
          </el-form-item>




         </el-form>
         <div slot="footer" class="dialog-footer">
           <el-button @click="vpn2 = false">取 消</el-button>
           <el-button type="primary" @click="addvpns">新 增</el-button>
         </div>
       </el-dialog>
 </div>



<div>
       <el-dialog title="电子政务外网修改" :visible.sync="gov1" :append-to-body="true">
        <el-form :model="gover">


          <el-form-item label="级别" :label-width="formLabelWidth"  >
            <el-select  v-model="gover.lev" placeholder="请选择">
                <el-option label="王益区" value="王益区"></el-option>
                <el-option label="宜君县" value="宜君县"></el-option>
                <el-option label="新区" value="新区"></el-option>
                <el-option label="耀州区" value="耀州区"></el-option>
                <el-option label="市级" value="市级"></el-option>
                <el-option label="印台区" value="印台区"></el-option>

              </el-select>
          </el-form-item>
          <el-form-item label="类型" :label-width="formLabelWidth"  >
            <el-select  v-model="gover.type" placeholder="请选择">
                <el-option label="事业" value="事业"></el-option>
                <el-option label="卫生院" value="卫生院"></el-option>
                <el-option label="公卫" value="公卫"></el-option>
                <el-option label="行政" value="行政"></el-option>
                <el-option label="机关" value="机关"></el-option>
                <el-option label="医院" value="医院"></el-option>
                <el-option label="社区卫生服务机构" value="社区卫生服务机构"></el-option>

              </el-select>
          </el-form-item>
          <el-form-item label="名称" :label-width="formLabelWidth"  >
            <el-input v-model="gover.name" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="网络入口" :label-width="formLabelWidth"  >
            <el-select  v-model="gover.input" placeholder="请选择">
              <el-option label="市电子政务中心机房" value="市广电中心机房"></el-option>
                <el-option label="宜君县电子政务机房" value="宜君县电子政务外网机房"></el-option>
                <el-option label="王益区电子政务机房" value="王益区电子政务外网机房"></el-option>
                <el-option label="耀州区电子政务机房" value="耀州区电子政务外网机房"></el-option>
                <el-option label="印台区电子政务机房" value="印台区电子政务外网机房"></el-option>


              </el-select>
          </el-form-item>
          <el-form-item label="运营商" :label-width="formLabelWidth"  >
            <el-input v-model="gover.operators" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="端口" :label-width="formLabelWidth"  >
            <el-input v-model="gover.port" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="VLAN ID" :label-width="formLabelWidth"  >
            <el-input v-model="gover.vlanid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="主机地址" :label-width="formLabelWidth"  >
            <el-input v-model="gover.ipaddress" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="子网掩码" :label-width="formLabelWidth"  >
            <el-input v-model="gover.subnet" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="网关" :label-width="formLabelWidth"  >
            <el-input v-model="gover.gateway" autocomplete="off"></el-input>
          </el-form-item>




         </el-form>
         <div slot="footer" class="dialog-footer">
           <el-button @click="gov1 = false">取 消</el-button>
           <el-button type="primary" @click="updategov">修 改</el-button>
         </div>
       </el-dialog>
 </div>



 <div>
        <el-dialog title="电子政务外网新增" :visible.sync="gov2" :append-to-body="true">
         <el-form :model="addgover">


           <el-form-item label="级别" :label-width="formLabelWidth"  >
             <el-select  v-model="addgover.lev" placeholder="请选择">
                 <el-option label="市级" value="市级"></el-option>
                 <el-option label="王益区" value="王益区"></el-option>
                 <el-option label="宜君县" value="宜君县"></el-option>
                 <el-option label="新区" value="新区"></el-option>
                 <el-option label="耀州区" value="耀州区"></el-option>
                 <el-option label="印台区" value="印台区"></el-option>

               </el-select>
           </el-form-item>
           <el-form-item label="类型" :label-width="formLabelWidth"  >
             <el-select  v-model="addgover.type" placeholder="请选择">
                 <el-option label="事业" value="事业"></el-option>
                 <el-option label="卫生院" value="卫生院"></el-option>
                 <el-option label="公卫" value="公卫"></el-option>
                 <el-option label="行政" value="行政"></el-option>
                 <el-option label="机关" value="机关"></el-option>
                 <el-option label="医院" value="医院"></el-option>
                 <el-option label="社区卫生服务机构" value="社区卫生服务机构"></el-option>

               </el-select>
           </el-form-item>
           <el-form-item label="名称" :label-width="formLabelWidth"  >
             <el-input v-model="addgover.name" autocomplete="off"></el-input>
           </el-form-item>

           <el-form-item label="网络入口" :label-width="formLabelWidth"  >
             <el-select  v-model="addgover.input" placeholder="请选择">
                 <el-option label="市电子政务中心机房" value="市广电中心机房"></el-option>
                 <el-option label="宜君县电子政务机房" value="宜君县电子政务外网机房"></el-option>
                 <el-option label="王益区电子政务机房" value="王益区电子政务外网机房"></el-option>
                 <el-option label="耀州区电子政务机房" value="耀州区电子政务外网机房"></el-option>
                 <el-option label="印台区电子政务机房" value="印台区电子政务外网机房"></el-option>


               </el-select>
           </el-form-item>
           <el-form-item label="运营商" :label-width="formLabelWidth"  >
             <el-input v-model="addgover.operators" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="端口" :label-width="formLabelWidth"  >
             <el-input v-model="addgover.port" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="VLAN ID" :label-width="formLabelWidth"  >
             <el-input v-model="addgover.vlanid" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="主机段地址" :label-width="formLabelWidth"  >
             <el-input v-model="addgover.ipaddress" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="子网掩码" :label-width="formLabelWidth"  >
             <el-input v-model="addgover.subnet" autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item label="网关" :label-width="formLabelWidth"  >
             <el-input v-model="addgover.gateway" autocomplete="off"></el-input>
           </el-form-item>




          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="gov2 = false">取 消</el-button>
            <el-button type="primary" @click="addgov">新 增</el-button>
          </div>
        </el-dialog>
  </div>

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
        formLabelWidth:"80px",
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
        findserver:{
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
        findvpn:{
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
        findgover:{
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
          createdate:"",
          notics:"",
          results:"",
          jpg:"",
          jpga:"",
          jpgb:"",
          jpgc:"",
          jpgd:"",
          pdf:""
        },
        finderror:{
          county:"",
          jgname:"",
          typr:"",
          createdate:"",
          notics:"",
          results:"",
          jpg:"",
          jpga:"",
          jpgb:"",
          jpgc:"",
          jpgd:"",
          pdf:""
        },
        action:this.GLOBAL.Ip+"/duns/upload",
        xqerror:{},
        error2:false,
        fileList:[],
        imageUrl:"",
        imageUrlA:"",
        imageUrlB:"",
        imageUrlC:"",
        imageUrlD:"",
        xgimageUrl:"",
        xgimageUrlA:"",
        xgimageUrlB:"",
        xgimageUrlC:"",
        xgimageUrlD:"",
        pdfsrc:"",
        pdfshow:true,
        Child:[]






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

                      this.all=res.data

                   },
                   function(err){

                   }
             )
             this.$http.post(this.GLOBAL.Ip+"/duns/ytj").then(
                    function(res){

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

                         this.zy=res.data

                      },
                      function(err){

                      }
                )
                this.$http.post(this.GLOBAL.Ip+"/duns/mz").then(

                       function(res){

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



                           },
                           function(err){

                           }
                     )
                     this.$http.post(this.GLOBAL.Ip+"/duns/findAllVpn").then(
                            function(res){
                            this.vpnall=res.data


                            },
                            function(err){

                            }
                      )
                      this.$http.post(this.GLOBAL.Ip+"/duns/findAllGov").then(
                             function(res){
                              this.zhenwuall=res.data


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

                         this.$http.post(this.GLOBAL.Ip+"/duns/FindChildInformation").then(
                                 function(res){
                               
                                   this.Child=res.data


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

                                        for(var i=0;i<this.errordata.length;i++){
                                          this.errordata[i].createdate=this.errordata[i].createdate.substring(0,10)

                                        }
                                  },

 


                               function(err){

                               }
                         )
                        this.$http.post(this.GLOBAL.Ip+"/duns/ErrorByCounty").then(
                               function(res){
                                        this.error=res.data






                                  },




                               function(err){

                               }
                         )






    },
    methods:{

      look(){
       /* window.location.href=this.xqerror.pdf */
        window.open(this.xqerror.pdf,'_blank')
      },
      change1(val){
        this.adderror.createdate=val

      },
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

        this.ser=row
      },
      xgerrors(index,row){

        this.xqerror=row

        if(this.xqerror.pdf==null){
          this.pdfshow=false
        }else{
          this.pdfshow=true
        }


      },
      updateser(){
           this.$http.post(this.GLOBAL.Ip+"/duns/updateserver",this.ser).then(
                  function(res){
                             this.$http.post(this.GLOBAL.Ip+"/duns/findAllServer").then(
                                    function(res){
                                      this.serverall=res.data



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

        this.$http.post(this.GLOBAL.Ip+"/duns/addServer",this.addser).then(
               function(res){

                              this.$http.post(this.GLOBAL.Ip+"/duns/findAllServer").then(
                                     function(res){
                                       this.serverall=res.data



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
      searchServer(){
          if(this.findserver.ip.length==0 && this.findserver.udepartment.length==0 ){
            this.$http.post(this.GLOBAL.Ip+"/duns/findAllServer").then(
                   function(res){
                     this.serverall=res.data

                   },
                   function(err){

                   }
             )
          }
          else if (this.findserver.ip.length!=0 && this.findserver.udepartment.length==0){
            var ip=this.findserver.ip

            this.$http.post(this.GLOBAL.Ip+"/duns/findServerByIp",ip).then(
                   function(res){
                     this.serverall=res.data

                   },
                   function(err){

                   }
             )

          }
          else if (this.findserver.ip.length==0 && this.findserver.udepartment.length!=0){
            var udepartment=this.findserver.udepartment

            this.$http.post(this.GLOBAL.Ip+"/duns/findServerByUdep",udepartment).then(
                   function(res){
                     this.serverall=res.data

                   },
                   function(err){

                   }
             )

          }
          else if (this.findserver.ip.length!=0 && this.findserver.udepartment.length!=0){


            this.$http.post(this.GLOBAL.Ip+"/duns/findServerByIpandUdep",this.findserver).then(
                   function(res){
                     this.serverall=res.data

                   },
                   function(err){

                   }
             )

          }
      },
      searchError(){
          if(this.finderror.county.length==0 && this.finderror.typr.length==0 ){
           this.$http.post(this.GLOBAL.Ip+"/duns/findAllError").then(
                  function(res){
                           this.errordata=res.data
                           this.errorcount=res.data.length

                           for(var i=0;i<this.errordata.length;i++){
                             this.errordata[i].createdate=this.errordata[i].createdate.substring(0,10)

                           }
                     },
                  function(err){

                  }
            )
          }
          else if (this.finderror.county.length!=0 && this.finderror.typr.length==0){
            var ip=this.findserver.ip

            this.$http.post(this.GLOBAL.Ip+"/duns/FindErrorByCounty",this.finderror).then(
                   function(res){
                           this.errordata=res.data
                           this.errorcount=res.data.length

                           for(var i=0;i<this.errordata.length;i++){
                             this.errordata[i].createdate=this.errordata[i].createdate.substring(0,10)

                           }
                           },
                   function(err){

                   }
             )

          }
          else if (this.finderror.county.length==0 && this.finderror.typr.length!=0){
            var udepartment=this.findserver.udepartment

            this.$http.post(this.GLOBAL.Ip+"/duns/FindErrorByTypr",this.finderror).then(
                   function(res){
                           this.errordata=res.data
                           this.errorcount=res.data.length

                           for(var i=0;i<this.errordata.length;i++){
                             this.errordata[i].createdate=this.errordata[i].createdate.substring(0,10)

                           }
                           },
                   function(err){

                   }
             )

          }
          else if (this.finderror.county.length!=0 && this.finderror.typr.length!=0){


            this.$http.post(this.GLOBAL.Ip+"/duns/FindErrorByTyprAndCounty",this.findserver).then(
                   function(res){
                           this.errordata=res.data
                           this.errorcount=res.data.length

                           for(var i=0;i<this.errordata.length;i++){
                             this.errordata[i].createdate=this.errordata[i].createdate.substring(0,10)
                           }
                           },
                   function(err){

                   }
             )

          }
      },
      searchgov(){
          if(this.findgover.lev.length==0 && this.findgover.name.length==0 ){
            this.$http.post(this.GLOBAL.Ip+"/duns/findAllGov").then(
                   function(res){
                    this.zhenwuall=res.data


                   },
                   function(err){

                   }
             )
          }
          else if (this.findgover.lev.length!=0 && this.findgover.name.length==0){
            var lev=this.findgover.lev

            this.$http.post(this.GLOBAL.Ip+"/duns/findGovByLev",lev).then(
                   function(res){
                     this.zhenwuall=res.data

                   },
                   function(err){

                   }
             )

          }
          else if (this.findgover.lev.length==0 && this.findgover.name.length!=0){
            var name=this.findgover.name

            this.$http.post(this.GLOBAL.Ip+"/duns/findGovByName",name).then(
                   function(res){
                     this.zhenwuall=res.data

                   },
                   function(err){

                   }
             )

          }
          else if (this.findgover.lev.length!=0 && this.findgover.name.length!=0){


            this.$http.post(this.GLOBAL.Ip+"/duns/findGovByNameAndLev",this.findgover).then(
                   function(res){
                     this.zhenwuall=res.data

                   },
                   function(err){

                   }
             )

          }
      },
      adderrors(){
          /* this.adderror.createdate=new Date(this.adderror.createdate).toLocaleString() */
          if(this.adderror.county.length==0){
            this.$message({
               showClose: true,
               message: '请选择所属区县',
               type: 'error',
            })
            return  false;
          }
          if(this.adderror.createdate.length==0){
            this.$message({
               showClose: true,
               message: '请选择录入日期',
               type: 'error',
            })
            return  false;
          }
          if(this.adderror.county.typr==0){
            this.$message({
               showClose: true,
               message: '请选择错误类型',
               type: 'error',
            })
            return  false;
          }

        this.$http.post(this.GLOBAL.Ip+"/duns/addError",this.adderror).then(
               function(res){

                             this.$http.post(this.GLOBAL.Ip+"/duns/findAllError").then(
                                    function(res){
                                             this.errordata=res.data
                                             this.errorcount=res.data.length

                                             for(var i=0;i<this.errordata.length;i++){
                                               this.errordata[i].createdate=this.errordata[i].createdate.substring(0,10)

                                             }
                                       },




                                    function(err){

                                    }
                              )
                              this.$http.post(this.GLOBAL.Ip+"/duns/ErrorByCounty").then(
                                     function(res){
                                              this.error=res.data


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
                             this.adderror.createdate=""
                             this.adderror.jpg=""
                             this.adderror.jpga=""
                             this.adderror.jpgb=""
                             this.adderror.jpgc=""
                             this.adderror.jpgd=""

                             this.imageUrl=""
                             this.imageUrlA=""
                             this.imageUrlB=""
                             this.imageUrlC=""
                             this.imageUrlD=""


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
        if(this.xqerror.createdate.length==0){
          this.$message({
             showClose: true,
             message: '请选择录入日期',
             type: 'error',
          })
          return  false;
        }
       if(this.xqerror.county.length==0){
         this.$message({
            showClose: true,
            message: '请选择所属区县',
            type: 'error',
         })
         return  false;
       }
       if(this.xqerror.county.typr==0){
         this.$message({
            showClose: true,
            message: '请选择错误类型',
            type: 'error',
         })
         return  false;
       }


                  this.$http.post(this.GLOBAL.Ip+"/duns/updateError",this.xqerror).then(
                         function(res){
                                   this.$http.post(this.GLOBAL.Ip+"/duns/findAllError").then(
                                          function(res){
                                                   this.errordata=res.data
                                                   this.errorcount=res.data.length

                                                   for(var i=0;i<this.errordata.length;i++){
                                                     this.errordata[i].createdate=this.errordata[i].createdate.substring(0,10)

                                                   }
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
                                   this.xgimageUrl=''
                                   this.xgimageUrlA=''
                                   this.xgimageUrlB=''
                                   this.xgimageUrlC=''
                                   this.xgimageUrlD=''
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

                                for(var i=0;i<this.errordata.length;i++){
                                  this.errordata[i].createdate=this.errordata[i].createdate.substring(0,10)

                                }
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
      searchvpn(){

        if(this.findvpn.users.length!=0 && this.findvpn.groups.length!=0 && this.findvpn.county.length!=0){

          this.vpnone();
        }else if(this.findvpn.users.length!=0 && this.findvpn.groups.length!=0 && this.findvpn.county.length==0){

          this.vpntwo();
        }
        else if(this.findvpn.users.length!=0 && this.findvpn.groups.length==0 && this.findvpn.county.length!=0){

          this.vpn3();
        }
        else if(this.findvpn.users.length!=0 && this.findvpn.groups.length==0 && this.findvpn.county.length==0){

           this.vpn4();
        }
        else if(this.findvpn.users.length==0 && this.findvpn.groups.length!=0 && this.findvpn.county.length!=0){


           this.vpn5();
        }
        else if(this.findvpn.users.length==0 && this.findvpn.groups.length!=0 && this.findvpn.county.length==0){

           this.vpn6();
        }
        else if(this.findvpn.users.length==0 && this.findvpn.groups.length==0 && this.findvpn.county.length!=0){

           this.vpn7();
        }else if(this.findvpn.users.length==0 && this.findvpn.groups.length==0 && this.findvpn.county.length==0){
          this.$http.post(this.GLOBAL.Ip+"/duns/findAllVpn").then(
                 function(res){
                 this.vpnall=res.data


                 },
                 function(err){

                 }
           )

        }



      },
      xgvpn(index,row){

        this.vpns=row
      },

      vpnone(){
        this.$http.post(this.GLOBAL.Ip+"/duns/findVpnByNumbersAndGroupsAndCounty",this.findvpn).then(
               function(res){
               this.vpnall=res.data


               },
               function(err){

               }
         )

      },
      vpntwo(){
        this.$http.post(this.GLOBAL.Ip+"/duns/findVpnByNumbersAndGroups",this.findvpn).then(
               function(res){
               this.vpnall=res.data


               },
               function(err){

               }
         )
      },
      vpn3(){
        this.$http.post(this.GLOBAL.Ip+"/duns/findVpnByNumbersAndCounty",this.findvpn).then(
               function(res){
               this.vpnall=res.data


               },
               function(err){

               }
         )
      },
      vpn4(){
        this.$http.post(this.GLOBAL.Ip+"/duns/findVpnByNumbers",this.findvpn).then(
               function(res){
               this.vpnall=res.data


               },
               function(err){

               }
         )
      },
      vpn5(){
        this.$http.post(this.GLOBAL.Ip+"/duns/findVpnByGroupsAndCounty",this.findvpn).then(
               function(res){
               this.vpnall=res.data


               },
               function(err){

               }
         )
      },
      vpn6(){
        this.$http.post(this.GLOBAL.Ip+"/duns/findVpnByGroups",this.findvpn).then(
               function(res){
               this.vpnall=res.data


               },
               function(err){

               }
         )
      },
      vpn7(){
        this.$http.post(this.GLOBAL.Ip+"/duns/findVpnByCounty",this.findvpn).then(
               function(res){
               this.vpnall=res.data


               },
               function(err){

               }
         )
      },

      updatevpn(){
           this.$http.post(this.GLOBAL.Ip+"/duns/updatevpn",this.vpns).then(
                  function(res){
                             this.$http.post(this.GLOBAL.Ip+"/duns/findAllVpn").then(
                                    function(res){
                                      this.vpnall=res.data


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

        this.gover=row
      },

      updategov(){
           this.$http.post(this.GLOBAL.Ip+"/duns/updategov",this.gover).then(
                  function(res){
                             this.$http.post(this.GLOBAL.Ip+"/duns/findAllGov").then(
                                    function(res){
                                      this.govall=res.data


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

                            this.imageUrl = response


                            this.adderror.jpg=response
                  					this.$message({
                  						message: "上传成功！",
                  						type: 'success'
                  					});
                  				},
                   xgsuccessRes(response, file, fileList) { //文件上传成功之后

                             this.xgimageUrl = response


                             this.xqerror.jpg=response
                   					this.$message({
                   						message: "上传成功！",
                   						type: 'success'
                   					});
                   				},
                          successResPDF(response, file, fileList) { //文件上传成功之后

                                    this.pdfsrc = response


                                    this.adderror.pdf=response
                          					this.$message({
                          						message: "上传成功！",
                          						type: 'success'
                          					});
                          				},
                          xgsuccessResPDF(response, file, fileList) { //文件上传成功之后

                                    this.pdfsrc = response


                                    this.xqerror.pdf=response
                          					this.$message({
                          						message: "上传成功！",
                          						type: 'success'
                          					});
                          				},
                    successResA(response, file, fileList) { //文件上传成功之后

                              this.imageUrlA = response


                              this.adderror.jpga=response
                    					this.$message({
                    						message: "上传成功！",
                    						type: 'success'
                    					});
                    				},
                      successResB(response, file, fileList) { //文件上传成功之后

                                this.imageUrlB = response


                                this.adderror.jpgb=response
                      					this.$message({
                      						message: "上传成功！",
                      						type: 'success'
                      					});
                      				},
                    successResC(response, file, fileList) { //文件上传成功之后

                              this.imageUrlC = response


                              this.adderror.jpgc=response
                    					this.$message({
                    						message: "上传成功！",
                    						type: 'success'
                    					});
                    				},
                successResD(response, file, fileList) { //文件上传成功之后

                          this.imageUrlD = response


                          this.adderror.jpgd=response
                					this.$message({
                						message: "上传成功！",
                						type: 'success'
                					});
                				},
                 xgsuccessResA(response, file, fileList) { //文件上传成功之后

                               this.xgimageUrlA = response


                               this.xqerror.jpga=response
                     					this.$message({
                     						message: "上传成功！",
                     						type: 'success'
                     					});
                     				},
                       xgsuccessResB(response, file, fileList) { //文件上传成功之后

                                 this.xgimageUrlB = response


                                 this.xqerror.jpgb=response
                       					this.$message({
                       						message: "上传成功！",
                       						type: 'success'
                       					});
                       				},
                     xgsuccessResC(response, file, fileList) { //文件上传成功之后

                               this.xgimageUrlC = response


                               this.xqerror.jpgc=response
                     					this.$message({
                     						message: "上传成功！",
                     						type: 'success'
                     					});
                     				},
                 xgsuccessResD(response, file, fileList) { //文件上传成功之后

                           this.xgimageUrlD = response


                           this.xqerror.jpgd=response
                 					this.$message({
                 						message: "上传成功！",
                 						type: 'success'
                 					});
                 				},
                  				beforeAvatarUpload(file) { //文件上传之前

                  					var isLt2M = file.size / 1024 / 1024 < 10

                  					if(!isLt2M) {
                  						this.$message({
                  							message: '上传文件大小不能超过 10MB!',
                  							type: 'warning'
                  						});
                  						return false;
                  					}

                  				}
                  				/* progressUpload() { //文件上传时
                  					 loading = this.$loading({
                  						lock: true,
                  						text: 'Loading...',
                  						spinner: 'el-icon-loading',
                  						background: 'rgba(0, 0, 0, 0.7)'
                  					});
                  				} */





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
      myChartBarm8,

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
  	background: #111;
    text-align: left !important;
  }
.index-container {
  font-size: 14px;
    padding: 0 !important;
    margin:  0 50px !important;
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
    font-size: 32px;
    color: #e1e1f9;

    font-weight: 800;
    top: 5%;
    width: 100%;
    text-align: left;
    margin-left: 20px;
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
	  margin: 0px 20px 0px 20px;
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
  margin-left: 10px;
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
	  width: 100%;
	  color: #cbcbcb;
	  border-collapse: collapse;
	  background-color: none;
}
table.ssss td {
	    position: relative;
      text-align: left;
	    min-height: 26px !important;
	    padding: 3px 3px;
	    font-size: 13px;
	    line-height: 26px ;
	    border: 0px;
 }
 table.ssss td:nth-child(odd) {
    width: 25%;
    text-align: left;
    background-color: #1E2135;
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
   min-width: 35px;
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
   .avatar-uploader .el-upload {
     border: 1px dashed #d9d9d9;
     border-radius: 6px;
     cursor: pointer;
     position: relative;
     overflow: hidden;
   }
   .avatar-uploader .el-upload:hover {
     border-color: #409EFF;
   }
   .avatar-uploader-icon {
     font-size: 28px;
     color: #8c939d;
     width: 120px;
     height: 120px;
     line-height: 120px;
     text-align: center;
   }
   .avatar {
     width: 120px;
     height: 120px;
     display: block;
   }


</style>
