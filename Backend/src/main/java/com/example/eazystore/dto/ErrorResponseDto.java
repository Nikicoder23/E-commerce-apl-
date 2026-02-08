package com.example.eazystore.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class ErrorResponseDto {
    private String apiPath;
    private HttpStatus erroCode;
    private String errorMessage;
    private LocalDateTime errorTime;

}
