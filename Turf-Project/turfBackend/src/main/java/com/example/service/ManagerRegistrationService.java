package com.example.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Crediantials;
import com.example.entity.ManagerRegistration;
import com.example.repository.CredRepo;
import com.example.repository.ManagerRegistrationRepo;

@Service
public class ManagerRegistrationService {

	@Autowired
	ManagerRegistrationRepo MRegRepoRef;
	
	@Autowired
	CredRepo credRef;

	public Collection<ManagerRegistration> getAllUsers() {
		Collection<ManagerRegistration> allUsers = MRegRepoRef.findAll();
		return allUsers;
	}

	public ManagerRegistration getOneUser(Integer id) {

		ManagerRegistration foundUser = null;
		Optional<ManagerRegistration> opt = MRegRepoRef.findById(id);
		if (!opt.isEmpty())
			foundUser = opt.get();// Getting the Movie object from that Optional object
		return foundUser;
	}

	public void addNewUser(ManagerRegistration newRef) {
		
		MRegRepoRef.save(newRef);
		Crediantials abc=new Crediantials();
		abc.setUsername(newRef.getUsername());
		abc.setPassword(newRef.getPassword());
		abc.setRoles("admin");
		credRef.save(abc);
	}

	public void deleteOneUser(Integer id) {
		MRegRepoRef.deleteById(id);
	}


	public void updateUser(ManagerRegistration newUser, Integer id) {
		ManagerRegistration oldUser = null;
//		Movie newMovie = null;
		Optional<ManagerRegistration> opt = MRegRepoRef.findById(id);

		if (!opt.isEmpty()) {

			oldUser = opt.get();
			oldUser.setName(newUser.getName());
			
			oldUser.setAge(newUser.getAge());
			oldUser.setMobileNo(newUser.getMobileNo());
			oldUser.setUsername(newUser.getUsername());
			MRegRepoRef.save(oldUser);
		}
	}

	public void updatePassword(String newPass, String oldPass, Integer id) throws Exception {

		ManagerRegistration user = null;
		Optional<ManagerRegistration> opt = MRegRepoRef.findById(id);
		if (!opt.isEmpty()) {

			user = opt.get();
			if (oldPass.equals(user.getPassword())) {
				user.setPassword(newPass);
				MRegRepoRef.save(user);
			}
			else {
				throw new Exception("wrong password");
			}
		}
	}
	
	
		public ManagerRegistration login(String username, String password) {
	        ManagerRegistration user = MRegRepoRef.findByUsername(username);
	        if (user != null && user.getPassword().equals(password)) {
	            return user;
	        }
	       return null;
		}
}

