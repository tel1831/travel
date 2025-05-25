/*amd /ui/HM/HM001M01.xml 27571 f37407fb626341792a34c4b0721667fd721f15d43e92c1d726a8b75ea072a928 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_organizationBasic',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:oncelldatachange':'',undoRecursiveRow:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'ORG_CD',name:'소속코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_NM',name:'소속명칭',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENT_ORG_CD',name:'상위소속코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_LEVEL',name:'조직레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SORT_ORDER',name:'정렬순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_CLASS_CD',name:'조직구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_ALIAS_NM',name:'소속약칭',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_EN_NM',name:'소속영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_EN_ALIAS_NM',name:'소속영문약명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_BOSS_EMP_NM',name:'책임자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'START_DATE',name:'개설일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'END_DATE',name:'폐쇄일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NOTE',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENT_ORG_NM',name:'상위소속명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_BOSS_EMP_CD',name:'책임자코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_organizationBoss',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'EMP_CD',name:'사원코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMP_NM',name:'사원명',dataType:'text'}}]},{T:1,N:'w2:data'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'TYPE',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'CONTENT',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'IS_USE',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_organizationSearchItem',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ORG_CD',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_NM',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENT_ORG_CD',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENT_ORG_NM',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchOrganization',ref:'data:json,dma_search',target:'data:json,dlt_organizationBasic',action:'/organization/searchOrganization',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchOrganization_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveOrganizationBasic',ref:'data:json,{"id":"dlt_organizationBasic","action":"modified"}',target:'data:json,dlt_organizationBasic',action:'/organization/updateOrganizationBasic',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'저장중 입니다...','ev:submit':'','ev:submitdone':'scwin.sbm_saveOrganizationBasic_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_organizationSearchItem',ref:'',target:'data:json,["dlt_organizationSearchItem","dlt_organizationBoss"]',action:'/organization/selectOrganizaionSearchItem',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * 초기 스크립트 수행 함수 정의
 */
scwin.onpageload = function () {
	var codeOptions = [{ "code": "00020", "compID": "sbx_OrgClassCd, grd_organizationBasic:ORG_CLASS_CD" }];
	com.data.setCommonCode(codeOptions);
	com.sbm.execute(sbm_organizationSearchItem);
	com.win.setEnterKeyEvent(tbl_search, scwin.btn_search_onclick);
	com.util.setGridViewDelCheckBox(grd_organizationBasic);
	com.data.setChangeCheckedDc(dlt_organizationBasic);
};

/**
 * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function () {
	scwin.btn_search_onclick();
};

/**
 * 조회된 건수와 조직 레벨에 따른 소속명칭, 상위소속명의 폰트색을 변경한다. 
 * Level 1 : #E74C3C  (붉은색) Level 2 : #1FCC25  (초록색) Level 3 : #348FE2  (파란색)
 */
scwin.setFontFormat = function (data, fData, rowIndex, colIndex) {
	var val_level = dlt_organizationBasic.getCellData(rowIndex, "ORG_LEVEL");
	if (val_level == "1") {
		grd_organizationBasic.setCellColor(rowIndex, "ORG_NM", "#E74C3C ");
		grd_organizationBasic.setCellColor(rowIndex, "PARENT_ORG_NM", "#E74C3C ");
	} else if (val_level == "2") {
		grd_organizationBasic.setCellColor(rowIndex, "ORG_NM", "#1FCC25 ");
		grd_organizationBasic.setCellColor(rowIndex, "PARENT_ORG_NM", "#1FCC25 ");
	} else if (val_level == "3") {
		grd_organizationBasic.setCellColor(rowIndex, "ORG_NM", "#348FE2 ");
		grd_organizationBasic.setCellColor(rowIndex, "PARENT_ORG_NM", "#348FE2 ");
	}
	return fData;
};

/**
 * 검색항목(selectBox)의 내용이 변경되었을 때 실행된다
 */
