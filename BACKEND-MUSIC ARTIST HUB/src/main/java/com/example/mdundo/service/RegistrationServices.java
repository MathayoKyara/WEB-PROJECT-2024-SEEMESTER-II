package com.example.mdundo.service;

import com.example.mdundo.model.Registration;
import com.example.mdundo.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationServices implements RegistrationService{

    @Autowired
    private RegistrationRepository registrationRepository;


    @Override
    public Registration postData(Registration registration) {
        return registrationRepository.save(registration);
    }

    @Override
    public List<Registration> getAllRegistration() {
        return registrationRepository.findAll();
    }

    @Override
    public Registration updateRegistration(Registration registration) {
        return registrationRepository.save(registration);
    }

    @Override
    public void deleteRegistration(Integer id) {

    }




    }

