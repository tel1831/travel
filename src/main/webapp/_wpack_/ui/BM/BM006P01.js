/*amd /ui/BM/BM006P01.xml 5209 8280cc4f172fb51994d696e0fade91f7ca0c117b255d1f615ea89f2c535da768 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileGrp'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'FILE_GRP_SEQ',name:'파일그룹순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'FILE_GRP_SEQ_PARENT',name:'파일그룹부모순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'FILE_GRP_NM',name:'파일그룹명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mapStatus',name:'상태',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_saveFileGrp',ref:'data:json,dma_fileGrp',target:'',action:'/file/saveFileGrp',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveFileGrp_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * 초기 스크립트 수행 함수 정의
 */
scwin.onpageload = function () {
	scwin.param = com.data.getParameter();
	if (scwin.param.mode == "create") {
		grp_controlRow.show("");
		grp_fileGrpSeq.hide();
		dma_fileGrp.set("mapStatus", "C");
	} else if (scwin.param.mode == "update") {
		grp_controlRow.hide();
		grp_fileGrpSeq.show("");
		dma_fileGrp.setJSON(com.data.getParameter("data"));
		dma_fileGrp.set("mapStatus", "U");
	}

	scwin.closeCallbackFncName = scwin.param.callbackFn;
};

scwin.btn_confirm_onclick = function () {
	if (scwin.param.mode == "create") {
		var level = rad_level.getValue();
		if (level == "1") {
			dma_fileGrp.set("FILE_GRP_SEQ_PARENT", scwin.param.fileGrpSeqParent);
		} else {
			dma_fileGrp.set("FILE_GRP_SEQ_PARENT", scwin.param.fileGrpSeq);
		}
	}

	if (com.data.validateGroup(grp_content)) {
		com.sbm.execute(sbm_saveFileGrp);
	}
};

scwin.btn_cancel_onclick = function () {
	com.win.closePopup();
};

scwin.sbm_saveFileGrp_submitdone = function (e) {
	com.win.closePopup(dma_fileGrp.getJSON());
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents flex_gvw'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'1024',tagname:'table',style:'',tabIndex:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'grp_fileGrpSeq'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'파일그룹순번'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'',placeholder:'',style:'',disabled:'true',ref:'data:dma_fileGrp.FILE_GRP_SEQ'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'파일그룹명'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td',id:'grp_content'},E:[{T:1,N:'xf:input',A:{style:'',id:'',placeholder:'',class:'',mandatory:'true',ref:'data:dma_fileGrp.FILE_GRP_NM'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'grp_controlRow'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'노드 생성 위치',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'rad_level',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동일 레벨'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위 레벨'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_confirm',style:'',type:'button','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]})