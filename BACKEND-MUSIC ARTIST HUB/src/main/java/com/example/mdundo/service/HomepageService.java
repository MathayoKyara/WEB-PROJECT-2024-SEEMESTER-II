package com.example.mdundo.service;

import com.example.mdundo.model.Homepage;

import java.util.List;

public interface HomepageService {
    Homepage postData(Homepage homepage);

    List<Homepage> getAllHomepage();

    Homepage updateHomepage(Homepage homepage);

}
