/*amd /ui/BM/BM007M01.xml 30915 13031a5b567f47856f237caf1cac10b2a64f7354e43dda7199b8bfcb6656266f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_program',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:oncelldatachange':'','ev:onbeforerowpositionchange':'scwin.dlt_program_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'PROGRAM_CD',name:'프로그램코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROGRAM_NM',name:'프로그램명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROGRAM_GROUP_CD',name:'프로그램그룹명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SRC_PATH',name:'프로그램소스경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_USE',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'PROGRAM_GROUP_CD',name:'프로그램구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'PROGRAM',name:'프로그램',dataType:'text'}},{T:1,N:'w2:key',A:{id:'IS_USE',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_program'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'PROGRAM_CD',name:'프로그램코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_shortcutList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'SHORTCUT_SEQ',name:'단축키순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'PROGRAM_CD',name:'프로그램코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COMPLEX_KEY',name:'복합키',dataType:'text'}},{T:1,N:'w2:column',A:{id:'LAST_KEY',name:'지정키',dataType:'text'}},{T:1,N:'w2:column',A:{id:'OLD_COMPLEX_KEY',name:'복합키',dataType:'text'}},{T:1,N:'w2:column',A:{id:'OLD_LAST_KEY',name:'지정키',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EVENT_TYPE',name:'이벤트타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EVENT_DETAIL',name:'이벤트설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EVENT_YN',name:'이벤트사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EVENT_TARGET',name:'이벤트 설정값',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'},E:[{T:1,N:'w2:row'}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'dlt_shortcutList',id:'ldt_shortcutList'},E:[{T:1,N:'w2:condition',A:{type:'filter'}},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_shortcut'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'PROGRAM_CD',name:'프로그램명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchProgram',ref:'data:json,dma_search',target:'data:json,dlt_program',action:'/program/searchProgram',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchProgram_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_selectShortcutList',ref:'data:json,dma_shortcut',target:'data:json,dlt_shortcutList',action:'/main/selectShortcutList',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.selectShortcutCallback','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * 초기 스크립트 수행 함수 정의
 * sbm_ProgramSearchItem은 검색박스에 검색어들을 나열한다.
 */
scwin.onpageload = function () {
	var codeOptions = [{ code: "00026", compID: "sbx_programGroup, grd_program:PROGRAM_GROUP_CD" }];
	com.data.setCommonCode(codeOptions);
	com.win.setEnterKeyEvent(tbl_search, scwin.btn_search_onclick);
	com.util.setGridViewDelCheckBox(grd_shortcutList);
	com.data.setChangeCheckedDc(dlt_shortcutList);
};

/**
 * 화면 초기화 데이터가 모두 로딩되면 발생하는 이벤트
 */
scwin.ondataload = function () {
	scwin.btn_search_onclick();
};

/**
 * 프로그램 조회 버튼시 발생하며, 조건에 따른 프로그램 목록을 조회한다.
 */
scwin.btn_search_onclick = function () {
	dma_search.set("PROGRAM_GROUP_CD", sbx_programGroup.getValue());
	dma_search.set("PROGRAM", ibx_program.getValue());

	if (com.data.isModified(dlt_shortcutList)) {
		com.win.confirm(com.data.getMessage("MSG_CM_00049"),
			function (res) {
				if (res.clickValue === true) {
					com.data.undoAll(dlt_shortcutList);
					com.sbm.execute(sbm_searchProgram);
				}
			}
		);
	} else {
		com.sbm.execute(sbm_searchProgram);
	}
};

/**
 * 프로그램 조회 버튼 콜백 메소드
 */
