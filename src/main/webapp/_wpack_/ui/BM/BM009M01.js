/*amd /ui/BM/BM009M01.xml 13217 1c918d3a8776a393e3e9f5affa80bb6396afb8a29057de53b84528771a17409d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_holiday',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CHECK',name:'CHECK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'REST_DATE',name:'휴일날짜',dataType:'text'}},{T:1,N:'w2:column',A:{id:'REST_NAME',name:'휴일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'REST_CODE',name:'휴일구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NOTE',name:'휴일설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'REST_SEQ',name:'번호',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'REST_DATE',name:'연도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'REST_CODE',name:'휴일구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'REST_NAME',name:'휴일명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_code',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'REST_CODE',name:'휴일구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'REST_CODENAME',name:'휴일구분명',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'REST_CODE',E:[{T:4,cdata:'0'}]},{T:1,N:'REST_CODENAME',E:[{T:4,cdata:'법정'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'REST_CODE',E:[{T:4,cdata:'1'}]},{T:1,N:'REST_CODENAME',E:[{T:4,cdata:'임시'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'REST_CODE',E:[{T:4,cdata:'2'}]},{T:1,N:'REST_CODENAME',E:[{T:4,cdata:'사내'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_grdShow',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CHECK',name:'CHECK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'REST_DATE',name:'휴일날짜',dataType:'text'}},{T:1,N:'w2:column',A:{id:'REST_NAME',name:'휴일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'REST_CODE',name:'휴일구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NOTE',name:'휴일설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'REST_SEQ',name:'번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_holiday',ref:'data:json,dma_search',target:'data:json,dlt_holiday',action:'/holiday/selectHoliday',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sbm_holiday_submitdone','ev:submiterror':'',abortTrigger:'','ev:submit':''}},{T:1,N:'xf:submission',A:{id:'sbm_save',ref:'data:json,{"action":"modified","id":"dlt_holiday"}',target:'',action:'/holiday/save',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:'','ev:submit':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function() {
	com.win.setEnterKeyEvent(tbl_search, scwin.btn_search_onclick);
};

/**
 * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function() {
    scwin.btn_search_onclick();
}

/**
 * 공휴일 목록을 조회한다
 */
scwin.btn_search_onclick = function(e) {
    // REST_DATE : 공휴일 날짜
    // REST_CODE : 공휴일 구분코드
    // REST_NAME : 공휴일명    
    dma_search.set("REST_DATE", sbx_year.getValue());
    dma_search.set("REST_CODE", sbx_code.getValue());
    dma_search.set("REST_NAME", ip_text.getValue());

    com.sbm.execute(sbm_holiday);
};

/**
 * 휴일명 입력창에서 Enter를 누른 경우의 조회
 */
// scwin.ip_text_oneditenter = function() {
//       com.sbm.execute(sbm_holiday);
// };

/**
 * GridView에 새로 생성된 행의 모든 정보가 삭제된다                                                                                          
 */
scwin.btn_cancel_onclick = function(e) {
    com.data.undoGridView(grd_holiday);
};

/**
 * 코드의 필수 입력 정보를 체크한다. (유효성검사관련)
 */
scwin.validateCode = function() {
    var valInfo = [
        { id: "REST_DATE", mandatory: true },
        { id: "REST_CODE", mandatory: true },
        { id: "REST_NAME", mandatory: true }
    ];
    return com.data.validateGridView(grd_holiday, valInfo);
};

/**
 * 유효성 검사 후 공휴일 목록을 저장한다
 */
scwin.saveHoliday = function (res) {
    if (scwin.validateCode()) {
		if (res.clickValue === true) {
			com.sbm.execute(sbm_save);
		}
	}
};

/**
 * 공휴일 목록 데이터 저장 클릭
 */
scwin.btn_save_onclick = function(e) {
    if(com.data.isModified(dlt_holiday)) {
        com.win.confirm(com.data.getMessage("MSG_CM_00031"), scwin.saveHoliday);
    } else {
        com.win.alert(com.data.getMessage("MSG_CM_00032"));
    }
};

/**
 * 추가, 수정, 삭제된 공휴일 목록 데이터를 Calendar에 반영
 */
