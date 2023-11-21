package Kk.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kk.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Жилец
 */
@Entity(name = "IISKkЖилец")
@Table(schema = "public", name = "Жилец")
public class ZHilec {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDжильца")
    private Integer idжильца;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "Телефон")
    private Integer телефон;


    public ZHilec() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getIDжильца() {
      return idжильца;
    }

    public void setIDжильца(Integer idжильца) {
      this.idжильца = idжильца;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
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


}