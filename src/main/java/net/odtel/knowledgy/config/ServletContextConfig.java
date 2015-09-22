package net.odtel.knowledgy.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
@ComponentScan("net.odtel.knowledgy.controller")
public class ServletContextConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addViewControllers (ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("/main");
        registry.addViewController("/uncaughtException");
    }

    @Bean
    public InternalResourceViewResolver internalResourceViewResolver () {
        InternalResourceViewResolver internalResourceViewResolver = new InternalResourceViewResolver();
        internalResourceViewResolver.setPrefix("/resources/");
        internalResourceViewResolver.setSuffix(".html");
        return internalResourceViewResolver;
    }

    @Override
    public void addResourceHandlers (ResourceHandlerRegistry registry) {
        super.addResourceHandlers(registry);
        registry.addResourceHandler("/resources").addResourceLocations("**");
    }

    @Override
    public void configureDefaultServletHandling (DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }


}