scwin.sbm_save_submitdone = function(e) {
    if(com.sbm.getResultCode(e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
        scwin.btn_search_onclick();
    }
};

/**
 * 공휴일 목록 추가
 */
scwin.btn_addGrpCell_onclick = function(e) {
    var focus = grd_holiday.getFocusedRowIndex();
    com.data.insertRow(grd_holiday);
};

/**
 * 셀 클릭 시
 */
scwin.grd_holiday_oncellclick = function(row,col) {
    if(col == 0) {
        var rowStatus = dlt_holiday.getRowStatus(row);
        if( rowStatus == "C") { // 추가된 행 
            dlt_holiday.deleteRow(row);
        } else {
            var chk_val = dlt_holiday.getCellData(row, col);
            if( chk_val == "1" ) {
                dlt_holiday.modifyRowStatus(row, "D");
            } else {
                dlt_holiday.undoRow(row);
            }
        }
    } 
};

/**
 * 조회된 데이터의 개수 출력
 */
scwin.sbm_holiday_submitdone = function(e) {
    spn_HolidayCnt.setValue(dlt_holiday.getRowCount());
    $p.top().dlt_holiday.setJSON(e.responseJSON.dlt_holiday);
};

/**
 * 액셀 다운로드
 */
scwin.btn_excelDownload_onclick = function(e) {
    com.data.downloadGridViewExcel(grd_holiday);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'sub_contents flex_gvw'},E:[{T:1,N:'w2:wframe',A:{style:';height:30px;margin-bottom:16px;',id:'wfm_header',src:'../../cm/xml/contentHeader.xml'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{id:'tbl_search',style:'position:relative;vertical-align:bottom;box-sizing: border-box;',class:'shbox_inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb',adaptive:'layout',adaptiveThreshold:'900'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:3.10%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:4.02%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:3.06%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:4.33%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:3.18%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:24.24%;'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:';border:none;',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'연도',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_td',style:'border: none;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:inputCalendar',A:{id:'sbx_year',style:'width:100%;',calendarValueType:'year',pickerType:'dynamic'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',style:';border:none;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'휴일구분',style:'display:inline-block;text-align: right;',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_td',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_code',style:'width: 100%;text-align:center;',submenuSize:'auto',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_code'},E:[{T:1,N:'xf:label',A:{ref:'REST_CODENAME'}},{T:1,N:'xf:value',A:{ref:'REST_CODE'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',style:';border:none;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'휴일명',style:'display:inline-block;text-align:right;',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_td',style:'border:none;text-align: left;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{id:'ip_text',style:'width:45%;',placeholder:'휴일명을 입력해주세요.','ev:oneditenter':'scwin.ip_text_oneditenter'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'width:75px;height:26px;',class:'btn_shbox'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'btn_search',style:'','ev:onclick':'scwin.btn_search_onclick',class:'btn_cm sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'height: 26px;margin-bottom: 8px;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'공휴일',style:'width:48px;height:23px;display:inline-block;',tagname:'h3'}},{T:1,N:'xf:group',A:{id:'',style:'display:block;float:right;'},E:[{T:1,N:'w2:textbox',A:{id:'spn_HolidayCnt',label:'',style:'display:inline-block;font-weight:bold;color:#e98c3b;vertical-align: middle;'}},{T:1,N:'w2:textbox',A:{id:'',label:'건',style:'width:19px;display:inline-block;margin-right:16px;font-weight:bold;vertical-align: middle;',class:'sum'}},{T:1,N:'xf:trigger',A:{class:'btn_cm row_add','ev:onclick':'scwin.btn_addGrpCell_onclick',id:'btn_addGrpCell',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_cancel',style:'width: 42px;height: 26px;','ev:onclick':'scwin.btn_cancel_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_excelDownload',style:'',class:'btn_cm download','ev:onclick':'scwin.btn_excelDownload_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'액셀 다운로드'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'gvwbox wq_flx'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',id:'grd_holiday',style:'height:300px;',dataList:'data:dlt_holiday',rowNumVisible:'false',autoFit:'lastColumn',rowNumWidth:'42',defaultCellHeight:'27',rowStatusVisible:'true',rowStatusHeaderValue:'상태','ev:oncellclick':'scwin.grd_holiday_oncellclick',class:'wq_gvw',rowNumHeaderValue:'번호'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'48',inputType:'checkbox',style:'',id:'column23',value:'CHECK',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'157',inputType:'text',id:'column22',sortable:'true',value:'휴일날짜',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'136',inputType:'text',id:'column21',value:'휴일명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'89',inputType:'text',minWidth:'20',id:'column20',value:'휴일구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'76',inputType:'text',id:'column19',value:'휴일설명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'48',inputType:'checkbox',style:'',id:'CHECK',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{editModeEvent:'onclick',width:'157',inputType:'calendar',id:'REST_DATE',displayMode:'label',class:'cal'}},{T:1,N:'w2:column',A:{width:'136',inputType:'text',id:'REST_NAME',displayMode:'label'}},{T:1,N:'w2:column',A:{ref:'',chooseOption:'',width:'89',inputType:'select',id:'REST_CODE',allOption:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_code'},E:[{T:1,N:'w2:label',A:{ref:'REST_CODENAME'}},{T:1,N:'w2:value',A:{ref:'REST_CODE'}}]}]}]},{T:1,N:'w2:column',A:{textAlign:'left',width:'76',inputType:'text',id:'NOTE',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'btnbox'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'btn_save',style:'background-color:#348FE2;color:white;display: block;min-width: 60px;height: 30px;float: right;','ev:onclick':'scwin.btn_save_onclick',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})