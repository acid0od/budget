package net.odtel.budget.init;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManagerFactory;

@Component
public class TestDataInitializer {

    @Autowired
    private EntityManagerFactory entityManagerFactory;


    public void init() throws Exception {

        /*SessionFactory sessionFactory = entityManagerFactory.unwrap(SessionFactory.class);

        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();

        User user = new User("test123", "$2a$10$x9vXeDsSC2109FZfIJz.pOZ4dJ056xBpbesuMJg3jZ.ThQkV119tS", "test@email.com", 1000L);

        session.persist(user);

        GregorianCalendar gregorianCalendar = new GregorianCalendar(115 + 1900, 7, 12);

        session.persist(new Purchase("Type", "Description", gregorianCalendar.getTime(), 10));
        session.persist(new Purchase("Type-1", "Description-1", gregorianCalendar.getTime(), 20));
        session.persist(new Purchase("Type-2", "Description-2", gregorianCalendar.getTime(), 30));
        session.persist(new Purchase("Type-2", "Description-3", gregorianCalendar.getTime(), 30));
        session.persist(new Purchase("Type-2", "Description-4", gregorianCalendar.getTime(), 310));

        transaction.commit();*/
    }
}