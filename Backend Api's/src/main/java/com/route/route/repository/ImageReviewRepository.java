package com.route.route.repository;

import com.route.route.model.ImageReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageReviewRepository extends JpaRepository<ImageReview, Long> {
    List<ImageReview> findByLocation(String location);
}
