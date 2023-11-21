package Kk.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kk.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ТЧПерерасчетаКУ
 */
@Entity(name = "IISKkТЧПерерасчетаКУ")
@Table(schema = "public", name = "ТЧПерерасчетаКУ")
public class TCHPereraschetaKU {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЛицСчет")
    private Integer номерлицсчет;

    @Column(name = "МесяцНачис")
    private Date месяцначис;

    @Column(name = "Услуга")
    private String услуга;

    @Column(name = "СуммаНачис")
    private Integer сумманачис;

    @Column(name = "ТипНачис")
    private String типначис;

    @Column(name = "СуммаКоррек")
    private Integer суммакоррек;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "BazaDannyxLS")
    @Convert("BazaDannyxLS")
    @Column(name = "БазаДанныхЛС", length = 16, unique = true, nullable = false)
    private UUID _bazadannyxlsid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "BazaDannyxLS", insertable = false, updatable = false)
    private BazaDannyxLS bazadannyxls;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PereraschetKU")
    @Convert("PereraschetKU")
    @Column(name = "ПерерасчетКУ", length = 16, unique = true, nullable = false)
    private UUID _pereraschetkuid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PereraschetKU", insertable = false, updatable = false)
    private PereraschetKU pereraschetku;


    public TCHPereraschetaKU() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерЛицСчет() {
      return номерлицсчет;
    }

    public void setНомерЛицСчет(Integer номерлицсчет) {
      this.номерлицсчет = номерлицсчет;
    }

    public Date getМесяцНачис() {
      return месяцначис;
    }

    public void setМесяцНачис(Date месяцначис) {
      this.месяцначис = месяцначис;
    }

    public String getУслуга() {
      return услуга;
    }

    public void setУслуга(String услуга) {
      this.услуга = услуга;
    }

    public Integer getСуммаНачис() {
      return сумманачис;
    }

    public void setСуммаНачис(Integer сумманачис) {
      this.сумманачис = сумманачис;
    }

    public String getТипНачис() {
      return типначис;
    }

    public void setТипНачис(String типначис) {
      this.типначис = типначис;
    }

    public Integer getСуммаКоррек() {
      return суммакоррек;
    }

    public void setСуммаКоррек(Integer суммакоррек) {
      this.суммакоррек = суммакоррек;
    }


}