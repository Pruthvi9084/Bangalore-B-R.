package com.route.route.model;

import jakarta.persistence.*;

@Entity
@Table(name = "routes")
public class DurationDistance {
    @Id
    @Column(name = "route_no")
    private String routeNo;

    @Column(name = "distance")
    private String distance;
    @Column(name = "origin_location")
    private String originLocation;
    @Column(name = "destination_location")
    private String destinationLocation;

    @Column(name = "duration")
    private String duration;

    public String getRouteNo() {
        return routeNo;
    }

    public String getDistance() {
        return distance;
    }

    public String getOriginLocation() {
        return originLocation;
    }

    public String getDestinationLocation() {
        return destinationLocation;
    }

    public String getDuration() {
        return duration;
    }
    
}
