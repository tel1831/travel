/*amd /ui/HM/HM003P01.xml 2926 9b8dab4861657aa4bac875a1a7607d27288ba6dd484d98d52c065769bdbad7df */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화면 초기화에 필요한 로직을 수행한다.
 */
scwin.onpageload = function () {
	var param = com.data.getParameter();
	scwin.closeCallbackFncName = param.callbackFn;
};

/**
 * 사진 업로드를 반환한다.
 */
scwin.btn_confirm_onclick = function () {
	upd_image.setSubDir('HM003');
	upd_image.submit();
};

scwin.upd_image_ondone = function (retXml) {
	var param = {
		fileStorePath: upd_image.getSubDir(),
		localfileList: WebSquare.xml.getValue(retXml, "ret/localfileList"),
		storedFileList: WebSquare.xml.getValue(retXml, "ret/storedFileList")
	};
	com.win.closePopup(param);
};

/**
 * 사진 업로드를 취소한다.
 */
scwin.btn_cancel_onclick = function () {
	com.win.closePopup();
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'1024',tagname:'table',style:'',tabIndex:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사진업로드'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:upload',A:{imageStyle:'position:absolute;vertical-align:middle;word-wrap:break-word',inputStyle:'vertical-align:middle;word-wrap:break-word',style:'width: 100%;',id:'upd_image',type:'image','ev:ondone':'scwin.upd_image_ondone',action:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_confirm',style:'',type:'button','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:ondblclick':'','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]})