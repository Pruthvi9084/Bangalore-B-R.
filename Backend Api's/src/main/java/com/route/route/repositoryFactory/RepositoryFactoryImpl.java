package com.route.route.repositoryFactory;

import com.route.route.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class RepositoryFactoryImpl implements RepositoryFactory {

    @Autowired
    private BusStopsRepository busStopsRepository;

    @Autowired
    private BusTimings1Repository busTimings1Repository;

    @Autowired
    private DurationDistanceRepository durationDistanceRepository;

    @Autowired
    private BusTimings2Repository busTimings2Repository;

    @Autowired
    private RestaurantsRepository restaurantsRepository;

    @Override
    public JpaRepository<?, ?> createRepository(String repositoryType) {
        switch (repositoryType) {
            case "BusStops":
                return busStopsRepository;
            case "BusTimings1":
                return busTimings1Repository;
            case "DurationDistance":
                return durationDistanceRepository;
            case "BusTimings2":
                return busTimings2Repository;
            case "Restaurant":
                return restaurantsRepository;
            default:
                throw new IllegalArgumentException("Invalid repository type: " + repositoryType);
        }
    }
}
