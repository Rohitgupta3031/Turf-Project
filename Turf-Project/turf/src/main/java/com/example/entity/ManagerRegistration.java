package com.example.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "manager_details", uniqueConstraints = @UniqueConstraint(columnNames = { "username" }))
public class ManagerRegistration {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int managerId;
	private String Name;
	private int age;
	private String mobileNo;
	private String username;
	private String password;

 

	public ManagerRegistration() {
		// TODO Auto-generated constructor stub
	}
	

	public ManagerRegistration(int managerId, String name, int age, String mobileNo, String username, String password) {
	super();
	this.managerId = managerId;
	Name = name;
	this.age = age;
	this.mobileNo = mobileNo;
	this.username = username;
	this.password = password;
}


	public int getManagerId() {
		return managerId;
	}

	public void setManagerId(int managerId) {
		this.managerId = managerId;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "ManagerRegistration [managerId=" + managerId + ", Name=" + Name + ", age=" + age + ", mobileNo="
				+ mobileNo + ", username=" + username + ", password=" + password + "]";
	}



}
