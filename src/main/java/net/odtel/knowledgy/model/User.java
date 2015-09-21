package net.odtel.knowledgy.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Version;

@Entity
@Table(name = "USERS")
/*@NamedQueries({
        @NamedQuery(
                name = User.FIND_BY_USERNAME,
                query = "select u from User u where username = :username"
        ),
        @NamedQuery(
                name = User.COUNT_TODAYS_CALORIES,
                query = "select sum(m.calories) from Meal m where m.user.username = :username and m.date = CURRENT_DATE"
        )
})*/
public class User {
    public static final String FIND_BY_USERNAME = "user.findByUserName";
    public static final String COUNT_TODAYS_CALORIES = "user.todaysCalories";

    @Id
    @GeneratedValue
    private Long id;

    @Version
    private Long version;

    @Column
    private String username;

    @Column
    private String passwordDigest;

    @Column
    private String email;

    public User (String username, String passwordDigest, String email, Long id) {
        this.username = username;
        this.passwordDigest = passwordDigest;
        this.email = email;
        this.id = id;
    }

    public String getUsername () {
        return username;
    }

    public void setUsername (String username) {
        this.username = username;
    }

    public String getPasswordDigest () {
        return passwordDigest;
    }

    public void setPasswordDigest (String passwordDigest) {
        this.passwordDigest = passwordDigest;
    }

    public String getEmail () {
        return email;
    }

    public void setEmail (String email) {
        this.email = email;
    }
}
