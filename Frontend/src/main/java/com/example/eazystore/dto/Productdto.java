package com.example.eazystore.dto;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;

@Setter
@Getter
public class Productdto {
    private Long id;
    private String name;
    private String description;
    private BigDecimal price;
    private Integer popularity;
    private String imageUrl;
    private Instant createdAt;


}
