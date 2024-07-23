package com.route.route.controller;

import com.route.route.facade.ImageReviewFacade;
import com.route.route.model.ImageReview;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/image-reviews")
public class ImageReviewController {

    @Autowired
    private ImageReviewFacade imageReviewFacade;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadImageReview(@RequestParam String username, @RequestParam String location,
                                               @RequestParam String review, @RequestParam("file") MultipartFile file) {
        try {
            imageReviewFacade.uploadImageReview(username, location, review, file);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload image: " + e.getMessage());
        }
    }

    @GetMapping("/search")
    public ResponseEntity<List<ImageReview>> searchByLocation(@RequestParam("location") String location) {
        List<ImageReview> imageReviews = imageReviewFacade.searchImageReviewsByLocation(location);
        if (imageReviews.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(imageReviews);
    }
}
