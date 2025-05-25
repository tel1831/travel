/*amd /ui/SP/Parameter/DataObject_ParameterSend.xml 6653 50405debedca953c4138728e3a040a4879150d822d3a6576e7746279ec125d77 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'desc',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'test',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'desc',E:[{T:4,cdata:'\n<pre class="textNor" style="">\n<div class="etcbox">본 화면은 화면전환시 Parameter를 넘겨주는 방법을 제공한다. \n열려진 화면의 url을 변경하는 방식과 \n새 탭을 열어 보여주는 방식에 대하여 설명한다.\n</div>\n<div class="etc_tit">1. url 변경</div>\n  - $p.url 을 사용하며, 아래의 예시는 json형태의 데이터를 parameter로 전송하는 방법이다.\n  - 예시\n  var options = {};\n  options.param = dma_basic.getJSON();\n  $p.url(../../../SP/Parameter/Url_ParameterReceive.xml" , options );\n<div class="expTit">2. 새 탭으로 열기</div>\n  - 탭 컨트롤의 addTab을 사용하여 새로운 탭으로 화면을 열고, parameter로 전송하는 방법이다.\n  - 예시\n  var move_url = gcm.CONTEXT_PATH + "/ui/SP/Parameter/Url_ParameterReceive.xml&CODE="+dma_basic.get("CODE");\n  var classObj = {src:move_url};\n  parent.tac_layout.addTab( "Get Parameter", tabObj, classObj );\n</pre>\n						'}]},{T:1,N:'test',E:[{T:4,cdata:'\n<pre class="textNor" style="">						\n<div class="etc_tit">1. 과정</div>\n1. url 방식 테스트: [코드],[성명],[기타] 값을 차례로 입력 후 [url]버튼을 클릭한다.\n2. addTab 방식 테스트: [코드],[성명],[기타] 값을 차례로 입력 후 [new Tab]버튼을 클릭한다.\n<div class="etc_tit">2. 결과</div>\n1. url방식 결과: 화면이 전환되면서 이전 화면에서 넘겨준 [코드],[성명],[기타]이 새 화면에 맵핑되어 보여진다.\n2. addTab 방식 결과: 새 탭이 열리면서 이전 화면에서 넘겨준 [코드],[성명],[기타]이 새 화면에 맵핑되어 보여진다.\n</pre>\n						'}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_basic'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'CODE',name:'코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'NAME',name:'이름',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ETC',name:'기타',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'CODE',E:[{T:4,cdata:'A001'}]},{T:1,N:'NAME',E:[{T:4,cdata:'가나다'}]},{T:1,N:'ETC',E:[{T:4,cdata:'***'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * url로 이동시 Parameter 전달 값을 확인한다.
 */
scwin.onpageload = function () {
	var gubun = com.data.getParameter("gubun");
	if (gubun == "2") {
		ibx_code.setValue(com.data.getParameter("cd"));
		ibx_name.setValue(com.data.getParameter("nm"));
		ibx_etc.setValue(com.data.getParameter("etc"));
	}
};

/**
 * url로 이동시 Parameter 전달 값을 확인한다.
 */
scwin.btn_confirm_onclick = function () {
	var moveUrl = "/ui/SP/Parameter/DataObject_ParameterReceive.xml";

	var param = {};
	param.CODE = dma_basic.get("CODE");
	param.NAME = dma_basic.get("NAME");
	param.ETC = dma_basic.get("ETC");
	param.gubun = 1;

	com.win.moveUrl(moveUrl, param);
};

/**
 * 새 탭으로 열어준 뒤 Parameter 전달 값을 확인한다.
 */
scwin.btn_addTab_onclick = function () {
	var moveUrl = "/ui/SP/Parameter/DataObject_ParameterReceive.xml";
	var paramObj = {
		CODE: dma_basic.get("CODE"),
		NAME: dma_basic.get("NAME"),
		ETC: $p.URLEncoder(dma_basic.get("ETC")),
		gubun: "2"
	};

	com.win.openMenu("DataObject 방식 Parameter 전달결과", moveUrl, "999999", paramObj);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'../../cm/xml/contentHeader.xml',scope:''}},{T:1,N:'w2:wframe',A:{id:'',src:'../../cm/xml/contentDesc.xml',scope:''}},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'sessionStorage를 통한 Prameter 전달',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{id:'',class:'fr'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_confirm',type:'button',class:'btn_cm  search','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'url'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_addTab',type:'button',class:'btn_cm','ev:onclick':'scwin.btn_addTab_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'New Tab'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'900',class:'w2tb tb',id:'',style:'width: 100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{minlength:'13',id:'ibx_code',applyFormat:'',ref:'data:dma_basic.CODE',maxlength:'13',style:'width:100%',mandatory:'true',displayFormat:'',allowChar:'',displayFormatter:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th re',tagname:'th',text:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'성명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ibx_name',ref:'data:dma_basic.NAME',style:'',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',tabIndex:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ibx_etc',ref:'data:dma_basic.ETC',style:'width:100%;',mandatory:'true',class:'fl'}}]}]}]}]}]}]}]}]})