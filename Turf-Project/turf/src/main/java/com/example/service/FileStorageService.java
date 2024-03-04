package com.example.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileStorageService {

    @Value("${file.upload-dir}")
    private String uploadDir; // The base directory where files will be stored

    public String storeFile(MultipartFile file, String filename, String folderName) throws IOException {
        // Normalize file name
        String originalFileName = StringUtils.cleanPath(file.getOriginalFilename());
        String storedFileName = filename + "_" + originalFileName;

        // Construct directory path
        Path directory = Paths.get(uploadDir, folderName);
        if (!Files.exists(directory)) {
            Files.createDirectories(directory);
        }

        // Copy file to the target location
        Path targetLocation = directory.resolve(storedFileName);
        Files.copy(file.getInputStream(), targetLocation);
        return storedFileName;
    }

    public Path getFile(String filename, String folderName) {
        Path directory = Paths.get(uploadDir, folderName);
        return directory.resolve(filename);
    }

    public void deleteFile(String filename, String folderName) throws IOException {
        Path directory = Paths.get(uploadDir, folderName);
        Path targetLocation = directory.resolve(filename);
        Files.deleteIfExists(targetLocation);
    }
}