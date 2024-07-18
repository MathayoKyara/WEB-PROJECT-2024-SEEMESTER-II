package com.example.mdundo.repository;

import com.example.mdundo.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Integer> {


}
