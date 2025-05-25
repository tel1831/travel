/*amd /ui/BM/BM001M01.xml 26500 59086b1502e3dbc0f8ec8428a448cbbbdc9bd37c80e8b93530488bcc147c41f8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_commonGrp',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:onbeforerowpositionchange':'scwin.dlt_commonGrp_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'GRP_CD',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'GRP_NM',name:'그룹명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SORT_ORDER',name:'코드순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_USE',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NOTE',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_commonCode',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'GRP_CD',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COM_CD',name:'공통코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_NM',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SORT_ORDER',name:'코드순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_USE',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ATTR_VALUE1',name:'속성값1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ATTR_VALUE2',name:'속성값2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ATTR_VALUE3',name:'속성값3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NOTE',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'TYPE',name:'유형',dataType:'text'}},{T:1,N:'w2:key',A:{id:'CONTENT',name:'내용',dataType:'text'}},{T:1,N:'w2:key',A:{id:'IS_USE',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_common',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'GRP_CD',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COM_CD',name:'공통코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_NM',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SORT_ORDER',name:'코드순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_USE',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ATTR_VALUE1',name:'속성값1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ATTR_VALUE2',name:'속성값2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ATTR_VALUE3',name:'속성값3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NOTE',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_commonSearchItem',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'GRP_NM',name:'그룹명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'GRP_CD',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NOTE',name:'비고',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_commonCode',ref:'',target:'data:json,dlt_commonCode',action:'/common/selectCommonCodeList',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_commonCode_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_commonGroup',ref:'data:json,dma_search',target:'data:json,dlt_commonGrp',action:'/common/selectCommonGroup',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_commonGroup_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveGrp',ref:'data:json,{"action":"modified","id":"dlt_commonGrp"}',target:'',action:'/common/saveCommonGrp',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'저장중입니다...','ev:submit':'','ev:submitdone':'scwin.sbm_saveGrp_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveGrpCodeAll',ref:'data:json,[{"id":"dlt_commonGrp","action":"modified"},{"id":"dlt_commonCode","action":"modified"}]',target:'',action:'/common/saveCommonGrpAll',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'저장중 입니다...','ev:submit':'','ev:submitdone':'scwin.sbm_saveGrpCodeAll_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveCode',ref:'data:json,[{"id":"dlt_commonCode","action":"modified"}]',target:'',action:'/common/saveCommonCode',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'저장중입니다...','ev:submit':'','ev:submitdone':'scwin.sbm_saveCode_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_commonSearchItem',ref:'',target:'data:json,dlt_commonSearchItem',action:'/common/selectCommonSearchItem',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * 마지막에 선택한 Code Group Row Index
 */
scwin.selectedCodeGrpIdx = 0;

/**
 * 초기 스크립트 수행 함수 정의
 */
scwin.onpageload = function () {
	com.sbm.execute(sbm_commonSearchItem);
	com.win.setEnterKeyEvent(tbl_search, scwin.btn_search_onclick);
	com.util.setGridViewDelCheckBox([grd_commonGrp, grd_commonCode]);
	com.data.setChangeCheckedDc([dlt_commonGrp, dlt_commonCode]);
};

/**
 * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function () {
	scwin.btn_search_onclick();
};

/**
 * 검색항목(selectBox)의 내용이 변경되었을 때 실행된다
 */
scwin.sbx_choiceBox_onviewchange = function (info) {
	if (info.newValue == "GRP_CD") {
		acb_autoChoiceBox.hide();
		sbx_grpCd.show("");
	} else if (info.newValue == "GRP_NM") {
		acb_autoChoiceBox.setNodeSet("data:dlt_commonSearchItem", "GRP_NM", "GRP_NM");
		sbx_grpCd.hide();
		acb_autoChoiceBox.show("");
	} else if (info.newValue == "NOTE") {
		acb_autoChoiceBox.setNodeSet("data:dlt_commonSearchItem", "NOTE", "NOTE");
		sbx_grpCd.hide();
		acb_autoChoiceBox.show("");
	}
};

/**
 * 공통그룹코드의 row 선택시 발생하며 하위 코드리스트에 변경사항 있는 경우에는 저장여부를 묻고, 아닌 경우에는 하위 리스트를 조회한다.
 */
scwin.dlt_commonGrp_onbeforerowpositionchange = function (info) {
	scwin.selectedCodeGrpIdx = info.newRowIndex;

	if (com.data.isModified(dlt_commonCode)) {
		com.win.confirm(com.data.getMessage("MSG_CM_00048") + " " + com.data.getMessage("MSG_CM_00001"), scwin.saveCode);
		return false;
	} else {
		var status_row = dlt_commonGrp.getRowStatus(info.newRowIndex);

		if (status_row == "C") {
			dlt_commonCode.removeAll();
			dlt_commonCode.reform();
			spn_codeCnt.setValue(dlt_commonCode.getRowCount());
		} else {
			var grpCd = dlt_commonGrp.getCellData(info.newRowIndex, "GRP_CD");
			if (grpCd) {
				var param = { dma_commonGrp: { GRP_CD: grpCd } };
				com.sbm.execute(sbm_commonCode, param);
			}
		}
	}
};

