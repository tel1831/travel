/*amd /cm/project_udc/commonPopup.xml 9098 c2984041513f5b5456b4817d7aa2fff82c306b7ca8be64d054b6eda426f6d2d8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:publicInfo',A:{method:'scwin.alert,scwin.messagBox,scwin.confirm,scwin.openPopup,scwin.closePopup,scwin.isPopup'}},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	requires("uiplugin.popup");
		
   //팝업관련 변수 셋팅 start
   
   // 메세지 알림 콜백 Function 정보 저장
	scwin.CB_FUNCTION_MANAGER = {
		cbFuncIdx : 0, // 정보 저장 Index Key
		cbFuncSave : {}
	// 정보 저장 객체
	}
	
	scwin.MESSAGE_BOX_SEQ = 0;
   //팝업관련 변수 셋팅 end

	scwin.onpageload = function() {
        
	};




/////////////////////////////////////////////////
/////////////////////////////////////////////////
//		                                       //
//   Popup / Message(popup) project udc start  //
//		                                       //
/////////////////////////////////////////////////	
/////////////////////////////////////////////////	

/**
 * @method
 * @name alert
 * @description desc
 * @return 
 * @param <String>|_$p|desc
 * @param <String>|messageStr|desc
 * @param <String>|closeCallbackFncName|desc 
 * @hidden N
 * @exception 
 * @sample 
 */  
	scwin.alert = function( _$p, messageStr, closeCallbackFncName) {
		scwin.messagBox(_$p, "alert", messageStr, closeCallbackFncName);
	};


/**
 * @method
 * @name confirm
 * @description desc
 * @return 
 * @param <String>|_$p|desc
 * @param <String>|messageStr|desc
 * @param <String>|closeCallbackFncName|desc 
 * @hidden N
 * @exception 
 * @sample 
 */  
	scwin.confirm = function(_$p, messageStr, closeCallbackFncName) {
		scwin.messagBox(_$p, "confirm", messageStr, closeCallbackFncName);
	};

/**
 * @method
 * @name messagBox
 * @description desc
 * @return 
 * @param <String>|_$p|desc
 * @param <String>|messageType|desc
 * @param <String>|messageStr|desc
 * @param <String>|closeCallbackFncName|desc
 * @param <String>|isReturnValue|desc
 * @param <String>|title|desc 
 * @hidden N
 * @exception 
 * @sample 
 */  
	scwin.messagBox = function(_$p , messageType, messageStr, closeCallbackFncName, isReturnValue, title) {
		
		var messageStr = messageStr || "";
		var messageType = messageType || "alert";
		var defaultTitle = null;
		var popId = messageType || "Tmp";
		popId = popId + scwin.MESSAGE_BOX_SEQ++;
	
		if (messageType.toLowerCase() === "alert") {
			defaultTitle = "Alert";
		} else {
			defaultTitle = "Confirm";
		}
	
		if (typeof isReturnValue === "undefined") {
			isReturnValue = false;
		}
	
		var data = {
			"message" : messageStr,
			"callbackFn" : closeCallbackFncName,
			"isReturnValue" : isReturnValue,
			"messageType" : defaultTitle
		};
		
		var options = {
			id : popId,
			popupName : defaultTitle,
			title : title || defaultTitle,
			width : 380,
			height : 230
		};
		
		scwin.openPopup(_$p, "/cm/udc/messageBox.xml", options, data);
	};


