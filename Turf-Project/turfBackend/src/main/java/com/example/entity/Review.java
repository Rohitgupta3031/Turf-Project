package com.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int reviewId;
	
	private String description;
	@ManyToOne
	@JoinColumn(name = "user_id",referencedColumnName = "userId")
	private UserRegistration user;
	@ManyToOne
	@JoinColumn(name = "turf_id",referencedColumnName = "turfId")
	private TurfDetails turf;
	
	public Review() {
		// TODO Auto-generated constructor stub
	}

	public Review(String description, UserRegistration user, TurfDetails turf) {
		super();
		this.description = description;
		this.user = user;
		this.turf = turf;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public UserRegistration getUser() {
		return user;
	}

	public void setUser(UserRegistration user) {
		this.user = user;
	}

	public TurfDetails getTurf() {
		return turf;
	}

	public void setTurf(TurfDetails turf) {
		this.turf = turf;
	}

	@Override
	public String toString() {
		return "Review [description=" + description + ", user=" + user + ", turf=" + turf + "]";
	}
	
	
	

}
