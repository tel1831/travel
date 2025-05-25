package com.lignex1.travel.domain.item;

import lombok.Data;

@Data
public class Item {

	private Integer id;
	private String itemName;
	private Integer price;
	private Integer quantity;
	
	public Item() {}

	public Item(String itemName, Integer price, Integer quantity) {
		super();
		this.itemName = itemName;
		this.price = price;
		this.quantity = quantity;
	}
}
