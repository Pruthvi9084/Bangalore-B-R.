package com.route.route.repository;

import com.route.route.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantsRepository extends JpaRepository<Restaurant, String> {
    List<Restaurant> findByLocation(String location);

}