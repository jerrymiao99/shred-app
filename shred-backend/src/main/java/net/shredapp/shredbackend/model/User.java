package net.shredapp.shredbackend.model;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document(collection = "users")
public class User implements UserDetails {
  @Id
  private String id;
  private String username;
  private String password;
  private SimpleGrantedAuthority role;
  private Object rfInstance;

  public User(String username, String password, Object rfInstance) {
    this.username = username;
    this.password = password;
    this.role = new SimpleGrantedAuthority("Admin");
    this.rfInstance = rfInstance;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    Set<SimpleGrantedAuthority> roles = new HashSet<SimpleGrantedAuthority>();
    roles.add(role);
    return roles;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }
}
