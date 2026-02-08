package com.example.eazystore.controller;

import com.example.eazystore.dto.ContactRequestDto;
import com.example.eazystore.service.IContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/contacts")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    private final IContactService iContactService;

    @PostMapping
    public ResponseEntity<String> saveContact(@Valid @RequestBody ContactRequestDto contactRequestDto) {
        iContactService.saveContact(contactRequestDto);
//        throw new RuntimeException("Oops something wrong");
        return ResponseEntity.status(HttpStatus.CREATED).body("Request processed successfully");

    }

}