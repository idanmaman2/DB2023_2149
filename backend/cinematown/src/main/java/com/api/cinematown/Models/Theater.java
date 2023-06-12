package com.api.cinematown.Models;

import jakarta.persistence.*;
import org.hibernate.annotations.Formula;

import java.math.BigInteger;
import java.util.Set;

@Entity
@Table(name = "theater")
public class Theater {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id ;
    public String street_name ;
    public String city_name ;
    public String region_name ;
    public float lat ;
    public float lon ;



    //@OneToMany(mappedBy = "theater")
    //Set<Theater_Hall> theaterHalls;


}
