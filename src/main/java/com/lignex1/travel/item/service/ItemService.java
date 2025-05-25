package com.lignex1.travel.item.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.lignex1.travel.domain.item.Item;
import com.lignex1.travel.item.dao.ItemDao;
import com.lignex1.travel.item.dao.ItemSearchCond;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ItemService {

	@Autowired
	private ItemDao itemDao;
	
	public List<Item> findItems(ItemSearchCond cond) {
		Map<String, Object> param = new HashMap<>();
		if(StringUtils.hasText(cond.getItemName())) {
			param.put("itemName", cond.getItemName());
		}
		if(cond.getMaxPrice() != null) {
			param.put("maxPrice", cond.getMaxPrice());
		}
		
		log.info("itemName : " + param.get("itemName"));
		log.info("maxPrice : " + param.get("maxPrice"));
		
		List<Item> items = itemDao.findAll(param);
		
		log.info("items.size() : {}", items.size());
		
		log.info("item.class : {}", items.get(0).getClass().getName());
		
		for(Item item : items) {
			log.info("class={}, price={}", item.getClass().getName(), item.getPrice());
		}
		
		return items;
	}
	
	public void createItem(Item item) {
		itemDao.save(item);
	}
}
