package com.api.cinematown.Models;

import jakarta.persistence.*;
import jdk.jfr.Unsigned;

import java.math.BigInteger;

@Entity
@Table(name = "theater_hall")
public class Theater_Hall {
    @Id
    @Unsigned
    public Long id ;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "theater_id", referencedColumnName = "id")
    public Theater theater ;



}

