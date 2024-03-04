package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Crediantials;

public interface CredRepo extends JpaRepository<Crediantials, Integer> {

}
