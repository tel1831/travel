package com.lignex1.travel.item.dao;

import lombok.Data;

@Data
public class ItemSearchCond {

	private String itemName;
	private Integer maxPrice;
	
	public ItemSearchCond() {}

	public ItemSearchCond(String itemName, Integer maxPrice) {
		super();
		this.itemName = itemName;
		this.maxPrice = maxPrice;
	}
}
