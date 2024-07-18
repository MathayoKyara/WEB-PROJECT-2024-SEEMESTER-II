package com.example.mdundo.controller;

import com.example.mdundo.model.Registration;
import com.example.mdundo.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/registration")
@CrossOrigin
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;
    @PostMapping("/add")
    public String postData(@RequestBody Registration registration){
        registrationService.postData(registration);
        return "registered successfully";
    }
    @GetMapping("/getAll")
    public List<Registration> getAllRegistration(){ return registrationService.getAllRegistration(); }
    @PutMapping("/update/{id}")
    public Registration updadteRegistration(@PathVariable Integer id,@RequestBody Registration registration){
        registration.setId(id);
        return registrationService.updateRegistration(registration);
    }
    @DeleteMapping("/delete{id}")
    public void deleteRegistration(@RequestParam Integer id){
        registrationService.deleteRegistration(id);
    }



}
