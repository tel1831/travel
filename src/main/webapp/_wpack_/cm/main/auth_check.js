/*amd /cm/main/auth_check.xml 2490 65bff2aae10c8b771de22b94e5df5cc4d81bf1320b4ee4add28416372a34e8fc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

scwin.img_Home_onclick = function (e) {
	com.win.goHome();
};

scwin.img_Logout_onclick = function (e) {
	com.win.logout();
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'contentWrap'},E:[{T:1,N:'xf:group',A:{id:'',style:'width:100%;',class:'mt10 mb10',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:50.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50.00%',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'text-align: center;',class:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]}]},{T:1,N:'xf:image',A:{id:'img_Noauth',style:'height:250px;',src:'../../cm/images/authCheck/noAuth.png'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'table',id:'',style:'width:100%;',class:' mt15'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:50.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50.00%',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'text-align: center;',class:'',tagname:'td'},E:[{T:1,N:'w2:span',A:{label:'Main 화면으로 이동',id:'',style:'font-weight: bold;',class:'mb10'}},{T:1,N:'br'},{T:1,N:'xf:image',A:{id:'img_Home',style:'height:120px;',src:'../../cm/images/authCheck/home.png','ev:onclick':'scwin.img_Home_onclick'}}]},{T:1,N:'xf:group',A:{style:'text-align: center;',class:'',tagname:'td'},E:[{T:1,N:'w2:span',A:{label:'로그인 화면으로 이동',id:'',style:'font-weight: bold;',class:'mb10'}},{T:1,N:'br'},{T:1,N:'xf:image',A:{id:'img_Logout',style:'height:120px;',src:'../../cm/images/authCheck/logout.png','ev:onclick':'scwin.img_Logout_onclick'}}]}]}]}]}]}]}]})