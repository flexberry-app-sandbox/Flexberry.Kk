package Kk.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kk.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Организация
 */
@Entity(name = "IISKkОрганизация")
@Table(schema = "public", name = "Организация")
public class Organizaciya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDорганизация")
    private Integer idорганизация;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "Телефон")
    private Integer телефон;

    @Column(name = "Email")
    private String email;

    @Column(name = "РасчетныйСчет")
    private Integer расчетныйсчет;

    @Column(name = "Банк")
    private String банк;

    @Column(name = "ИНН")
    private Integer инн;

    @Column(name = "БИК")
    private Integer бик;

    @Column(name = "КПП")
    private Integer кпп;

    @Column(name = "КорреСчет")
    private Integer корресчет;


    public Organizaciya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getIDорганизация() {
      return idорганизация;
    }

    public void setIDорганизация(Integer idорганизация) {
      this.idорганизация = idорганизация;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }

    public String getEmail() {
      return email;
    }

    public void setEmail(String email) {
      this.email = email;
    }

    public Integer getРасчетныйСчет() {
      return расчетныйсчет;
    }

    public void setРасчетныйСчет(Integer расчетныйсчет) {
      this.расчетныйсчет = расчетныйсчет;
    }

    public String getБанк() {
      return банк;
    }

    public void setБанк(String банк) {
      this.банк = банк;
    }

    public Integer getИНН() {
      return инн;
    }

    public void setИНН(Integer инн) {
      this.инн = инн;
    }

    public Integer getБИК() {
      return бик;
    }

    public void setБИК(Integer бик) {
      this.бик = бик;
    }

    public Integer getКПП() {
      return кпп;
    }

    public void setКПП(Integer кпп) {
      this.кпп = кпп;
    }

    public Integer getКорреСчет() {
      return корресчет;
    }

    public void setКорреСчет(Integer корресчет) {
      this.корресчет = корресчет;
    }


}