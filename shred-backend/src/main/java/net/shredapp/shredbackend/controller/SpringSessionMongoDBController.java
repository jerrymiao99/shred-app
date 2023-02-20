package net.shredapp.shredbackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.HttpSession;

@RestController
public class SpringSessionMongoDBController {

  // @GetMapping("/")
  // public ResponseEntity<Object> getNodesEdges(HttpSession session) {
  // return ResponseEntity.ok(session.getAttribute("tricks"));
  // }

  // @PutMapping("/")
  // public ResponseEntity<Object> updateNodesEdges(HttpSession session,
  // @RequestBody Object t) {
  // session.setAttribute("tricks", t);
  // return ResponseEntity.ok(session.getAttribute("tricks"));
  // }

  // @PutMapping("/")
  // public ResponseEntity<Object> updateNodesEdges(HttpSession session) {
  // return ResponseEntity.ok(null);
  // }

  @GetMapping("/count")
  public ResponseEntity<Integer> count(HttpSession session) {

    Integer counter = (Integer) session.getAttribute("count");

    if (counter == null) {
      counter = 1;
    } else {
      counter++;
    }

    session.setAttribute("count", counter);

    return ResponseEntity.ok(counter);
  }
}
