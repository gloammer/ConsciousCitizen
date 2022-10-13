package com.pipegi.consciouscitizen.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Table(name = "template")
@Entity
@Getter
@Setter
public class Template {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    protected int id;

    @Column(name = "template_name", nullable = false, length = 150)
    protected String templateName;

    @Column(name = "template_text", nullable = false, length = 1500)
    protected String templateText;

}
