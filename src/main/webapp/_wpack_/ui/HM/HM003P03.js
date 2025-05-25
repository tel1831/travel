/*amd /ui/HM/HM003P03.xml 11449 deb891e05b5df329b092092f5ace15407e1a062acf98a7b68daaa93880ade97f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',E:[{T:1,N:'w2:dataList',A:{id:'dlt_zipCode',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ZIP_CD',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDR1',name:'주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDR2',name:'주소',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_searchParam',baseNode:'param',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'SEARCH_TYPE',name:'검색종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SEARCH_KEYWORD',name:'검색조건',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_getZipCodeList',ref:'data:json,{"id":"dma_searchParam","key":"param"}',target:'data:json,{"id":"dlt_zipCode","key":"data"}',action:'/member/selectZipCodeList',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.searchCallback','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 우편번호 선택 화면 초기화 작업을 수행한다.
 */
scwin.onpageload = function () {
	scwin.btn_roadname_onclick();

	var param = com.data.getParameter();
	scwin.closeCallbackFncName = param.callbackFn;

	ibx_searchKeyword.focus();
	com.win.setEnterKeyEvent(grp_search, scwin.btn_searchZip_onclick);
};

/**
 * 우편번호 선택를 조회한다.
 */
scwin.btn_searchZip_onclick = function () {
	var searchWord = ibx_searchKeyword.getValue();

	if (com.util.isEmpty(searchWord)) {
		com.win.alert("검색어를 입력하세요");
	} else {
		txt_baseAddr.setValue("");
		com.sbm.execute(sbm_getZipCodeList);
	}
};

scwin.searchCallback = function () {
	grd_zipCode.setFocusedCell(0, 1);
};

/**
 * 선택된 우편번호 정보를 반환한다.
 */
scwin.btn_confirm_onclick = function () {
	var focusedRowIndex = grd_zipCode.getFocusedRowIndex();

	if (focusedRowIndex >= 0) {
		var returnValue = dlt_zipCode.getRowJSON(focusedRowIndex);

		if (dma_searchParam.get("SEARCH_TYPE") === "0") {
			txt_baseAddr.setValue(returnValue.ADDR2);
		} else {
			txt_baseAddr.setValue(returnValue.ADDR1);
		}
	} else {
		com.win.alert(com.data.getMessage("MSG_CM_00044"));
	}
};

scwin.grd_zipCode_oncelldblclick = function (row, col) {
	scwin.btn_confirm_onclick();
};

scwin.grd_zipCode_onkeyup = function (e) {
	if (e.keyCode === 13) {
		scwin.btn_confirm_onclick();
	}
};

/**
 * 우편번호 정보 선택을 취소한다.
 */
scwin.btn_cancel_onclick = function () {
	com.win.closePopup();
};

scwin.btn_jibun_onclick = function(e) {
	ibx_searchKeyword.setValue("");
	dma_searchParam.set("SEARCH_TYPE", "0");

	btn_roadname.setStyle("background-color",  "#FFFFFF");
	btn_jibun.setStyle("background-color",  "#E0FCF9");

	let  jibun_exp = "찾으시려는 동(읍/면/리)과 번지수 or 건물명을 입력해주세요.";
	txt_exp.setValue(jibun_exp);
	txt_exp2.setValue("예:정자동 178-1, 대치2동 현대아파트");
};

scwin.btn_roadname_onclick = function(e) {
	ibx_searchKeyword.setValue("");
	dma_searchParam.set("SEARCH_TYPE", "1");

	btn_jibun.setStyle("background-color",  "#FFFFFF");
	btn_roadname.setStyle("background-color",  "#E0FCF9");

	let roadname_exp = "찾으시려는 도로명주소의건물번호 또는 건물명까지 상세히 입력 후 검색해 주세요.(도로명주소 확인 : www.juso.go.kr)";
	txt_exp.setValue(roadname_exp);
	txt_exp2.setValue("예) 중앙동, 불정로432번길");
};


scwin.grd_zipCode_oncellclick = function(row,col,colId) {
	if (colId == 'chk') {
		scwin.btn_confirm_onclick();
	}
};

