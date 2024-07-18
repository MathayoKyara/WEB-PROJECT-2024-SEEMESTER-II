package com.example.mdundo.service;

import com.example.mdundo.model.Homepage;
import com.example.mdundo.repository.HomepageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomepageServices implements HomepageService {
    @Autowired
    private HomepageRepository homepageRepository;


    @Override
    public Homepage postData(Homepage homepage) {
        return homepageRepository.save(homepage);
    }

    @Override
    public List<Homepage> getAllHomepage() {
        return homepageRepository.findAll();
    }

    @Override
    public Homepage updateHomepage(Homepage homepage) {
        return homepageRepository.save(homepage);
    }



}
