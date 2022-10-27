package com.pipegi.consciouscitizen.repository;

import com.pipegi.consciouscitizen.entity.Actor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.lang.NonNull;

import java.util.Optional;

public interface ActorRepository extends JpaRepository<Actor, Integer> {
}
