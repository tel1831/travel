/*amd /ui/BM/BM008M01.xml 11406 581d2c17b4f38e21c2dfb3357cf56fd6e5bf80a785be39b29f95969b5ae84b85 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'LANG',name:'언어코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'MSG_KEY',name:'메시지 키',dataType:'text'}},{T:1,N:'w2:key',A:{id:'MSG_CONTENTS',name:'메시지 ',dataType:'text'}},{T:1,N:'w2:key',A:{id:'IS_USE',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_msg',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'LANG',name:'언어',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MSG_KEY',name:'메시지 키',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MSG_CONTENTS',name:'메시지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_USE',name:'사용여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchMessage',ref:'data:json,dma_search',target:'data:json,{"id":"dlt_msg","key":"dlt_message"}',action:'/message/searchMessageList',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchMessage_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveMessage',ref:'data:json,{"action":"modified","id":"dlt_msg"}',target:'',action:'/message/saveMessage',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveMessage_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * 초기화 함수(공통코드 조회)
 */
scwin.onpageload = function () {
	var codeOptions = [{ code: "00027", compID: "sbx_srchLang, grd_msg:LANG" }];
	com.data.setCommonCode(codeOptions);

	com.win.setEnterKeyEvent(tbl_search, scwin.btn_search_onclick);
	com.util.setGridViewDelCheckBox(grd_msg);
	com.data.setChangeCheckedDc(dlt_msg);
};

/**
 * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function () {
	scwin.btn_search_onclick();
};

/**
 * 다국어메시지조회 버튼 클릭시 발생하며, 조건에 따른 다국어메시지 리스트를 조회한다.
 */
scwin.btn_search_onclick = function () {
	com.sbm.execute(sbm_searchMessage);
};

scwin.sbm_searchMessage_submitdone = function (e) {
	if (com.sbm.getResultCode(e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
		spn_msgCnt.setValue(dlt_msg.getRowCount());
		grd_msg.setFocusedCell(0, "LANG");
	}
};

/**
 * 다국어 메시지 추가 버튼을 클릭한다.
 */
scwin.btn_addMsg_onclick = function (e) {
	var idx = com.data.insertRow(grd_msg);

	grd_msg.setCellReadOnly(idx, "LANG", false);
	grd_msg.setCellReadOnly(idx, "MSG_KEY", false);
	dlt_msg.setCellData(idx, "IS_USE", 'Y');

	if (dma_search.get("LANG") == "all") {
		grd_msg.setFocusedCell(idx, "LANG", true);
	} else {
		dlt_msg.setCellData(idx, "LANG", dma_search.get("LANG"));
		grd_msg.setFocusedCell(idx, "MSG_KEY", true);
	}
};

/**
 * 다국어 메시지 삭제 버튼을 클릭한다.
 */
scwin.btn_cancelMsg_onclick = function (e) {
	com.data.undoGridView(grd_msg);
};

/**
 * 다국어 메시지 저장 버튼을 클릭한다.
 */
scwin.btn_saveMsg_onclick = function (e) {
	if (com.data.isModified(dlt_msg)) {
		var valInfo = [{ id: "LANG", mandatory: true },
		{ id: "MSG_KEY", mandatory: true },
		{ id: "MSG_CONTENTS", mandatory: true }];
		if (com.data.validateGridView(grd_msg, valInfo)) {
			com.win.confirm("저장하시겠습니까?",
				function (res) {
					if (res.clickValue === true) {
						com.sbm.execute(sbm_saveMessage);
					}
				}
			);
		}
	} else {
		com.win.alert(com.data.getMessage("MSG_CM_00032"));
	}
};

scwin.sbm_saveMessage_submitdone = function (e) {
	if (com.sbm.getResultCode(e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
		scwin.btn_search_onclick();

		// 저장 후 다국어 메시지 데이터 새롭게 로딩한다.
		gcm.data.loadMessage($p);
	}
};

scwin.btn_excelMenu_onclick = function (e) {
	com.data.downloadGridViewExcel(grd_msg);
};

}}}]},{T:1,N:'style',A:{type:'text/css'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_gvw',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'../../cm/xml/contentHeader.xml',scope:'true'}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox_inner',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'900',class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:58px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{style:'width:88px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'언어',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{id:'sbx_srchLang',chooseOption:'',style:'width:100%;',submenuSize:'auto',allOption:'true',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'data:dma_search.LANG',chooseOptionLabel:'- 전체 -'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'메시지 키',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'ibx_srchMsgKey',style:'width:100%',ref:'data:dma_search.MSG_KEY'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'메시지',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'ibx_srchMSg',style:'width:100%',ref:'data:dma_search.MSG_CONTENTS'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'',selectedIndex:'-1',appearance:'full',style:'',cols:'',rows:'',ref:'data:dma_search.IS_USE',renderType:'radiogroup'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'},E:[{T:1,N:'w2:textbox',A:{label:'다국어 메시지',style:'',id:'',class:'',tagname:'h3'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'fr'},E:[{T:1,N:'w2:textbox',A:{class:'sum',id:'spn_msgCnt',label:'',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:''}},{T:1,N:'xf:trigger',A:{type:'button',style:'',id:'btn_addMsg',class:'btn_cm row_add','ev:onclick':'scwin.btn_addMsg_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancelMsg',style:'',type:'button','ev:onclick':'scwin.btn_cancelMsg_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm download',id:'btn_excelMenu',style:'',type:'button',disabled:'','ev:onclick':'scwin.btn_excelMenu_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀다운로드'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'gvwbox wq_flx'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',dataList:'data:dlt_msg',style:'height: 297px;',scrollByColumn:'false',id:'grd_msg',defaultCellHeight:'26',class:'wq_gvw',autoFit:'allColumn',rowStatusVisible:'true',sortEvent:'onclick',ignoreCellClick:'false',rowStatusWidth:'',rowStatusHeaderValue:'상태',keepDefaultColumnWidth:'true',autoFitMinWidth:'800'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',checkboxLabel:'선택',id:'chk',sortable:'false',displayMode:'label',style:'',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column4',value:'언어',displayMode:'label',class:'req'}},{T:1,N:'w2:column',A:{width:'128',inputType:'text',style:'',id:'column5',value:'메시지 키',displayMode:'label',class:'req'}},{T:1,N:'w2:column',A:{width:'429',inputType:'text',style:'',id:'column6',value:'메시지',displayMode:'label',class:'req'}},{T:1,N:'w2:column',A:{width:'99',inputType:'text',style:'',id:'column1',value:'사용여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',readOnly:'false',id:'chk',displayMode:'value',checkboxLabel:'선택'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'LANG',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'128',inputType:'text',style:'',id:'MSG_KEY',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'429',inputType:'text',style:'',id:'MSG_CONTENTS',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'99',inputType:'select',style:'',id:'IS_USE',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_saveMsg',style:'',type:'button','ev:onclick':'scwin.btn_saveMsg_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]})