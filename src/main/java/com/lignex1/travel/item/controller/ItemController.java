package com.lignex1.travel.item.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lignex1.travel.domain.item.Item;
import com.lignex1.travel.item.dao.ItemSearchCond;
import com.lignex1.travel.item.service.ItemService;
import com.lignex1.travel.util.Result;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/items")
public class ItemController {

	@Autowired
	private ItemService itemService;
	
	@RequestMapping
	public Map<String, Object> findItems(@RequestBody Map<String, Object> requestParam) {
		Map reqParam = (Map) requestParam.get("dm_item_search_cond");
		
		ItemSearchCond searchCond = new ItemSearchCond();
		searchCond.setItemName(reqParam.get("item_name").toString());
		searchCond.setMaxPrice(Integer.parseInt(reqParam.get("max_price").toString()));
		
		List<Item> items = itemService.findItems(searchCond);
		Result result = new Result();
		result.setData("items", items);
		
		return result.getResult();
	}
	
	@PostMapping("/create")
	public Map<String, Object> createItem(@RequestBody Map<String, Object> requestParam) {
		Map reqParam = (Map) requestParam.get("dm_item_info");
		Item item = new Item(reqParam.get("ITEM_NAME").toString(), Integer.parseInt(reqParam.get("PRICE").toString()), Integer.parseInt(reqParam.get("QUANTITY").toString()));
		itemService.createItem(item);
		Result result = new Result();
		result.setStatusMsg(result.STATUS_SUCESS, "상품등록이 완료되었습니다.");
		
		return result.getResult();
	}
}
