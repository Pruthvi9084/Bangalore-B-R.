package com.route.route.repository;

import com.route.route.model.BusTimings1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface BusTimings1Repository extends JpaRepository<BusTimings1, String> {
    List<BusTimings1> findByOriginLocationAndDestinationLocation(String originLocation, String destinationLocation);
}