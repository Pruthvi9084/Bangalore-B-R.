package com.route.route.facade;

import com.route.route.model.ImageReview;
import com.route.route.service.ImageReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Component
public class ImageReviewFacade {

    @Autowired
    private ImageReviewService imageReviewService;

    public void uploadImageReview(String username, String location, String review, MultipartFile file) throws IOException {
        imageReviewService.saveImageReview(username, location, review, file);
    }

    public List<ImageReview> searchImageReviewsByLocation(String location) {
        return imageReviewService.findByLocation(location);
    }
}
