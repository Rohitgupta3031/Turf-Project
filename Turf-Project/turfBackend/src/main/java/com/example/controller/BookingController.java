package com.example.controller;


import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Booking;
import com.example.service.BookingService;
@CrossOrigin("*")
@RestController
public class BookingController {
	
	@Autowired
	private BookingService servRef;
	
	//add Booking turf
	@PostMapping("/add-booking/{userid}/{turfId}")
	public void addBooking(
			@RequestParam("date") String date,
			@RequestParam("slot") String slot,
			@PathVariable("userid") Integer id,
			@PathVariable("turfId") Long tId){
		servRef.addBooking(date,slot,id,tId);
	}

	//Get all Booking 
	@GetMapping("/fetch-data")
	public Collection<Booking> getBookings(){
		Collection<Booking> allBook=servRef.getAllBookings();
		return allBook;		
	}
	
	//display booking by userID 
	@GetMapping("/get-user-bookings/{uId}")
	public List<Booking> getUserBookings(@PathVariable("uId") Integer id){
		
		return servRef.getBookingsByUserId(id);
	}

	//details  booking by manager Id 
	@GetMapping("/get-manager-bookings/{mId}")
	public List<Booking> getaManagerBookings(@PathVariable("mId") Integer id){
		
		return servRef.getBookingsByManagerId(id);
	}

}
