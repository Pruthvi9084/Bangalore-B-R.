package com.route.route.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "routes")
public class BusTimings2 {

    @Id
    @Column(name = "route_no")
    private String routeNo;

    @Column(name = "departure_from_destination")
    private String departure_from_destination;

    @Column(name = "arrival_at_origin")
    private String arrival_at_origin;

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

    public String getDeparture_from_destination() {
        return departure_from_destination;
    }

    public void setDeparture_from_destination(String departure_from_destination) {
        this.departure_from_destination = departure_from_destination;
    }

    public String getArrival_at_origin() {
        return arrival_at_origin;
    }

    public void setArrival_at_origin(String arrival_at_origin) {
        this.arrival_at_origin = arrival_at_origin;
    }

    public void setRouteNo(String routeNo) {
        this.routeNo = routeNo;
    }


}
