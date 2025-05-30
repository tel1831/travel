/*amd /ui/SP/GridView/GridView_Excel_AdvancedUpload.xml 35073 93cdd8957490bcd1e54fccca5a97f5979f2bc4b20b4e9c1b14800de3d19b2085 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'desc',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'test',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'desc',E:[{T:4,cdata:'\n<pre class="textNor">\n<div class="etcbox">다양한 파일 형태(xlsx, xls, csv)의 데이터를 그리드뷰로 업로드하는 기능을 제공한다.\n시트 번호를 포함하여 10여 개의 옵션을 지정할 수 있다. \n별도로 옵션 설정을 하지 않는 경우, 각 옵션의 기본값으로 업로드 된다.\n각 옵션 설명은 옵션명을 마우스 오버하면 툴팁으로 표현된다.\n</div> \n</pre>\n						'}]},{T:1,N:'test',E:[{T:4,cdata:'\n<pre class="textNor">\n<div class="etc_tit">과정</div>\n  1. 업로드할 파일을 준비한다. 파일 템플릿이 필요한 경우, 메뉴 > 샘플화면 > GridView > [엑셀,CSV업/다운] 화면을 참고한다.   \n  2. 설정으로 이동하여 options의 값을 입력한다.   \n  3. [설정코드 보기] 버튼을 클릭하여 현 엑셀 업로드에 설정된 옵션 정보를 확인한다. \n  4. [업로드] 버튼을 클릭하여 업로드할 파일을 선택한다. \n  5. 그리드뷰에 업로드된 데이터를 확인한다. \n  6. [전체선택] 버튼을 클릭하여 설정된 옵션 정보를 선택한다. \n  7. 선택된 설정 정보는 코드 복사(Ctrl+C)하여 활용한다.  \n  8. 필요에 따라 [지우기] 버튼을 활용하여 그리드뷰의 데이터를 지우고 1~7의 과정을 반복한다.	 \n<div class="etc_tit">결과</div>\n  ex) 코드  \n  var options = { sheetNo : "1", startRowIndex : "10" };\n</pre>\n						'}]}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_advancedExcel',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'MENU_CD',name:'메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_NM',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENT_MENU_NM',name:'부모메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_LEVEL',name:'메뉴레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SRC_PATH',name:'경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_USE',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SORT_ORDER',name:'순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENT_MENU_CD',name:'부모메뉴코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_optionsSetting'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'type',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sheetNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'startRowIndex',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'startColumnIndex',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endColumnIndex',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'headerExist',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'footerExist',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'append',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hidden',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fillHidden',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'skipSpace',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'insertColumns',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'popupUrl',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delim',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'status',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pwd',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'columnIndex',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'columnValue',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_csvOptionSetting'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'type',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'header',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delim',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'escapeChar',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'startRowIndex',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'append',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hidden',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fillHidden',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'skipSpace',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expression',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'popupUrl',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_insertColumns',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'columnIndex',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'columnValue',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * 초기 스크립트 수행 함수 정의
 */
scwin.onpageload = function () {
	var json = {};
	dma_optionsSetting.setJSON(json);
	dma_csvOptionSetting.setJSON(json);
};

/**
 * rad_excelType(엑셀타입을 고르는 라디오버튼)의 값이 변하면 옵션 설정의 테이블 레이아웃이 바뀐다.
 */
scwin.rad_excelType_onviewchange = function (info) {
	dma_csvOptionSetting.undo();
	dma_optionsSetting.undo();
	txa_copyTheCode.setValue("");
	if (info.value == "csv") {
		tbl_xlsxOptionsSetting.hide();
		tbl_csvOptionsSetting.show("");
	} else {
		tbl_csvOptionsSetting.hide();
		tbl_xlsxOptionsSetting.show("");
	}
};

/**
 * 그리드의 데이터가 지워진다.
 */
scwin.btn_gridRemoveExcel_onclick = function () {
	dlt_advancedExcel.removeAll();
};

/**
 * 설명탭, 테스트 방법탭의 textBox 또는 설정탭의 tableLayout 컴포넌트가 보여지거나 감춰진다.
 */
scwin.btnSlide_onclick = function(e) {
	var btnInfo = $p.getEventTarget(this);	
	var btnObj = com.util.getComponent(btnInfo.id);
	var grpId = btnObj.getUserData("userData1");
	var grpObj = com.util.getComponent(grpId);

	if (btnObj.hasClass("btn_down")) {
		btnObj.removeClass("btn_down");
		btnObj.addClass("btn_up");
		if (!com.util.isEmpty(grpObj)) {
			grpObj.hide();
		}
	} else {
		btnObj.removeClass("btn_up");
		btnObj.addClass("btn_down");
		if (!com.util.isEmpty(grpObj)) {
			grpObj.show("");
		}
	}
};

