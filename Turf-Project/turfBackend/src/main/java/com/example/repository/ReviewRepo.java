package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Review;
import com.example.entity.TurfDetails;



public interface ReviewRepo extends JpaRepository<Review, Integer> {

	List<Review> findByTurf(TurfDetails turf);
}
