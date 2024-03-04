package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.ContactUs;
import com.example.repository.ContactRepo;

@Service
public class ContactService {
	
	@Autowired
	private ContactRepo contactRef;
	
	public void contactUs(ContactUs contact) {
		
		contactRef.save(contact);
		
	}
	
	public List<ContactUs> allQueries(){
		
		return contactRef.findAll();
	}

}
