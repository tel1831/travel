/*amd /ui/SP/Parameter/SessionStorage_ParameterReceive.xml 5770 7facbce2ce2a466538b98d8a861c6d95a8fe3845d181bf017c07224f10c4fdd9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'desc',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'test',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'desc',E:[{T:4,cdata:'\n<pre class="textNor" style="">\n<div class="etcbox">본 화면은 화면전환시 넘겨받은 Parameter Setting 방법을 제공한다. \ncom.data.getParameter 를 이용하여 넘겨받은 Parameter를 받아올 수 있다.\n</div>\n<div class="etc_tit">1. 사용제약</div>\n  - HTML5의 브라우저 객체를 이용하므로, ie6, 7 브라우저에서는 사용이 불가하다.\n<div class="etc_tit">2. Parameter 처리 방법</div>\n  - com.data.getParameter 라는 API를 이용하여 넘겨받은 Parameter를 받아온다.\n  - 예시\n  com.data.getParameter("CODE");\n						'}]},{T:1,N:'test',E:[{T:4,cdata:'\n<pre class="textNor" style="">						\n<div class="etc_tit">1. 과정</div>\n1. 이전화면인 [url 방식]화면에서 값을 입력 후 [url] 혹은 [newTab] 버튼을 클릭한다.\n<div class="etc_tit">2. 결과</div>\n1. 화면이 전환되면서 이전화면에서 넘겨준 Parameter값이 자동으로 setting됨을 확인한다.\n</pre>\n						'}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_return'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'nm',name:'명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'etc',name:'기타',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * url로 이동시 Parameter 전달 값을 확인한다.
 */
scwin.onpageload = function () {
	var p_gubn = sessionStorage.getItem("gubn");
	if (p_gubn == "1") {
		grp_search.show("");
	} else {
		grp_search.hide();
	}
	wfm_contentHeader.getWindow().txt_h1.setValue("Get Session Storage");
	ibx_cd.setValue(sessionStorage.getItem("CODE"));
	ibx_nm.setValue(sessionStorage.getItem("NAME"));
	ibx_revEtc.setValue(sessionStorage.getItem("ETC"));
};

/**
 * 이전 화면으로 이동한다.
 */
scwin.btn_back_onclick = function () {
	sessionStorage.setItem("cd", dma_return.get("cd"));
	sessionStorage.setItem("nm", dma_return.get("nm"));
	sessionStorage.setItem("etc", dma_return.get("etc"));
	sessionStorage.setItem("initGubn", "A");

	var moveUrl = "/ui/SP/Parameter/SessionStorage_ParameterSend.xml";
	com.win.moveUrl(moveUrl, dma_return.getJSON());
};

scwin.wfTitleFav_alertPageInfo = function () {
	com.win.alert("[" + wfm_contentHeader.getWindow().txt_h1.getValue() + "] 페이지의 파일 경로는 다음과 같습니다.\n" + com.getPageUrl());
};

scwin.wfTitleFav_reload = function () {
	$p.reinitialize(false);
};

scwin.wfTitleFav_browserReload = function () {
	$p.reinitialize(true);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'wfm_contentHeader',src:'../../cm/xml/contentHeader.xml'}},{T:1,N:'w2:wframe',A:{id:'',src:'../../cm/xml/contentDesc.xml',scope:''}},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:'min-height:34px;'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화면전환으로 전달받은 Prameter Setting',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'fr',id:'grp_search',style:'display:none;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_back',style:'',type:'button','ev:onclick':'scwin.btn_back_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이전화면'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'900',class:'w2tb tb',id:'',style:'width: 100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전달 받은 코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{minlength:'13',id:'ibx_cd',applyFormat:'',ref:'data:dma_return.cd',maxlength:'13',style:'',mandatory:'true',displayFormat:'',allowChar:'',displayFormatter:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th re',tagname:'th',text:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전달 받은 명 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ibx_nm',ref:'data:dma_return.nm',style:'',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tabIndex:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETC',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ibx_revEtc',ref:'data:dma_return.etc',style:'',mandatory:'true',class:'fl'}}]}]}]}]}]}]}]}]})