/*amd /ui/SP/SP001M01.xml 17654 593f99bef9e66390d55c551625943e0fe369e99b6f9e85163f1449c4a759f2ce */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_sample',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'SAMPLE_CD',name:'샘플코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SAMPLE_NM',name:'샘플명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENT_SAMPLE_CD',name:'부모샘플코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SAMPLE_LEVEL',name:'샘플레벨',dataType:'number'}},{T:1,N:'w2:column',A:{id:'SORT_ORDER',name:'정렬순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'IS_USE',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_PATH',name:'샘플소스경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CONTENT',name:'샘플설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'KEYWORD',name:'검색키워드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NOTE',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'open',name:'open',dataType:'text',ignoreStatus:'true'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'KEYWORD',name:'검색키워드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'IS_USE',name:'사용여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchSample',ref:'data:json,dma_search',target:'data:json,dlt_sample',action:'/sample/searchSample',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchSample_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveSample',ref:'data:json,["dlt_sample","dma_search"]',target:'data:json,dlt_sample',action:'/sample/updateSample',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
	dma_search.set("IS_USE", "Y");
	com.win.setEnterKeyEvent(tbl_search, scwin.btn_search_onclick);
	com.util.setGridViewDelCheckBox([grd_sample]);
};

/**
 * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function () {
	com.sbm.execute(sbm_searchSample);
};

scwin.btn_search_onclick = function () {
	com.sbm.execute(sbm_searchSample);
};

scwin.btn_add_onclick = function () {

	var sampleCnt = dlt_sample.getTotalRow();
	if (sampleCnt == 0) {
		com.win.alert("조회 후 이용하세요.");
		return;
	} else if (com.util.isEmpty(dma_search.get("IS_USE", "")) === false) {
		com.win.alert("사용여부를 전체로 검색한 후에 등록을 수행해야 합니다.");
		return;
	}

	if (grd_sample.getFocusedRealRowIndex() === -1) {
		grd_sample.setFocusedCell(0, "SAMPLE_CD");
	}
	var currSampleNm = dlt_sample.getCellData(grd_sample.getFocusedRealRowIndex(), "SAMPLE_NM");
	var currSampleLevel = com.num.parseInt(dlt_sample.getCellData(grd_sample.getFocusedRealRowIndex(), "SAMPLE_LEVEL"));
	if (sampleCnt != "0" && grd_sample.getFocusedRowIndex() == "-1") {
		com.win.alert("샘플코드를 클릭하셔야 합니다.");
	} else {
		if (currSampleLevel < 2) {
			scwin.selectLevel(currSampleNm);
		} else {
			scwin.equalLevel();
		}
	}
};

/**
 * 샘플레벨이 1 또는 2일 경우에 실행되는 함수 Yes, No에 따라서 하위에 만들 것인지, 동일한 레벨로 만들 것인지 결정한다.
 */
