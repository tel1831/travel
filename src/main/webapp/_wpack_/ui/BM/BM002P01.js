/*amd /ui/BM/BM002P01.xml 7225 fc388171d746534bc452bd020d1128acf63ec9da326d1d5a79371a26605815f5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_member',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMP_CD',name:'사원코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMP_NM',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_NM',name:'조직',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ASSIGNED_TASK',name:'담당업무',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'AUTHORITY_CD',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'TYPE',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'CONTENT',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_member',ref:'data:json,dma_search',target:'data:json,dlt_member',action:'/authority/excludeSelectAuthorityMemberList',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * 초기 스크립트 수행 함수 정의
 */
scwin.onpageload = function () {
	scwin.param = com.data.getParameter();
	dma_search.set("AUTHORITY_CD", scwin.param.data.AUTHORITY_CD);
	com.win.setEnterKeyEvent(tbl_search, scwin.btn_search_onclick);
};

/**
 * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function () {
	scwin.btn_search_onclick();
};

/**
 * 권한이 부여되지 않은 사용자 조회 
 */
scwin.btn_search_onclick = function () {
	com.sbm.execute(sbm_member);
};

/**
 * 선택된 사원정보를 반환한다.
 */
scwin.btn_confirm_onclick = function () {
	var data = grd_member.getCheckedJSON("chk");
	com.win.closePopup(data);
};

/**
 * 사원정보 선택을 취소한다.
 */
scwin.btn_cancel_onclick = function () {
	com.win.closePopup();
};

/**
 * 더블 클릭한 사원정보를 반환한다.
 */
scwin.grd_member_oncelldblclick = function(row,col,colId) {
	com.win.closePopup([ grd_member.getRowJSON(row) ]);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents flex_gvw'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'검색항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'',ref:'data:dma_search.TYPE',style:'width:100px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사원명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EMP_NM'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사원코드'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EMP_CD'}]}]}]}]},{T:1,N:'xf:input',A:{class:'',id:'',placeholder:'',ref:'data:dma_search.CONTENT',style:'width:150px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox wq_flx',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',captionTitle:'',checkReadOnlyOnCut:'',class:'wq_gvw',dataList:'data:dlt_member',id:'grd_member',rowStatusHeaderValue:'상태',rowStatusVisible:'false',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height:243px;',defaultCellHeight:'26','ev:oncelldblclick':'scwin.grd_member_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',checkboxLabel:'선택',displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'',displayMode:'label',id:'column18',inputType:'text',removeBorderStyle:'false',style:'',value:'사원코드',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'',displayMode:'label',id:'column17',inputType:'text',removeBorderStyle:'false',style:'',value:'사원명',width:'130'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column16',inputType:'text',removeBorderStyle:'false',style:'',value:'조직',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column14',inputType:'text',removeBorderStyle:'false',style:'',value:'담당업무',width:'296'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',checkboxLabel:'선택',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'EMP_CD',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'90',checkAlways:'',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'EMP_NM',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'130',checkAlways:'',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ORG_NM',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'90',checkAlways:'',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ASSIGNED_TASK',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'296',checkAlways:'',readOnly:'true',textAlign:'left'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_confirm',style:'',type:'button','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]})