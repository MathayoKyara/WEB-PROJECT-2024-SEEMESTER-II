package com.example.mdundo.repository;

import com.example.mdundo.model.Homepage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HomepageRepository extends JpaRepository<Homepage,  Integer> {
}
