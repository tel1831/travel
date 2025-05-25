/*amd /ui/BM/BM004P01.xml 7382 f4acd6261e45534f4c8f0a973b740d919259a32889aa3d63dac6ac77473c36c6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_program',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROGRAM_GROUP_CD',name:'프로그램구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROGRAM_GROUP_NM',name:'프로그램구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROGRAM_CD',name:'프로그램코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROGRAM_NM',name:'프로그램명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SRC_PATH',name:'소스경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NOTE',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'PROGRAM_GROUP_CD',name:'프로그램구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'PROGRAM',name:'프로그램',dataType:'text'}},{T:1,N:'w2:key',A:{id:'IS_USE',name:'사용여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_program',ref:'data:json,dma_search',target:'data:json,dlt_program',action:'/program/searchProgram',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
  * 초기 스크립트 수행 함수 정의
  */
scwin.onpageload = function () {
	scwin.param = com.data.getParameter();
	dma_search.set("PROGRAM", scwin.param.program);
	dma_search.set("IS_USE", "Y");

	com.win.setEnterKeyEvent(tbl_search, scwin.btn_search_onclick);
	scwin.btn_search_onclick();
};

/**
 * 프로그램 목록을 조회한다.
 */
scwin.btn_search_onclick = function () {
	com.sbm.execute(sbm_program);
};

/**
 * 선택된 프로그램을 반환한다.
 */
scwin.btn_confirm_onclick = function () {
	var data = grd_program.getCheckedJSON("chk");
	if (data.length == 1) {
		com.win.closePopup(data[0]);
	}
};

/**
 * 더블 클릭한 Row의 프로그램을 반환한다.
 */
scwin.grd_program_oncelldblclick = function (row, col, colId) {
	com.win.closePopup(grd_program.getRowJSON(row));
};

/**
 * 프로그램 선택을 취소한다.
 */
scwin.btn_cancel_onclick = function () {
	com.win.closePopup();
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents flex_gvw'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'프로그램',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ibx_program',placeholder:'',style:'width:100%;',ref:'data:dma_search.PROGRAM'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox wq_flx',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'787',captionTitle:'',checkReadOnlyOnCut:'',class:'wq_gvw',dataList:'data:dlt_program',defaultCellHeight:'26',id:'grd_program',rowStatusHeaderValue:'상태',rowStatusVisible:'false',rowStatusWidth:'',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height:243px;','ev:onrowindexchange':'scwin.grd_program_onrowindexchange','ev:oncelldblclick':'scwin.grd_program_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',checkboxLabel:'선택',displayMode:'label',fixColumnWidth:'true',id:'column48',inputType:'text',removeBorderStyle:'false',style:'',value:'선택',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'',displayMode:'label',id:'column18',inputType:'text',removeBorderStyle:'false',style:'',value:'프로그램구분명',width:'88'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'',displayMode:'label',id:'column17',inputType:'text',removeBorderStyle:'false',style:'',value:'프로그램코드',width:'95'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column16',inputType:'text',removeBorderStyle:'false',style:'',value:'프로그램명',width:'118'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'169',inputType:'text',style:'',id:'column49',value:'소스경로',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'107',inputType:'text',style:'',id:'column51',value:'비고',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',checkboxLabel:'선택',displayMode:'label',id:'chk',inputType:'radio',removeBorderStyle:'false',style:'',value:'',width:'50',radioLabel:'선택'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'PROGRAM_GROUP_NM',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'88',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'PROGRAM_CD',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'95',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'PROGRAM_NM',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'118',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'169',inputType:'text',style:'',id:'SRC_PATH',value:'',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'107',inputType:'text',style:'',id:'NOTE',value:'',blockSelect:'false',displayMode:'label',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_confirm',style:'',type:'button',nextTabID:'','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]})