package net.odtel.budget.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "PURCHASE")
public class Purchase {
    @Id
    @GeneratedValue
    private Long id;

    @Version
    private Long version;

    @Column
    private String type;

    @Column
    private String description;

    @Column
    private Date date;

    @Column
    private Integer cost;

    public Purchase () {

    }

    public Purchase (String type, String description, Date date, Integer cost) {
        this.type = type;
        this.description = description;
        this.date = date;
        this.cost = cost;
    }

    public Long getId () {
        return id;
    }

    public void setId (Long id) {
        this.id = id;
    }

    public String getType () {
        return type;
    }

    public void setType (String type) {
        this.type = type;
    }

    public String getDescription () {
        return description;
    }

    public void setDescription (String description) {
        this.description = description;
    }

    public Date getDate () {
        return date;
    }

    public void setDate (Date date) {
        this.date = date;
    }

    public Integer getCost () {
        return cost;
    }

    public void setCost (Integer cost) {
        this.cost = cost;
    }

    @Override
    public boolean equals (Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Purchase purchase = (Purchase) o;

        if (id != null ? !id.equals(purchase.id) : purchase.id != null) return false;
        if (type != null ? !type.equals(purchase.type) : purchase.type != null) return false;
        if (description != null ? !description.equals(purchase.description) : purchase.description != null)
            return false;
        if (date != null ? !date.equals(purchase.date) : purchase.date != null) return false;
        return !(cost != null ? !cost.equals(purchase.cost) : purchase.cost != null);

    }

    @Override
    public int hashCode () {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + (cost != null ? cost.hashCode() : 0);
        return result;
    }

    @Override
    public String toString () {
        return this.getClass().getName() + "{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", description='" + description + '\'' +
                ", date=" + date +
                ", cost=" + cost +
                '}';
    }
}
