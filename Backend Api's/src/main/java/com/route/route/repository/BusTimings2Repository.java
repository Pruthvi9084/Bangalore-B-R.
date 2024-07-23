package com.route.route.repository;

import com.route.route.model.BusTimings2;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository

public interface BusTimings2Repository extends JpaRepository<BusTimings2, String> {
    List<BusTimings2> findByOriginLocationAndDestinationLocation(String originLocation, String destinationLocation);
}