scwin.sbm_searchProgram_submitdone = function (e) {
	if (com.sbm.getResultCode(e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
		spn_programCnt.setValue(grd_program.getTotalRow());
		dlt_shortcutList.removeAll();
		grd_program.setFocusedCell(0, "PROGRAM_NM");
	}
};

/**
 * 프로그램관리 리스트의 row 인덱스 위치가 바뀔때 마다 실행되며 프로그램코드에 해당하는 단축키 설정 목록을 가져온다.
 */
scwin.dlt_program_onbeforerowpositionchange = function (info) {
	return scwin.searchShortCutByProgram(info.newRowIndex);
};

scwin.searchShortCutByProgram = function (rowIndex) {
	if (com.util.isEmpty(rowIndex)) {
		rowIndex = grd_program.getFocusedRowIndex();
	}

	scwin.programCd = dlt_program.getCellData(rowIndex, "PROGRAM_CD");
	dma_program.set("PROGRAM_CD", scwin.programCd);

	if (com.data.isModified(dlt_shortcutList)) {
		com.win.confirm(com.data.getMessage("MSG_CM_00037"),
			function (res) {
				if (res.clickValue) {
					scwin.saveShortcut();
				}
			}
		);
		return false;
	} else {
		dlt_shortcutList.removeAll();
		scwin.resetShortcutGrd(scwin.programCd);
	}
}

scwin.selectShortcutCallback = function (e) {
	if (com.sbm.getResultCode(e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
		var shortcutArr = [];
		var shortcutOptArr = [];
		var shortCutList = e.responseJSON.dlt_shortcutList || [];
		if (shortCutList) {
			var shortcutListArr = [];
			for (var i = 0; i < shortCutList.length; i++) {
				var shortcutObj = shortCutList[i];
				var shortcutData = {
					"SHORTCUT_SEQ": shortcutObj["SHORTCUT_SEQ"],
					"PROGRAM_CD": shortcutObj["PROGRAM_CD"],
					"OLD_COMPLEX_KEY": shortcutObj["COMPLEX_KEY"],
					"COMPLEX_KEY": shortcutObj["COMPLEX_KEY"],
					"OLD_LAST_KEY": shortcutObj["LAST_KEY"],
					"LAST_KEY": shortcutObj["LAST_KEY"],
					"EVENT_TYPE": shortcutObj["EVENT_TYPE"],
					"EVENT_DETAIL": shortcutObj["EVENT_DETAIL"],
					"EVENT_YN": shortcutObj["EVENT_YN"],
					"EVENT_TARGET": shortcutObj["EVENT_TARGET"]
				};
				shortcutListArr.push(shortcutData);
			}
			dlt_shortcutList.setJSON(shortcutListArr, false);
			spn_shortcutCnt.setValue(dlt_shortcutList.getTotalRow());
		}

	}
};

scwin.resetShortcutGrd = function (programCd) {
	dma_shortcut.set("PROGRAM_CD", programCd);
	com.sbm.execute(sbm_selectShortcutList);
};

/**
 * 단축키 설정.
 */
scwin.saveShortcut = function () {
	var modifiedList = dlt_shortcutList.getModifiedJSON();
};

/**
 * 프로그램별 접근 프로그램 리스트 콜백 메소드
 * 건수 조회, ReadOnly 그리드뷰 컬럼색 변경. ReadOnly속성을 설정한다. 
 */
scwin.sbm_searchProgramAuthority_submitdone = function (e) {
	if (com.sbm.getResultCode(e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
		spn_programAuthorityCnt.setValue(grd_programAuthority.getTotalRow());
	}
};

/**
 * 프로그램관리의 프로그램 입력, 수정, 삭제  
 */
scwin.btn_save_onclick = function () {
	var modifiedShortcutList = dlt_shortcutList.getModifiedIndex();

	if (modifiedShortcutList.length > 0) {
		var valInfo = [{ id: "COMPLEX_KEY", mandatory: true },
		{ id: "LAST_KEY", mandatory: true },
		{ id: "EVENT_TYPE", mandatory: true },
		{ id: "EVENT_TARGET", mandatory: true }];
		if (com.data.validateGridView(grd_shortcutList, valInfo) == false) {
			return;
		}

		com.win.confirm(com.data.getMessage("MSG_CM_00038"), function (res) {
			if (res.clickValue === true) {
				var modifiedList = dlt_shortcutList.getModifiedJSON();
				for (var i = 0; i < modifiedList.length; i++) {
					var options = {
						"SHORTCUT_SEQ": modifiedList[i].SHORTCUT_SEQ,
						"PROGRAM_CD": modifiedList[i].PROGRAM_CD,
						"COMPLEX_KEY": modifiedList[i].COMPLEX_KEY,
						"LAST_KEY": modifiedList[i].LAST_KEY,
						"EVENT_TARGET": modifiedList[i].EVENT_TARGET,
						"EVENT_DETAIL": modifiedList[i].EVENT_DETAIL,
						"EVENT_TYPE": modifiedList[i].EVENT_TYPE,
						"EVENT_NAME": modifiedList[i].EVENT_TARGET,
						"EVENT_YN": modifiedList[i].EVENT_YN
					};

					if (modifiedList[i].rowStatus == "D") {
						//단축키 삭제.
						var removeShortcutKey = modifiedList[i].OLD_COMPLEX_KEY + "+" + modifiedList[i].OLD_LAST_KEY;

						if (removeShortcutKey != "+") {
							scwin.removeShortcut(removeShortcutKey, options);
						}
					} else if (modifiedList[i].rowStatus == "C") {
						//단축키 추가.
						var addShortcutKey = modifiedList[i].COMPLEX_KEY + "+" + modifiedList[i].LAST_KEY;

						if (addShortcutKey != "+") {
							scwin.setShortcut(addShortcutKey, options);
						}
					} else if (modifiedList[i].rowStatus == "U") {
						//단축키 변경.
						var oldShortcut_key = modifiedList[i].OLD_COMPLEX_KEY + "+" + modifiedList[i].OLD_LAST_KEY;
						var newShortcut_key = modifiedList[i].COMPLEX_KEY + "+" + modifiedList[i].LAST_KEY;

						if (addShortcutKey != "+") {
							scwin.setShortcut(newShortcut_key, options, oldShortcut_key);
						}
					}
				}
			}
			dlt_shortcutList.removeRows(dlt_shortcutList.getDeletedIndex());
			dlt_shortcutList.reform();
		});
	} else {
		com.win.alert(com.data.getMessage("MSG_CM_00032"));
	}
};

/**
 * 단축키 추가 버튼
 */
scwin.btn_addShortcut_onclick = function () {
	var idx = com.data.insertRow(grd_shortcutList);
	dlt_shortcutList.setCellData(idx, "PROGRAM_CD", scwin.programCd);
	dlt_shortcutList.setCellData(idx, "EVENT_YN", "Y");
	grd_shortcutList.setFocusedCell(idx, "COMPLEX_KEY", true);
};

/**
 * 단축키 설정 데이터 변경시 이벤트처리
 */
scwin.grd_shortcutList_onviewchange = function (info) {
	var isFilterData = [];
	var colId = this.getColumnID(info.colIndex);
	if (colId == "COMPLEX_KEY") {
		var lastKey = dlt_shortcutList.getCellData(info.rowIndex, "LAST_KEY");
		isFilterData = com.data.getMatchedJSON("ldt_shortcutList", [
			{ columnId: "COMPLEX_KEY", operator: "==", value: info.newValue, logical: "&&" },
			{ columnId: "LAST_KEY", operator: "==", value: lastKey, logical: "&&" }
		]);
	} else if (colId == "LAST_KEY") {
		var complexKey = dlt_shortcutList.getCellData(info.rowIndex, "COMPLEX_KEY");
		isFilterData = com.data.getMatchedJSON("ldt_shortcutList", [
			{ columnId: "COMPLEX_KEY", operator: "==", value: complexKey, logical: "&&" },
			{ columnId: "LAST_KEY", operator: "==", value: info.newValue, logical: "&&" }
		]);
	}

	if (isFilterData.length > 1) {
		scwin._resetInfo = {
			row: info.rowIndex,
			col: info.colIndex,
			oldValue: info.oldValue
		};
		com.win.alert(com.data.getMessage("MSG_CM_00039"), function () {
			gcm.hkey.setEventPause(dlt_shortcutList, true);
			var columnId = grd_shortcutList.getColumnID(scwin._resetInfo["col"]);
			dlt_shortcutList.setCellData(scwin._resetInfo["row"], columnId, scwin._resetInfo["oldValue"]);
			dlt_shortcutList.removeColumnFilterAll();
			gcm.hkey.setEventPause(dlt_shortcutList, false);
		});
	}
};

/**
 * 단축키 설정 변경 데이터 취소
 */
scwin.btn_cancelShortcut_onclick = function () {
	com.data.undoGridView(grd_shortcutList);
};

/**
 * 사용자 지정 단축키를 설정한다.
 *
 * @param {String} shortCutKey 단축키 지정 키 값. [필수. 단, 브라우저 자체 단축키는 사용금지]
 * @param {Object} shortCutOpt 단축키 설정 옵션
 * @param {String} [shortCutOpt.targetPgCd] targetPgCd   : 단축키 실행 프레임 범위 [true : 현재 활성화 프레임, false : 활성화프레임 + 메인프레임]
 * @param {String} [shortCutOpt.onlySelf] onlySelf   	: 단축키 실행 프레임 범위 [true : 현재 활성화 프레임, false : 활성화프레임 + 메인프레임]
 * @param {String} [shortCutOpt.eventTarget] eventTarget	: 단축키 실행 컴포넌트ID 혹은 함수명
 * @param {String} [shortCutOpt.eventType] eventType		: 단축키 실행 타입 [default:B(BUTTON : 버튼클릭), F(FUNCTION : 함수실행)]
 * @param {String} [shortCutOpt.eventName] eventName		: 단축키 설정 함수명 혹은 컴포넌트 ID [default: 미지정시 내부에서 표현]
 * @param {String} [shortCutOpt.eventDetail] eventDetail	: 단축키 정보 및 상세사항.
 * @param {String} [shortCutOpt.eventYn] eventYn			: 단축키 실행 여부.
 * @param {String} oldshortCutKey 이전 단축키 지정 키 값 (단축키를 업데이트하는 경우라
 * @return {Boolean} 단축키 설정 결과 값.
 */
scwin.setShortcut = function (shortCutKey, shortCutOpt, oldshortCutKey) {
	var successFlag = false;
	if (typeof oldshortCutKey !== "undefined") {
		gcm.hkey.event.delEvent(oldshortCutKey, shortCutOpt);
	}

	if (typeof shortCutKey == "string") {
		// 단건 단축키 등록.
		successFlag = _setShortcut(shortCutKey, shortCutOpt);
	} else if (typeof shortCutKey == "object") {
		// 다건 단축키 등록.
		if (shortCutKey.length == shortCutOpt.length) {
			for (var i = 0; i < shortCutKey.length; i++) {
				successFlag = _setShortcut(shortCutKey[i], shortCutOpt[i]);
			}
		}
	}

	if (successFlag) {
		var setData = [];
		var shortCutSeq = 0;
		var rowSataus = "R";

		if (typeof oldshortCutKey !== "undefined") {
			rowSataus = "U";
			shortCutSeq = shortCutOpt["SHORTCUT_SEQ"];
		} else {
			rowSataus = "C";
		}

		setData.push({
			"SHORTCUT_SEQ": shortCutSeq,
			"PROGRAM_CD": shortCutOpt["PROGRAM_CD"],
			"COMPLEX_KEY": shortCutOpt["COMPLEX_KEY"],
			"LAST_KEY": shortCutOpt["LAST_KEY"],
			"EVENT_TYPE": shortCutOpt["EVENT_TYPE"],
			"EVENT_TARGET": shortCutOpt["EVENT_TARGET"],
			"EVENT_DETAIL": shortCutOpt["EVENT_DETAIL"],
			"EVENT_YN": shortCutOpt["EVENT_YN"],
			"EVENT_NAME": shortCutOpt["EVENT_NAME"],
			"rowStatus": rowSataus
		});

		if (setData.length > 0) {
			var searchCodeGrpOption = {
				id: "sbm_shortcutGrp",
				action: "/main/updateShortcutList",
				target: "",
				submitDoneHandler: function (e) {
					scwin.searchShortCutByProgram();
				},
				isProcessMsg: false
			};
			com.sbm.executeDynamic(searchCodeGrpOption, {
				"dlt_updataShortcutList": setData
			});
		}
	}

	gcm.hkey.dataList.reform();

	function _setShortcut(shortCutKey, shortCutOpt) {
		var obj = {
			"shortCutKey": shortCutKey, // 단축키 설정 값.
			"PROGRAM_CD": shortCutOpt["PROGRAM_CD"] || "", // 단축키 실행 프로그램 ID.
			"onlySelf": shortCutOpt.onlySelf || "N", // 단축키 실행 프레임 범위 [true : 현재 활성화 프레임, false : 활성화프레임 + 메인프레임]
			"EVENT_TARGET": shortCutOpt["EVENT_TARGET"] || "", // 단축키 실행 타겟 (버튼 ID 혹은 함수명).
			"EVENT_TYPE": shortCutOpt["EVENT_TYPE"] || "B", // 단축키 이벤트 타입 [default: B (버튼클릭), F (함수실행)]
			"EVENT_NAME": shortCutOpt["EVENT_NAME"] || "", // 단축키 이벤트 명
			"EVENT_DETAIL": shortCutOpt["EVENT_DETAIL"] || "", // 단축키 이벤트 상세 설명
			"EVENT_YN": shortCutOpt["EVENT_YN"] || "Y" // 단축키 이벤트 사용 여부.
		};

		try {
			var layout = $p.main().scwin.getLayoutId();
			if (obj["PROGRAM_CD"] == "") {
				// 프로그램 코드가 없는경우 현재 활성화된 프로그램 코드를 기준으로 설정.
				var viewFrameId = $p.getFrameId();
				var loadingUrl = $p.getComponentById(viewFrameId).getSrc();
				var findMenuList = gcm.menuComp.getMatchedJSON("SRC_PATH", loadingUrl, true);
				if (findMenuList.length > 0) {
					obj["PROGRAM_CD"] = findMenuList[0]["PROGRAM_CD"]; // 단축키 설정 프로그램 코드.
				}
			}

			if (obj["PROGRAM_CD"] != "" && obj["EVENT_TARGET"] != "") {
				// 단축키 저정 프로그램 코드와 이벤트 설정 존재할 경우만 추가.
				successFlag = gcm.hkey.event.addEvent(obj);
			}
		} catch (e) {

		}
		return successFlag;
	}
};

/**
 * 사용자 지정 단축키를 삭제한다.
 * 
 * @param {String} shortCutKey 단축키 삭제 키 값. [필수. 단, 브라우저 자체 단축키는 사용금지]
 * @param {Object} shortCutOpt 단축키 설정 옵션
 * @param {String} [shortCutOpt.targetPgCd] targetPgCd : 단축키 실행 프레임 범위 [true : 현재 활성화 프레임, false : 활성화프레임 + 메인프레임]
 */
scwin.removeShortcut = function (shortCutKey, options) {
	if (options.targetPgCd == "") {
		var viewFrameId = $p.getFrameId();
		var loadingUrl = $p.getComponentById(viewFrameId).getSrc();
		var findMenuList = gcm.menuComp.getMatchedJSON("SRC_PATH", loadingUrl, true);
		if (findMenuList.length > 0) {
			options.targetPg = findMenuList[0]["PROGRAM_CD"]; // 단축키 설정 프로그램 코드.
		}
	}
	successFlag = gcm.hkey.event.delEvent(shortCutKey, options);

	if (successFlag) {
		var setData = [];
		var token = gcm.hkey.event._keyToken(shortCutKey.toUpperCase());
		setData.push({
			"SHORTCUT_SEQ": options["SHORTCUT_SEQ"],
			"PROGRAM_CD": options["PROGRAM_CD"],
			"COMPLEX_KEY": token["COMPLEX_KEY"],
			"LAST_KEY": token["LAST_KEY"],
			"EVENT_TYPE": options["EVENT_TYPE"],
			"EVENT_TARGET": options["EVENT_TARGET"],
			"EVENT_DETAIL": options["EVENT_DETAIL"],
			"EVENT_YN": options["EVENT_YN"],
			"EVENT_NAME": options["EVENT_NAME"],
			"rowStatus": "D"
		});

		if (setData.length > 0) {
			var searchCodeGrpOption = {
				id: "sbm_shortcutGrp",
				action: "/main/updateShortcutList",
				target: "",
				submitDoneHandler: function (e) {
					scwin.searchShortCutByProgram();
				},
				isProcessMsg: false
			};
			com.sbm.executeDynamic(searchCodeGrpOption, {
				"dlt_updataShortcutList": setData
			});
		}
	}
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_gvw',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'../../cm/xml/contentHeader.xml'}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox_inner',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'900',class:'w2tb tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:200px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'프로그램그룹',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{ref:'',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width:100%;',allOption:'true',id:'sbx_programGroup',renderType:'',class:'',direction:'auto',labelWidthAuto:'',chooseOptionLabel:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메뉴명'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'프로그램',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ibx_program',placeholder:'',style:'width:100%;',nextTabID:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'',ref:'data:dma_search.IS_USE',renderType:'radiogroup',rows:'',selectedIndex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'},E:[{T:1,N:'w2:textbox',A:{label:'프로그램',style:'',id:'',class:'',tagname:'h3'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'fr mt10'},E:[{T:1,N:'w2:textbox',A:{class:'sum',id:'spn_programCnt',label:'',style:'',ref:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox wq_flx',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{adaptive:'',autoFit:'allColumn',class:'wq_gvw',dataList:'data:dlt_program',enterKeyMove:'','ev:onafteredit':'','ev:oncellclick':'','ev:oneditkeyup':'','ev:onkeyup':'','ev:ontextimageclick':'','ev:onviewchange':'',fixedColumnWithHidden:'true',id:'grd_program',ignoreCellClick:'false',rowNumVisible:'',rowStatusHeaderValue:'상태',rowStatusVisible:'false',rowStatusWidth:'',scrollByColumn:'false',style:'height:243px;',useShiftKey:'true',wheelRows:'',userData3:'',tooltipFormatter:'',rowStatusLocaleRef:'',autoFitMinWidth:'800',checkDisabledOnCut:'',defaultCellHeight:'26',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'column6',value:'프로그램그룹',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'column5',value:'프로그램코드',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'column4',value:'프로그램명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',style:'',id:'column3',value:'프로그램소스경로',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'column2',value:'사용여부',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'column1',value:'비고',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'PROGRAM_GROUP_CD',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'PROGRAM_CD',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'PROGRAM_NM',value:'',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',style:'',id:'SRC_PATH',value:'',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'IS_USE',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'NOTE',value:'',blockSelect:'false',displayMode:'label',textAlign:'left'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'단축키 설정',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'sum',id:'spn_shortcutCnt',label:'',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm row_add',id:'btn_addShortcut',style:'',type:'button','ev:onclick':'scwin.btn_addShortcut_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancelShortcut',style:'',type:'button','ev:onclick':'scwin.btn_cancelShortcut_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox wq_flx',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{adaptive:'',autoFit:'allColumn',class:'wq_gvw',dataList:'data:dlt_shortcutList',enterKeyMove:'','ev:onafteredit':'','ev:oncellclick':'','ev:oneditkeyup':'','ev:onkeyup':'','ev:onrowindexchange':'','ev:ontextimageclick':'','ev:onviewchange':'scwin.grd_shortcutList_onviewchange',fixedColumnWithHidden:'true',id:'grd_shortcutList',ignoreCellClick:'false',rowNumVisible:'',rowStatusHeaderValue:'상태',rowStatusLocaleRef:'',rowStatusVisible:'true',rowStatusWidth:'',scrollByColumn:'false',style:'height:200px;',tooltipFormatter:'',useShiftKey:'true',userData3:'',wheelRows:'',autoFitMinWidth:'800',keepDefaultColumnWidth:'true',defaultCellHeight:'26'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'checkbox',style:'height:22px;',id:'chk',value:'선택',blockSelect:'false',displayMode:'label',rowSpan:'2',fixColumnWidth:'true',chooseOptionLabel:'',checkboxLabel:'0'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'103',inputType:'text',style:'height:22px;',id:'column22',value:'단축키',blockSelect:'false',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'height:45px;',id:'column31',value:'이벤트 타입',blockSelect:'false',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'145',inputType:'text',style:'height:22px;',id:'column19',value:'이벤트 설정',blockSelect:'false',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',style:'height:22px;',id:'column18',value:'이벤트 사용여부',blockSelect:'false',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'185',inputType:'text',style:'height:22px;',id:'column17',value:'이벤트 설명',blockSelect:'false',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'103',inputType:'text',style:'height:22px;',id:'column6',value:'복합키',blockSelect:'false',displayMode:'label',checkboxLabel:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',style:'height:22px;',id:'column5',value:'지정키',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{id:'chk',inputType:'checkbox',width:'40',checkboxLabel:'0',style:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'83',inputType:'select',style:'',id:'COMPLEX_KEY',value:'',blockSelect:'false',displayMode:'label',chooseOption:'true',chooseOptionLabel:'-선택-',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ALT +'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'altKey'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SHIFT +'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'shiftKey'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CTRL +'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ctrlKey'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ALT + SHIFT +'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'altShiftKey'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CTRL + ALT +'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ctrlAltKey'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CTRL + SHIFT +'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ctrlShiftKey'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SINGLE'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'singleKey'}]}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',style:'',id:'LAST_KEY',value:'',blockSelect:'false',displayMode:'label',textAlign:'center',maxLength:'3',allowChar:'0-9,A-Z'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'select',style:'',id:'EVENT_TYPE',value:'',blockSelect:'false',displayMode:'label',chooseOption:'true',chooseOptionLabel:'-선택-',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'버튼클릭'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'함수실행'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'145',inputType:'text',style:'',id:'EVENT_TARGET',value:'',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'checkbox',style:'',id:'EVENT_YN',value:'',blockSelect:'false',displayMode:'label',checkboxLabel:'0',falseValue:'N',valueType:'other',trueValue:'Y',defaultValue:'Y'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'185',inputType:'text',style:'',id:'EVENT_DETAIL',value:'',blockSelect:'false',displayMode:'label',textAlign:'left'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]})