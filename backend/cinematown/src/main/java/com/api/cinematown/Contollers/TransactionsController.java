package com.api.cinematown.Contollers;

import com.api.cinematown.Models.Schedule;
import com.api.cinematown.Models.Transactions;
import com.api.cinematown.Repositories.ScheduleRepository;
import com.api.cinematown.Repositories.TransactionsRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityTransaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin
@Controller
public class TransactionsController {
    @Autowired
    private TransactionsRepository transactionsRepository;
    @SchemaMapping(typeName ="Mutation" , field = "buyMovieTicket")
    public String buyMovieTicket(@Argument String paying_method , @Argument String costumer_id , @Argument Long seat_id , @Argument Long sched_id) {
        System.out.println(paying_method);
        System.out.println(costumer_id);
        System.out.println(seat_id);
        System.out.println(seat_id);
        System.out.println(sched_id);
        return "cool bro";
    }
}


