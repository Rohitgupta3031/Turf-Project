package com.example.turf;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.example")
@EnableJpaRepositories(basePackages = "com.example")
@EntityScan(basePackages = "com.example")
public class TurfApplication {

	public static void main(String[] args) {
		SpringApplication.run(TurfApplication.class, args);
		System.out.println("started");
	}

}
