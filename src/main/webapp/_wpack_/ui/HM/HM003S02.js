/*amd /ui/HM/HM003S02.xml 7536 42ff861d8b69435cc55bc0e5ea660b8734b15a83222c8d9dd0287a02a44ce777 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_memberFamily',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'EMP_CD',name:'사원코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SEQ',name:'순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'RELATIONSHIP',name:'관계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FAMILY_NM',name:'가족성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'RESIDENT_NO',name:'주민번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'JOB',name:'직업',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_CORESIDENCE',name:'동거여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'IS_SUPPORT',name:'부양여부',dataType:'number'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:aliasDataMap',A:{id:'adm_memberBasic',scope:'../dma_memberBasic',studioSrc:'/ui/HM/HM003M01.xml'}}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_getMemberFamilyList',ref:'',target:'data:json,{"id":"dlt_memberFamily","key":"data"}',action:'/member/selectMemberFamily',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveMemberFamily',ref:'data:json,{"id":"dlt_memberFamily","action":"modified","key":"family"}',target:'',action:'/member/saveMemberFamily',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveMemberFamily_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
	var codeOptions = [{ code: "00025", compID: "grd_memberFamily:RELATIONSHIP" }];
	com.data.setCommonCode(codeOptions);
	com.util.setGridViewDelCheckBox(grd_memberFamily);
	com.data.setChangeCheckedDc(dlt_memberFamily);
};

/**
 * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function () {
	var param = {
		"dma_memberBasic": {
			"EMP_CD": adm_memberBasic.get("EMP_CD")
		}
	};
	com.sbm.execute(sbm_getMemberFamilyList, param);
};

/** 
 * 가족 정보를 추가한다.
 */
scwin.btn_insertFamily_onclick = function () {
	var idx = com.data.insertRow(grd_memberFamily);
	dlt_memberFamily.setCellData(idx, "EMP_CD", adm_memberBasic.get("EMP_CD"));
	grd_memberFamily.setFocusedCell(idx, "RELATIONSHIP");
};

scwin.btn_saveFamily_onclick = function () {
	var familyInfo = [{ id: "RELATIONSHIP", mandatory: true },
	{ id: "FAMILY_NM", mandatory: true },
	{ id: "RESIDENT_NO", mandatory: true, minLength: 13 }];
	if (dlt_memberFamily.getModifiedIndex().length > 0) {
		if (com.data.validateGridView(grd_memberFamily, familyInfo)) {
			com.win.confirm(com.data.getMessage("MSG_CM_00042"), "scwin.saveMemberFamilyConfirmCallback");
		}
	} else {
		com.win.alert(com.data.getMessage("MSG_CM_00045"));
	}
};

scwin.saveMemberFamilyConfirmCallback = function (res) {
	if (res.clickValue === true) {
		com.sbm.execute(sbm_saveMemberFamily);
	}
};

scwin.btn_cancelFamily_onclick = function () {
	com.data.undoGridView(grd_memberFamily);
};

scwin.sbm_saveMemberFamily_submitdone = function (e) {
	com.sbm.execute(sbm_getMemberFamilyList);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:'group7',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm row_add',id:'btn_insertFamily',style:'',type:'button','ev:onclick':'scwin.btn_insertFamily_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_saveFamily',style:'',type:'button','ev:onclick':'scwin.btn_saveFamily_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'btn_cancelFamily',style:'',type:'button','ev:onclick':'scwin.btn_cancelFamily_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:dlt_memberFamily',enterKeyMove:'',fixedColumnWithHidden:'true',hideHeader:'',id:'grd_memberFamily',keepDefaultColumnWidth:'true',keyMoveEditMode:'true',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'',scrollByColumn:'false',sortEvent:'ondblclick',sortable:'true',style:'height: 160px;',useShiftKey:'false',defaultCellHeight:'26'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'chk',inputType:'checkbox',style:'',width:'50',checkboxLabelColumn:'',checkboxLabel:'선택',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column11',inputType:'text',style:'',value:'관계',width:'70',class:'req'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column9',inputType:'text',style:'',value:'가족성명',width:'95',class:'req'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',inputType:'text',style:'',value:'주민번호',width:'142',class:'req'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column5',inputType:'text',style:'',value:'직업',width:'148'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',inputType:'text',style:'',value:'동거여부',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column1',inputType:'text',style:'',value:'부양여부',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',fixColumnWidth:'true',id:'chk',inputType:'checkbox',style:'',width:'40',checkboxLabel:'선택'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'req',id:'RELATIONSHIP',inputType:'select',style:'',width:'70'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{blockSelect:'false',class:'req',id:'FAMILY_NM',inputType:'text',style:'',width:'95'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'req',displayFormat:'######-#######',id:'RESIDENT_NO',inputType:'text',maxLength:'13',maxlength:'13',style:'',width:'142'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'JOB',inputType:'text',style:'',value:'',width:'148'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'IS_CORESIDENCE',inputType:'select',style:'',width:'70'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'IS_SUPPORT',inputType:'select',style:'',width:'70'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]}]}]})