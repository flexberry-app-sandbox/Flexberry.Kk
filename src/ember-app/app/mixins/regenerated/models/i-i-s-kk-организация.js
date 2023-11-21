import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  email: DS.attr('string'),
  iDорганизация: DS.attr('number'),
  адрес: DS.attr('string'),
  банк: DS.attr('string'),
  бИК: DS.attr('number'),
  иНН: DS.attr('number'),
  корреСчет: DS.attr('number'),
  кПП: DS.attr('number'),
  наименование: DS.attr('string'),
  расчетныйСчет: DS.attr('number'),
  телефон: DS.attr('number')
});

export let ValidationRules = {
  email: {
    descriptionKey: 'models.i-i-s-kk-организация.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  iDорганизация: {
    descriptionKey: 'models.i-i-s-kk-организация.validations.iDорганизация.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-kk-организация.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  банк: {
    descriptionKey: 'models.i-i-s-kk-организация.validations.банк.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  бИК: {
    descriptionKey: 'models.i-i-s-kk-организация.validations.бИК.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-kk-организация.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  корреСчет: {
    descriptionKey: 'models.i-i-s-kk-организация.validations.корреСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кПП: {
    descriptionKey: 'models.i-i-s-kk-организация.validations.кПП.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-kk-организация.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расчетныйСчет: {
    descriptionKey: 'models.i-i-s-kk-организация.validations.расчетныйСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-kk-организация.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОрганизацияE', 'i-i-s-kk-организация', {
    iDорганизация: attr('I dорганизация', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    email: attr('Email', { index: 4 }),
    расчетныйСчет: attr('Расчетный счет', { index: 5 }),
    банк: attr('Банк', { index: 6 }),
    иНН: attr('ИНН', { index: 7 }),
    бИК: attr('БИК', { index: 8 }),
    кПП: attr('КПП', { index: 9 }),
    корреСчет: attr('Корре счет', { index: 10 })
  });

  modelClass.defineProjection('ОрганизацияL', 'i-i-s-kk-организация', {
    iDорганизация: attr('I dорганизация', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    email: attr('Email', { index: 4 }),
    расчетныйСчет: attr('Расчетный счет', { index: 5 }),
    банк: attr('Банк', { index: 6 }),
    иНН: attr('ИНН', { index: 7 }),
    бИК: attr('БИК', { index: 8 }),
    кПП: attr('КПП', { index: 9 }),
    корреСчет: attr('Корре счет', { index: 10 })
  });
};
