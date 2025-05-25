/*amd /ui/SP/GridView/GridView_Excel_DataConvert.xml 8988 88778f9493f704f1696d5b50b3e46fda2ed74b78fec465812a9c9c5ab6c10662 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'desc',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'test',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'desc',E:[{T:4,cdata:'\n<pre class="textNor" style="">\n<div class="etcbox">본 화면은 GridView의 ExcelDownload 및 upload 시 특정문자열의 치환하는 방법을 제공한다.\ndataConvert 기능의 설정 방법 및 실행방법을 확인한다.\n</div>\n<div class="etc_tit">1. dataConvert 설정</div>\n  - C:\\WS5_SAMPLE\\RESOURCE\\websquare_home\\config\\websquare.xml 에 아래 설정을 확인한다.\n	(설정 변경 후 반드시 was를 리부팅한다.)\n  - &lt;excel&gt;\n		&lt;download&gt;\n			&lt;dataConvertor value="com.inswave.util.dataConvertDown"/&gt;\n		&lt;/download&gt;\n		&lt;upload&gt;\n			&lt;dataConvertor value="com.inswave.util.dataConvertUp"/&gt;\n		&lt;/upload&gt;\n	&lt;/excel&gt;\n<div class="etc_tit">2. dataConvertor 소스</div>\n  - 엑셀 다운로드시 치환 \n	: websquare.http.controller.grid.excel.write.ICellDataProvider 이용하여 특정 cell의 값을 치환한다.\n  - 엑셀 업로드시 치환 \n	: websquare.http.controller.grid.excel.read.ICellDataProvider 이용하여 특정 cell의 값을 치환한다.\n<div class="etc_tit">3. 주의사항</div>\n  - 위 설정을 적용하면 모든 엑셀 다운로드/업로드시 적용이 되므로, 공통적인 요소를 치환할 경우에만 사용하도록 한다.\n</pre>\n						'}]},{T:1,N:'test',E:[{T:4,cdata:'\n<pre class="textNor" style="">						\n<div class="etc_tit">1. 과정</div>\n1. 조회된 데이터를 다운로드 한다.\n2. [지우기] 버튼을 클릭 후 [업로드]버튼을 클릭하여 1번에서 내려받은 파일로 화면에 업로드 한다.\n<div class="etc_tit">2. 결과</div>\n1. 다운로드 받은 엑셀 파일의 내용을 살펴보면 \'메뉴명\' 컬럼에서 \'u00\' => \'u00_Convert_\' 로 변환됨을 확인한다.\n2. 화면에 업로드된 내용 중 \'메뉴명\' 컬럼에서 \'u00_Convert_\' => \'u00\' 로 변환됨을 확인한다.\n</pre>\n						'}]}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_update',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'UPT_SEQ',name:'업데이트순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPT_TITLE',name:'제목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPT_DATE',name:'작성일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPT_CONTENT',name:'내용',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_advancedExcel',ref:'',target:'data:json,{"id":"dlt_update","key":"dlt_update"}',action:'/page/selectPageList',method:'get',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_advancedExcel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * 초기 스크립트 수행 함수 정의
 */
scwin.onpageload = function () {
	scwin.btn_search_onclick();
};

/** 
 * /page/selectPageList 서비스에 데이터를 읽어온다.
 */
scwin.btn_search_onclick = function () {
	$p.executeSubmission(sbm_advancedExcel);
};

/**
 * sbm_advancedExcel의 submitdone, 조회된 행의 총 갯수를 count한다.
 */
scwin.sbm_advancedExcel_submitdone = function (e) {
	spn_excelBasicCnt.setValue(dlt_update.getRowCount());
};

/** 
 * 그리드뷰의 데이터를 엑셀로 다운로드 한다.
 * 필요한 옵션이 있다면 options, infoArr배열에 옵션을 넣는다.
 */
scwin.btn_downloadExcelBasic_onclick = function () {
	var option = { fileName: "data." + rad_excelType.getValue(), autoSizeColumn: true };
	var info = {};
	com.data.downloadGridViewExcel(grd_excelGrid, option, info);
};

/**	 
 * 엑셀의 데이터를 그리드뷰로 업로드 한다.
 * 필요한 옵션이 있다면 options배열에 옵션을 넣는다.
 */
scwin.btn_uploadDataBasic_onclick = function () {
	var option = { startRowIndex: 1 };
	com.data.uploadGridViewExcel(grd_excelGrid, option);
};

/**
 * 엑셀 업로드 후, 건수를 체크한다.
 */
scwin.grd_excelGrid_onfilereadend = function (value) {
	spn_excelBasicCnt.setValue(grd_excelGrid.getTotalRow());
};

/**
 * 그리드의 데이터가 지워진다.
 */
scwin.btn_gridRemoveExcelBasic_onclick = function () {
	dlt_update.removeAll();
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_gvw',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'../../cm/xml/contentHeader.xml',scope:''}},{T:1,N:'w2:wframe',A:{id:'',src:'../../cm/xml/contentDesc.xml',scope:''}},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'sum',id:'spn_excelBasicCnt',label:'0',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:''}},{T:1,N:'w2:textbox',A:{class:'ett',id:'',label:'파일형태 :',style:''}},{T:1,N:'xf:select1',A:{appearance:'full',class:'mr10',cols:'',disabled:'',id:'rad_excelType',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'xlsx'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'xlsx'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'xls'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'xls'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm  upload',id:'btn_uploadDataBasic',style:'',type:'button',toolTip:'엑셀의 데이터를 그리드로 업로드 한다.','ev:onclick':'scwin.btn_uploadDataBasic_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀업로드'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm download',id:'btn_downloadExcelBasic',style:'',type:'button',toolTip:'그리드의 데이터를 엑셀로 다운로드 한다.','ev:onclick':'scwin.btn_downloadExcelBasic_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀다운로드'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm  search',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_gridRemoveExcelBasic',style:'',type:'button',toolTip:'현재 그리드에 업로드 되어있는 데이터를 삭제한다.','ev:onclick':'scwin.btn_gridRemoveExcelBasic_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지우기'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox wq_flx',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:dlt_update','ev:onafteredit':'','ev:onfilereadend':'scwin.grd_excelGrid_onfilereadend','ev:onrowindexchange':'scwin.grd_Authority_onrowindexchange',fixedColumnWithHidden:'true',id:'grd_excelGrid',ignoreCellClick:'false',rowNumHeaderValue:'순서',rowNumVisible:'true',rowNumWidth:'50',rowStatusHeaderValue:'',rowStatusVisible:'',sortEvent:'ondblclick',sortable:'true',style:'height:296px;',useShiftKey:'true',defaultCellHeight:'26',keepDefaultColumnWidth:'true',autoFitMinWidth:'900',scrollByColumn:'true'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',style:'',value:'업데이트순번',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',style:'',value:'제목',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',style:'',value:'작성일',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',style:'',value:'내용',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'UPT_SEQ',inputType:'text',style:'',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'UPT_TITLE',inputType:'text',style:'',width:'40',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'UPT_DATE',inputType:'text',style:'',textAlign:'left',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',falseValue:'N',id:'UPT_CONTENT',inputType:'text',style:'',textAlign:'left',trueValue:'Y',valueType:'other',width:'50'}}]}]}]}]}]}]}]}]})