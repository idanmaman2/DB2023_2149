package com.api.cinematown.Models;

import jakarta.persistence.*;
import jdk.jfr.Unsigned;

import java.math.BigInteger;
import java.util.Set;

@Entity
@Table(name = "theater_hall")
public class Theater_Hall {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id ;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "theater_id", referencedColumnName = "id")
    public Theater theater ;

    @OneToMany(mappedBy = "theater_hall")
    Set<Schedule> schedules;


}

