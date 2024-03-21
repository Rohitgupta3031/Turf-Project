package com.example.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.ContactUs;
import com.example.service.ContactService;

@CrossOrigin("*")
@RestController
public class ContactController {
	
	@Autowired
	private ContactService servRef;
	
	//Add Queries
	@PostMapping("/add-query")
	public void contactUS(@RequestBody ContactUs contact) {
		
		servRef.contactUs(contact);
	}
	
	// get all Queries
	@GetMapping("/all-queries")
	public Collection<ContactUs> allQueries(){
		
		return servRef.allQueries();
	}

}
