package com.example.Vaccination.Service;

import com.example.Vaccination.Model.Vaccination;

public interface VaccinationService {
	
	public Vaccination saveVaccination(Vaccination vaccination);

	public Vaccination deleteVaccination(Vaccination vaccination);

}
