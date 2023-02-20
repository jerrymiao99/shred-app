package net.shredapp.shredbackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class SaveRequest {
  private String username;
  private Object rfInstance;
}
