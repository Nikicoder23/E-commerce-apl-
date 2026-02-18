package com.example.eazystore.controller;

import com.example.eazystore.dto.ErrorResponseDto;
import com.example.eazystore.dto.Productdto;
import com.example.eazystore.entity.Product;
import com.example.eazystore.repository.ProductRepository;
import com.example.eazystore.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;
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
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponseDto> handleGlobalException(Exception exception,
                                                                  WebRequest webRequest) {
        ErrorResponseDto errorResponseDto = new ErrorResponseDto(
                webRequest.getDescription(false), HttpStatus.SERVICE_UNAVAILABLE,
                exception.getMessage(), LocalDateTime.now());
        return new ResponseEntity<>(errorResponseDto, HttpStatus.SERVICE_UNAVAILABLE);
    }

}
