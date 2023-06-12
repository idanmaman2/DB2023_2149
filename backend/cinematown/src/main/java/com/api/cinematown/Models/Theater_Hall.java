package com.api.cinematown.Models;

import jakarta.persistence.*;
import jdk.jfr.Unsigned;
import org.hibernate.annotations.Formula;

import java.math.BigInteger;
import java.util.Set;

@Entity
@Table(name = "theater_hall")
public class Theater_Hall {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id ;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "theater_id", referencedColumnName = "id")
    public Theater theater ;

    @OneToMany(mappedBy = "theater_hall")
    Set<Schedule> schedules;

    @Formula("(SELECT MAX(seats.rowseat) from seats WHERE seats.theated_hall_id = id)")
    public int sizeRow ; //virtual field
    @Formula("(SELECT MAX(seats.columnseat) from seats WHERE seats.theated_hall_id = id)")
    public int sizeCol ; //virtual field
    //@OneToMany(mappedBy = "theaterHall")
    //Set<Seats> seats;
}

