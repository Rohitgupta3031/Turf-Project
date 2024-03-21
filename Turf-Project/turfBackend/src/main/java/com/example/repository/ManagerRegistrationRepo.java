package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.ManagerRegistration;

public interface ManagerRegistrationRepo extends JpaRepository<ManagerRegistration, Integer> {

	ManagerRegistration findByUsername(String username);

	
}
