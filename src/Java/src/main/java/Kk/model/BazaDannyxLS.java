package Kk.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kk.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: БазаДанныхЛС
 */
@Entity(name = "IISKkБазаДанныхЛС")
@Table(schema = "public", name = "БазаДанныхЛС")
public class BazaDannyxLS {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДоляСобст")
    private Integer долясобст;

    @Column(name = "НомерЛицСчет")
    private Integer номерлицсчет;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "IDжильца")
    private Integer idжильца;

    @Column(name = "ДатаФормЛС")
    private Date датаформлс;

    @Column(name = "КолПрожив")
    private Integer колпрожив;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZHilec")
    @Convert("ZHilec")
    @Column(name = "Жилец", length = 16, unique = true, nullable = false)
    private UUID _zhilecid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZHilec", insertable = false, updatable = false)
    private ZHilec zhilec;


    public BazaDannyxLS() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getДоляСобст() {
      return долясобст;
    }

    public void setДоляСобст(Integer долясобст) {
      this.долясобст = долясобст;
    }

    public Integer getНомерЛицСчет() {
      return номерлицсчет;
    }

    public void setНомерЛицСчет(Integer номерлицсчет) {
      this.номерлицсчет = номерлицсчет;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getIDжильца() {
      return idжильца;
    }

    public void setIDжильца(Integer idжильца) {
      this.idжильца = idжильца;
    }

    public Date getДатаФормЛС() {
      return датаформлс;
    }

    public void setДатаФормЛС(Date датаформлс) {
      this.датаформлс = датаформлс;
    }

    public Integer getКолПрожив() {
      return колпрожив;
    }

    public void setКолПрожив(Integer колпрожив) {
      this.колпрожив = колпрожив;
    }


}