scwin.selectLevel = function (returnValue) {
	grd_sample.spanAll(true);
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
 * 하위 레벨의 노드에 샘플을 추가한다.
 */
scwin.lowerLevel = function () {
	var focusedRowIndex = grd_sample.getFocusedRealRowIndex();
	var parentOrgCd = dlt_sample.getCellData(focusedRowIndex, "SAMPLE_CD");
	var orgLevel = com.num.parseInt(dlt_sample.getCellData(focusedRowIndex, "SAMPLE_LEVEL")) + 1;
	var sortOrder = 1;
	var insertRowIndex = scwin.getInsertRowIndex(parentOrgCd);

	if (insertRowIndex === -1) {
		insertRowIndex = focusedRowIndex + 1;
	}
	var orgCd = scwin.getInsertRowOrgCd(parentOrgCd, orgLevel, true);

	var isUse = "Y";
	if (dma_search.get("IS_USE") == "N") {
		isUse = "N";
	}

	var insertJson = [{ "SAMPLE_CD": orgCd, "PARENT_SAMPLE_CD": parentOrgCd, "SAMPLE_LEVEL": orgLevel, "SORT_ORDER": sortOrder, "IS_USE": isUse }];
	dlt_sample.insertJSON(insertRowIndex, insertJson);
	grd_sample.setFocusedCell(insertRowIndex, "SAMPLE_NM", true);
};

/**
 * 같은 레벨의 노트에 샘플을 추가한다.
 */
scwin.equalLevel = function () {
	var focusedRowIndex = grd_sample.getFocusedRealRowIndex();
	var parentOrgCd = dlt_sample.getCellData(focusedRowIndex, "PARENT_SAMPLE_CD");
	var rowIndexArr = dlt_sample.getMatchedIndex("PARENT_SAMPLE_CD", parentOrgCd, true, 0, dlt_sample.getRowCount());
	var orgLevel = com.num.parseInt(dlt_sample.getCellData(rowIndexArr[rowIndexArr.length - 1], "SAMPLE_LEVEL"));
	var sortOrder = com.num.parseInt(dlt_sample.getCellData(rowIndexArr[rowIndexArr.length - 1], "SORT_ORDER")) + 1;
	var insertRowIndex = scwin.getInsertRowIndex(parentOrgCd);
	var orgCd = scwin.getInsertRowOrgCd(parentOrgCd, orgLevel, false);

	var isUse = "Y";
	if (dma_search.get("IS_USE") == "N") {
		isUse = "N";
	}

	var insertJson = [{ "SAMPLE_CD": orgCd, "PARENT_SAMPLE_CD": parentOrgCd, "SAMPLE_LEVEL": orgLevel, "SORT_ORDER": sortOrder, "IS_USE": isUse }];

	dlt_sample.insertJSON(insertRowIndex, insertJson);
	grd_sample.setFocusedCell(insertRowIndex, "SAMPLE_CD");
	grd_sample.setFocusedCell(insertRowIndex, "SAMPLE_NM", true);
};

/**
 * 새로 추가되는 샘플의 샘플 코드를 반환한다.
 */
scwin.getInsertRowOrgCd = function (parentOrgCd, orgLevel, isBottom) {
	var OrgCdArr = dlt_sample.getMatchedColumnData("PARENT_SAMPLE_CD", parentOrgCd, "SAMPLE_CD", true, 0, dlt_sample.getRowCount());

	if (OrgCdArr.length > 0) {
		var lastOrgCd = OrgCdArr[OrgCdArr.length - 1];
		var nodeIndex = (orgLevel - 1) * 3;
		var preNodeCd = lastOrgCd.substr(nodeIndex, 3);
		var newNodeCd = com.str.lpad(com.num.parseInt(preNodeCd) + 1, 3, "0");
		return lastOrgCd.substr(0, nodeIndex) + lastOrgCd.substr(nodeIndex).replace(preNodeCd, newNodeCd);
	} else {
		if (isBottom) {
			var nodeIndex = parentOrgCd.indexOf("000");
			return parentOrgCd.substr(0, nodeIndex) + parentOrgCd.substr(nodeIndex).replace("000", "001");
		} else {
			var nodeIndex = parentOrgCd.indexOf("000");
			var preNodeCd = parentOrgCd.substr(nodeIndex, 3);
			var newNodeCd = com.str.lpad(com.num.parseInt(preNodeCd) + 1, 3, "0");
			return parentOrgCd.substr(0, nodeIndex) + parentOrgCd.substr(nodeIndex).replace(preNodeCd, newNodeCd);
		}
	}
};

/**
 * 새로 추가되는 샘플으로 RowIndex를 반환한다.
 */
scwin.getInsertRowIndex = function (parentOrgCd) {
	var rowIndexArr = dlt_sample.getMatchedIndex("PARENT_SAMPLE_CD", parentOrgCd, true, 0, dlt_sample.getRowCount());
	if (rowIndexArr.length > 0) {
		var lastOrgCd = dlt_sample.getCellData(rowIndexArr[rowIndexArr.length - 1], "SAMPLE_CD");
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

scwin.btn_cancel_onclick = function () {
	dlt_sample.undoAll();
	dlt_sample.removeRows(dlt_sample.getInsertedIndex());
};

scwin.btn_save_onclick = function () {
	var valInfo = [{ id: "SAMPLE_CD", mandatory: true },
	{ id: "SAMPLE_NM", mandatory: true }];

	if (com.data.isModified(dlt_sample)) {
		if (com.data.validateGridView(grd_sample, valInfo)) {
			com.win.confirm(com.data.getMessage("MSG_CM_00001"), function (res) {
				if (res.clickValue === true) {
					com.sbm.execute(sbm_saveSample);
				}
			});
		}
	} else {
		com.win.alert(com.data.getMessage("MSG_CM_00005"));
	}
};

scwin.btn_excel_onclick = function () {
	com.data.downloadGridViewExcel(grd_sample);
};

scwin.sbm_searchSample_submitdone = function (e) {
	spn_sampleCnt.setValue(dlt_sample.getRowCount());
};

scwin.grd_sample_oncelldblclick = function (row, col) {
	if (dlt_sample.getColumnID(col) == "SAMPLE_CD") {
		scwin.openSample(row, col);
	}
};

scwin.openSample = function (rowIndex, colId, nowValue) {
	var sampleCd = dlt_sample.getCellData(rowIndex, "SAMPLE_CD");
	var sampleNm = dlt_sample.getCellData(rowIndex, "SAMPLE_NM");
	var filePath = dlt_sample.getCellData(rowIndex, "FILE_PATH");

	if (filePath !== "") {
		if ((sampleCd === "007002000") && (gcm.util.getUserAgent() === "msie")) {
			com.win.alert(com.data.getMessage("MSG_CM_00051"));
		} else  {
			var option = {
				menuType: "SP",
				isHistory: false
			};
			com.win.openMenu(sampleNm, filePath, sampleCd, null, option);
		}
	}
};

scwin.displayImage = function (data, formattedData, rowIndex, colIndex) {
	var realRowIndex = dlt_sample.getRealRowIndex(rowIndex);
	var cellData = dlt_sample.getCellData(realRowIndex, "FILE_PATH");
	if (cellData != "") {
		return "<img src='cm/images/base/g_btn_play.png' style='cursor:pointer;'/>";
	} else {
		return "";
	}
};

scwin.grd_sample_oncellclick = function (rowIndex, colIndex) {
	if (colIndex == 3) {
		var realRowIndex = dlt_sample.getRealRowIndex(rowIndex);
		var filePath = dlt_sample.getCellData(realRowIndex, "FILE_PATH");
		if (filePath != "") {
			scwin.openSample(realRowIndex);
		}
	}
};

scwin.grp_content_onclick = function (e) {
	// GridView 안에서 Click 이벤트가 발생할 경우 화면 레이아웃 영역 밖으로 이벤트가 전파되지 않도록 막음
	e.stopPropagation();
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_gvw',id:'grp_content',style:'','ev:onclick':'scwin.grp_content_onclick'},E:[{T:1,N:'w2:wframe',A:{id:'',src:'../../cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'900',class:'w2tb tb',id:'tbl_search',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'검색항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{enterBlur:'',id:'input1',mandatory:'true',ref:'data:dma_search.KEYWORD',style:'width:100px;',placeholder:'샘플명',class:''}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'',ref:'data:dma_search.IS_USE',style:'width:150px;',submenuSize:'auto',selectedData:'',refreshSelectedIndex:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'},E:[{T:1,N:'w2:textbox',A:{label:'샘플화면 목록',style:'',id:'',class:'',tagname:'h3'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'fr'},E:[{T:1,N:'w2:textbox',A:{class:'sum',id:'spn_sampleCnt',label:'0',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:''}},{T:1,N:'xf:trigger',A:{type:'button',style:'',id:'btn_add',class:'btn_cm ','ev:onclick':'scwin.btn_add_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm download',id:'btn_excel',style:'',type:'button','ev:onclick':'scwin.btn_excel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀다운로드'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox wq_flx',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:dlt_sample',editModeEvent:'','ev:oncellclick':'scwin.grd_sample_oncellclick','ev:oncelldblclick':'scwin.grd_sample_oncelldblclick',fixedColumnWithHidden:'true',id:'grd_sample',ignoreCellClick:'false',rowNumVisible:'true',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'',scrollByColumn:'false',style:'height:431px;',useShiftKey:'true',rowNumHeaderValue:'순서',sortable:'false',defaultCellHeight:'26',keepDefaultColumnWidth:'true',rowNumWidth:'50',autoFitMinWidth:'800'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'height:25px;',value:'선택',width:'50',checkboxLabel:'선택'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column19',inputType:'text',removeBorderStyle:'false',style:'',value:'샘플코드',width:'94'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column17',inputType:'text',removeBorderStyle:'false',style:'',value:'샘플명',width:'200'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column22',inputType:'text',removeBorderStyle:'false',style:'',value:'실행',width:'40'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',style:'',value:'사용여부',width:'65'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',removeBorderStyle:'false',style:'',value:'샘플소스경로',width:'270'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column5',inputType:'text',removeBorderStyle:'false',style:'',value:'샘플설명',width:'176'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',removeBorderStyle:'false',style:'',value:'검색키워드',width:'102'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column1',inputType:'text',removeBorderStyle:'false',style:'',value:'비고',width:'73'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'height:25px;',width:'70',checkboxLabel:'선택'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'req',displayMode:'label',fixColumnWidth:'true',id:'SAMPLE_CD',inputType:'text',readOnly:'true',removeBorderStyle:'false',style:'',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'req',depthColumn:'SAMPLE_LEVEL',depthType:'div',displayMode:'label',id:'SAMPLE_NM',inputType:'drilldown',removeBorderStyle:'false',showDepth:'2',style:'',textAlign:'left',width:'200'}},{T:1,N:'w2:column',A:{blockSelect:'false',customFormatter:'scwin.displayImage',displayMode:'label',fixColumnWidth:'true',id:'open',imageHeight:'20',imageWidth:'20',readOnly:'true',removeBorderStyle:'false',style:'',width:'40',imageSrc:'/cm/images/base/g_btn_play.png'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',falseValue:'N',fixColumnWidth:'true',id:'IS_USE',inputType:'checkbox',removeBorderStyle:'false',style:'',trueValue:'Y',valueType:'other',width:'65',checkboxLabel:'선택'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'FILE_PATH',inputType:'text',removeBorderStyle:'false',style:'',textAlign:'left',width:'270'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'CONTENT',inputType:'text',removeBorderStyle:'false',style:'',textAlign:'left',width:'176'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'KEYWORD',inputType:'text',removeBorderStyle:'false',style:'',textAlign:'left',width:'102'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'NOTE',inputType:'text',removeBorderStyle:'false',style:'',textAlign:'left',width:'73'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]})