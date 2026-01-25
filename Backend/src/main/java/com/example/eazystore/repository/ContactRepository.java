package com.example.eazystore.repository;

import com.example.eazystore.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ContactRepository extends JpaRepository<Contact, Long> {
}