package com.route.route.facade;

import com.route.route.model.Restaurant;
import com.route.route.repository.RestaurantsRepository;
import com.route.route.repositoryFactory.RepositoryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class RestaurantFacade {

    @Autowired
    private RepositoryFactory repositoryFactory;

    public List<Restaurant> getRestaurantsByLocation(String location) {
        RestaurantsRepository repository = (RestaurantsRepository) repositoryFactory.createRepository("Restaurant");
        return repository.findByLocation(location);
    }
}
