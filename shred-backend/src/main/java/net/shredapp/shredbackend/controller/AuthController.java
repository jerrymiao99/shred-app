package net.shredapp.shredbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import net.shredapp.shredbackend.model.LoginRequest;
import net.shredapp.shredbackend.model.SignupRequest;
import net.shredapp.shredbackend.model.SaveRequest;
import net.shredapp.shredbackend.model.User;
import net.shredapp.shredbackend.repository.UserRepository;

@CrossOrigin(origins = "https://shredapp.net")
@RestController
public class AuthController {
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserRepository userRepository;

  @Autowired
  BCryptPasswordEncoder encoder;

  @PostMapping("/")
  public ResponseEntity<Object> getFlow(@RequestBody LoginRequest getRequest) {
    return ResponseEntity
        .ok(userRepository.findByUsername(getRequest.getUsername()).getRfInstance());
  }

  @PutMapping("/")
  public ResponseEntity<String> saveFlow(@RequestBody SaveRequest saveRequest) {
    User user = userRepository.findByUsername(saveRequest.getUsername());
    user.setRfInstance(saveRequest.getRfInstance());
    userRepository.save(user);
    return ResponseEntity
        .ok("Save successful!");
  }

  @PostMapping("/login")
  public ResponseEntity<String> authenticateUser(@RequestBody LoginRequest loginRequest) {
    Authentication authentication;
    try {
      authentication = authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
    } catch (AuthenticationException ae) {
      return ResponseEntity.badRequest().body("Either the username does not exist or the password is incorrect.");
    }

    SecurityContextHolder.getContext().setAuthentication(authentication);

    User user = (User) authentication.getPrincipal();
    return ResponseEntity
        .ok("username: " + user.getUsername() + ", password: " + user.getPassword() + ", rf: " + user.getRfInstance());
  }

  @PostMapping("/signup")
  public ResponseEntity<String> registerUser(@RequestBody SignupRequest signUpRequest) {
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity
          .badRequest()
          .body("Username is already taken.");
    }
    User user = new User(signUpRequest.getUsername(),
        encoder.encode(signUpRequest.getPassword()),
        signUpRequest.getRfInstance());
    userRepository.save(user);
    return ResponseEntity.ok("User registered successfully!");
  }
}
