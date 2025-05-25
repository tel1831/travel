package com.lignex1.travel.common.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.lignex1.travel.common.dao.MessageDao;
import com.lignex1.travel.util.StringUtil;

@Service
public class MessageService {

	@Resource(name = "messageDao")
	private MessageDao messageDao;
	
	public List<Map> selectMessageList(Map param) {
		return messageDao.selectMessageList(param);
	}

	public Map saveMessage(List param) {
		int iCnt = 0;
		int uCnt = 0;
		int dCnt = 0;

		for (int i = 0; i < param.size(); i++) {

			Map data = (Map) param.get(i);
			String rowStatus = (String) data.get("rowStatus");
			if (rowStatus.equals("C")) {
				iCnt += messageDao.insertMessage(data);
			} else if (rowStatus.equals("U")) {
				uCnt += messageDao.updateMessage(data);
			} else if (rowStatus.equals("D")) {
				dCnt += messageDao.deleteMessage(data);
			}
		}
		
		Map result = new HashMap();
		result.put("STATUS", "S");
		result.put("ICNT", String.valueOf(iCnt));
		result.put("UCNT", String.valueOf(uCnt));
		result.put("DCNT", String.valueOf(dCnt));
		
		return result;
	}

	public String getLanguagePack(Map param) {
		List<Map> msgList = messageDao.selectAllMessage(param);
		
		boolean isFirst = true;
		StringBuilder sb = new StringBuilder();
		sb.append("WebSquare.WebSquareLang = {");
		for(Map<String, String> msg : msgList) {
			if (isFirst) {
				sb.append(String.format("'%s':'%s'", msg.get("MSG_KEY"), StringUtil.escape(msg.get("MSG_CONTENTS"))));
				isFirst = false;
			} else {
				sb.append(String.format(",'%s':'%s'", msg.get("MSG_KEY"), StringUtil.escape(msg.get("MSG_CONTENTS"))));
			}
		}
		sb.append("};");
		return sb.toString();
	}
	
	public Map getAllMessage(Map param) {
		List<Map> msgList = messageDao.selectAllMessage(param);
		
		Map result = new HashMap();
		for(Map<String, String> msg : msgList) {
			result.put(msg.get("MSG_KEY"), msg.get("MSG_CONTENTS"));
		}
		return result;
	}

}

