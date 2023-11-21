package Kk.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kk.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Квитанция
 */
@Entity(name = "IISKkКвитанция")
@Table(schema = "public", name = "Квитанция")
public class Kvitanciya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDжильца")
    private Integer idжильца;

    @Column(name = "IDорганизация")
    private Integer idорганизация;

    @Column(name = "РасчетныйПериод")
    private Integer расчетныйпериод;

    @Column(name = "СуммаКОплате")
    private Integer суммакоплате;

    @Column(name = "IDсотрудника")
    private Integer idсотрудника;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZHilec")
    @Convert("ZHilec")
    @Column(name = "Жилец", length = 16, unique = true, nullable = false)
    private UUID _zhilecid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZHilec", insertable = false, updatable = false)
    private ZHilec zhilec;

    @OneToMany(mappedBy = "kvitanciya", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHkvitancii> tchkvitanciis;


    public Kvitanciya() {
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

    public Integer getIDорганизация() {
      return idорганизация;
    }

    public void setIDорганизация(Integer idорганизация) {
      this.idорганизация = idорганизация;
    }

    public Integer getРасчетныйПериод() {
      return расчетныйпериод;
    }

    public void setРасчетныйПериод(Integer расчетныйпериод) {
      this.расчетныйпериод = расчетныйпериод;
    }

    public Integer getСуммаКОплате() {
      return суммакоплате;
    }

    public void setСуммаКОплате(Integer суммакоплате) {
      this.суммакоплате = суммакоплате;
    }

    public Integer getIDсотрудника() {
      return idсотрудника;
    }

    public void setIDсотрудника(Integer idсотрудника) {
      this.idсотрудника = idсотрудника;
    }


}