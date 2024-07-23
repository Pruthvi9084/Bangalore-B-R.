package com.route.route.repository;

import com.route.route.model.BusStops;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BusStopsRepository extends JpaRepository<BusStops, String> {
    List<BusStops> findByOriginLocationAndDestinationLocation(String originLocation, String destinationLocation);
}
