package com.example.Vaccination.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Vaccination.Model.Vaccination;
import com.example.Vaccination.Repository.VaccineRepository;

@Service
public class VaccinationServiceimpl implements VaccinationService {

	
	@Autowired
	private VaccineRepository vaccineRepository;
	
	
	
	@Override
	public Vaccination saveVaccination(Vaccination vaccination) {
		
		return vaccineRepository.save(vaccination);
	}



	@Override
	public Vaccination deleteVaccination(Vaccination vaccination) {
		return vaccination;
		// TODO Auto-generated method stub
		
	}

}
