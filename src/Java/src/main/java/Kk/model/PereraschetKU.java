package Kk.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kk.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ПерерасчетКУ
 */
@Entity(name = "IISKkПерерасчетКУ")
@Table(schema = "public", name = "ПерерасчетКУ")
public class PereraschetKU {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "ДатаФорДок")
    private Date датафордок;

    @Column(name = "IDжильца")
    private Integer idжильца;

    @Column(name = "ДатаНач")
    private Date датанач;

    @Column(name = "ДатаОкон")
    private Date датаокон;

    @Column(name = "IDорганизация")
    private Integer idорганизация;

    @Column(name = "ОсновПерер")
    private String основперер;

    @Column(name = "ДнейПерер")
    private Integer днейперер;

    @Column(name = "ЧасовПерер")
    private Integer часовперер;

    @Column(name = "IDсотрудника")
    private Integer idсотрудника;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZHilec")
    @Convert("ZHilec")
    @Column(name = "Жилец", length = 16, unique = true, nullable = false)
    private UUID _zhilecid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZHilec", insertable = false, updatable = false)
    private ZHilec zhilec;

    @OneToMany(mappedBy = "pereraschetku", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHPereraschetaKU> tchpereraschetakus;


    public PereraschetKU() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public Date getДатаФорДок() {
      return датафордок;
    }

    public void setДатаФорДок(Date датафордок) {
      this.датафордок = датафордок;
    }

    public Integer getIDжильца() {
      return idжильца;
    }

    public void setIDжильца(Integer idжильца) {
      this.idжильца = idжильца;
    }

    public Date getДатаНач() {
      return датанач;
    }

    public void setДатаНач(Date датанач) {
      this.датанач = датанач;
    }

    public Date getДатаОкон() {
      return датаокон;
    }

    public void setДатаОкон(Date датаокон) {
      this.датаокон = датаокон;
    }

    public Integer getIDорганизация() {
      return idорганизация;
    }

    public void setIDорганизация(Integer idорганизация) {
      this.idорганизация = idорганизация;
    }

    public String getОсновПерер() {
      return основперер;
    }

    public void setОсновПерер(String основперер) {
      this.основперер = основперер;
    }

    public Integer getДнейПерер() {
      return днейперер;
    }

    public void setДнейПерер(Integer днейперер) {
      this.днейперер = днейперер;
    }

    public Integer getЧасовПерер() {
      return часовперер;
    }

    public void setЧасовПерер(Integer часовперер) {
      this.часовперер = часовперер;
    }

    public Integer getIDсотрудника() {
      return idсотрудника;
    }

    public void setIDсотрудника(Integer idсотрудника) {
      this.idсотрудника = idсотрудника;
    }


}