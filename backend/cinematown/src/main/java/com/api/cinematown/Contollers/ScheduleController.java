package com.api.cinematown.Contollers;
import com.api.cinematown.Models.Schedule;
import com.api.cinematown.Repositories.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;
@CrossOrigin
@Controller
public class ScheduleController {
    @Autowired
    private ScheduleRepository scheduleRepository;


    @SchemaMapping(typeName ="Query" , value = "findAllAvailableDates")
    public List<Schedule> findAllAvailableDates() {
        return scheduleRepository.findAll();
    }
}
