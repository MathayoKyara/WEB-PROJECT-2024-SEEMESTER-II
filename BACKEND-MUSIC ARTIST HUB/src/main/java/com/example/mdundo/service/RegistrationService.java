package com.example.mdundo.service;

import com.example.mdundo.model.Registration;

import java.util.List;

public interface RegistrationService {
    public Registration postData(Registration registration);
    public List<Registration> getAllRegistration();
    public Registration updateRegistration(Registration registration);
    public void deleteRegistration(Integer id);


}