scwin.sbx_choiceBox_onviewchange = function (info) {
	if (info.newValue == "ORG_CD") {
		acb_autoChoiceBox.setNodeSet("data:dlt_organizationSearchItem", "ORG_CD", "ORG_CD");
		sbx_parentCd.hide();
		acb_autoChoiceBox.show("");
	} else if (info.newValue == "ORG_NM") {
		acb_autoChoiceBox.setNodeSet("data:dlt_organizationSearchItem", "ORG_NM", "ORG_NM");
		sbx_parentCd.hide();
		acb_autoChoiceBox.show("");
	} else if (info.newValue == "ORG_BOSS_EMP_CD") {
		acb_autoChoiceBox.setNodeSet("data:dlt_organizationBoss", "EMP_NM", "EMP_CD");
		sbx_parentCd.hide();
		acb_autoChoiceBox.show("");
	} else if (info.newValue == "PARENT_ORG_CD") {
		acb_autoChoiceBox.hide();
		sbx_parentCd.show("");
	}
};

/**
 * 조직기본관리 조회버튼 클릭시 발생하며, 조건에 따른 조직기본관리 리스트를 조회한다.
 */
scwin.btn_search_onclick = function () {
	if (sbx_choiceBox.getValue() == "PARENT_ORG_CD") {
		dma_search.set("CONTENT", sbx_parentCd.getValue());
	} else {
		dma_search.set("CONTENT", acb_autoChoiceBox.getValue());
	}
	com.sbm.execute(sbm_searchOrganization);
};

/**
 * 조직기본관리 버튼 클릭의 콜백메소드 건수 조회, ReadOnly 그리드뷰 컬럼색 변경, 조직 레벨에 따른 소속명칭, 상위소속명의 폰트색을 변경한다.
 */
scwin.sbm_searchOrganization_submitdone = function (e) {
	spn_organizationCnt.setValue(dlt_organizationBasic.getRowCount());
};

/**
 * 조직기본관리 등록 버튼 클릭
 */
scwin.btn_addOrganization_onclick = function () {
	var org_cnt = dlt_organizationBasic.getTotalRow();
	if (org_cnt == 0) {
		com.win.alert(com.data.getMessage("MSG_CM_00022"));
		return;
	}

	if (grd_organizationBasic.getFocusedRealRowIndex() === -1) {
		grd_organizationBasic.setFocusedCell(0, "ORG_CD");
	}
	var currOrgNm = dlt_organizationBasic.getCellData(grd_organizationBasic.getFocusedRealRowIndex(), "ORG_NM");
	var currOrgLevel = com.num.parseInt(dlt_organizationBasic.getCellData(grd_organizationBasic.getFocusedRealRowIndex(), "ORG_LEVEL"));
	if (org_cnt != "0" && grd_organizationBasic.getFocusedRowIndex() == "-1") {
		com.win.alert(com.data.getMessage("MSG_CM_00040"));
	} else {
		if (currOrgLevel < 3) {
			scwin.selectLevel(currOrgNm);
		} else {
			scwin.equalLevel();
		}
	}
};

/**
 * 조직레벨이 1 또는 2일 경우에 실행되는 함수 Yes, No에 따라서 하위에 만들 것인지, 동일한 레벨로 만들 것인지 결정한다.
 */
scwin.selectLevel = function (returnValue) {
	grd_organizationBasic.spanAll(true);
	com.win.confirm(returnValue + " " + com.data.getMessage("MSG_CM_00030"), "scwin.selectLevelCallbak");
};

scwin.selectLevelCallbak = function (res) {
	if (res.clickValue === true) {
		scwin.lowerLevel();
	} else {
		scwin.equalLevel();
	}
};

/**
 * 하위 레벨의 노드에 조직을 추가한다.
 */
scwin.lowerLevel = function () {
	var focusedRowIndex = grd_organizationBasic.getFocusedRealRowIndex();
	var parentOrgCd = dlt_organizationBasic.getCellData(focusedRowIndex, "ORG_CD");
	var orgLevel = com.num.parseInt(dlt_organizationBasic.getCellData(focusedRowIndex, "ORG_LEVEL")) + 1;
	var sortOrder = 1;
	var insertRowIndex = scwin.getInsertRowIndex(parentOrgCd);

	if (insertRowIndex === -1) {
		insertRowIndex = focusedRowIndex + 1;
	}
	var orgCd = scwin.getInsertRowOrgCd(parentOrgCd, orgLevel, true);

	var insertJson = [{ "ORG_CD": orgCd, "PARENT_ORG_CD": parentOrgCd, "ORG_LEVEL": orgLevel, "SORT_ORDER": sortOrder }];
	dlt_organizationBasic.insertJSON(insertRowIndex, insertJson);
	grd_organizationBasic.setFocusedCell(insertRowIndex, "ORG_CD");
	ibx_orgNm.focus();
};

