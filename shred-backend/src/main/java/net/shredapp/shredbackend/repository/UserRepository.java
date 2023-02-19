package net.shredapp.shredbackend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import net.shredapp.shredbackend.model.User;

public interface UserRepository extends MongoRepository<User, String> {

  User findByUsername(String username);

  Boolean existsByUsername(String username);
}
