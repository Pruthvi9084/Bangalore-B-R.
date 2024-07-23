package com.route.route.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "routes")
public class BusTimings1 {

    @Id
    @Column(name = "route_no")
    private String routeNo;

    @Column(name = "departure_times")
    private String departureTimes;

    @Column(name = "arrival_times")
    private String arrivalTimes;

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

    public String getDepartureTimes() {
        return departureTimes;
    }

    public void setDepartureTimes(String departureTimes) {
        this.departureTimes = departureTimes;
    }

    public String getArrivalTimes() {
        return arrivalTimes;
    }

    public void setArrivalTimes(String arrivalTimes) {
        this.arrivalTimes = arrivalTimes;
    }
}
