package com.example.eazystore.controller;

import com.example.eazystore.dto.Productdto;
import com.example.eazystore.entity.Product;
import com.example.eazystore.repository.ProductRepository;
import com.example.eazystore.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/products")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class Product_Controller {
    private final IProductService iProductService;
    @GetMapping
    public List<Productdto> getProduct(){
        List<Productdto> productList = iProductService.getProduct();
        return productList;
    }

}
