package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.entity.Booking;
import com.example.entity.ManagerRegistration;
import com.example.entity.UserRegistration;

public interface BookingRepo extends JpaRepository<Booking, Long> {
	
	List<Booking> findByUser(UserRegistration user);
	
	List<Booking> findByManager(ManagerRegistration manager);
	
	@Query("select b from Booking b where b.bookingDate= :date and b.timeSlot= :slot and b.turf.turfId= :tId")
	Booking checkIfBooked(String date,String slot,Long tId);

}
