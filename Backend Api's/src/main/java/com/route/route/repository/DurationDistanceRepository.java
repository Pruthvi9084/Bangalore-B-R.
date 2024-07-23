package com.route.route.repository;

import com.route.route.model.DurationDistance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository

public interface DurationDistanceRepository extends JpaRepository<DurationDistance, String> {
    List<DurationDistance> findByOriginLocationAndDestinationLocation(String originLocation, String destinationLocation);
}
