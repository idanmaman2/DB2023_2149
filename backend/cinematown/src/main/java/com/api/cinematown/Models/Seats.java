package com.api.cinematown.Models;

import jakarta.persistence.*;
import org.hibernate.annotations.Formula;

import java.math.BigInteger;

@Entity
@Table(name = "seats")
public class Seats {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id  ;
    public int  rowseat ;
    public int  columnseat;
    //@ManyToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "theated_hall_id", referencedColumnName = "id" , table = "seats", nullable = false)
    //public Theater_Hall theaterHall ;



}

