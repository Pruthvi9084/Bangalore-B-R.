package com.route.route.repositoryFactory;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryFactory {
    JpaRepository<?, ?> createRepository(String repositoryType);
}
