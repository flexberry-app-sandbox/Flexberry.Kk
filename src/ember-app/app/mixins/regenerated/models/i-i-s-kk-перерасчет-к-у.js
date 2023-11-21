import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDжильца: DS.attr('number'),
  iDорганизация: DS.attr('number'),
  iDсотрудника: DS.attr('number'),
  датаНач: DS.attr('date'),
  датаОкон: DS.attr('date'),
  датаФорДок: DS.attr('date'),
  днейПерер: DS.attr('number'),
  номер: DS.attr('number'),
  основПерер: DS.attr('string'),
  часовПерер: DS.attr('number'),
  жилец: DS.belongsTo('i-i-s-kk-жилец', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-kk-организация', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-kk-сотрудники', { inverse: null, async: false }),
  тЧПерерасчетаКУ: DS.hasMany('i-i-s-kk-т-ч-перерасчета-к-у', { inverse: 'перерасчетКУ', async: false })
});

export let ValidationRules = {
  iDжильца: {
    descriptionKey: 'models.i-i-s-kk-перерасчет-к-у.validations.iDжильца.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDорганизация: {
    descriptionKey: 'models.i-i-s-kk-перерасчет-к-у.validations.iDорганизация.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDсотрудника: {
    descriptionKey: 'models.i-i-s-kk-перерасчет-к-у.validations.iDсотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датаНач: {
    descriptionKey: 'models.i-i-s-kk-перерасчет-к-у.validations.датаНач.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкон: {
    descriptionKey: 'models.i-i-s-kk-перерасчет-к-у.validations.датаОкон.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаФорДок: {
    descriptionKey: 'models.i-i-s-kk-перерасчет-к-у.validations.датаФорДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  днейПерер: {
    descriptionKey: 'models.i-i-s-kk-перерасчет-к-у.validations.днейПерер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-kk-перерасчет-к-у.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  основПерер: {
    descriptionKey: 'models.i-i-s-kk-перерасчет-к-у.validations.основПерер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  часовПерер: {
    descriptionKey: 'models.i-i-s-kk-перерасчет-к-у.validations.часовПерер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  жилец: {
    descriptionKey: 'models.i-i-s-kk-перерасчет-к-у.validations.жилец.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-kk-перерасчет-к-у.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-kk-перерасчет-к-у.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧПерерасчетаКУ: {
    descriptionKey: 'models.i-i-s-kk-перерасчет-к-у.validations.тЧПерерасчетаКУ.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПерерасчетКУE', 'i-i-s-kk-перерасчет-к-у', {
    номер: attr('Номер', { index: 0 }),
    iDжильца: attr('I dжильца', { index: 1 }),
    iDорганизация: attr('I dорганизация', { index: 2 }),
    iDсотрудника: attr('I dсотрудника', { index: 3 }),
    тЧПерерасчетаКУ: hasMany('i-i-s-kk-т-ч-перерасчета-к-у', 'Т ч перерасчета КУ', {
      услуга: attr('Услуга', { index: 0 })
    })
  });

  modelClass.defineProjection('ПерерасчетКУL', 'i-i-s-kk-перерасчет-к-у', {
    номер: attr('Номер', { index: 0 }),
    iDжильца: attr('I dжильца', { index: 1 }),
    iDорганизация: attr('I dорганизация', { index: 2 }),
    iDсотрудника: attr('I dсотрудника', { index: 3 })
  });
};
