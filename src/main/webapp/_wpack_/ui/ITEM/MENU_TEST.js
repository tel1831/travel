/*amd /ui/ITEM/MENU_TEST.xml 3478 df4672aef2494e01bf2d49a8f78d45620ea9788f804c1c8fdbe022730bce7920 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_menu',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:ondataload':'scwin.dlt_menu_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'MENU_CD',name:'메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_NM',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_USE',name:'사용유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SRC_PATH',name:'메뉴경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENT_MENU_CD',name:'부모메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_LEVEL',name:'메뉴레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SORT_ORDER',name:'정렬순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROGRAM_CD',name:'프로그램코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,dlt_menu',action:'/main/init',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	var searchCodeGrpOption = {
		id: "sbm_InitCont", action: "/main/init",
		target: 'data:json, "dlt_menu"', method: "post",
		mediatype: "application/json", mode: "asynchronous", isProcessMsg: false,
		submitDoneHandler: scwin.initDataCallback
	};

	com.sbm.executeDynamic(searchCodeGrpOption);
};

scwin.initDataCallback = function () {
	alert(dlt_menu.getAllData().length);
}

scwin.btn_search_onclick = function(e) {
	com.sbm.execute(submission1);
};

// scwin.btn_search_onclick = function(e) {
// 	var searchCodeGrpOption = {
// 		id: "sbm_InitCont", action: "/main/init",
// 		target: 'data:json, ["dlt_menu"]', method: "post",
// 		mediatype: "application/json", mode: "asynchronous", isProcessMsg: false,
// 		submitDoneHandler: scwin.initDataCallback
// 	};

// 	com.sbm.executeDynamic(searchCodeGrpOption);
// };

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'메뉴테스트',style:'width: 150px;height: 23px;'}},{T:1,N:'w2:treeview',A:{id:'',dataType:'listed',tooltipGroupClass:'false',style:'width: 200px;height: 200px;'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_menu'},E:[{T:1,N:'w2:label',A:{ref:'MENU_NM'}},{T:1,N:'w2:value',A:{ref:'MENU_CD'}},{T:1,N:'w2:depth',A:{ref:'MENU_LEVEL'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_search',style:'width: 80px;height: 23px;','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]}]})