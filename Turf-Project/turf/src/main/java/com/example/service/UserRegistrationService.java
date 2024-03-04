package com.example.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Crediantials;
import com.example.entity.ManagerRegistration;
import com.example.entity.UserRegistration;
import com.example.repository.CredRepo;
import com.example.repository.UserRegistrationRepo;


@Service
public class UserRegistrationService {
	
	@Autowired
	UserRegistrationRepo RegRepoRef;
	
	@Autowired
	CredRepo credRef;
	
	public Collection<UserRegistration> getAllUsers(){
		Collection<UserRegistration> allUsers = 
				RegRepoRef.findAll();
		return allUsers;
	}
	
	public UserRegistration getOneUser(Integer id) {
		
		UserRegistration foundUser = null;
		Optional<UserRegistration> opt = RegRepoRef.findById(id);
		if(!opt.isEmpty())
			foundUser = opt.get();//Getting the Movie object from that Optional object
		return foundUser;
	}
	
	public void addNewUser(UserRegistration newRef) {
		
		RegRepoRef.save(newRef);
		Crediantials abc=new Crediantials();
		abc.setUsername(newRef.getUsername());
		abc.setPassword(newRef.getPassword());
		abc.setRoles("user");
		credRef.save(abc);
	}
	
	public void deleteOneUser(Integer id) {
		RegRepoRef.deleteById(id);
	}	
	
	public void updateUser(UserRegistration newUser,Integer id) {
		UserRegistration oldUser=null;
//		Movie newMovie = null;
		Optional<UserRegistration> opt=
				RegRepoRef.findById(id);
		
		if(!opt.isEmpty()) {
			
			oldUser=opt.get();
			oldUser.setName(newUser.getName());;  
			oldUser.setAge(newUser.getAge());
			oldUser.setMobileNo(newUser.getMobileNo());
			oldUser.setUsername(newUser.getUsername());
			RegRepoRef.save(oldUser);
		}
		
	}
	
	public void updatePassword(String newPass, String oldPass, Integer id) throws Exception {

		UserRegistration user = null;
		Optional<UserRegistration> opt = RegRepoRef.findById(id);
		if (!opt.isEmpty()) {

			user = opt.get();
			if (oldPass.equals(user.getPassword())) {
				user.setPassword(newPass);
				RegRepoRef.save(user);
			}
			else {
				throw new Exception("wrong password");
			}
		}
	}
	
	public UserRegistration login(String username, String password) {
		UserRegistration user = RegRepoRef.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
       return null;
	}
}
