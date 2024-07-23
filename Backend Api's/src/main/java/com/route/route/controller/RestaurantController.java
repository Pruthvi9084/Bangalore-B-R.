package com.route.route.controller;

import com.route.route.facade.RestaurantFacade;
import com.route.route.model.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/routes")
public class RestaurantController {

    @Autowired
    private RestaurantFacade restaurantFacade;

    @GetMapping("/restaurants")
    public ResponseEntity<List<Restaurant>> getRestaurantsByLocation(
            @RequestParam String location) {
        List<Restaurant> restaurants = restaurantFacade.getRestaurantsByLocation(location);
        return ResponseEntity.ok(restaurants);
    }
}
