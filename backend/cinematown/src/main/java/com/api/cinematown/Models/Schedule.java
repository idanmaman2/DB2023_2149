package com.api.cinematown.Models;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "schedule")
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    public String time;
    public boolean is_3D ;

    @ManyToOne(optional = false , fetch = FetchType.EAGER,cascade = CascadeType.ALL )
    @JoinColumn(table ="schedule" , referencedColumnName ="id" ,columnDefinition="bigint UNSIGNED NOT NULL", name = "mv_id",nullable = false )
    public Movie movie;

    @ManyToOne(optional = false ,fetch = FetchType.EAGER,cascade = CascadeType.ALL )
    @JoinColumn(table ="schedule" ,referencedColumnName ="id" ,columnDefinition="bigint UNSIGNED NOT NULL",name = "theater_hall_id",nullable = false)
    public Theater_Hall theater_hall;


}
