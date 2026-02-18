package com.example.eazystore.dto;

public record LoginResponseDto(String message, UserDto user, String jwtToken) {
}