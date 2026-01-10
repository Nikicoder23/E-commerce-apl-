package com.example.eazystore.service;

import com.example.eazystore.dto.Productdto;
import com.example.eazystore.entity.Product;

import java.util.List;

public interface IProductService {
    List<Productdto> getProduct();
}
