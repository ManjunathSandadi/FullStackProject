package com.example.Vaccination.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Vaccination.Model.Vaccination;


@Repository
public interface VaccineRepository extends JpaRepository<Vaccination, Integer> {
	

}