/**
 * 공통코드 리스트 조회 submitdone이벤트 리스트 조회후 건수를 셋팅한다.
 */
scwin.sbm_commonCode_submitdone = function (e) {
	if (com.sbm.getResultCode(e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
		spn_codeCnt.setValue(dlt_commonCode.getRowCount());
	}
};

/**
 * 조회버튼 클릭시 조건에 따른 공통코드 그룹 리스트를 가져온다.
 */
scwin.btn_search_onclick = function () {
	if (sbx_choiceBox.getValue() == "GRP_CD") {
		dma_search.set("CONTENT", sbx_grpCd.getValue());
	} else {
		dma_search.set("CONTENT", acb_autoChoiceBox.getValue());
	}

	scwin.selectedCodeGrpIdx = 0;

	if (com.data.isModified(dlt_commonCode)) {
		com.win.confirm(com.data.getMessage("MSG_CM_00049"),
			function (res) {
				if (res.clickValue === true) {
					com.data.undoAll(dlt_commonCode);
					com.sbm.execute(sbm_commonGroup);
				}
			}
		);
	} else {
		com.sbm.execute(sbm_commonGroup);
	}
};

/**
 * 공통 코드 그룹 리스트 조회 submitdone이벤트 리스트 조회후 건수를 셋팅한다.
 */
scwin.sbm_commonGroup_submitdone = function (e) {
	if (com.sbm.getResultCode(e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
		dlt_commonCode.removeAll();
		spn_codeCnt.setValue("0");

		spn_grpCnt.setValue(dlt_commonGrp.getRowCount());
		grd_commonGrp.setFocusedCell(scwin.selectedCodeGrpIdx, "GRP_NM");
	}
};

/**
 * 공통코드 그룹의 등록버튼 클릭시 하나의 row를 추가한다.
 */
scwin.btn_addGrpCell_onclick = function () {
	if (com.data.isModified(dlt_commonCode)) {
		com.win.confirm(com.data.getMessage("MSG_CM_00050") + " " + com.data.getMessage("MSG_CM_00001"), scwin.saveCode);
	} else {
		var idx = com.data.insertRow(grd_commonGrp);
		dlt_commonGrp.setCellData(idx, "IS_USE", 'Y');
		grd_commonGrp.setCellReadOnly(idx, "GRP_CD", false);
		grd_commonGrp.setFocusedCell(idx, "GRP_CD", true);
	}
};

/**
 * 공통코드 그룹 및 코드 데이터 저장 버튼 이벤트를 수행한다.
 */
scwin.btn_saveGrpCell_onclick = function () {
	scwin.saveData();
};

/**
 * 데이터에 대한 유효성 검사 후 데이터를 저장한다.
 */
scwin.saveData = function () {
	if (com.data.isModified(dlt_commonGrp) && com.data.isModified(dlt_commonCode)) {
		com.win.confirm(com.data.getMessage("MSG_CM_00011") + " " + com.data.getMessage("MSG_CM_00010"), scwin.saveGrpCodeAll);
	} else if (com.data.isModified(dlt_commonGrp)) {
		com.win.confirm(com.data.getMessage("MSG_CM_00012") + " " + com.data.getMessage("MSG_CM_00010"), scwin.saveGrp);
	} else if (com.data.isModified(dlt_commonCode)) {
		com.win.confirm(com.data.getMessage("MSG_CM_00013") + " " + com.data.getMessage("MSG_CM_00010"), scwin.saveCode);
	} else {
		com.win.alert(com.data.getMessage("MSG_CM_00005"));
	}
}

/**
 * 코드 그룹의 필수 입력 정보를 체크한다.
 */
scwin.validateCodeGroup = function () {
	var valInfo = [{ id: "GRP_CD", mandatory: true },
	{ id: "GRP_NM", mandatory: true },
	{ id: "SORT_ORDER", mandatory: true }];
	return com.data.validateGridView(grd_commonGrp, valInfo);
};

/**
 * 코드의 필수 입력 정보를 체크한다.
 */
scwin.validateCode = function () {
	var valInfo = [{ id: "COM_CD", mandatory: true },
	{ id: "CODE_NM", mandatory: true },
	{ id: "SORT_ORDER", mandatory: true }];
	return com.data.validateGridView(grd_commonCode, valInfo);
}

/**
 * 공통코드 그룹리스트 및 세부코드리스트에서 rowStatus C,U,D,E 상태(Modify)인 것만 저장한다.
 */
scwin.saveGrpCodeAll = function (res) {
	if (res.clickValue === true) {
		com.sbm.execute(sbm_saveGrpCodeAll);
	}
};

/**
 * 공통코드 그룹리스트에서 rowStatus C,U,D,E 상태(Modify)인 것만 저장한다.
 */
scwin.saveGrp = function (res) {
	if (scwin.validateCodeGroup()) {
		if (res.clickValue === true) {
			com.sbm.execute(sbm_saveGrp);
		}
	}
};

/**
 * 세부코드리스트에서 rowStatus C,U,D,E 상태(Modify)인 것만 저장한다.
 */
scwin.saveCode = function (res) {
	if (scwin.validateCode()) {
		if (res.clickValue === true) {
			com.sbm.execute(sbm_saveCode);
		}
	}
};

/**
 * 공통코드 그룹리스트에서 취소 버튼클릭시 데이타를 이전 상태로 바꾸고 추가된 것들은 삭제한다.
 */
scwin.btn_cancelGrp_onclick = function () {
	com.data.undoGridView(grd_commonGrp);
};

/**
 * 공통코드 리스트에서 등록버튼 클릭시 실행되며 한줄의 row를 생성한다.
 */
scwin.btn_addCodeCell_onclick = function () {
	var focusRowIdx = grd_commonGrp.getFocusedRowIndex();
	if (focusRowIdx == -1) {
		com.win.alert(com.data.getMessage("MSG_CM_00014"));
	} else {
		var rowStatus = dlt_commonGrp.getRowStatus(focusRowIdx);
		if (rowStatus == "C") {
			com.win.alert(com.data.getMessage("MSG_CM_00015"));
		} else {
			var idx = com.data.insertRow(grd_commonCode);

			var grp_cd = dlt_commonGrp.getCellData(focusRowIdx, "GRP_CD");
			dlt_commonCode.setCellData(idx, "GRP_CD", grp_cd);
			dlt_commonCode.setCellData(idx, "IS_USE", 'Y');
			grd_commonCode.setCellReadOnly(idx, "COM_CD", false);
			grd_commonCode.setFocusedCell(idx, "COM_CD", true);
		}
	}
};

/**
 * 공통코드의 수정된 데이타의 상태를 원본으로 돌리고 추가된 데이타는 지운다.
 */
scwin.btn_cancelCode_onclick = function () {
	com.data.undoGridView(grd_commonCode);
};

scwin.btn_excelGrp_onclick = function () {
	com.data.downloadGridViewExcel(grd_commonGrp);
};

scwin.btn_excelCode_onclick = function () {
	com.data.downloadGridViewExcel(grd_commonCode);
};

scwin.sbm_saveGrp_submitdone = function (e) {
	if (com.sbm.getResultCode(e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
		scwin.btn_search_onclick();
	}
};

scwin.sbm_saveGrpCodeAll_submitdone = function (e) {
	if (com.sbm.getResultCode(e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
		dlt_commonCode.undoAll();
		scwin.btn_search_onclick();
	}
};

scwin.sbm_saveCode_submitdone = function (e) {
	if (com.sbm.getResultCode(e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
		var param = { dma_commonGrp: { GRP_CD: dlt_commonGrp.getCellData(grd_commonGrp.getFocusedRowIndex(), "GRP_CD") } };
		com.sbm.execute(sbm_commonCode, param);
	}
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_gvw',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'wfm_header',style:'',src:'../../cm/xml/contentHeader.xml'}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox_inner',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'900',class:'w2tb tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'검색항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{ref:'data:dma_search.TYPE',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width:100px;',allOption:'',id:'sbx_choiceBox',class:'',direction:'auto','ev:onviewchange':'scwin.sbx_choiceBox_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'그룹명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'GRP_NM'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'그룹코드'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'GRP_CD'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'NOTE'}]}]}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_grpCd',ref:'',renderType:'native',style:'width:150px;display: none;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_commonSearchItem'},E:[{T:1,N:'xf:label',A:{ref:'GRP_CD'}},{T:1,N:'xf:value',A:{ref:'GRP_CD'}}]}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'true',caseSensitive:'false',chooseOption:'',chooseOptionLabel:'',chooseOptionValue:'',displayMode:'label',editType:'select',emptyItem:'',emptyValue:'','ev:onchange':'','ev:onviewchange':'',id:'acb_autoChoiceBox',interactionMode:'',noResult:'useData',ref:'data:dma_search.CONTENT',search:'start',selectedData:'',style:'width:150px;',submenuSize:'auto',textAlign:'left',useKeywordHighlight:'false',class:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_commonSearchItem'},E:[{T:1,N:'w2:label',A:{ref:'GRP_NM'}},{T:1,N:'w2:value',A:{ref:'GRP_NM'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td',id:''},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'',ref:'data:dma_search.IS_USE',renderType:'radiogroup',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'},E:[{T:1,N:'w2:textbox',A:{label:'코드그룹',style:'',id:'',class:'',tagname:'h3'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'fr'},E:[{T:1,N:'w2:textbox',A:{class:'sum',id:'spn_grpCnt',label:'',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:''}},{T:1,N:'xf:trigger',A:{type:'button',style:'',id:'btn_addGrpCell',class:'btn_cm row_add','ev:onclick':'scwin.btn_addGrpCell_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ','ev:onclick':'scwin.btn_delProgram_onclick',id:'btn_delProgram',style:'display: none;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancelGrp',style:'',type:'button','ev:onclick':'scwin.btn_cancelGrp_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm download',id:'btn_excelGrp',style:'',type:'button','ev:onclick':'scwin.btn_excelGrp_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀다운로드'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox wq_flx',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{adaptive:'',autoFit:'allColumn',captionTitle:'',checkReadOnlyOnCut:'',class:'wq_gvw',dataList:'data:dlt_commonGrp',filterFocusMode:'',id:'grd_commonGrp',keepDefaultColumnWidth:'true',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height:296px;',autoFitMinWidth:'800'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',checkboxLabel:'선택',displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'height:26px;',value:'',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'req',displayMode:'label',id:'column18',inputType:'text',removeBorderStyle:'false',style:'height:26px;',value:'그룹코드',width:'90'}},{T:1,N:'w2:column',A:{allowChar:'',blockSelect:'false',class:'req',displayMode:'label',id:'column17',inputType:'text',removeBorderStyle:'false',style:'height:26px;',value:'그룹명',width:'267'}},{T:1,N:'w2:column',A:{allowChar:'',blockSelect:'false',class:'req',displayMode:'label',id:'column16',inputType:'text',removeBorderStyle:'false',style:'height:26px;',value:'코드순서',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column15',inputType:'text',removeBorderStyle:'false',style:'height:26px;',value:'사용여부',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column14',inputType:'text',removeBorderStyle:'false',style:'height:26px;',value:'비고',width:'382'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',checkboxLabel:'선택',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'height:26px;',value:'',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'GRP_CD',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'90',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'GRP_NM',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'137',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'SORT_ORDER',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',checkboxLabel:'선택',displayMode:'label',id:'IS_USE',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'',width:'100',valueType:'other',trueValue:'Y',escapeFormatter:'',falseValue:'N',defaultValue:'N'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'NOTE',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'202',textAlign:'left'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'코드',style:'',tagname:'H3'}},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'sum',id:'spn_codeCnt',label:'',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm row_add',id:'btn_addCodeCell',style:'',type:'button','ev:onclick':'scwin.btn_addCodeCell_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancelCode',style:'',type:'button','ev:onclick':'scwin.btn_cancelCode_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm download',id:'btn_excelCode',style:'',type:'button','ev:onclick':'scwin.btn_excelCode_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀다운로드'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox wq_flx',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'800',captionTitle:'',checkReadOnlyOnCut:'',class:'wq_gvw',dataList:'data:dlt_commonCode',id:'grd_commonCode',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 250px;',keepDefaultColumnWidth:'true',adaptiveThreshold:'',adaptive:''},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',checkboxLabel:'선택',displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'선택',width:'50',hiddenClass:''}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'req',displayMode:'label',id:'column18',inputType:'text',removeBorderStyle:'false',style:'height: 26px',value:'공통코드',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'req',displayMode:'label',id:'column17',inputType:'text',removeBorderStyle:'false',style:'',value:'코드명',width:'200'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column16',inputType:'text',removeBorderStyle:'false',style:'',value:'코드순서',width:'90',class:'req'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column15',inputType:'text',removeBorderStyle:'false',style:'',value:'사용여부',width:'70'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',style:'',id:'column51',value:'속성값1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',style:'',id:'column49',value:'속성값2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column14',inputType:'text',removeBorderStyle:'false',style:'',value:'속성값3',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'',width:'70',checkboxLabel:'선택'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'COM_CD',inputType:'text',removeBorderStyle:'false',style:'height: 26px',value:'',width:'90',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'CODE_NM',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'SORT_ORDER',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'IS_USE',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'',width:'70',checkboxLabel:'선택',falseValue:'N',typeGetter:'',trueValue:'Y',validator:'',valueType:'other'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'ATTR_VALUE1',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'ATTR_VALUE2',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ATTR_VALUE3',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'250'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_saveGrpCell',style:'',type:'button','ev:onclick':'scwin.btn_saveGrpCell_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]})