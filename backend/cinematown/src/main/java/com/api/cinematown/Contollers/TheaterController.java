package com.api.cinematown.Contollers;

import com.api.cinematown.Models.Theater;
import com.api.cinematown.Repositories.TheaterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;

@CrossOrigin
@Controller
public class TheaterController {
    @Autowired
    private TheaterRepository theaterRepository;
    @SchemaMapping(typeName ="Query" , value = "findAllTheaters")
    public List<Theater> findAllTheaters() {
        return theaterRepository.findAll();
    }
    @SchemaMapping(typeName ="Query" , value = "findTheaterById")
    public Theater findTheaterById(@Argument Long id) {
        return theaterRepository.findById(id).get();
    }
    @SchemaMapping(typeName ="Query" , value = "findAllAvailableTheaterByDate")
    public List<Theater> findAllAvailableTheaterByDates(@Argument String date) {
        return theaterRepository.findByDate(date);
    }



}
