package com.example.mdundo.controller;

import com.example.mdundo.model.Homepage;
import com.example.mdundo.model.Registration;
import com.example.mdundo.service.HomepageService;
import com.example.mdundo.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v2/homepage")
@CrossOrigin
public class HomepageController {
    @Autowired
    private HomepageService homepageService;
    @PostMapping("/AddDetails")
    public String postData(@RequestBody Homepage homepage){
        homepageService.postData(homepage);
        return "homepage filled successfully";
    }
    @GetMapping("/getAllDetails")
    public List<Homepage> getAllHomepage(){ return homepageService.getAllHomepage();}
    @PutMapping("/update/{id}")
    public Homepage updadteHomepage(@PathVariable Integer id,@RequestBody Homepage homepage) {
        homepage.setId(id);
        return homepageService.updateHomepage(homepage);
    }

}
