package com.example.eazystore.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter @Getter @ToString
public class UserDto {
    private long userId;
    private String name;
    private String email;
    private String phnum;
}
