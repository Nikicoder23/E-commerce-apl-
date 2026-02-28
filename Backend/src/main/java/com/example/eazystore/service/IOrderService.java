package com.example.eazystore.service;


import com.example.eazystore.dto.OrderRequestDto;

public interface IOrderService {

    void createOrder(OrderRequestDto orderRequest);
}