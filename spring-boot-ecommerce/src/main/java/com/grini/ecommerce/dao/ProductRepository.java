package com.grini.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.grini.ecommerce.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
