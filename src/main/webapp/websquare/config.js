export default {
  "WebSquare": {
    "dataPrefix": {
      "@value": "true"
    },
    "paddingDisplay": {
      "@value": "false"
    },
    "convertPageXML": {
      "@value": "true"
    },
    "wpack": {
      "@use": "true",
      "contextRoot": {
        "@value": "/"
      },
      "srcExtension": {
        "@value": "xml"
      },
      "destExtension": {
        "@value": "js"
      },
      "destRoot": {
        "@value": "_wpack_"
      },
      "babelDestRoot": {
        "@value": "_wpackbabel_"
      },
      "loadingMode": {
        "@value": "auto"
      },
      "common": {
        "@name": "com",
        "@value": "true"
      },
      "commonPath": {
        "path": [
          {
            "@src": "/cm/js/commonGlobal.js"
          },
          {
            "@src": "/cm/js/commonScope.js"
          },
          {
            "@src": "/cm/js/main.js"
          }
        ]
      }
    },
    "allValue": {
      "@value": "all"
    },
    "docType": {
      "@value": "standard"
    },
    "debug": {
      "@errorConsole": "true",
      "@remoteConsole": "false",
      "@value": "true"
    },
    "debugKey": {
      "@value": ""
    },
    "language": {
      "@value": "ko"
    },
    "useItemLocale": {
      "@value": "false"
    },
    "date": {
      "serverDate": {
        "@autoupdateinterval": "3600",
        "@enable": "true"
      }
    },
    "deprecated": {
      "sync": {
        "@value": ""
      }
    },
    "exceptionHandler": {
      "@value": "websquare"
    },
    "debugMenu": {
      "@value": "use"
    },
    "welcome-file": {},
    "postDrawMode": {
      "@value": "synchronous"
    },
    "forcedValueSetting": {
      "@value": "true"
    },
    "processMsgHeight": {
      "@value": "81"
    },
    "processMsgWidth": {
      "@value": "295"
    },
    "processMsgType": {
      "@value": "wframe"
    },
    "processMsgFrameURL": {
      "@value": "/cm/xml/processMsg.xml"
    },
    "processMsgBackground": {
      "@backgroundColor": "#112233",
      "@value": "true"
    },
    "byteCheckEncoding": {
      "@value": "euc-kr"
    },
    "executeScript": {
      "@value": "script"
    },
    "initScript": {
      "#cdata": function() { 
        if (movePage.indexOf("/cm/main/login.xml") === -1) {
       		gcm.hkey.init($p);
	        com.hkey.setShortKey($p, $p.main());
	        com.win.setLangCode($p, com.win.getLanguage($p));
	        gcm.win.setHistoryBackEvent();
	        gcm.data.createHolidayDataList($p);        
	        gcm.data.loadHoliday($p);
        } 
        },
      "@value": "true"
    },
    "postScript": {
      "@value": "false"
    },
    "wframe": {
      "mode": {
        "@value": "async"
      },
      "scope": {
        "@value": "true"
      },
      "popupAutoClose": {
        "@value": "true"
      }
    },
    "clearMemory": {
      "@value": "false"
    },
    "stylesheet": {
      "@earlyImportList": "/cm/css/base.css,/cm/css/contents.css",
      "@enable": "true",
      "@import": "link",
      "@value": "stylesheet_ext.css"
    },
    "mediaInfo": {
      "media": [
        {
          "@maxWidth": "",
          "@minWidth": "1025",
          "@name": "desktop"
        },
        {
          "@maxWidth": "1024",
          "@minWidth": "768",
          "@name": "tablet"
        },
        {
          "@maxWidth": "767",
          "@minWidth": "320",
          "@name": "mobile"
        }
      ]
    },
    "style": {
      "removeDefaultClass": {
        "@value": "true"
      }
    },
    "engine": {
      "module": [
        {
          "@src": "/cm/js/commonGlobal.js"
        },
        {
          "@src": "/cm/js/commonScope.js"
        }
      ]
    },
    "ModelUtil": {
      "copyChildrenNodes": {
        "@refresh": "false"
      }
    },
    "preProcessor": {
      "systemPreProcessor": {
        "@value": ""
      },
      "businessPreProcessor": {
        "@value": ""
      }
    },
    "workflow": {
      "processMsg": {
        "@value": ""
      },
      "makeGlobalObject": {
        "@value": "true"
      }
    },
    "submission": {
      "processMsg": {
        "@value": ""
      },
      "showSubmissionTime": {
        "@value": "true"
      },
      "preSubmitFunction": {
        "@value": "gcm.sbm.preSubmitFunction"
      },
      "callbackSubmitFunction": {
        "@value": "gcm.sbm.callbackSubmitFunction"
      },
      "requestID": {
        "@value": ""
      },
      "makeGlobalObject": {
        "@value": "true"
      },
      "submitErrorHandler": {
        "@value": "gcm.sbm.submitErrorHandler"
      }
    },
    "visibleHelper": {
      "targetHandler": {
        "@value": ""
      }
    },
    "spa": {
      "onpageunload": {
        "@value": ""
      },
      "variable": {
        "@value": "scwin"
      },
      "scriptCache": {
        "@value": "true"
      },
      "autoReload": {
        "@count": "50",
        "@value": "true"
      }
    },
    "scriptLoading": {
      "@merge": "true"
    },
    "scriptPrecedence": {
      "@value": "true"
    },
    "strictMode": {
      "@id": "mf",
      "@value": "true"
    },
    "engineCache": {
      "@compression": "true",
      "@enable": "true",
      "@postfix": "month"
    },
    "userAgentPattern": {
      "@XPathParser": "Edge|Trident|MSIE"
    },
    "preserveWhiteSpace": {
      "@value": "false"
    },
    "environment": {
      "@cache": "nocache",
      "@mode": "production",
      "@postfix": "day"
    },
    "script": {
      "@postfix": "environment"
    },
    "emptyTag": {
      "@value": "area,base,basefont,br,col,frame,hr,img,input,link,meta,param"
    },
    "engineLoadingMode": {
      "@android": "0",
      "@chrome": "0",
      "@ie": "0",
      "@iphone": "0",
      "@moz": "0",
      "@opera": "0",
      "@safari": "0"
    },
    "engineChunkNum": {
      "@value": "1"
    },
    "dataList": {
      "removeDummyRowStatus": {
        "@value": "true"
      },
      "removedDataMatch": {
        "@value": "true"
      },
      "saveRemovedDataDeletedInsertedRow": {
        "@value": "false"
      }
    },
    "grid": {
      "contentCellClick": {
        "@value": "true"
      },
      "noSelect": {
        "@value": "true"
      },
      "rowNumStatusUniqueId": {
        "@value": "true"
      },
      "drilldownRealRowIndexAll": {
        "@value": "true"
      },
      "collectGarbage": {
        "@value": "none"
      },
      "fastScroll": {
        "@value": "true"
      },
      "dataType": {
        "date": {
          "@displayFormat": "yyyy-MM-dd"
        }
      },
      "editType": {
        "@value": "focus"
      },
      "rowNumBackgroundColor": {
        "@value": "#e5eff7"
      },
      "rowNumRowMouseOverColor": {
        "@value": "true"
      },
      "selectedRowColor": {
        "@value": "#fcf8e3"
      },
      "oddEvenColorDisplay": {
        "@value": "true"
      },
      "evenRowBackgroundColor": {
        "@value": "#f5f5f5"
      },
      "oddRowBackgroundColor": {
        "@value": "#ffffff"
      },
      "rowMouseOver": {
        "@value": "true"
      },
      "rowMouseOverColor": {
        "@value": "#edf3fb"
      },
      "tooltipStyle": {
        "@value": "padding:1px 3px 0;line-height:14px;font-size:12px;border:0;background-color:#5c85d4;color:#fff"
      },
      "noResultMessageVisible": {
        "@value": "true"
      },
      "noResultMessage": {
        "@value": "�뜲�씠�꽣媛� �뾾�쓬"
      },
      "noResultMessageStyle": {
        "@value": "position:absolute; left:40%; width:20%; top:40%; border:1px solid #b3b3b3; color:#383d41; font-size:12px; padding:5px; text-align:center; background:#fafafa"
      },
      "pasteMessage": {
        "@value": "�뜲�씠�꽣 遺숈씠�뒗 以�"
      },
      "getColumnVisible": {
        "@useRealColIndex": "true"
      },
      "colIdToColIndex": {
        "@value": "true"
      },
      "checkDisabledOnPaste": {
        "@value": "true"
      },
      "checkReadOnlyOnPaste": {
        "@value": "true"
      },
      "column": [
        {
          "@inputType": "text",
          "editType": {
            "@value": "select"
          }
        },
        {
          "@inputType": "select",
          "chooseOptionLabel": {
            "@value": "-�꽑�깮-"
          }
        },
        {
          "@inputType": "calendar",
          "dataType": {
            "@value": "date"
          },
          "displayFormat": [
            {
              "@value": "yyyy-MM",
              "@valueType": "yearMonth"
            },
            {
              "@value": "yyyy-MM-dd",
              "@valueType": "yearMonthDate"
            },
            {
              "@value": "yyyy-MM-dd HH:mm",
              "@valueType": "yearMonthDateTime"
            },
            {
              "@value": "yyyy-MM-dd HH:mm:SS",
              "@valueType": "yearMonthDateTimeSec"
            }
          ]
        }
      ]
    },
    "gridView": {
      "noSelect": {
        "@value": "true"
      },
      "drilldownFooterExpressionAllData": {
        "@value": "true"
      },
      "rowNumStatusUniqueId": {
        "@value": "true"
      },
      "preventMultipleClick": {
        "@value": "true"
      },
      "drilldownRealRowIndexAll": {
        "@value": "true"
      },
      "collectGarbage": {
        "@value": "none"
      },
      "fastScroll": {
        "@value": "true"
      },
      "dataType": {
        "date": {
          "@displayFormat": "yyyy-MM-dd"
        }
      },
      "editType": {
        "@value": "focus"
      },
      "rowNumBackgroundColor": {
        "@value": "#e5eff7"
      },
      "rowNumRowMouseOverColor": {
        "@value": "true"
      },
      "selectedRowColor": {
        "@value": "#fcf8e3"
      },
      "oddEvenColorDisplay": {
        "@value": "true"
      },
      "evenRowBackgroundColor": {
        "@value": "#f5f5f5"
      },
      "oddRowBackgroundColor": {
        "@value": "#ffffff"
      },
      "rowMouseOver": {
        "@value": "true"
      },
      "rowMouseOverColor": {
        "@value": "#edf3fb"
      },
      "tooltipStyle": {
        "@value": "padding:1px 3px 0;line-height:14px;font-size:12px;border:0;background-color:#5c85d4;color:#fff"
      },
      "noResultMessageVisible": {
        "@value": "true"
      },
      "noResultMessage": {
        "@value": "�뜲�씠�꽣媛� �뾾�쓬"
      },
      "noResultMessageStyle": {
        "@value": "position:absolute; left:40%; width:20%; top:40%; border:1px solid #b3b3b3; color:#383d41; font-size:12px; padding:5px; text-align:center; background:#fafafa"
      },
      "pasteMessage": {
        "@value": "�뜲�씠�꽣 遺숈씠�뒗 以�"
      },
      "getColumnVisible": {
        "@useRealColIndex": "true"
      },
      "colIdToColIndex": {
        "@value": "true"
      },
      "checkDisabledOnPaste": {
        "@value": "true"
      },
      "checkReadOnlyOnPaste": {
        "@value": "true"
      },
      "useDataDragDropGuideLine": {
        "@value": "true"
      },
      "column": [
        {
          "@inputType": "text",
          "editType": {
            "@value": "select"
          }
        },
        {
          "@inputType": "select",
          "chooseOptionLabel": {
            "@value": "-�꽑�깮-"
          },
          "eventPriority": {
            "@value": "oneditend"
          }
        },
        {
          "@inputType": "calendar",
          "dataType": {
            "@value": "date"
          },
          "displayFormat": [
            {
              "@value": "yyyy",
              "@valueType": "year"
            },
            {
              "@value": "yyyy-MM",
              "@valueType": "yearMonth"
            },
            {
              "@value": "yyyy-MM-dd",
              "@valueType": "yearMonthDate"
            },
            {
              "@value": "yyyy-MM-dd HH:mm",
              "@valueType": "yearMonthDateTime"
            },
            {
              "@value": "yyyy-MM-dd HH:mm:SS",
              "@valueType": "yearMonthDateTimeSec"
            }
          ]
        }
      ]
    },
    "inputCalendar": {
      "validCheck": {
        "@value": "false"
      },
      "dataType": {
        "@value": "date"
      },
      "delimiter": {
        "@value": "-"
      },
      "mask": {
        "@value": "MM-dd-yyyy"
      },
      "delimiterLocaleKey": {
        "@value": "IC_Delimiter"
      },
      "maskLocaleKey": {
        "@value": "IC_Mask"
      },
      "calendarImage": {
        "@value": ""
      },
      "calendarImageOver": {
        "@value": ""
      }
    },
    "input": {
      "focusStyle": {
        "@value": ""
      },
      "dateMask": {
        "@value": "yyyy-MM-dd"
      },
      "timeMask": {
        "@value": "HH:mm"
      },
      "focusCalcSize": {
        "@value": "false"
      },
      "editFormatParticalMask": {
        "@value": "true"
      }
    },
    "calendar": {
      "minYear": {
        "@value": "1978"
      },
      "maxYear": {
        "@value": "2030"
      }
    },
    "selectbox": {
      "visibleRowNum": {
        "@value": "5"
      },
      "dataListAutoRefresh": {
        "@value": "true"
      }
    },
    "selectbox_native": {
      "visibleRowNum": {
        "@value": "5"
      },
      "dataListAutoRefresh": {
        "@value": "true"
      }
    },
    "tabControl": {},
    "treeview": {
      "tooltipGroupClass": {
        "@value": "false"
      }
    },
    "trigger": {
      "preventMultipleClick": {
        "@value": "true"
      }
    },
    "anchor": {
      "preventMultipleClick": {
        "@value": "true"
      }
    },
    "windowContainer": {
      "tooltipGroupClass": {
        "@value": "false"
      },
      "getWindow": {
        "@searchTarget": "windowId"
      },
      "displayOnlyTopWindow": {
        "@value": "true"
      }
    },
    "pageList": {},
    "radio": {
      "nameScope": {
        "@value": "true"
      }
    },
    "popup": {
      "popupCenter": {
        "@value": "false"
      }
    },
    "body": {
      "tooltipSec": {
        "@value": "1"
      }
    },
    "editor": {
      "version": {
        "@value": "4.22.1"
      }
    },
    "fusionchart": {
      "version": {
        "@value": "3.19"
      }
    },
    "languagePack": {
      "@useLanguagePack": "true",
      "url": [
        {
          "@lang": "ko",
          "@value": "/message/getLanguagePack/ko"
        },
        {
          "@lang": "en",
          "@value": "/message/getLanguagePack/en"
        }
      ]
    },
    "projectCommon": {
      "module": [
        {
          "@name": "$c.common",
          "@src": "/cm/project_udc/common.xml"
        },
        {
          "@name": "$c.str",
          "@src": "/cm/project_udc/commonStr.xml"
        },
        {
          "@name": "$c.num",
          "@src": "/cm/project_udc/commonNum.xml"
        },
        {
          "@name": "$c.menu",
          "@src": "/cm/project_udc/commonMenu.xml"
        },
        {
          "@name": "$c.code",
          "@src": "/cm/project_udc/commonCode.xml"
        },
        {
          "@name": "$c.popup",
          "@src": "/cm/project_udc/commonPopup.xml"
        },
        {
          "@name": "$c.util",
          "@src": "/cm/project_udc/commonUtil.xml"
        }
      ]
    },
    "xhr": {
      "@useActiveXObject": "false"
    },
    "license": {
      "@value": "true"
    },
    "requirejs": {
      "@timeout": "20"
    },
    "udc": {
      "requires": {
        "require": {
          "@as": "udc_fileMultiUpload",
          "@src": "/cm/udc/fileMultiUpload.xml",
          "@type": "page"
        }
      }
    }
  }
}