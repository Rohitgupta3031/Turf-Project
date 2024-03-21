package com.example.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.entity.UserRegistration;
import com.example.service.UserRegistrationService;

import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin("*")
@RestController
public class UserRegistrationController {
	
	
		@Autowired
		private UserRegistrationService regServiceRef;
		
		
		@GetMapping("/userregister-api") // display all user
		public Collection<UserRegistration> getAllUsers(){
			Collection<UserRegistration> allUsers = regServiceRef.getAllUsers();
			return allUsers;
		}
		
		
		@GetMapping("/userregister-api/{userId}")  //display user by id
		public UserRegistration getOneUser(@PathVariable("userId") Integer id) {
			UserRegistration foundUser = regServiceRef.getOneUser(id);
			//System.out.println("The found movie is: " + foundMovie);
			return foundUser;
		}
		
		@PostMapping("/userregister-api")   // add users 
		public void addNewUser(@RequestBody UserRegistration userRef) {
			System.out.println(userRef);
			regServiceRef.addNewUser(userRef);
		}
		
		@DeleteMapping("/userregister-api/{userId}")   //delete by Id 
		public void deleteOneUser(@PathVariable("userId") Integer id) {
			regServiceRef.deleteOneUser(id);
		}
		
		@PutMapping("/userregister-api/{userId}")    // update by id users
		public void updateuser(@RequestBody UserRegistration userRef,@PathVariable("userId") Integer id) {
			regServiceRef.updateUser(userRef, id);
		}
		
//		@GetMapping("/user-update/{userID}")
//		public void updatePassword(@RequestBody String oPass,String nPass,@PathVariable("userId") Integer id) throws Exception {
//			regServiceRef.updatePassword(nPass, oPass, id);
//		}
		  //login user by username and password 
		@PostMapping("/user-login") 
		public UserRegistration login(@RequestBody UserRegistration userRef ) {
			return (regServiceRef.login(userRef.getUsername(), userRef.getPassword()));
		}
		
	}




