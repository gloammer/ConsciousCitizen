package com.pipegi.consciouscitizen.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Table(name = "address")
@Entity
@Getter
@Setter
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    protected int id;

    @Column(name = "latitude", nullable = false)
    protected double latitude;

    @Column(name = "longitude", nullable = false)
    protected double longitude;

    @Column(name = "city", nullable = false, length = 100)
    protected String city;

    @Column(name = "street", nullable = false, length = 100)
    protected String street;

    @Column(name = "building", nullable = false, length = 20)
    protected String building;

}