/**
 * 변경된 설정코드를 textArea에 표기
 */
scwin.btn_settingCodeView_onclick = function () {
	var xlsxOption = dma_optionsSetting.getModifiedKey(); // XLS, XLSX Key
	var csvOption = dma_csvOptionSetting.getModifiedKey(); // CSV Key
	var value = []; // Value
	var nArr = []; // Key, Value

	// XLS, XLSX의 값이 기존과 달라졌다면
	if (xlsxOption != "") {
		// insertColumns의 형태인 JSON Array를 만들기 위해 DataList에 데이터를 넣는다.
		dlt_insertColumns.insertJSON(0, [{ "columnIndex": ibx_columnIndex.getValue(), "columnValue": ibx_columnValue.getValue() }]);

		// 기존 데이터와 현재 데이터의 값이 다른 Key의 Value값을 배열에 넣는다.
		for (var idx = 0; idx < xlsxOption.length; idx++) {
			value.push(dma_optionsSetting.get(xlsxOption[idx]));
		}

		// 기존 데이터와 현재 데이터의 값이 다른 Key, Value값을 반복문을 수행하여 새로운 배열에 넣는다.
		for (var idx = 0; idx < xlsxOption.length; idx++) {
			if (xlsxOption[idx] == "columnIndex" || xlsxOption[idx] == "columnValue") {
				continue; // Key값이 columnIndex또는 columnValue이면 넘어간다.
			} else {
				nArr.push("\n\t" + xlsxOption[idx] + " : " + '"' + value[idx] + '"'); // Key값이 columnIndex또는 columnValue가 아니면 배열에 담는다.
			}
		}

		// 달라진 배열에 columnIndex, columnValue가 없으면 배열에 추가
		if (xlsxOption.indexOf("columnIndex") != -1 && xlsxOption.indexOf("columnValue") != -1) {
			nArr.push("\n\t" + "insertColumns" + " : " + '[{"columnIndex":' + JSON.stringify(dlt_insertColumns.getRowJSON(0).columnIndex) + ", "
				+ '"columnValue":' + JSON.stringify(dlt_insertColumns.getRowJSON(0).columnValue) + "}]");
		}
	}

	// CSV의 값이 기존과 달라졌다면
	else {
		// 기존 데이터와 현재 데이터의 값이 다른 Key의 Value값을 배열에 넣는다.
		for (var idx = 0; idx < csvOption.length; idx++) {
			value.push(dma_csvOptionSetting.get(csvOption[idx]));
		}

		// 기존 데이터와 현재 데이터의 값이 다른 Key, Value값을 반복문을 수행하여 새로운 배열에 넣는다.
		for (var idx = 0; idx < csvOption.length; idx++) {
			nArr.push("\n\t" + csvOption[idx] + " : " + '"' + value[idx] + '"');
		}
	}

	// textArea(Copy the code) setting
	txa_copyTheCode.setValue("var options = {" + nArr + "\n};");
};

/**
 * 엑셀의 데이터를 그리드뷰로 업로드 한다. 필요한 옵션이 있다면 options배열에 옵션을 넣는다.
 */
scwin.btn_uploadData_onclick = function () {
	var options;
	var type = rad_excelType.getValue();

	if (rad_excelType.getValue() != "csv") {
		options = dma_optionsSetting.getJSON();
		options.insertColumns = [{ "columnIndex": ibx_columnIndex.getValue(), "columnValue": ibx_columnValue.getValue() }];
		com.data.uploadGridViewExcel(grd_excelGrid, options);
	} else {
		options = dma_csvOptionSetting.getJSON();
		com.data.uploadGridViewCSV(grd_excelGrid, options);
	}
};

/**
 * 모든 Slider 컴포넌트의 움직임이 발생했을 경우 inputbox컴포넌트에 눈금을 표시한다.
 */
scwin.sdr_moveEvent = function () {
	var id = this.getID().slice(id.lastIndexOf("_") + 1);

	var sdrId = "sdr_" + id;
	var ibxId = "ibx_" + id;

	var componentIbxId = com.util.getComponent(ibxId);
	var componentSdrId = com.util.getComponentv(sdrId);

	componentIbxId.setValue(componentSdrId.getValue());

	if (ibxId == "ibx_SubTotalScale") {
		componentIbxId.setValue("-" + componentSdrId.getValue());
	}
};

/** 
 * 엑셀 업로드 후, 건수를 체크한다.
 */
