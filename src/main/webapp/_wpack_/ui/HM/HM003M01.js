/*amd /ui/HM/HM003M01.xml 22675 a995dd0c039890aadb3c4f0aeeb245e068e645b0f2201f21c48423220f9525a5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_memberBasic',style:'',firstSet:'true'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rowStatus',name:'상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMP_CD',name:'사원코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMP_NM',name:'사원명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMP_CN_NM',name:'사원한자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMP_EN_NM',name:'사원영문명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'PASSWORD',name:'비밀번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'RESIDENT_NO',name:'주민번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'JOIN_DATE',name:'입사일',dataType:'date'}},{T:1,N:'w2:key',A:{id:'JOIN_CLASS_CD',name:'입사구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'POSITION_CD',name:'직위',dataType:'text'}},{T:1,N:'w2:key',A:{id:'DUTY_CD',name:'직책',dataType:'text'}},{T:1,N:'w2:key',A:{id:'LAST_APPOINT_DATE',name:'최종발령일',dataType:'date'}},{T:1,N:'w2:key',A:{id:'POSITION_UPDATED_DATE',name:'호칭변경일',dataType:'date'}},{T:1,N:'w2:key',A:{id:'ORG_CD',name:'소속',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ORG_NM',name:' 소속명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'JOB_FAMILY_CD',name:'직군',dataType:'text'}},{T:1,N:'w2:key',A:{id:'JOB_CD',name:'직무',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ASSIGNED_TASK',name:'담당업무',dataType:'text'}},{T:1,N:'w2:key',A:{id:'OFFICE_PHONE1',name:'사내직통전화1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'OFFICE_PHONE2',name:'사내직통전화2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'OFFICE_PHONE3',name:'사내직통전화3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'HOME_PHONE1',name:'자택전화1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'HOME_PHONE2',name:'자택전화2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'HOME_PHONE3',name:'자택전화3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'CELL_PHONE1',name:'휴대폰1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'CELL_PHONE2',name:'휴대폰2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'CELL_PHONE3',name:'휴대폰3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMAIL',name:'이메일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'RELIGION_CD',name:'종교',dataType:'text'}},{T:1,N:'w2:key',A:{id:'LAST_SCHOOL_NM',name:'최종학교',dataType:'text'}},{T:1,N:'w2:key',A:{id:'MAJOR_NM',name:'전공',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCHOOL_CAREER_CD',name:'입사학력',dataType:'text'}},{T:1,N:'w2:key',A:{id:'HOUSE_KIND_CD',name:'주거형태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ZIP_CD',name:'우편번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ADDRESS1',name:'주소1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ADDRESS2',name:'주소2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'IS_VETERAN_WELFARE',name:'보훈여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'IS_MILITARY_SERVICE',name:'군필여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BIRTH_DATE',name:'생년월일',dataType:'date'}},{T:1,N:'w2:key',A:{id:'IS_LUNAR',name:'음력구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'IS_MARRIAGE',name:'결혼여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'HOPPY',name:'취미',dataType:'text'}},{T:1,N:'w2:key',A:{id:'TALENT',name:'특기',dataType:'text'}},{T:1,N:'w2:key',A:{id:'RETIRE_REASON',name:'휴퇴직사유',dataType:'text'}},{T:1,N:'w2:key',A:{id:'FILE_STORED_PATH',name:'파일저장경로',dataType:'text'}},{T:1,N:'w2:key',A:{id:'STORED_FILE_NM',name:'저장이미지파일명',dataType:'number'}},{T:1,N:'w2:key',A:{id:'ORIGIN_FILE_NM',name:'원본이미지파일명',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]}]},{T:1,N:'xf:submission',A:{id:'sbm_getLoginMemberBasic',ref:'data:json,dma_memberBasic',target:'',action:'/member/selectMemberOragn',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.searchMemberBasicCallback','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveMemberInfo',ref:'data:json,{"id":"dma_memberBasic","key":"basic"}',target:'',action:'/member/saveMemberInfo',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveMemberInfo_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * 화면 초기화에 필요한 로직을 수행한다.
 */
