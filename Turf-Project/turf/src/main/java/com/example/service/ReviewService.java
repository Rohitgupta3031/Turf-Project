package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Review;
import com.example.entity.TurfDetails;
import com.example.entity.UserRegistration;
import com.example.repository.ReviewRepo;

@Service
public class ReviewService {
	
	@Autowired
	private ReviewRepo reviewRef;
	@Autowired
	private TurfService turfServ;
	@Autowired
	private UserRegistrationService userServ;
	
	public void addReview(String desc,Long tId,Integer uId) {
		Review review=new Review();
		TurfDetails turf=turfServ.getOneturf(tId);
		UserRegistration user=userServ.getOneUser(uId);
		review.setDescription(desc);
		review.setTurf(turf);
		review.setUser(user);
		reviewRef.save(review);
		
		
	}
	
	public List<Review> getReviewByTurfId(Long turfId) {
        TurfDetails turf = turfServ.getOneturf(turfId);
       List<Review> review = reviewRef.findByTurf(turf);
       return review;
   }
 

}
