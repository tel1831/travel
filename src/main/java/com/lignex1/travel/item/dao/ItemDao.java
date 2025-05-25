package com.lignex1.travel.item.dao;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.lignex1.travel.domain.item.Item;

@Repository
public interface ItemDao {

	void save(Item item);
	void update(@Param("id") Integer itemId, @Param("updateParam") Item updateParam);
	Optional<Item> findById(Integer id);
	List<Item> findAll(Map<String, Object> param);
}