scwin.onpageload = function () {
	scwin.param = com.data.getParameter();
	dma_memberBasic.setJSON(scwin.param.data);

	if (com.win.isAdmin() == false) {
		btn_changePassword.hide();
	}

	var codeOptions = [{ code: "00001", compID: "sbx_Duty" },
	{ code: "00002", compID: "sbx_Postion" },
	{ code: "00021", compID: "sbx_JoinClass" },
	{ code: "00023", compID: "sbx_JobFamily" },
	{ code: "00024", compID: "sbx_Job" }];
	
	com.data.setCommonCode(codeOptions);

	scwin.tabDrawStatus = { tab_memberDetail: true, tab_memberFamily: false, tab_memberProject: false };
	com.data.setChangeCheckedDc(dma_memberBasic);
};

/**
 * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function () {
	scwin.searchMemberBasic();
};

/**
 * 사원 정보를 조회한다.
 */
scwin.searchMemberBasic = function () {
	com.sbm.execute(sbm_getLoginMemberBasic);
};

scwin.searchMemberBasicCallback = function (resBody) {
	var data = resBody.responseJSON.data[0];
	dma_memberBasic.setJSON(data);
	dma_memberBasic.initRowStatus();

	Promise.resolve().then(function () {
		img_member.setSrc(gcm.CONTEXT_PATH + "/member/viewProfileImage/" + data.EMP_CD);
	});
};

/**
 * 업데이트(등록, 수정, 삭제)된 코드 그룹을 데이터베이스에 저장한다.
 */
scwin.btn_saveMemberBasic_onclick = function () {
	if (dma_memberBasic.getModifiedIndex().length > 0) {
		if ((com.data.validateGroup(grp_memberBasic1)) && (com.data.validateGroup("grp_memberBasic2", null, tac_memberInfo, "tab_memberDetail" ))) {
			com.win.confirm(com.data.getMessage("MSG_CM_00042"), "scwin.saveMemberBasicConfirmCallback");
		}
	} else {
		com.win.alert(com.data.getMessage("MSG_CM_00005"));
	}
};

scwin.saveMemberBasicConfirmCallback = function (res) {
	if (res.clickValue === true) {
		com.sbm.execute(sbm_saveMemberInfo);
	}
};

/**
 * 업데이트된 사원 기본 정보를 업데이트 전 상태로 되돌린다.
 */
scwin.btn_cancelMemberBasic_onclick = function () {
	if (dma_memberBasic.getModifiedIndex().length > 0) {
		com.win.confirm(com.data.getMessage("MSG_CM_00043"), "scwin.cancelMemberBasicConfirmCallback");
	} else {
		com.win.closePopup();
	}
};

scwin.cancelMemberBasicConfirmCallback = function (res) {
	if (res.clickValue === true) {
		com.win.closePopup();
	}
};

/**
 * 사원 이미지 파일을 업로드한다.
 */
scwin.btn_uploadImage_onclick = function () {
	var imageDataSeq = dma_memberBasic.get("IMAGE_DATA_SEQ");
	var data = { dataSeq: imageDataSeq, callbackFn: "scwin.uploadImageFileCallback" };
	var opt = {
		id: "H3P01",
		popupName: "사진 업로드",
		width: "650", height: "180"
	};

	com.win.openPopup("/ui/HM/HM003P01.xml", opt, data);
};

scwin.uploadImageFileCallback = function (param) {
	dma_memberBasic.set("FILE_STORED_PATH", param.fileStorePath);
	dma_memberBasic.set("STORED_FILE_NM", param.storedFileList);
	dma_memberBasic.set("ORIGIN_FILE_NM", param.localfileList);
	com.sbm.execute(sbm_saveMemberInfo);
};

/**
 * 조직 정보를 선택할 수 있는 팝업창을 오픈한다.
 */
scwin.btn_searchOrgan_onclick = function (e) {
	var rowJSON = {};
	var data = { "data": rowJSON, callbackFn: "scwin.searchOrganCallback" };
	var opt = {
		id: "H3P02",
		popupName: "조직정보 선택",
		width: 340, height: 530
	};
	com.win.openPopup("/ui/HM/HM003P02.xml", opt, data);
};

