package com.example.Vaccination.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Vaccination.Model.Vaccination;
import com.example.Vaccination.Service.VaccinationService;
@CrossOrigin
@RestController
@RequestMapping("/vaccine")
public class VaccineController {
	@Autowired
	private VaccinationService vaccinationService;
	
	
	@PostMapping("/vac")
	public String vac(@RequestBody Vaccination vaccination) {
		
		vaccinationService.saveVaccination(vaccination);
		 return "New Vaccination registered";
	}
	
	
	@PostMapping("/dele") 
	public String dele(@RequestBody Vaccination vaccination) {
		vaccinationService.deleteVaccination(vaccination);
		return "Deleted Vaccination property";
	}

}
