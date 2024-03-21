package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.ContactUs;

public interface ContactRepo extends JpaRepository<ContactUs, Long> {

}
