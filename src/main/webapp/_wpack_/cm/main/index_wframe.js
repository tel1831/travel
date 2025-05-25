/*amd /cm/main/index_wframe.xml 4221 5934e146868d4debddc809fddcfd5acca9ffb386151e11af20487567cebf718a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model'},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'meta',A:{name:'viewport',content:'width=device-width, user-scalable=no'}},{T:1,N:'script',A:{src:'../../cm/js/main.js'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {

	// Mobile일때 메뉴 동작	
	if (WebSquare.util.isMobile()) {
		grp_wrap.removeClass("show_menu");

		$(".btn_toggle_menu").click(function () {
			grp_wrap.toggleClass("show_menu");
			$(".btn_toggle_menu").toggleClass("on");
			$(".dim").toggleClass("on");
		});
	} else {
		$(".btn_toggle_menu").click(function () {
			grp_wrap.toggleClass("show_menu");
			$(".btn_toggle_menu").toggleClass("on");
		});
	}

	// 검색영역 show/hide
	$(".btn_all_search").click(function () {
		$(".search_field").toggleClass("active");
	});

	// 탭 타이틀 on/off
	$(".tab_tit a").click(function () {
		$(this).parent().addClass("on").siblings().removeClass("on");
	});

	// 트리뷰 접기
	$(".btn_fold").click(function () {
		$(this).addClass("on");
		$(".btn_fold_list").removeClass("on");
	});

	// 트리뷰 펼치기
	$(".btn_fold_list").click(function () {
		$(this).addClass("on");
		$(".btn_fold").removeClass("on");
	});

	// 로그인 사용자 이름 클릭 시
	$(".btn_mypage").click(function () {
		$(".mypage .items").toggleClass("on");
	});

	scwin.initMainLoad();
};


}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.container:before{background:#fff}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_dimLayer',class:'dim'}},{T:1,N:'xf:group',A:{class:'wrap show_menu',id:'grp_wrap',style:''},E:[{T:1,N:'w2:wframe',A:{style:'',id:'wfm_header',class:'header',scope:'true',src:'../../cm/xml/header.xml'}},{T:1,N:'xf:group',A:{class:'container',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'contents'},E:[{T:1,N:'w2:wframe',A:{style:'height:100%',id:'wfm_layout',class:''}},{T:1,N:'xf:group',A:{id:'grpMsg',style:'position: absolute;bottom:40px;left:10px;min-width:calc( 98% - 20px );z-index: 9980;'},E:[{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_success',class:'msg_box success'},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'min-height:20px',id:'txt_success',label:'정상 처리 되었습니다.',class:'txt_msg'}}]},{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_info',class:'msg_box info'},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'txt_info',label:'정상 처리 되었습니다.',class:'txt_msg'}}]},{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_warning',class:'msg_box warning'},E:[{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'txt_warning',label:'처리 도중 오류가 발생하였습니다.',class:'txt_msg'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.removeWarnMsg',disabled:'',style:'',id:'btn_warnig',type:'button',class:'btn_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'테이블버튼'}]}]}]},{T:1,N:'xf:textarea',A:{style:'min-height: 100px;',id:'textarea_warning',placeholder:''}}]},{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_error',class:'msg_box error'},E:[{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'txt_error',label:'처리 도중 오류가 발생하였습니다.',class:'txt_msg'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.removeErrorMsg',disabled:'',style:'',id:'btn_error',type:'button',class:'btn_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'테이블버튼'}]}]}]},{T:1,N:'xf:textarea',A:{style:'min-height: 100px;',id:'textarea_error',placeholder:''}}]}]}]}]},{T:1,N:'w2:wframe',A:{style:'',id:'wfm_side',class:'side',scope:'true',src:'../../cm/xml/side.xml'}},{T:1,N:'w2:wframe',A:{style:'',id:'wfm_footer',scope:'true',src:'../../cm/xml/footer.xml'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'dim'}}]}]}]}]})