scwin.grd_excelGrid_onfilereadend = function (value) {
	spn_excelUploadCnt.setValue(grd_excelGrid.getTotalRow());
};

/**
 * textArea에 표시된 설정코드를 전체선택 한다.
 */
scwin.btn_copytheCode_onclick = function () {
	document.getElementById("txa_copyTheCode").select();
	document.execCommand('copy');
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'../../cm/xml/contentHeader.xml',scope:''}},{T:1,N:'w2:wframe',A:{id:'',src:'../../cm/xml/contentDesc.xml',scope:''}},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원하는 형식의 파일을 업로드하기',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'sum',id:'spn_excelUploadCnt',label:'0',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:''}},{T:1,N:'xf:select1',A:{appearance:'full',class:'mr10',cols:'',disabled:'',id:'rad_excelType',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:'','ev:onviewchange':'scwin.rad_excelType_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'xlsx'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'xlsx'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'xls'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'xls'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'csv'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'csv'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'btn_settingCodeView',style:'',type:'button',toolTip:'설정 코드 값을 텍스트로 표현한다.','ev:onclick':'scwin.btn_settingCodeView_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'설정코드 보기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_gridRemoveExcel',style:'',type:'button',toolTip:'현재 그리드에 업로드 되어있는 데이터를 삭제한다.','ev:onclick':'scwin.btn_gridRemoveExcel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지우기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm  upload',id:'btn_uploadData',style:'',type:'button',toolTip:'엑셀의 데이터를 그리드로 업로드 한다.','ev:onclick':'scwin.btn_uploadData_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀업로드'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:dlt_advancedExcel','ev:onafteredit':'','ev:onfilereadend':'scwin.grd_excelGrid_onfilereadend','ev:onrowindexchange':'',fixedColumnWithHidden:'true',id:'grd_excelGrid',ignoreCellClick:'false',rowNumHeaderValue:'순서',rowNumVisible:'true',rowStatusHeaderValue:'상태',rowStatusVisible:'true',sortEvent:'ondblclick',sortable:'true',style:'height:243px;',useShiftKey:'true',defaultCellHeight:'26',keepDefaultColumnWidth:'true',rowNumWidth:'50',rowStatusWidth:'',autoFitMinWidth:'900',scrollByColumn:'true'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',style:'',value:'메뉴코드',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',style:'',value:'메뉴명',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',style:'',value:'부모메뉴명',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',style:'',value:'메뉴레벨',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column12',inputType:'text',value:'경로',width:'150',style:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column15',inputType:'text',style:'',value:'사용여부',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'MENU_CD',inputType:'text',style:'',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'MENU_NM',inputType:'text',style:'',width:'40'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'PARENT_MENU_NM',inputType:'text',style:'',textAlign:'left',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',falseValue:'N',id:'MENU_LEVEL',inputType:'text',style:'',textAlign:'left',trueValue:'Y',valueType:'other',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'SRC_PATH',inputType:'text',width:'50',style:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'IS_USE',inputType:'text',style:'',width:'70'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Copy the code',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm  copy',id:'btn_copytheCode',style:'',type:'button',toolTip:'코드 텍스트를 선택한다. ','ev:onclick':'scwin.btn_copytheCode_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복사'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'etcbox'},E:[{T:1,N:'xf:textarea',A:{style:'width:100%;height: 150px;',id:'txa_copyTheCode',class:''}}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'options',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{anchorWithGroupClass:'',class:'btn_cm btn_down','ev:onclick':'scwin.btnSlide_onclick',id:'btnSlide',style:'',type:'button',userData1:'tbl_xlsxOptionsSetting'},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'900',class:'w2tb tb',id:'tbl_xlsxOptionsSetting',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:175.00px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:175.00px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th',toolTip:'[defalut: 0] 1이면 엑셀 파일이 그리드의 보이는 결과로 만들어져있을때  0이면 엑셀 파일이 그리드의 실제 데이터로 구성되어있을때'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'type',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',style:'width: 88%;'}},{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'',ref:'data:dma_optionsSetting.type',renderType:'radiogroup',rows:'1',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th',toolTip:'[defalut : 0] 읽어들이려는 엑셀파일에 hidden column이 저장되어 있는지 여부를 설정하는 int형 숫자(0이면  엑셀파일에 hidden 데이터가 없으므로 그리드 hidden column에 빈 데이터를 삽입  1 : 엑셀파일에 hidden 데이터가 있으므로 엑셀 파일로부터 hidden 데이터를 삽입 )'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'hidden',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'',ref:'data:dma_optionsSetting.hidden',renderType:'radiogroup',rows:'1',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th',toolTip:'[defalut : 0] excel파일에서 그리드의 데이터가 있는 sheet번호'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'sheetNo',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'',placeholder:'0',ref:'data:dma_optionsSetting.sheetNo',style:'width:100%'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th',toolTip:'[defalut : 0] Grid에 hiddenColumn에 빈 값을 넣을지를 결정하기 위한 int형 숫자(1이면 hidden Column에 빈 값을 저장하지 않음,0이면 hidden column이 저장되어있지 않은 Excel File이라 간주하고 hidden Column에 빈 값을 넣어줌)(hidden이 0인 경우에는 fillhidden은 영향을 끼치지 않음)'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'fillHidden',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'',ref:'data:dma_optionsSetting.fillHidden',renderType:'radiogroup',rows:'1',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th',toolTip:'[defalut : 0] excel파일에서 그리드의 데이터가 시작되는 행의 번호(헤더 포함)'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'startRowIndex',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'',placeholder:'0',ref:'data:dma_optionsSetting.startRowIndex',style:'width:100%'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th',toolTip:'[defalut : 0] 공백무시 여부(1이면 무시 0이면 포함)'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'skipSpace',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'',ref:'data:dma_optionsSetting.skipSpace',renderType:'radiogroup',rows:'1',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th',toolTip:'[defalut : 0] excel파일에서 그리드의 데이터가 시작되는 열의 번호'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'startColumnIndex',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'',placeholder:'0',style:'width:100%;',ref:'data:dma_optionsSetting.startColumnIndex'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th',toolTip:'radio, checkbox와 같은 컬럼을 엑셀에서 받아 오지 않고, 사용자 컬럼 설정 으로 업로드 ( 데이터 구조 : [ { columnIndex:1, columnValue:"1" } ] )'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'insertColumns',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_columnIndex',readOnly:'',ref:'data:dma_optionsSetting.columnIndex',style:'width:45%;',placeholder:'columnIndex'}},{T:1,N:'xf:input',A:{id:'ibx_columnValue',readOnly:'',ref:'data:dma_optionsSetting.columnValue',style:'width:45%;',placeholder:'columnValue'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th',toolTip:'[defalut : 0] excel파일에서 그리드의 데이터가 끝나는 열의 index ( 엑셀컬럼수가 그리드컬럼수 보다 작은 경우 그리드 컬러수를 설정)'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'endColumnIndex',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'',placeholder:'0',style:'width:100%;',ref:'data:dma_optionsSetting.endColumnIndex'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th',toolTip:'업로드시에 호출할 popup의 url'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'popupUrl',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_popupUrl',readOnly:'',ref:'data:dma_optionsSetting.popupUrl',style:'width:100%',placeholder:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',toolTip:'[defalut : 0] excel파일에서 그리드의 데이터에 header가 있는지 여부(1이면 header 존재 0이면 없음)',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'headerExist',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'',ref:'data:dma_optionsSetting.headerExist',renderType:'radiogroup',rows:'1',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',toolTip:'(default : , ) 업로드시 데이터를 구분하는 구분자',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'delim',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'',readOnly:'',ref:'data:dma_optionsSetting.delim',style:'width:100%',placeholder:','}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',toolTip:'[defalut : 1] excel파일에서 그리드의 데이터에 footer가 있는지 여부(1이면 footer 존재 0이면 없음 기본값은 1 그리드에 footer가 없으면 적용되지 않음)',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'footerExist',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'',ref:'data:dma_optionsSetting.footerExist',renderType:'radiogroup',rows:'1',selectedIndex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',toolTip:'[defalut : R]업로드된 데이터의 초기 상태값, 설정하지 않으면 "R"로 설정되며 "C"값을 설정 할 수 있다.',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'status',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'',ref:'data:dma_optionsSetting.status',renderType:'radiogroup',rows:'1',selectedIndex:'0',style:'',tabIndex:'s'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'R'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'R'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'C'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th',toolTip:'[defalut : 0] excel파일에서 가져온 데이터를 그리드에 append시킬지 여부(1이면 현재 그리드에 데이터를 추가로 넣어줌 0이면 현재 그리드의 데이터를 삭제하고 넣음)'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'append',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'',ref:'data:dma_optionsSetting.append',renderType:'radiogroup',rows:'1',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th',toolTip:'엑셀파일에 암호가 걸려 있는 경우, 비밀번호'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'pwd',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'',readOnly:'',ref:'data:dma_optionsSetting.pwd',style:'width:100%'}}]}]}]},{T:1,N:'xf:group',A:{id:'tbl_csvOptionsSetting',style:'width:100%;display: none;',adaptive:'layout',class:'w2tb',adaptiveThreshold:'1200',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:175.00px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:175.00px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',toolTip:'[default: 1, 0] 데이터 형태 (0이면 실 데이터 형태,1이면 display 표시 방식)',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'type'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',style:'width: 88%;'}},{T:1,N:'xf:select1',A:{id:'rad_csvType',ref:'data:dma_csvOptionSetting.type',selectedIndex:'0',cols:'',appearance:'full',style:'width: 150px;height: 21px;',rows:'1',renderType:'radiogroup'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',toolTip:'[defalut: 0, 1] hidden Column에 대한 저장 여부(0이면 저장하지않음,1이면 저장)',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'hidden'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'rad_csvHidden',ref:'data:dma_csvOptionSetting.hidden',cols:'',selectedIndex:'0',appearance:'full',style:'width: 150px;height: 21px;',rows:'1',renderType:'radiogroup'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',toolTip:'[default: 1, 0] Grid header 존재 유무 (0이면 header row수를 무시하고 전부 업로드하고 1이면 header row수 만큼 skip한다.)',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'header'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'rad_csvHeader',ref:'data:dma_csvOptionSetting.header',selectedIndex:'0',cols:'',appearance:'full',style:'width: 150px;height: 21px;',rows:'1',renderType:'radiogroup'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',toolTip:'[defalut: 0, 1] hidden Column에 빈 값을 넣을지를 결정(1이면 hidden Column에 빈 값을 저장하지 않음,0이면 hidden column이 저장되어있지 않은 csv File이라 간주하고 hidden Column에 빈 값을 넣어줌)(hidden이 0인 경우에는 fillhidden은 영향을 끼치지 않음)',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'fillHidden'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'rad_csvFillHidden',ref:'data:dma_csvOptionSetting.fillHidden',cols:'',selectedIndex:'0',appearance:'full',style:'width: 150px;height: 21px;',rows:'1',renderType:'radiogroup'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',toolTip:'[default: \',\'] CSV 파일에서 데이터를 구분할 구분자',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'delim'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_csvDelim',ref:'data:dma_csvOptionSetting.delim',style:'width:88%;height: 21px;',placeholder:',',initValue:''}}]},{T:1,N:'xf:group',A:{style:'',toolTip:'[defalut: 0, 1]공백무시 여부(1이면 무시 0이면 포함)',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'skipSpace'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'rad_csvSkipSpace',ref:'data:dma_csvOptionSetting.skipSpace',cols:'',selectedIndex:'0',appearance:'full',style:'width: 150px;height: 21px;',rows:'1',renderType:'radiogroup'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',toolTip:'CSV 데이터에서 제거해야 되는 문자셋 ( ex) \' \\ \' \' )',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'escapeChar'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_csvEscapeChar',ref:'data:dma_csvOptionSetting.escapeChar',style:'width:88%;height: 21px;',placeholder:'0',initValue:''}}]},{T:1,N:'xf:group',A:{style:'',toolTip:'[defalut: 1, 0]expression 컬럼 데이터를 포함하고 있는지 여부, 기본값은 미포함(1이면 미포함, 0이면 포함)',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'expression'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'rad_csvExpression',ref:'data:dma_csvOptionSetting.expression',cols:'',selectedIndex:'1',appearance:'full',style:'width: 150px;height: 21px;',rows:'1',renderType:'radiogroup'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',toolTip:'[defalut: 0] csv파일에서 그리드의 데이터가 시작되는 행의 번호, startRowIndex가 설정되면, header 설정은 무시된다.',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'startRowIndex'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_csvStartRowIndex',ref:'data:dma_csvOptionSetting.startRowIndex',userData1:'',readOnly:'',style:'width:88%;height: 21px;',placeholder:'0'}}]},{T:1,N:'xf:group',A:{style:'',toolTip:'업로드시에 호출할 popup의 url',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'popupUrl'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_csvPopupUrl',ref:'data:dma_csvOptionSetting.popupUrl',style:'width:88%;height: 21px;',placeholder:'',initValue:''}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',toolTip:'[defalut: 0, 1]csv파일에서 가져온 데이터를 그리드에 append시킬지 여부(1이면 현재 그리드에 데이터를 추가로 넣어줌 0이면 현재 그리드의 데이터를 삭제하고 넣음)',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'append\n							'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'rad_csvAppend',ref:'data:dma_csvOptionSetting.append',cols:'',selectedIndex:'0',appearance:'full',style:'width: 150px;height: 21px;',rows:'1',renderType:'radiogroup'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',toolTip:'',class:'w2tb_th',tagname:'th'}},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'}}]}]}]}]}]}]}]})