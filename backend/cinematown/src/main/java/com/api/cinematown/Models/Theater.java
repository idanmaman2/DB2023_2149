package com.api.cinematown.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.math.BigInteger;
@Entity
@Table(name = "Theater")
public class Theater {
    public String street_name ;
    public String city_name ;
    public String region_name ;
    public float lat ;
    public float lon ;

    @Id
    public Long id ;

}
