package com.route.route.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "routes")
public class BusStops {

    @Id
    @Column(name = "route_no")
    private String routeNo;
    
    @Column(name = "bus_stops")
    private String busStops;

    @Column(name = "origin_location")
    private String originLocation;

    @Column(name = "destination_location")
    private String destinationLocation;

    public String getOriginLocation() {
        return originLocation;
    }

    public void setOriginLocation(String originLocation) {
        this.originLocation = originLocation;
    }

    public String getDestinationLocation() {
        return destinationLocation;
    }

    public void setDestinationLocation(String destinationLocation) {
        this.destinationLocation = destinationLocation;
    }

    public String getRouteNo() {
        return routeNo;
    }

    public void setRouteNo(String routeNo) {
        this.routeNo = routeNo;
    }

    public String getBusStops() {
        return busStops;
    }

    public void setBusStops(String busStops) {
        this.busStops = busStops;
    }


}
