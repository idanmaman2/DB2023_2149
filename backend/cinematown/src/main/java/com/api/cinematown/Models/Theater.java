package com.api.cinematown.Models;

import jakarta.persistence.*;

import java.math.BigInteger;
@Entity
@Table(name = "theater")
public class Theater {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id ;
    public String street_name ;
    public String city_name ;
    public String region_name ;
    public float lat ;
    public float lon ;



}
