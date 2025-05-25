/*amd /cm/main/login.xml 10185 b5d8229989dd535cee2246dd4bf6c3164e3fab68bf17852d3e0280dea8d28457 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'meta',A:{name:'viewport',content:'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'}},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_loginCheck'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'EMP_CD',name:'사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'PASSWORD',name:'비밀번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_loginCheck',ref:'data:json,dma_loginCheck',target:'',action:'/main/login',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Login_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    $('.login_form .form_group .form_item input').on('input active', function () {
        var $this = $(this);
        var visible = Boolean($this.val());
        $this.siblings('.btn_login_close').toggleClass('hidden', !visible);
    }).trigger('active');
    $('.btn_login_close').click(function () {
        $(this).siblings('input').val('').trigger('active').focus();
    });
    var initUrl = location.href;
    if (initUrl.indexOf('#') > -1) {
        com.win.goHome($p);
    }
    ibx_empCd.focus();
};
scwin.btnUserSelect_onclick = function () {
    $('.user_box .items').toggleClass('on');
};
scwin.ibx_empCd_onkeyup = function (e) {
    if (e.keyCode == 13) {
        sct_password.focus();
    }
};
scwin.sct_password_onkeyup = function (e) {
    if (e.keyCode == 13) {
        scwin.btn_login_onclick();
    }
};
scwin.btn_login_onclick = function () {
    if (com.data.validateGroup($p, grp_loginInfo)) {
        com.sbm.execute($p, sbm_loginCheck);
    }
};
scwin.sbm_Login_submitdone = function (e) {
    var resultData = e.responseJSON;
    var result = resultData.rsMsg;
    try {
        if (com.sbm.getResultCode($p, e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
            com.win.goHome($p);
        } else {
            if (com.util.isEmpty($p, resultData.errorItem) === false) {
                com.win.alert($p, result.message, function () {
                    if (resultData.errorItem == 'ID') {
                        ibx_empCd.focus();
                    } else if (resultData.errorItem == 'PASSWORD') {
                        dma_loginCheck.set('PASSWORD', '');
                        sct_password.focus();
                    }
                });
            }
        }
    } catch (ex) {
        com.win.alert($p, '서버 통신 도중 오류가 발생하였습니다. 잠시후 다시 시도해주시기 바랍니다.');
    }
};
scwin.btn_logo_onclick = function () {
    com.win.goHome($p);
};
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.login_wrm .container:before{display:none}.login_wrm .login_header{position:relative;width:100%;height:70px}.login_wrm .login_header h1{z-index:100;position:absolute;top:30px;left:60px;display:inline-block;vertical-align:top}.login_wrm .login_header h1 .logo{display:inline-block;width:220px;height:28px;font-size:0;line-height:0;background:url(../../cm/images/logo_white.png) no-repeat;background-size:100% 100%}.login_wrm .container{top:0;width:100%;height:100%;background:url(../../cm/images/bg_login01.png),url(../../cm/images/bg01.png);background-color:#292260;background-repeat:no-repeat,no-repeat;background-position:right bottom,right -800px bottom -100px;background-size:450px,1850px;overflow:hidden;z-index:20}.login_wrm .container .login_container{z-index:30;position:absolute;top:100px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.login_wrm .container .login_container .login_tit{margin-left:40px;font-size:70px;color:#fff;font-weight:700}.login_wrm .container .login_container .login_tit div:first-child{-webkit-animation:logintit01 1.3s forwards ease-in-out;animation:logintit01 1.3s forwards ease-in-out;opacity:0}@-webkit-keyframes logintit01{0%{-webkit-transform:scale(1) translateX(90px);transform:scale(1) translateX(90px);opacity:0}100%{-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0);opacity:1}}@keyframes logintit01{0%{-webkit-transform:scale(1) translateX(90px);transform:scale(1) translateX(90px);opacity:0}100%{-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0);opacity:1}}.login_wrm .container .login_container .login_tit div:last-child{-webkit-animation:logintit02 1.3s .5s forwards ease-in-out;animation:logintit02 1.3s .5s forwards ease-in-out;opacity:0}@-webkit-keyframes logintit02{0%{-webkit-transform:scale(1) translateX(100px);transform:scale(1) translateX(100px);opacity:0}100%{-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0);opacity:1}}@keyframes logintit02{0%{-webkit-transform:scale(1) translateX(100px);transform:scale(1) translateX(100px);opacity:0}100%{-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0);opacity:1}}.login_wrm .login_form{height:340px;padding:40px 40px 56px;margin-top:32px;background:rgba(255,255,255,.1);border-radius:50px;box-sizing:border-box}.login_wrm .login_form{-webkit-animation:loginform 1.3s 1.4s forwards ease-in-out;animation:loginform 1.3s 1.4s forwards ease-in-out;opacity:0}@-webkit-keyframes loginform{0%{-webkit-transform:scale(1) translateX(140px);transform:scale(1) translateX(140px);opacity:0}100%{-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0);opacity:1}}@keyframes loginform{0%{-webkit-transform:scale(1) translateX(140px);transform:scale(1) translateX(140px);opacity:0}100%{-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0);opacity:1}}.login_wrm .login_form .form_tit{font-size:34px;color:#fff}.login_wrm .login_form .form_group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:42px}.login_wrm .login_form .form_group .btn_forget{display:none}.login_wrm .login_form .form_item{position:relative;display:block;width:360px}.login_wrm .login_form .form_item span{display:block;font-size:24px;color:#fff;font-weight:700}.login_wrm .login_form .form_item input{display:block;width:100%;height:100%;padding-top:26px;padding-right:40px;padding-bottom:10px;border:0;border-bottom:1px solid #fff;font-size:22px;color:#05feef;background:0 0;border-radius:0;outline:0}.login_wrm .login_form .form_item input:focus{-webkit-box-shadow:none;box-shadow:none}.login_wrm .login_form .form_item .btn_forget{display:block;margin-top:17px;color:#b6ff06;font-size:20px}.login_wrm .login_form .form_item.user{margin-right:50px}.login_wrm .login_form .form_item.pwd input{padding-top:23px}.login_wrm .login_form .btn_login{display:block;position:relative;width:170px;height:170px;margin-left:100px;background-color:#292260;font-size:36px;color:#fff;border-radius:100%;text-align:center;border:0;color:#fff;background:#292260;line-height:170px;z-index:10}.login_wrm .login_form .form_item .btn_login_close.hidden{display:none}.login_wrm .login_form .form_item .btn_login_close{display:inline-block;position:absolute;top:48px;right:0;width:35px;height:35px;background:url(../../cm/images/btn_login_close.png) no-repeat right 4px center;background-size:18px 18px;pointer-events:auto;cursor:pointer;outline:0}.login_wrm .login_bg{position:absolute;right:-330px;bottom:146px}.login_wrm .login_bg .bg_bubble01{position:absolute;right:0;left:0;width:42px;height:42px;background:url(../../cm/images/bg_bubble01.png) no-repeat center}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'login_wrap type2'},E:[{T:1,N:'xf:group',A:{class:'login_container',id:''},E:[{T:1,N:'xf:group',A:{id:'',tagname:'h1'},E:[{T:1,N:'xf:image',A:{alt:'인스웨이브',id:'',src:'../../cm/images/base/img_wlogo.png',style:''}}]},{T:1,N:'xf:group',A:{class:'login_contents',id:'grp_loginInfo',style:''},E:[{T:1,N:'xf:group',A:{id:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{for:'user_id',id:'',label:'ID',style:'',tagname:'label'}},{T:1,N:'xf:input',A:{useVerticalAlign:'',displayFormatter:'',customModelUnformatter:'',autocomplete:'',dataType:'number',useMonthYearFormat:'',applyFormat:'',autoFocus:'',type:'',adjustMaxLength:'false',disabled:'',style:'',id:'ibx_empCd',customModelFormatter:'',class:'cont_user',ref:'data:dma_loginCheck.EMP_CD',refSync:'true','ev:onkeyup':'scwin.ibx_empCd_onkeyup',displayFormat:'',allowChar:'0-9',nextTabID:'sct_password',enterBlur:'',ignoreChar:'',validator:'',mandatory:'true'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{for:'user_pw',id:'',label:'Password',style:'',tagname:'label'}},{T:1,N:'xf:secret',A:{ref:'data:dma_loginCheck.PASSWORD',nextTabID:'btn_login',style:'',id:'sct_password',class:'cont_pwd',refSync:'true','ev:onkeyup':'scwin.sct_password_onkeyup',mandatory:'true'}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'xf:trigger',A:{class:'btn_login',id:'btn_login',style:'',type:'button','ev:onclick':'scwin.btn_login_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'LOGIN'}]}]}]},{T:1,N:'xf:group',A:{class:'last',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아이디찾기'}]}]},{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비밀번호찾기'}]}]},{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회원가입'}]}]}]}]}]}]}]}]}]}]})