import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  email: DS.attr('string'),
  iDдолжности: DS.attr('number'),
  iDсотрудника: DS.attr('number'),
  адрес: DS.attr('string'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-kk-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  email: {
    descriptionKey: 'models.i-i-s-kk-сотрудники.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  iDдолжности: {
    descriptionKey: 'models.i-i-s-kk-сотрудники.validations.iDдолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDсотрудника: {
    descriptionKey: 'models.i-i-s-kk-сотрудники.validations.iDсотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-kk-сотрудники.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-kk-сотрудники.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-kk-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-kk-сотрудники.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-kk-сотрудники', {
    iDсотрудника: attr('I dсотрудника', { index: 0 }),
    iDдолжности: attr('I dдолжности', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    фИО: attr('ФИО', { index: 3 }),
    email: attr('Email', { index: 4 }),
    адрес: attr('Адрес', { index: 5 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-kk-сотрудники', {
    iDсотрудника: attr('I dсотрудника', { index: 0 }),
    iDдолжности: attr('I dдолжности', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    фИО: attr('ФИО', { index: 3 }),
    email: attr('Email', { index: 4 }),
    адрес: attr('Адрес', { index: 5 })
  });
};
