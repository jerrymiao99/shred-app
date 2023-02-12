package net.shredapp.shredbackend.config;

import java.time.Duration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.session.data.mongo.JacksonMongoSessionConverter;
import org.springframework.session.data.mongo.JdkMongoSessionConverter;
import org.springframework.session.data.mongo.config.annotation.web.http.EnableMongoHttpSession;

@Configuration(proxyBeanMethods = false)
@EnableMongoHttpSession
public class HttpSessionConfig {

  @Bean
  JacksonMongoSessionConverter mongoSessionConverter() {
    return new JacksonMongoSessionConverter();
  }

}
