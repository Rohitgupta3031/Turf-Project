package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.TurfDetails;

public interface TurfRepo extends JpaRepository<TurfDetails, Long> {

}
