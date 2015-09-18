package net.odtel.knowledgy.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;

import javax.persistence.EntityManagerFactory;

@Configuration
@ComponentScan({"net.odtel.knowledgy.service", "net.odtel.knowledgy.dao"})
public class RootContextConfig {

    @Bean(name = "transactionManager")
    public PlatformTransactionManager transactionManager (EntityManagerFactory entityManagerFactory,
                                                          DriverManagerDataSource dataSource ) {
        JpaTransactionManager jpaTransactionManager = new JpaTransactionManager();
        jpaTransactionManager.setEntityManagerFactory(entityManagerFactory);
        jpaTransactionManager.setDataSource(dataSource);
        return jpaTransactionManager;
    }
}
