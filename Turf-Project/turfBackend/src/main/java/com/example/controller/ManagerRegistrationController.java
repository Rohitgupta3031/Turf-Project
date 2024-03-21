package com.example.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.ManagerRegistration;
import com.example.service.ManagerRegistrationService;


@CrossOrigin("*")
@RestController
public class ManagerRegistrationController {

	
	@Autowired
	private ManagerRegistrationService mregServiceRef;
	
	
	@GetMapping("/managerregister-api")  // get manager details 
	public Collection<ManagerRegistration> getAllUsers(){
		Collection<ManagerRegistration> allUsers = mregServiceRef.getAllUsers();
		return allUsers;
	}
	
	
	@GetMapping("/managerregister-api/{userId}")   // display manager details by using the userId
	public ManagerRegistration getOneUser(@PathVariable("userId") Integer id) {
		ManagerRegistration foundUser = mregServiceRef.getOneUser(id);
		//System.out.println("The found movie is: " + foundMovie);
		return foundUser;
	}
	
	@PostMapping("/managerregister-api")   //  add managers
	public void addNewUser(@RequestBody ManagerRegistration userRef) {
		//System.out.println(userRef);
		mregServiceRef.addNewUser(userRef);
	}
	
	
	@DeleteMapping("/managerregister-api/{userId}")   // delete the managers 
	public void deleteOneUser(@PathVariable("userId") Integer id) {
		mregServiceRef.deleteOneUser(id);
	}
	
	@PutMapping("/managerregister-api/{userId}")   // ,update manager details 
	public void updateUser(@RequestBody ManagerRegistration userRef,@PathVariable("userId") Integer id) {
		mregServiceRef.updateUser(userRef, id);
	}
	
//	@GetMapping("/manager-update/{userID}")
//	public void updatePassword(@RequestBody String oPass,String nPass,@PathVariable("userId") Integer id) throws Exception  {
//		mregServiceRef.updatePassword(nPass, oPass, id);
//	}
	
	@PostMapping("/manager-login")   // manager login 
	public ManagerRegistration login(@RequestBody ManagerRegistration userRef) {
		return (mregServiceRef.login(userRef.getUsername(), userRef.getPassword()));
	}
	
}