/**
 * @method
 * @name openPopup
 * @description desc
 * @return 
 * @param <String>|_$p|desc
 * @param <String>|url|desc
 * @param <String>|opt|desc
 * @param <String>|data|desc 
 * @hidden N
 * @exception 
 * @sample 
 */  
	scwin.openPopup = function(_$p, url, opt, data) {
		
		scwin._openPopup(_$p, url, opt, data);
	};
	
 
	scwin._openPopup = function(_$p, url, opt, data) {
		
		var _dataObj = {
			type : "json",
			data : data,
			name : "param"
		};
		var width = opt.width || 500;
		var height = opt.height || 500;
		
		try {
			var deviceWidth = parseFloat($("body").css("width"));
			var deviceHeight = parseFloat($("body").css("height"));
	
			if (!opt.notMinSize) {
				var borderSize = 4;
				if(opt.type != "browserPopup"){
					borderSize = 4
					if (deviceWidth > 0 && width > deviceWidth) {
						width = deviceWidth - borderSize; // 팝업 border 고려
					}
	
					if (deviceHeight > 0 && height > deviceHeight) {
						height = deviceHeight - borderSize; // 팝업 border 고려
					}
	
				} else {
					if (window.screen.availHeight <= height) {
						height = window.screen.availHeight-100;
					}
				}
			}
		} catch (ex) {
			console.error(ex);
		}
	
		opt.type = opt.type || "wframePopup";

		if (opt.type == "browserPopup") {
			var top = Math.floor(((window.screen.availHeight- 50 - $c.num.parseInt(height)))/ 2) + (window.screen.availTop|| 0) + "px";
			var left = Math.floor((window.screen.availWidth - com.num.parseInt(width)) / 2) + (window.screen.availLeft || 0 ) + "px";
		} else {
			var top = ((document.body.offsetHeight / 2) - ($c.num.parseInt(height) / 2) + $(document).scrollTop()) + "px";
			var left = ((document.body.offsetWidth / 2) - ($c.num.parseInt(width) / 2) + $(document).scrollLeft()) + "px";
		}

	
		
	debugger;
		if (typeof _dataObj.data !== "undefined") {
			if (typeof _dataObj.data.callbackFn == "function") {
				var cbFuncIdx =scwin.CB_FUNCTION_MANAGER["cbFuncIdx"];
				var idx = "__close_callback_Func__" + new Date().getTime() + "_" + cbFuncIdx;
				scwin.CB_FUNCTION_MANAGER["cbFuncSave"][_$p.id + idx] = _dataObj.data.callbackFn;
				_dataObj.data.callbackFn = _$p.id + idx;
			} else if (typeof _dataObj.data.callbackFn === "undefined") {
				_dataObj.data.callbackFn = "";
			} else if (_dataObj.data.callbackFn.indexOf("gcm") !== 0) {
				_dataObj.data.callbackFn = $p.id + _dataObj.data.callbackFn;
			}
		}
		var paramUrl = "";
		if ((opt.type !== "wframePopup") && (com.util.isEmpty(_dataObj.data) === false)) {
			paramUrl = "&" + _dataObj.name + "=" + WebSquare.text.BASE64Encode(com.str.serialize(_dataObj.data)) ;
		}
		var options = {
			id : opt.id,
			popupName : opt.popupName || "",
			type : opt.type || "wframePopup",
			width : width + "px",
			height : height + "px",
			top : opt.top || top || "140px",
			left : opt.left || left || "500px",
			modal : (opt.modal == false) ? false : true,
			dataObject : _dataObj,
			alwaysOnTop : opt.alwaysOnTop || false,
			useModalStack : (opt.useModalStack == false) ? false : true,
			resizable : (opt.resizable == false) ? false : true,
			useMaximize : opt.useMaximize || false,
			className :opt.className || "",
			scrollbars : true,
			popupUrl : "popup"
		};
		_$p.openPopup( url + paramUrl, options);
	};




/**
 * @method
 * @name closePopup
 * @description desc
 * @return 
 * @param <String>|_$p|desc
 * @param <String>|callbackFnStr|desc
 * @param <String>|retObj|desc
 * @param <String>|callbackYn|desc
 * @param <String>|selectedIdx|desc 
 * @hidden N
 * @exception 
 * @sample 
 */  
	scwin.closePopup = function( _$p, callbackFnStr, retObj, callbackYn, selectedIdx) {
		scwin._closePopup(_$p, _$p.getPopupId(), callbackFnStr, $c.common.strSerialize(_$p, retObj)); // IFrame일 경우, 메모리릭을 없애기 위한 코딩. (부모/자식 간 페이지로 객체
		// 파라미터 전달 방식은 비권장. 문자열 전달 권장.)
	};
	
 
	scwin._closePopup = function( _$p, popId, callbackFnStr, retStr) {
		
		if ((typeof callbackFnStr !== "undefined") && (callbackFnStr !== "")) {
			var func;
			if (callbackFnStr.indexOf("__close_callback_Func__") > -1) {
				func = scwin.CB_FUNCTION_MANAGER["cbFuncSave"][callbackFnStr];
				delete scwin.CB_FUNCTION_MANAGER["cbFuncSave"][callbackFnStr];
			} else {
				func = window.WebSquare.util.getGlobalFunction(callbackFnStr);
			}
	
			if (scwin.isPopup( _$p )) {
				if (_$p.isWFramePopup()) {
					_$p.closePopup(popId);
					if (func) {
						func($c.util.getJSON(retStr));
					}
	
				} else {
					_$p.closePopup();
					var funcArr = callbackFnStr.split(".");
					if (opener[funcArr[0]] && typeof opener[funcArr[0]][funcArr[1]] == "function") {
						opener[funcArr[0]][funcArr[1]]
						func = opener[funcArr[0]][funcArr[1]];
						func($c.util.getJSON(retStr));
					}
				}
			} else {
				$w.closePopup(popId);
				if (func) {
					func($c.util.getJSON(retStr));
				}
			}
		} else {
			if (scwin.isPopup(_$p)) {
				if (_$p.isWFramePopup()) {
					_$p.closePopup(popId);
				} else {
					$w.closePopup();
				}
			} else {
				$p.closePopup(popId);
			}
		}
	};

	scwin.isPopup = function(_$p) {
		return _$p.isPopup();
	};
/////////////////////////////////////////////////
/////////////////////////////////////////////////
//		                                       //
//   Popup / Message(popup) project udc end  //
//		                                       //
/////////////////////////////////////////////////	
/////////////////////////////////////////////////	


 

	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'}}]}]})