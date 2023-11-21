import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDжильца: DS.attr('number'),
  iDорганизация: DS.attr('number'),
  iDсотрудника: DS.attr('number'),
  расчетныйПериод: DS.attr('number'),
  суммаКОплате: DS.attr('number'),
  жилец: DS.belongsTo('i-i-s-kk-жилец', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-kk-организация', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-kk-сотрудники', { inverse: null, async: false }),
  тЧквитанции: DS.hasMany('i-i-s-kk-т-чквитанции', { inverse: 'квитанция', async: false })
});

export let ValidationRules = {
  iDжильца: {
    descriptionKey: 'models.i-i-s-kk-квитанция.validations.iDжильца.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDорганизация: {
    descriptionKey: 'models.i-i-s-kk-квитанция.validations.iDорганизация.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDсотрудника: {
    descriptionKey: 'models.i-i-s-kk-квитанция.validations.iDсотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  расчетныйПериод: {
    descriptionKey: 'models.i-i-s-kk-квитанция.validations.расчетныйПериод.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  суммаКОплате: {
    descriptionKey: 'models.i-i-s-kk-квитанция.validations.суммаКОплате.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  жилец: {
    descriptionKey: 'models.i-i-s-kk-квитанция.validations.жилец.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-kk-квитанция.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-kk-квитанция.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧквитанции: {
    descriptionKey: 'models.i-i-s-kk-квитанция.validations.тЧквитанции.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КвитанцияE', 'i-i-s-kk-квитанция', {
    iDжильца: attr('I dжильца', { index: 0 }),
    iDорганизация: attr('I dорганизация', { index: 1 }),
    расчетныйПериод: attr('Расчетный период', { index: 2 }),
    суммаКОплате: attr('Сумма к оплате', { index: 3 }),
    iDсотрудника: attr('I dсотрудника', { index: 4 }),
    тЧквитанции: hasMany('i-i-s-kk-т-чквитанции', 'Т чквитанции', {
      услуга: attr('Услуга', { index: 0 }),
      объемКУ: attr('Объем КУ', { index: 1 }),
      iDтарифа: attr('I dтарифа', { index: 2 })
    })
  });

  modelClass.defineProjection('КвитанцияL', 'i-i-s-kk-квитанция', {
    iDжильца: attr('I dжильца', { index: 0 }),
    iDорганизация: attr('I dорганизация', { index: 1 }),
    расчетныйПериод: attr('Расчетный период', { index: 2 }),
    суммаКОплате: attr('Сумма к оплате', { index: 3 }),
    iDсотрудника: attr('I dсотрудника', { index: 4 })
  });
};