/**
 * 같은 레벨의 노트에 조직을 추가한다.
 */
scwin.equalLevel = function () {
	var focusedRowIndex = grd_organizationBasic.getFocusedRealRowIndex();
	var parentOrgCd = dlt_organizationBasic.getCellData(focusedRowIndex, "PARENT_ORG_CD");
	var rowIndexArr = dlt_organizationBasic.getMatchedIndex("PARENT_ORG_CD", parentOrgCd, true, 0, dlt_organizationBasic.getRowCount());
	var orgLevel = com.num.parseInt(dlt_organizationBasic.getCellData(rowIndexArr[rowIndexArr.length - 1], "ORG_LEVEL"));
	var sortOrder = com.num.parseInt(dlt_organizationBasic.getCellData(rowIndexArr[rowIndexArr.length - 1], "SORT_ORDER")) + 1;
	var insertRowIndex = scwin.getInsertRowIndex(parentOrgCd);
	var orgCd = scwin.getInsertRowOrgCd(parentOrgCd, orgLevel, false);

	var insertJson = [{ "ORG_CD": orgCd, "PARENT_ORG_CD": parentOrgCd, "ORG_LEVEL": orgLevel, "SORT_ORDER": sortOrder }];

	dlt_organizationBasic.insertJSON(insertRowIndex, insertJson);
	grd_organizationBasic.setFocusedCell(insertRowIndex, "ORG_CD");
	ibx_orgNm.focus();
};

/**
 * 새로 추가되는 조직의 조직 코드를 반환한다.
 */
scwin.getInsertRowOrgCd = function (parentOrgCd, orgLevel, isBottom) {
	var OrgCdArr = dlt_organizationBasic.getMatchedColumnData("PARENT_ORG_CD", parentOrgCd, "ORG_CD", true, 0, dlt_organizationBasic.getRowCount());

	if (OrgCdArr.length > 0) {
		var lastOrgCd = OrgCdArr[OrgCdArr.length - 1];
		var nodeIndex = (orgLevel - 1) * 2;
		var preNodeCd = lastOrgCd.substr(nodeIndex, 2);
		var newNodeCd = com.str.lpad(com.num.parseInt(preNodeCd) + 1, 2, "0");
		return lastOrgCd.substr(0, nodeIndex) + lastOrgCd.substr(nodeIndex).replace(preNodeCd, newNodeCd);
	} else {
		if (isBottom) {
			var nodeIndex = parentOrgCd.indexOf("00");
			return parentOrgCd.substr(0, nodeIndex) + parentOrgCd.substr(nodeIndex).replace("00", "01");
		} else {
			var nodeIndex = parentOrgCd.indexOf("00");
			var preNodeCd = parentOrgCd.substr(nodeIndex, 2);
			var newNodeCd = com.str.lpad(com.num.parseInt(preNodeCd) + 1, 2, "0");
			return parentOrgCd.substr(0, nodeIndex) + parentOrgCd.substr(nodeIndex).replace(preNodeCd, newNodeCd);
		}
	}
};

/**
 * 새로 추가되는 조직으로 RowIndex를 반환한다.
 */
scwin.getInsertRowIndex = function (parentOrgCd) {
	var rowIndexArr = dlt_organizationBasic.getMatchedIndex("PARENT_ORG_CD", parentOrgCd, true, 0, dlt_organizationBasic.getRowCount());
	if (rowIndexArr.length > 0) {
		var lastOrgCd = dlt_organizationBasic.getCellData(rowIndexArr[rowIndexArr.length - 1], "ORG_CD");
		var rowIndex = scwin.getInsertRowIndex(lastOrgCd);
		if (rowIndex !== -1) {
			return rowIndex;
		} else {
			return rowIndexArr[rowIndexArr.length - 1] + 1;
		}
	} else {
		return -1;
	}
};

