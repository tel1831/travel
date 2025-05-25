/*amd /ui/HM/HM003S03.xml 7458 1dadccfbb58b10102b55a6af9a5efed5784b05c8e9a9406f0e290edb5abb03cc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_memberProject',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'EMP_CD',name:'사원코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SEQ',name:'순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'PROJECT_NM',name:'프로젝트명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROJECT_DESC',name:'프로젝트 개요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'START_DATE',name:'참여시작기간',dataType:'date'}},{T:1,N:'w2:column',A:{id:'END_DATE',name:'참여종료기간',dataType:'date'}},{T:1,N:'w2:column',A:{id:'ASSIGNED_TASK',name:'담당업무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORDERING_ORG',name:'발주처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COMPANY',name:'소속사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NOTE',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:aliasDataMap',A:{id:'adm_memberBasic',scope:'../dma_memberBasic',studioSrc:'/ui/HM/HM003M01.xml'}}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_getMemberProjectList',ref:'',target:'data:json,{"id":"dlt_memberProject","key":"data"}',action:'/member/selectMemberProject',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveMemberProject',ref:'data:json,{"id":"dlt_memberProject","action":"modified","key":"project"}',target:'',action:'/member/saveMemberProject',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveMemberProject_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
	com.util.setGridViewDelCheckBox(grd_memberProject);
	com.data.setChangeCheckedDc(dlt_memberProject);
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
	com.sbm.execute(sbm_getMemberProjectList, param);
};

/**
 * 프로젝트 정보를 추가한다.
 */
scwin.btn_insertProject_onclick = function () {
	var idx = com.data.insertRow(grd_memberProject);
	dlt_memberProject.setCellData(idx, "EMP_CD", adm_memberBasic.get("EMP_CD"));
	grd_memberProject.setFocusedCell(idx, "PROJECT_NM");
};

scwin.btn_saveProject_onclick = function () {
	var projectInfo = [{ id: "PROJECT_NM", mandatory: true },
	{ id: "START_DATE", mandatory: true },
	{ id: "END_DATE", mandatory: true }];
	
	if (dlt_memberProject.getModifiedIndex().length > 0) {
		if (com.data.validateGridView(grd_memberProject, projectInfo)) {
			com.win.confirm(com.data.getMessage("MSG_CM_00042"), "scwin.saveMemberProjectConfirmCallback");
		}
	} else {
		com.win.alert(com.data.getMessage("MSG_CM_00045"));
	}
};

scwin.saveMemberProjectConfirmCallback = function (res) {
	if (res.clickValue === true) {
		com.sbm.execute(sbm_saveMemberProject);
	}
};

scwin.btn_cancelProject_onclick = function () {
	com.data.undoGridView(grd_memberProject);
};

scwin.sbm_saveMemberProject_submitdone = function (e) {
	com.sbm.execute(sbm_getMemberProjectList);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:'group8',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm  row_add',id:'btn_insertProject',style:'',type:'button','ev:onclick':'scwin.btn_insertProject_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_saveProject',style:'',type:'button','ev:onclick':'scwin.btn_saveProject_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'btn_cancelProject',style:'',type:'button','ev:onclick':'scwin.btn_cancelProject_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]},{T:1,N:'w2:gridView',A:{adaptive:'crosstab',autoFit:'allColumn',class:'wq_gvw',dataList:'dlt_memberProject',fixedColumnWithHidden:'true',id:'grd_memberProject',keepDefaultColumnWidth:'true',keyMoveEditMode:'true',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'',scrollByColumn:'false',sortEvent:'ondblclick',sortable:'true',style:'height: 160px;',useShiftKey:'false',defaultCellHeight:'26'},E:[{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'chk',inputType:'checkbox',style:'',width:'50',checkboxLabelColumn:'',checkboxLabel:'선택',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column29',inputType:'text',style:'',value:'프로젝트명',width:'172',class:'req'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column27',inputType:'text',style:'',value:'프로젝트 개요',width:'183'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column25',inputType:'text',style:'',value:'참여시작기간',width:'120',class:'req'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column23',inputType:'text',style:'',value:'참여종료기간',width:'120',class:'req'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column21',inputType:'text',style:'',value:'담당업무',width:'107'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column19',inputType:'text',style:'',value:'발주처',width:'102'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column17',inputType:'text',style:'',value:'소속사',width:'102'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column15',inputType:'text',style:'',value:'비고',width:'134'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',fixColumnWidth:'true',id:'chk',inputType:'checkbox',style:'',width:'40',checkboxLabel:'선택'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'req',id:'PROJECT_NM',inputType:'text',style:'',value:'',width:'172'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'PROJECT_DESC',inputType:'text',style:'',width:'183'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'req',id:'START_DATE',inputType:'calendar',style:'',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'req',id:'END_DATE',inputType:'calendar',style:'',width:'105'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'ASSIGNED_TASK',inputType:'text',style:'',width:'107'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'ORDERING_ORG',inputType:'text',style:'',width:'102'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'COMPANY',inputType:'text',style:'',width:'102'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'NOTE',inputType:'text',style:'',width:'134'}}]}]}]}]}]}]})