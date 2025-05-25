/*amd /ui/SP/GridView/GridView_PageList.xml 7043 a0d98164a917a7a2bd4fff08bca0baa053b592e84ad98ba0b3c85ad536ba6f6e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'desc',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'test',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'desc',E:[{T:4,cdata:'\n<pre class="textNor" style="">\n<div class="etcbox">본 화면은 GridView의 pageList컴포넌트를 이용한 페이징 처리 방법을 제공한다.\n본 페이지는 10건씩 가져오도록 처리되어 있다.\n</div>\n<div class="etc_tit">1. pageList</div>\n  - 최초 조회시에 전체 건수를 함께 조회하여 pageList컴포넌트의 값을 구한다.\n  - pageList의 순번을 클릭할 때마다 해당하는 조회 목록을 화면상에 나타낸다.\n</pre>\n						'}]},{T:1,N:'test',E:[{T:4,cdata:'\n<pre class="textNor" style="">						\n<div class="etc_tit">1. 과정</div>\n1. 화면 로딩시 최초 조회가 실행된다.\n2. pageList의 각 순번을 클릭한다.\n<div class="etc_tit">2. 결과</div>\n1. 화면 로딩시 최초 조회를 실행하여 pageList의 값이 셋팅된다.\n2. pageList의 각 순번을 클릭할 때마다 해당하는 조회목록을 화면 gridView에 나타낸다.\n3. 조회 버튼을 클릭시 다시 최초 조회를 실행한다. \n</pre>\n						'}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'TOTAL_YN',name:'총건수 조회여부',dataType:'text',defaultValue:'Y'}},{T:1,N:'w2:key',A:{id:'START_NUM',name:'시작 순번',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'END_NUM',name:'끝 순번',dataType:'number',defaultValue:'5'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_update',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'UPT_SEQ',name:'업데이트순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPT_TITLE',name:'제목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPT_DATE',name:'작성일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPT_CONTENT',name:'내용',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_mainList',ref:'data:json,dma_search',target:'data:json,{"id":"dlt_update","key":"dlt_update"}',action:'/page/selectPageInfo',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_mainList_submitdone','ev:submiterror':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

scwin.onpageload = function () {
	scwin.searchMain(1, "Y");
};

/**
 * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function () {
	scwin.searchMain(1, "Y");
};

scwin.sbm_mainList_submitdone = function (e) {
	// 조회 성공인 경우
	if (com.sbm.getResultCode(e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
		if (com.util.isEmpty(e.responseJSON.TOTAL_CNT) === false) {
			spn_totalCnt.setValue(e.responseJSON.TOTAL_CNT.CNT);
		}

		var firstYn = dma_search.get("TOTAL_YN");

		// 최초 조회일 경우에만 전체 건수를 구하여 전역변수에 담는다.
		if (firstYn == "Y") {
			var totalCnt = Math.ceil(e.responseJSON.TOTAL_CNT.CNT / 10);
			pgl_list.setCount(totalCnt);
		}
	}
};

// 처음부터 다시 조회
scwin.btn_search_onclick = function (e) {
	scwin.searchMain(1, "Y");
};

/*
 * 조회 (현재 샘플은 10개씩 조회할 경우 기준) param1 - 조회 시작 순번 param2 - 총 건수 조회 여부
 */
scwin.searchMain = function (idx, strYn) {
	dma_search.set("TOTAL_YN", strYn);
	dma_search.set("START_NUM", (com.num.parseInt(idx) - 1) * 10);
	dma_search.set("END_NUM", 10);

	com.sbm.execute(sbm_mainList);
};

// 페이지 리스트 클릭 시
scwin.pgl_list_onclick = function (idx) {
	scwin.searchMain(idx, "N");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'../../cm/xml/contentHeader.xml',scope:''}},{T:1,N:'w2:wframe',A:{id:'',src:'../../cm/xml/contentDesc.xml',scope:''}},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예제',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'sum',id:'spn_totalCnt',label:'',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm  search',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:dlt_update','ev:onscrollend':'scwin.gridView1_onscrollend',fixedColumnWithHidden:'true',id:'gridView1',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',scrollByColumnAdaptive:'false',style:'height:296px;',summaryAuto:'false',useShiftKey:'true',defaultCellHeight:'26',autoFitMinWidth:'900',scrollByColumn:'true'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',style:'',value:'업데이트순번',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column5',inputType:'text',style:'',value:'제목',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',style:'',value:'작성일',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column1',inputType:'text',style:'',value:'내용',width:'180'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'UPT_SEQ',inputType:'text',style:'',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'UPT_TITLE',inputType:'text',style:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'UPT_DATE',inputType:'text',style:'',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'UPT_CONTENT',inputType:'text',style:'',width:'70'}}]}]}]},{T:1,N:'w2:pageList',A:{class:'wq_pglist',displayButtonType:'display',displayFormat:'#',id:'pgl_list',pageSize:'5',pagingType:'0',style:'','ev:onchange':'','ev:onclick':'scwin.pgl_list_onclick',renderType:''}}]}]}]}]}]})