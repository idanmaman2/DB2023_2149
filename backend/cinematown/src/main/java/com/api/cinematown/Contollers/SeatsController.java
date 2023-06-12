package com.api.cinematown.Contollers;

import com.api.cinematown.Models.Schedule;
import com.api.cinematown.Models.Seats;
import com.api.cinematown.Repositories.ScheduleRepository;
import com.api.cinematown.Repositories.SeatsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin
@Controller
public class SeatsController {
    @Autowired
    private SeatsRepository seatsRepository;


    @SchemaMapping(typeName ="Query" , value = "findAllSeatsBySchedule")
    public List<Seats> findAllSeatsBySchedule(@Argument Long  id) {
        return seatsRepository.getAllSeatsBySchedule(id);
    }


    @SchemaMapping(typeName ="Query" , value = "findAllFreeSeatsBySchedule")
    public List<Seats> findAllFreeSeatsBySchedule(@Argument Long  id) {
        return seatsRepository.getAllFreeSeatsBySchedule(id);
    }

    @SchemaMapping(typeName ="Query" , value = "findAllBrokenSeatsByTheaterHall")
    public List<Seats> findAllBrokenSeatsByTheaterHall(@Argument Long  id) {
        return seatsRepository.getAllBrokenSeatsByTheaterHall(id);
    }
}
