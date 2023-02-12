package net.shredapp.shredbackend.model;

import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Node {
  private String id;
  private String type;
  private Map<String, String> data;
  private Map<String, String> position;
}
