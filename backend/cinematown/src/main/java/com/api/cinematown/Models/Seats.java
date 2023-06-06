package com.api.cinematown.Models;

import jakarta.persistence.*;

import java.math.BigInteger;

@Entity
public class Seats {
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "theated_hall_id", referencedColumnName = "id")
    public Theater_Hall theaterHall ;
    public int  rowseat ;
    public int  columnseat;

    @Id
    public BigInteger id  ;

}

