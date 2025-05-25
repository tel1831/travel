/*amd /ui/SP/Promise/messageBox2.xml 3150 b199a4279f549193530cca1511d120859660ced76a98592fb9c01a2bc051e231 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8',standalone:'no'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

scwin.onpageload = function () {
	try {
		var message = com.data.getParameter("message") || "메시지 없음";
		console.log(message);
	} catch (ex) {
		console.error(ex);
	}
};

scwin.btn_confirm_onclick = function (e) {
	try {
		com.win.closePopup({ paramData: "H00001" });
	} catch (ex) {
		console.error(ex);
	}
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents'},E:[{T:1,N:'xf:group',A:{id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width:100%;',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'이름'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'}},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'나이'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'연락처'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'}},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'성별'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'주소'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'}},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'점수'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_confirm',style:'',type:'button','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]}]}]}]}]}]}]})