/**
 * 조직기본관리 삭제 버튼 클릭
 */
scwin.btn_delOrganization_onclick = function () {
	dlt_organizationBasic.deleteRows(grd_organizationBasic.getCheckedIndex("chk"));
};

/**
 * 조직기본관리 취소 버튼 클릭
 */
scwin.btn_cancelOrganization_onclick = function () {
	com.data.undoGridView(grd_organizationBasic);
};

/**
 * 조직기본관리 저장 버튼 클릭
 */
scwin.btn_saveOrganization_onclick = function () {
	if (com.data.isModified(dlt_organizationBasic)) {
		if (com.data.validateGroup(grp_organizationBasic)) {
			com.win.confirm(com.data.getMessage("MSG_CM_00031"), function (res) {
				if (res.clickValue === true) {
					com.sbm.execute(sbm_saveOrganizationBasic);
				}
			});
		}
	} else {
		com.win.alert(com.data.getMessage("MSG_CM_00032"));
	}
};

scwin.btn_excelOrganization_onclick = function () {
	com.data.downloadGridViewExcel(grd_organizationBasic);
};

scwin.sbm_saveOrganizationBasic_submitdone = function (e) {
	if (com.sbm.getResultCode(e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
		scwin.btn_search_onclick();
	}
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_gvw',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'../../cm/xml/contentHeader.xml',scope:'true'}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox_inner',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'900',class:'w2tb tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'검색항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{ref:'data:dma_search.TYPE',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width:100px;',allOption:'',id:'sbx_choiceBox',class:'',direction:'auto','ev:onviewchange':'scwin.sbx_choiceBox_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'소속명칭'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ORG_NM'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'소속코드'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ORG_CD'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'책임자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ORG_BOSS_EMP_CD'}]}]}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_parentCd',ref:'',style:'width:150px;display:none',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_organizationSearchItem'},E:[{T:1,N:'xf:label',A:{ref:'PARENT_ORG_NM'}},{T:1,N:'xf:value',A:{ref:'PARENT_ORG_CD'}}]}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',caseSensitive:'false',chooseOption:'true',chooseOptionLabel:'-전체-',chooseOptionValue:'',class:'',displayMode:'label',editType:'select',emptyItem:'',emptyValue:'','ev:onchange':'','ev:onviewchange':'',id:'acb_autoChoiceBox',interactionMode:'',noResult:'useData',ref:'data:dma_search.CONTENT',search:'start',selectedData:'',style:'width: 200px;',submenuSize:'auto',textAlign:'left',useKeywordHighlight:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_organizationSearchItem'},E:[{T:1,N:'w2:label',A:{ref:'ORG_NM'}},{T:1,N:'w2:value',A:{ref:'ORG_NM'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'},E:[{T:1,N:'w2:textbox',A:{label:'조직',style:'',id:'',class:'',tagname:'h3'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'fr'},E:[{T:1,N:'w2:textbox',A:{class:'sum',id:'spn_organizationCnt',label:'',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:''}},{T:1,N:'xf:trigger',A:{type:'button',style:'',id:'btn_addOrganization',class:'btn_cm ','ev:onclick':'scwin.btn_addOrganization_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ','ev:onclick':'scwin.btn_delOrganization_onclick',id:'btn_delOrganization',style:'display:none;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancelOrganization',style:'',type:'button','ev:onclick':'scwin.btn_cancelOrganization_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm download',id:'btn_excelOrganization',style:'',type:'button','ev:onclick':'scwin.btn_excelOrganization_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀다운로드'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox wq_flx',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{adaptive:'',autoFit:'allColumn',class:'wq_gvw',dataList:'data:dlt_organizationBasic','ev:oncellclick':'','ev:onrowindexchange':'',fixedColumnWithHidden:'true',id:'grd_organizationBasic',ignoreCellClick:'false',overflowX:'hidden',overflowY:'scroll',readOnly:'true',rowStatusHeaderValue:'상태',rowStatusVisible:'true',scrollByColumn:'false',showSortableImage:'',sortEvent:'onclick',sortable:'true',style:'height: 296px;',useShiftKey:'true',autoFitMinWidth:'800',rowStatusWidth:'',keepDefaultColumnWidth:'true',defaultCellHeight:'26'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',checkboxLabel:'선택',displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'',width:'50',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',style:'',value:'소속코드',width:'50',class:'req'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column17',inputType:'text',style:'',value:'소속명칭',width:'300'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column30',inputType:'text',style:'',value:'상위소속명',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',style:'',value:'조직구분',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column28',inputType:'text',style:'',value:'책임자',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column18',inputType:'text',style:'',value:'개설일',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column38',inputType:'text',style:'',value:'폐쇄일',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:'',width:'40'},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',readOnly:'false',style:'',width:'40',checkboxLabel:'선택',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',customFormatter:'scwin.setFontFormat',displayMode:'label',id:'ORG_CD',inputType:'text',style:'',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',depthColumn:'ORG_LEVEL',depthType:'div',displayMode:'label',id:'ORG_NM',inputType:'drilldown',showDepth:'3',style:'',textAlign:'left',width:'120',checkAlways:'',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'PARENT_ORG_NM',inputType:'select',style:'',width:'70',checkAlways:'',readOnly:'true',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_organizationBasic'},E:[{T:1,N:'w2:label',A:{ref:'PARENT_ORG_NM'}},{T:1,N:'w2:value',A:{ref:'PARENT_ORG_NM'}}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ORG_CLASS_CD',inputType:'select',style:'',textAlign:'left',width:'80',checkAlways:'',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:''},E:[{T:1,N:'w2:label',A:{ref:''}},{T:1,N:'w2:value',A:{ref:''}}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'ORG_BOSS_EMP_CD',inputType:'select',style:'',width:'70',checkAlways:'',readOnly:'true',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_organizationBoss'},E:[{T:1,N:'w2:label',A:{ref:'EMP_NM'}},{T:1,N:'w2:value',A:{ref:'EMP_CD'}}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',calendarValueType:'yearMonthDate',displayFormat:'####-##-##',id:'START_DATE',inputType:'text',style:'',width:'70',checkAlways:'',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',calendarValueType:'yearMonthDate',displayFormat:'####-##-##',id:'END_DATE',inputType:'text',style:'',width:'70',checkAlways:'',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'grp_organizationBasic',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'900',class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ibx_orgCd',placeholder:'',style:'width:100%;',readOnly:'true',ref:'data:dlt_organizationBasic.ORG_CD'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th',text:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속명칭',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'req',id:'ibx_orgNm',placeholder:'',style:'width:100%;',ref:'data:dlt_organizationBasic.ORG_NM',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조직구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'req',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_OrgClassCd',ref:'data:dlt_organizationBasic.ORG_CLASS_CD',style:'width:150px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속약칭',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ibx_orgAliasNm',placeholder:'',readOnly:'',style:'width:100%;',ref:'data:dlt_organizationBasic.ORG_ALIAS_NM'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속영문명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ibx_orgEnNm',placeholder:'',readOnly:'',style:'width:100%;',ref:'data:dlt_organizationBasic.ORG_EN_NM'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속영문약명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'',placeholder:'',readOnly:'',style:'width:100%;',ref:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조직레벨',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ibx_orgLevel',placeholder:'',readOnly:'true',style:'width:150px;',ref:'data:dlt_organizationBasic.ORG_LEVEL'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'책임자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_OrgBossEmpCd',ref:'data:dlt_organizationBasic.ORG_BOSS_EMP_CD',style:'width:150px;',submenuSize:'auto',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_organizationBoss'},E:[{T:1,N:'xf:label',A:{ref:'EMP_NM'}},{T:1,N:'xf:value',A:{ref:'EMP_CD'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'개설일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',footerDiv:'true',id:'cal_startDate',renderDiv:'true',rightAlign:'false',style:'width: 120px;',ref:'data:dlt_organizationBasic.START_DATE'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'폐쇄일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',footerDiv:'true',id:'cal_endDate',renderDiv:'true',rightAlign:'false',style:'width: 120px;',ref:'data:dlt_organizationBasic.END_DATE'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'ibx_note',style:'width:100%;height: 82px;',ref:'data:dlt_organizationBasic.NOTE'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt','ev:onclick':'scwin.btn_saveOrganization_onclick',id:'btn_saveOrganization',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]})