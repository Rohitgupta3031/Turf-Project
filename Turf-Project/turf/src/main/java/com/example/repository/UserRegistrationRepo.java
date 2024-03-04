package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.UserRegistration;

public interface UserRegistrationRepo extends JpaRepository<UserRegistration, Integer> {

	UserRegistration findByUsername(String username);
}
