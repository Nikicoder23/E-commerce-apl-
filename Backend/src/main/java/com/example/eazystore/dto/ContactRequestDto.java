package com.example.eazystore.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;

@Getter
@Setter
public class ContactRequestDto {

    @NotBlank(message = "Name can not be empty")
    private String name;

    @NotBlank(message = "Email can not be empty")
    private String email;

    @NotBlank(message = "Mobile Number can not be empty")
    private String mobileNumber;

    @NotBlank(message = "Message can not be empty")
    private String message;
}
