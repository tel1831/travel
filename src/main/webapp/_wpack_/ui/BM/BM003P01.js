/*amd /ui/BM/BM003P01.xml 5400 f718787c24308d7ffaaa6d7e86545285dd4be4a54b07f36dc6432220b69606c9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_programAuthority',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'AUTHORITY_CD',name:'권한코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'AUTHORITY_NM',name:'권한명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NOTE',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'PROGRAM_CD',name:'프로그램코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'IS_USE',name:'사용여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_excludeSearchProgramAuthority',ref:'data:json,dma_search',target:'data:json,dlt_programAuthority',action:'/program/selectExcludeProgramAuthority',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
  * 초기 스크립트 수행 함수 정의
  */
scwin.onpageload = function () {
	var param = com.data.getParameter();
	dma_search.set("PROGRAM_CD", param.data.PROGRAM_CD);
	dma_search.set("IS_USE", "Y");

	scwin.closeCallbackFncName = param.callbackFn;

	// 프로그램에 등록되지 않은 권한을 조회한다.
	com.sbm.execute(sbm_excludeSearchProgramAuthority);
};

/**
 * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function () {
	scwin.btn_search_onclick();
};

/**
 * 선택된 권한 정보를 반환한다.
 */
scwin.btn_confirm_onclick = function () {
	var data = grd_excludeProgramAuthority.getCheckedJSON("chk");
	com.win.closePopup(data);
};

/**
 * 권한 선택을 취소한다.
 */
scwin.btn_cancel_onclick = function () {
	com.win.closePopup();
};

/**
 * 더블 클릭한 권한 정보를 반환한다.
 */
scwin.grd_excludeProgramAuthority_oncelldblclick = function(row,col,colId) {
	com.win.closePopup([ grd_excludeProgramAuthority.getRowJSON(row) ]);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents flex_gvw'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox wq_flx',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'',captionTitle:'',checkReadOnlyOnCut:'',class:'wq_gvw',dataList:'data:dlt_programAuthority',defaultCellHeight:'26',id:'grd_excludeProgramAuthority',rowStatusHeaderValue:'',rowStatusVisible:'false',rowStatusWidth:'',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height:243px;',rowNumWidth:'','ev:oncelldblclick':'scwin.grd_excludeProgramAuthority_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',checkboxLabel:'선택',displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'',displayMode:'label',id:'column18',inputType:'text',removeBorderStyle:'false',style:'',value:'권한코드',width:'110'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'',displayMode:'label',id:'column17',inputType:'text',removeBorderStyle:'false',style:'',value:'권한명',width:'179'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column16',inputType:'text',removeBorderStyle:'false',style:'',value:'비고',width:'266'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',checkboxLabel:'선택',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'AUTHORITY_CD',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'110',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'AUTHORITY_NM',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'179',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'NOTE',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'266',textAlign:'left',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_confirm',style:'',type:'button','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]})