package com.route.route.service;

import com.route.route.model.ImageReview;
import com.route.route.repository.ImageReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Objects;

@Service
public class ImageReviewServiceImpl implements ImageReviewService {

    @Autowired
    private ImageReviewRepository imageReviewRepository;

    @Value("${image.upload.directory}")
    private String uploadDirectory;

    @Override
    public void saveImageReview(String username, String location, String review, MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));
        String destinationPath = uploadDirectory + File.separator + fileName;

        File destinationFile = new File(destinationPath);
        if (destinationFile.exists()) {
            System.out.println("File already exists: " + destinationPath);
            return;
        }

        try (FileOutputStream fos = new FileOutputStream(destinationPath)) {
            fos.write(file.getBytes());
        }

        String relativeImagePath = "images" + File.separator + fileName;

        ImageReview imageReview = new ImageReview();
        imageReview.setUsername(username);
        imageReview.setLocation(location);
        imageReview.setReview(review);
        imageReview.setImagePath(relativeImagePath);
        imageReviewRepository.save(imageReview);
    }

    @Override
    public List<ImageReview> findByLocation(String location) {
        return imageReviewRepository.findByLocation(location);
    }
}
