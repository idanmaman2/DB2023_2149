package com.api.cinematown.Models;

import jakarta.persistence.*;

import java.util.Set;


@Entity
@Table(name = "genre")
public class Genre {

    @Id
    public Long id ;

    public String name ;
    @ManyToMany(mappedBy = "genres")
    public Set<Movie> movies;
}
