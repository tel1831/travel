/*amd /ui/SP/Parameter/Popup_Parameter.xml 9226 ec41ba5aaebf8ca619be60250563c9090dc00036de5b7b51328abd53345f4aac */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'desc',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'test',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'desc',E:[{T:4,cdata:'\n<pre class="textNor" style="">\n<div class="etcbox">본 화면은 팝업호출시 Parameter를 처리하는 방법을 제공한다. \nALERT 형태의 팝업과 CONFIRM형태의 팝업에 대하여 처리하는 방법을 제공한다.\n</div>\n<div class="etc_tit">1. ALERT</div>\n  - 본 화면에서 입력한 값을 alert형태의 팝업창에 전달하는 방법을 제공한다.\n<div class="etc_tit">2. CONFIRM</div>\n  - 본 화면에서 입력한 값을 confirm형태의 팝업창에 전달하는 방법을 제공한다.\n</pre>\n						'}]},{T:1,N:'test',E:[{T:4,cdata:'\n<pre class="textNor" style="">						\n<div class="etc_tit">1. 과정</div>\n1. 메인화면\n1) ALERT 방식 테스트: [전송 Data]를 입력 후 [alert]버튼을 클릭한다.\n2) CONFIRM 방식 테스트: [전송 Data]를 입력 후 [confirm]버튼을 클릭한다.\n\n2. 팝업\n1) ALERT 방식 테스트: [전송 Parameter]를 입력 후 [확인]버튼을 클릭한다.\n2) CONFIRM 방식 테스트: [전송 Parameter]를 입력 후 [확인]버튼을 클릭한다.\n						  단, [취소]버튼을 클릭하면 팝업만 종료된다.\n<div class="etc_tit">2. 결과</div>\n1. 메인화면\n1) ALERT 방식 결과: 팝업이 열려지면서 [전송 Data] 값이 해당 팝업에 셋팅된다.\n2) CONFIRM 방식 결과: 팝업이 열려지면서 [전송 Data] 값이 해당 팝업에 셋팅된다.\n\n2. 팝업\n1) ALERT 방식 결과: [전송 Parameter]값이 메인화면의 [수신 Data]에 셋팅된다.\n2) CONFIRM 방식 결과: [전송 Parameter]값이 메인화면의 [수신 Data]에 셋팅된다.\n</pre>\n						'}]}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_advancedExcel',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'MENU_CD',name:'메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_NM',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENT_MENU_NM',name:'부모메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_LEVEL',name:'메뉴레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SRC_PATH',name:'경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_USE',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SORT_ORDER',name:'순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENT_MENU_CD',name:'부모메뉴코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_advancedExcel',ref:'',target:'data:json,dlt_advancedExcel',action:'/ui/SP/JsonData/advancedExcel.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_advancedExcel_submitdone','ev:submiterror':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * 초기 스크립트 수행 함수 정의
 */
scwin.onpageload = function () {

};

/**
 * alert(WFrame Popup) 파라미터 전달 팝업 
 */
scwin.btn_alert1_onclick = function () {
	var data = { type: "alert", msg: ibx_alertSend.getValue(), callbackFn: "scwin.fn_alertCallback" };
	var options = {
		id: "AlertPop",
		title: "Alert_Pop",
		type: "wframePopup",
		height: "270px"
	};
	com.win.openPopup("/ui/SP/Parameter/confirm.xml", options, data);
};

/**
	
 * alert(IFrame Popup) 파라미터 전달 팝업 
 */
scwin.btn_alert2_onclick = function () {
	var data = { type: "alert", msg: ibx_alertSend.getValue(), callbackFn: "scwin.fn_alertCallback" };
	var options = {
		id: "AlertPop",
		title: "Alert_Pop",
		type: "iframePopup",
		height: "270px"
	};
	com.win.openPopup("/ui/SP/Parameter/confirm.xml", options, data);
};

/**
 * confirm(WFrame Popup) 파라미터 전달 팝업 
 */
scwin.btn_confirm1_onclick = function () {
	var data = { type: "confirm", msg: ibx_confirmSend.getValue(), callbackFn: "scwin.fn_confirmCallback" };
	var options = {
		id: "ConfirmPop",
		title: "Confirm_Pop",
		height: "270px"
	};
	com.win.openPopup("/ui/SP/Parameter/confirm.xml", options, data);
};

/**
 * confirm(Browser Popup) 파라미터 전달 팝업 
 */
scwin.btn_confirm2_onclick = function () {
	var data = { type: "confirm", msg: ibx_confirmSend.getValue(), callbackFn: "scwin.fn_confirmCallback" };
	var options = {
		id: "ConfirmPop",
		title: "Confirm_Pop",
		type: "browserPopup",
		height: "270px"
	};
	com.win.openPopup("/ui/SP/Parameter/confirmBrowser.xml", options, data);
};

scwin.fn_alertCallback = function (arg) {
	ibx_alertReceive.setValue(arg);
};

scwin.fn_confirmCallback = function (arg) {
	ibx_confirmReceive.setValue(arg);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'../../cm/xml/contentHeader.xml',scope:''}},{T:1,N:'w2:wframe',A:{id:'',src:'../../cm/xml/contentDesc.xml',scope:''}},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ALERT',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'900',class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송 Data',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'flex',id:'',style:''},E:[{T:1,N:'xf:input',A:{disabled:'',id:'ibx_alertSend',placeholder:'',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'btn_alert1',style:'',type:'button','ev:onclick':'scwin.btn_alert1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'alert (Wframe Popup)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ','ev:onclick':'scwin.btn_alert2_onclick',id:'btn_alert2',style:'',type:'button',nextTabID:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'alert (IFrame Popup)'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수신 Data',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ibx_alertReceive',placeholder:'',style:'width:100%;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CONFIRM',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'900',class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송 Data',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'flex',id:'',style:''},E:[{T:1,N:'xf:input',A:{disabled:'',id:'ibx_confirmSend',placeholder:'',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'btn_confirm',style:'',type:'button','ev:onclick':'scwin.btn_confirm1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'confirm (Wframe Popup)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ','ev:onclick':'scwin.btn_confirm2_onclick',id:'btn_trigger2',nextTabID:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'confirm (Browser Popup)'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수신 Data',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ibx_confirmReceive',placeholder:'',style:'width:100%;'}}]}]}]}]}]}]}]}]})