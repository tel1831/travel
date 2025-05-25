/*amd /ui/HM/HM003P02.xml 4377 5630f40d7f4e1c2edf5aadc6cf036caf5d1f9d2c0bd3f232f415ca31128f21e1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',E:[{T:1,N:'w2:dataList',A:{id:'dlt_organBasic',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ORG_CD',name:'소속코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_CLASS_CD',name:'조직구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_NM',name:'소속명칭',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_ALIAS_NM',name:'소속약칭',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_EN_NM',name:'소속영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_EN_ALIAS_NM',name:'소속영문약명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SORT_ORDER',name:'정렬순서',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ORG_LEVEL',name:'조직레벨',dataType:'number'}},{T:1,N:'w2:column',A:{id:'PARENT_ORG_CD',name:'상위소속코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORG_BOSS_EMP_CD',name:'책임자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'START_DATE',name:'개설일',dataType:'date'}},{T:1,N:'w2:column',A:{id:'END_DATE',name:'폐쇄일',dataType:'date'}},{T:1,N:'w2:column',A:{id:'NOTE',name:'비고',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_getOrganBasicList',ref:'data:json,dlt_organBasic',target:'data:json,{"id":"dlt_organBasic","key":"data"}',action:'/organization/selectOrganBasicList',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * 소속 선택 화면 초기화 작업을 수행한다.
 */
scwin.onpageload = function () {
	var param = com.data.getParameter();
	scwin.closeCallbackFncName = param.callbackFn;
};

/**
 * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function () {
	scwin.search();
};

/**
 * 소속 선택를 조회한다.
 */
scwin.search = function () {
	com.sbm.execute(sbm_getOrganBasicList);
};

/**
 * 선택된 소속 정보를 반환한다.
 */
scwin.btn_confirm_onclick = function () {
	var returnValue = {
		"ORG_CD": trv_organ.getSelectedValue(),
		"ORG_NM": trv_organ.getSelectedLabel()
	};
	com.win.closePopup(returnValue);
};

/**
 * 소속 정보 선택을 취소한다.
 */
scwin.btn_cancel_onclick = function () {
	com.win.closePopup();
};

scwin.trv_organ_ondblclick = function () {
	scwin.btn_confirm_onclick();
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents'},E:[{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속선택',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'tvwbox  scrollbar',id:'',style:'height: 340px;'},E:[{T:1,N:'w2:treeview',A:{useDrag:'',id:'trv_organ',style:'height: 316px;',lineShow:'',tooltipGroupClass:'false',dataType:'listed','ev:ondblclick':'scwin.trv_organ_ondblclick',class:'mn_tvw',showTreeDepth:'2',renderType:'virtual'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_organBasic'},E:[{T:1,N:'w2:label',A:{ref:'ORG_NM'}},{T:1,N:'w2:value',A:{ref:'ORG_CD'}},{T:1,N:'w2:depth',A:{ref:'ORG_LEVEL'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_confirm',style:'',type:'button','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]})