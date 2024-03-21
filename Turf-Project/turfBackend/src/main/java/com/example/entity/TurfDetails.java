package com.example.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

@Entity
public class TurfDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long turfId;
	private String name;
	@Column(columnDefinition = "VARCHAR(1000)")
	private String description;
	private double width;
	private double length;
	private double price;
	@Lob
	@Column(name = "photo", columnDefinition = "LONGBLOB")
	private String image;

	@ManyToOne
	@JoinColumn(name = "manager_id", referencedColumnName = "managerId")
	private ManagerRegistration manager;

	public TurfDetails() {
		// TODO Auto-generated constructor stub
	}

	public TurfDetails(Long turfId, String name, String description, double width, double length, double price,
			String image, ManagerRegistration manager) {
		super();
		this.turfId = turfId;
		this.name = name;
		this.description = description;
		this.width = width;
		this.length = length;
		this.price = price;
		this.image = image;
		this.manager = manager;
	}

	public Long getTurfId() {
		return turfId;
	}

	public void setTurfId(Long turfId) {
		this.turfId = turfId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getWidth() {
		return width;
	}

	public void setWidth(double width) {
		this.width = width;
	}

	public double getLength() {
		return length;
	}

	public void setLength(double length) {
		this.length = length;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public ManagerRegistration getManager() {
		return manager;
	}

	public void setManager(ManagerRegistration manager) {
		this.manager = manager;
	}


}
