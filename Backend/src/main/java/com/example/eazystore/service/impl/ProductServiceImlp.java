package com.example.eazystore.service.impl;

import com.example.eazystore.dto.Productdto;
import com.example.eazystore.entity.Product;
import com.example.eazystore.repository.ProductRepository;
import com.example.eazystore.service.IProductService;
import com.fasterxml.jackson.databind.util.BeanUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ProductServiceImlp implements IProductService {
    private final ProductRepository productRepository;
    @Override
    public List<Productdto> getProduct() {
        return productRepository.findAll()
                .stream().map(this::transformtoDto).collect(Collectors.toList());
    }

    private Productdto transformtoDto(Product product){
        Productdto productdto = new Productdto();
        BeanUtils.copyProperties(product,productdto);
        return productdto;
    }
}
