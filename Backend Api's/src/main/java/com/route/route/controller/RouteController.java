package com.route.route.controller;

import com.route.route.facade.RouteFacade;
import com.route.route.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/routes")
public class RouteController {

    @Autowired
    private RouteFacade routeFacade;

    @GetMapping("/ddr")
    public ResponseEntity<List<DurationDistance>> getRoute1ByOriginDestination(
            @RequestParam String origin,
            @RequestParam String destination) {
        List<DurationDistance> routes = routeFacade.getDurationDistanceByOriginAndDestination(origin, destination);
        return ResponseEntity.ok(routes);
    }

    @GetMapping("/bus_stops")
    public ResponseEntity<List<BusStops>> getRoute2ByOriginDestination(
            @RequestParam String origin,
            @RequestParam String destination) {
        List<BusStops> routes = routeFacade.getBusStopsByOriginAndDestination(origin, destination);
        return ResponseEntity.ok(routes);
    }

    @GetMapping("/orgtdest")
    public ResponseEntity<List<BusTimings1>> getRoute3ByOriginDestination(
            @RequestParam String origin,
            @RequestParam String destination) {
        List<BusTimings1> routes = routeFacade.getBusTimings1ByOriginAndDestination(origin, destination);
        return ResponseEntity.ok(routes);
    }

    @GetMapping("/desttorg")
    public ResponseEntity<List<BusTimings2>> getRoute4ByOriginDestination(
            @RequestParam String origin,
            @RequestParam String destination) {
        List<BusTimings2> routes = routeFacade.getBusTimings2ByOriginAndDestination(origin, destination);
        return ResponseEntity.ok(routes);
    }
}
