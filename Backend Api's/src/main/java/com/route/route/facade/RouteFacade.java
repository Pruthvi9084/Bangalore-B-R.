package com.route.route.facade;

import com.route.route.model.*;
import com.route.route.repository.BusStopsRepository;
import com.route.route.repository.BusTimings1Repository;
import com.route.route.repository.BusTimings2Repository;
import com.route.route.repository.DurationDistanceRepository;
import com.route.route.repositoryFactory.RepositoryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class RouteFacade {

    @Autowired
    private RepositoryFactory repositoryFactory;

    public List<DurationDistance> getDurationDistanceByOriginAndDestination(String origin, String destination) {
        DurationDistanceRepository repository = (DurationDistanceRepository) repositoryFactory.createRepository("DurationDistance");
        return repository.findByOriginLocationAndDestinationLocation(origin, destination);
    }

    public List<BusStops> getBusStopsByOriginAndDestination(String origin, String destination) {
        BusStopsRepository repository = (BusStopsRepository) repositoryFactory.createRepository("BusStops");
        return repository.findByOriginLocationAndDestinationLocation(origin, destination);
    }

    public List<BusTimings1> getBusTimings1ByOriginAndDestination(String origin, String destination) {
        BusTimings1Repository repository = (BusTimings1Repository) repositoryFactory.createRepository("BusTimings1");
        return repository.findByOriginLocationAndDestinationLocation(origin, destination);
    }

    public List<BusTimings2> getBusTimings2ByOriginAndDestination(String origin, String destination) {
        BusTimings2Repository repository = (BusTimings2Repository) repositoryFactory.createRepository("BusTimings2");
        return repository.findByOriginLocationAndDestinationLocation(origin, destination);
    }
}
