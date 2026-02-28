package com.example.eazystore.service;

import com.example.eazystore.dto.PaymentIntentRequestDto;
import com.example.eazystore.dto.PaymentIntentResponseDto;

public interface IPaymentService {

    PaymentIntentResponseDto createPaymentIntent(PaymentIntentRequestDto requestDto);
}