scwin.searchOrganCallback = function (returnValue) {
	dma_memberBasic.set("ORG_CD", returnValue.ORG_CD);
	dma_memberBasic.set("ORG_NM", returnValue.ORG_NM);
};

scwin.btn_changePassword_onclick = function () {
	var data = { "empCd": dma_memberBasic.get("EMP_CD") };
	var options = {
		id: "settingPassword",
		popupName: "비밀번호 변경",
		width: "500px",
		height: "220px"
	};
	com.win.openPopup("/cm/xml/settingPassword.xml", options, data);
};

scwin.sbm_saveMemberInfo_submitdone = function (e) {
    com.win.alert(e.responseJSON.rsMsg.statusMsg, function () {
        dma_memberBasic.initRowStatus();
        com.win.closePopup({}, scwin.closeCallbackFncName);
    });
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'pop_contents'},E:[{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원정보',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_changePassword',style:'',type:'button','ev:onclick':'scwin.btn_changePassword_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비밀번호변경'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_saveMemberBasic',style:'',type:'button','ev:onclick':'scwin.btn_saveMemberBasic_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'btn_cancelMemberBasic',style:'',type:'button','ev:onclick':'scwin.btn_cancelMemberBasic_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]},{T:1,N:'xf:group',A:{id:'grp_memberBasic1',class:'tbbox'},E:[{T:1,N:'xf:group',A:{adaptive:'layout',tagname:'table',style:'',id:'table1',class:'w2tb tb',adaptiveThreshold:'900'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:180px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'6'}]}]},{T:1,N:'xf:image',A:{ref:'',src:'',style:'width:150px;height:150px;',id:'img_member'}},{T:1,N:'xf:group',A:{id:'',class:'dfbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_uploadImage',type:'button',class:'btn_cm  upload','ev:onclick':'scwin.btn_uploadImage_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'프로필 이미지 업로드'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사번코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.EMP_CD',style:'',id:'ibx_empCd',class:'req',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사원명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.EMP_NM',style:'',id:'ibx_empNm',class:'req',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입사일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:inputCalendar',A:{ref:'data:dma_memberBasic.JOIN_DATE',footerDiv:'false',focusOnDateSelect:'false',style:'width:120px;',id:'',renderType:'component',title:'',class:'mr5 req',mandatory:'true',renderDiv:'true',weekStartsOn:'0',calendarValueType:'yearMonthDate'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'주민번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{displayFormatter:'',minlength:'13',maxlength:'13',dataType:'',displayFormat:'######-#######',applyFormat:'',mandatory:'true',ref:'data:dma_memberBasic.RESIDENT_NO',disabled:'',style:'',displaymessage:'',id:'ibx_residentNo',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원한자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.EMP_CN_NM',style:'',id:'ibx_empCnNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입사구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'xf:select1',A:{ref:'data:dma_memberBasic.JOIN_CLASS_CD',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',textAlign:'left',chooseOption:'false',disabled:'false',style:'width:100%',allOption:'false',id:'sbx_JoinClass',displayMode:'label',direction:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'직위',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:dma_memberBasic.POSITION_CD',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',textAlign:'left',chooseOption:'false',disabled:'false',style:'width:100%',allOption:'false',id:'sbx_Postion',displayMode:'label',direction:'auto',class:'req',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원영문명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.EMP_EN_NM',validator:'',style:'',allowChar:'a-zA-Z_,. -',id:'ibx_empEnNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최종발령일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{ref:'data:dma_memberBasic.LAST_APPOINT_DATE',footerDiv:'false',focusOnDateSelect:'false',style:'width:120px;',tabIndex:'',id:'cal_lastAppointDate',renderType:'component',class:'mr5',renderDiv:'true',weekStartsOn:'0',calendarValueType:'yearMonthDate'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'직책',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:dma_memberBasic.DUTY_CD',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',textAlign:'left',chooseOption:'false',disabled:'false',style:'width:100%',allOption:'false',id:'sbx_Duty',displayMode:'label',direction:'auto',class:'req',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'flex'},E:[{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.ORG_NM',style:'',id:'ibx_orgNm',class:'req',mandatory:'true'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_searchOrgan_onclick',style:'',id:'btn_searchOrgan',type:'button',class:'btn_cm btn_search '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'호칭변경일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{summary:'',ref:'data:dma_memberBasic.POSITION_UPDATED_DATE',footerDiv:'false',focusOnDateSelect:'false',style:'width:120px;',id:'cal_postionUpdatedDate',renderType:'component',title:'',class:'mr5',renderDiv:'true',weekStartsOn:'0',calendarValueType:'yearMonthDate'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'직군',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:dma_memberBasic.JOB_FAMILY_CD',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',textAlign:'left',chooseOption:'false',disabled:'false',style:'width:100%',allOption:'false',id:'sbx_JobFamily',displayMode:'label',direction:'auto',class:'req',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직무',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:dma_memberBasic.JOB_CD',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',textAlign:'left',chooseOption:'',disabled:'false',style:'width:100%',allOption:'',id:'sbx_Job',displayMode:'label',direction:'auto'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당업무',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.ASSIGNED_TASK',style:'',id:'ibx_assignedTask'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사내직통전화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.OFFICE_PHONE1',maxlength:'3',style:'width:60px;',allowChar:'0-9',id:'ibx_officePhone1'}},{T:1,N:'w2:span',A:{style:'margin-top:3px;',id:'span2',label:'-'}},{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.OFFICE_PHONE2',maxlength:'4',style:'width:60px;',allowChar:'0-9',id:'ibx_officePhone2'}},{T:1,N:'w2:span',A:{style:'',id:'span3',label:'-'}},{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.OFFICE_PHONE3',maxlength:'4',style:'width:60px;',allowChar:'0-9',id:'ibx_officePhone3'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'휴대폰',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.CELL_PHONE1',maxlength:'3',style:'width:60px;',allowChar:'0-9',id:'ibx_cellPhone1',class:'req',mandatory:'true'}},{T:1,N:'w2:span',A:{style:'margin-top:3px;',id:'span4',label:'-'}},{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.CELL_PHONE2',maxlength:'4',style:'width:60px;',allowChar:'0-9',id:'ibx_cellPhone2',class:'req',mandatory:'true'}},{T:1,N:'w2:span',A:{style:'',id:'span5',label:'-'}},{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.CELL_PHONE3',maxlength:'4',style:'width:60px;',allowChar:'0-9',id:'ibx_cellPhone3',class:'req',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'이메일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.EMAIL',invalidMessage:'',isEmail:'true',validator:'',invalidMessageFunc:'',style:'width:100%',displaymessage:'',id:'ibx_email',class:'req',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'tabbox'},E:[{T:1,N:'w2:tabControl',A:{adaptiveThreshold:'900',useTabKeyOnly:'true',useMoveNextTabFocus:'false',closable:'false',useConfirmMessage:'false',selectedIndex:'0',adaptive:'layout',confirmTrueAction:'exist',confirmFalseAction:'new',alwaysDraw:'false',style:'',id:'tac_memberInfo',class:'wq_tab'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tab_memberDetail',label:'개인기본정보'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tab_memberFamily',label:'가족관계정보'}},{T:1,N:'w2:tabs',A:{localeRef:'',disabled:'false',style:'',id:'tab_memberProject',label:'프로젝트정보'}},{T:1,N:'w2:content',A:{src:'../../ui/HM/HM003S01.xml',scope:'true',alwaysDraw:'false',frameMode:'wframePreload',id:'content1'}},{T:1,N:'w2:content',A:{src:'../../ui/HM/HM003S02.xml',scope:'true',alwaysDraw:'false',frameMode:'wframePreload',id:'content2'}},{T:1,N:'w2:content',A:{src:'../../ui/HM/HM003S03.xml',scope:'true',alwaysDraw:'false',frameMode:'wframePreload',id:'content3'}}]}]}]}]}]}]})