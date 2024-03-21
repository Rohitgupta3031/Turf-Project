package com.example.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Review;
import com.example.service.ReviewService;

@CrossOrigin("*")
@RestController
public class ReviewController {
	
	@Autowired
	private ReviewService servRef;
	
	@PostMapping("/add-review/{tId}/{uId}")
	public void addReview(@RequestParam("description") String desc,@PathVariable("tId") Long tId,@PathVariable("uId") Integer uId) {
		servRef.addReview(desc, tId, uId);
	}
	
	@GetMapping("/getReview/{tId}")
	public Collection<Review> getReviews(@PathVariable("tId") Long tId){
		return servRef.getReviewByTurfId(tId);
	}

}
