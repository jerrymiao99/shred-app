package net.shredapp.shredbackend.model;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Tricks {
  private List<Node> nodes;
  private List<Edge> edges;
}
