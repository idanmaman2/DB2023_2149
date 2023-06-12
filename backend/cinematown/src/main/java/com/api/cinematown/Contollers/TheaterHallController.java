package com.api.cinematown.Contollers;

import com.api.cinematown.Models.Movie;
import com.api.cinematown.Models.Theater;
import com.api.cinematown.Models.Theater_Hall;
import com.api.cinematown.Repositories.MovieRepository;
import com.api.cinematown.Repositories.TheaterRepository;
import com.api.cinematown.Repositories.Theater_HallRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin
@Controller
public class TheaterHallController {
    @Autowired
    private Theater_HallRepository theaterHallRepository;
    @SchemaMapping(typeName ="Query" , value = "findTheaterHallById")
    public Theater_Hall findTheaterHallById(@Argument Long id) {
        return theaterHallRepository.findById(id).get();
    }
}
