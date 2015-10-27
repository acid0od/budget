package net.odtel.budget.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FormData {

    private String type;
    private String description;
    private String vDate;
    private String amount;

    public FormData() {
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getvDate() {
        return vDate;
    }

    public void setvDate(String vDate) {
        this.vDate = vDate;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        FormData formData = (FormData) o;

        if (type != null ? !type.equals(formData.type) : formData.type != null) return false;
        if (description != null ? !description.equals(formData.description) : formData.description != null)
            return false;
        if (vDate != null ? !vDate.equals(formData.vDate) : formData.vDate != null) return false;
        return !(amount != null ? !amount.equals(formData.amount) : formData.amount != null);

    }

    @Override
    public int hashCode() {
        int result = type != null ? type.hashCode() : 0;
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (vDate != null ? vDate.hashCode() : 0);
        result = 31 * result + (amount != null ? amount.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "FormData{" +
                "type='" + type + '\'' +
                ", description='" + description + '\'' +
                ", vDate='" + vDate + '\'' +
                ", amount='" + amount + '\'' +
                '}';
    }
}
