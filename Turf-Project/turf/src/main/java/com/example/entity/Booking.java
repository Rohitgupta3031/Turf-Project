package com.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long bookingId;

	private String bookingDate;

	private String timeSlot;

	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "userId")
	private UserRegistration user;

	@ManyToOne
	@JoinColumn(name = "Turf_id", referencedColumnName = "turfId")
	private TurfDetails turf;

	@ManyToOne
	@JoinColumn(name = "manager_id", referencedColumnName = "managerId")
	private ManagerRegistration manager;

	public Booking() {
		// TODO Auto-generated constructor stub
	}

	public Booking(Long bookingId, String bookingDate, String timeSlot, UserRegistration user, TurfDetails turf,
			ManagerRegistration manager) {
		super();
		this.bookingId = bookingId;
		this.bookingDate = bookingDate;
		this.timeSlot = timeSlot;
		this.user = user;
		this.turf = turf;
		this.manager = manager;
	}

	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public String getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}

	public String getTimeSlot() {
		return timeSlot;
	}

	public void setTimeSlot(String timeSlot) {
		this.timeSlot = timeSlot;
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

	public ManagerRegistration getManager() {
		return manager;
	}

	public void setManager(ManagerRegistration manager) {
		this.manager = manager;
	}

	@Override
	public String toString() {
		return "Booking [bookingId=" + bookingId + ", bookingDate=" + bookingDate + ", timeSlot=" + timeSlot + ", user="
				+ user + ", turf=" + turf + ", manager=" + manager + "]";
	}

}
