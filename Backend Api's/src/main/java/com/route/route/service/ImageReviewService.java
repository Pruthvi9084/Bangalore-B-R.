package com.route.route.service;


import com.route.route.model.ImageReview;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ImageReviewService {

    void saveImageReview(String username, String location, String review, MultipartFile file) throws IOException;

    List<ImageReview> findByLocation(String location);
}

