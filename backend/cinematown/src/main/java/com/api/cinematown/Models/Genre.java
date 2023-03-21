package com.api.cinematown.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

import java.util.Set;


@Entity
public class Genre {

    @Id
    public Long id ;

    public String name ;


    @ManyToMany(mappedBy = "genres")
    public Set<Movie> movies;
}
