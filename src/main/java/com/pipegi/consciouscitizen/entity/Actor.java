package com.pipegi.consciouscitizen.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Table(name = "actor")
@Entity
@Setter
@Getter
public class Actor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    protected int id;

    @Column(name = "first_name", nullable = false, length = 100)
    protected String firstName;

    @Column(name = "middle_name", nullable = false, length = 100)
    protected String middleName;

    @Column(name = "last_name", length = 100)
    protected String lastName;

    @Column(name = "phone_number", nullable = false, length = 12)
    protected String phoneNumber;

    @Column(name = "email", nullable = false, length = 100)
    protected String email;

    @Column(name = "city", nullable = false, length = 100)
    protected String city;

    @Column(name = "street", nullable = false, length = 100)
    protected String street;

    @Column(name = "building", nullable = false, length = 20)
    protected String building;

    @Column(name = "apartment", length = 20)
    protected String apartment;

    @Column(name = "login", nullable = false, unique = true, length = 50)
    protected String login;

    @Column(name = "password", nullable = false, length = 20)
    protected String password;

    @Column(name = "status", nullable = false)
    protected boolean status;

    @Column(name = "newsletter", nullable = false)
    protected boolean newsletter;

    @ManyToOne(cascade = CascadeType.MERGE, optional = false)
    @JoinColumn(name = "role_id", nullable = false)
    protected Role role;

}