scwin.btn_addZip_onclick = function(e) {
	var focusedRowIndex = grd_zipCode.getFocusedRowIndex();

	if (focusedRowIndex >= 0) {
		var addressInfo = dlt_zipCode.getRowJSON(focusedRowIndex);
		var address = "";

		if (dma_searchParam.get("SEARCH_TYPE") === "1") {
			address = addressInfo.ADDR1;
		} else {
			address = addressInfo.ADDR2;
		}

		var zipInfo = {
			ZIP_CD : addressInfo.ZIP_CD,
			ADDRESS1 : address,
			ADDRESS2 : txt_detailAddress.getValue()
		}
		com.win.closePopup(zipInfo);
	} else {
		com.win.alert(com.data.getMessage("MSG_CM_00044"));
	}
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents flex_gvw'},E:[{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'',id:'btn_roadname',style:'width:50%',type:'button','ev:onclick':'scwin.btn_roadname_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'도로명주소'}]}]},{T:1,N:'xf:trigger',A:{class:'',id:'btn_jibun',style:'width : 50%;background-color: #E0FCF9;',type:'button','ev:onclick':'scwin.btn_jibun_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지번주소'}]}]}]},{T:1,N:'xf:group',A:{class:'msg_box info',id:'',style:'min-height:auto;'},E:[{T:1,N:'w2:textbox',A:{class:'txt_msg',id:'txt_exp',label:'',style:'',tagname:''}},{T:1,N:'w2:textbox',A:{class:'txt_con',escape:'false',for:'',id:'txt_exp2',label:'',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'shbox',id:'grp_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tb',id:'tbl_search',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'검색어',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ibx_searchKeyword',placeholder:'주소명(동/읍/면/리/가) 입력',style:'width:100%;',ref:'data:dma_searchParam.SEARCH_KEYWORD'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'btn_searchZip',style:'',type:'button','ev:onclick':'scwin.btn_searchZip_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'grp_address'}},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'df_box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h4',style:'',id:'',label:'주소지 선택 후 상세주소를 입력해주세요',class:''}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'',captionTitle:'',checkReadOnlyOnCut:'',class:'wq_gvw',dataList:'data:dlt_zipCode',defaultCellHeight:'26','ev:oncelldblclick':'scwin.grd_zipCode_oncelldblclick',focusMode:'row',id:'grd_zipCode',readOnly:'true',rowStatusHeaderValue:'상태',rowStatusVisible:'false',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height:245px;','ev:oncellclick':'scwin.grd_zipCode_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'선택',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column2',inputType:'text',removeBorderStyle:'false',style:'',value:'우편번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column1',inputType:'text',removeBorderStyle:'false',style:'',value:'주소',width:'509'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'radio',style:'height:0px;',id:'chk',value:'',displayMode:'label',colSpan:'',rowSpan:'2',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'height:0px;',id:'ZIP_CD',value:'',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'height:0px;',id:'column11',value:'',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'509',inputType:'text',style:'',id:'ADDR1',value:'',displayMode:'label',textAlign:'left'}}]},{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ADDR2',inputType:'text',removeBorderStyle:'false',style:'',textAlign:'left',value:'',width:'509'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'}},{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h4',style:'',id:'',label:'상세 주소 입력',class:''}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'600',tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'기본주소',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:span',A:{label:'',style:'',id:'txt_baseAddr'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상세주소',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'width:100%;',id:'txt_detailAddress'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'msg_box info',id:'',style:'min-height:auto;'},E:[{T:1,N:'w2:textbox',A:{class:'txt_msg',id:'tbx_textbox1',label:'기본주소 선택 후 상세주소를 반드시 입력해주세요. 상세주소가 없는 경우 주소지 특징을 입력해주세요.',style:'',tagname:''}},{T:1,N:'w2:textbox',A:{class:'txt_con',escape:'false',for:'',id:'txt_textbox2',label:'2016년 8월 1일부터는 5자리 우편번호 사용이 의무화됩니다.',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_addZip',style:'',type:'button','ev:onclick':'scwin.btn_addZip_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주소입력'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]})