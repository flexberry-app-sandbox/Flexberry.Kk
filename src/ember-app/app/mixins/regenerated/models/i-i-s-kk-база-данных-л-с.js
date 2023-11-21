import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDжильца: DS.attr('number'),
  дата: DS.attr('date'),
  датаФормЛС: DS.attr('date'),
  доляСобст: DS.attr('number'),
  колПрожив: DS.attr('number'),
  номерЛицСчет: DS.attr('number'),
  жилец: DS.belongsTo('i-i-s-kk-жилец', { inverse: null, async: false })
});

export let ValidationRules = {
  iDжильца: {
    descriptionKey: 'models.i-i-s-kk-база-данных-л-с.validations.iDжильца.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-kk-база-данных-л-с.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаФормЛС: {
    descriptionKey: 'models.i-i-s-kk-база-данных-л-с.validations.датаФормЛС.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  доляСобст: {
    descriptionKey: 'models.i-i-s-kk-база-данных-л-с.validations.доляСобст.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колПрожив: {
    descriptionKey: 'models.i-i-s-kk-база-данных-л-с.validations.колПрожив.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерЛицСчет: {
    descriptionKey: 'models.i-i-s-kk-база-данных-л-с.validations.номерЛицСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  жилец: {
    descriptionKey: 'models.i-i-s-kk-база-данных-л-с.validations.жилец.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БазаДанныхЛСE', 'i-i-s-kk-база-данных-л-с', {
    дата: attr('Дата', { index: 0 }),
    iDжильца: attr('I dжильца', { index: 1 })
  });

  modelClass.defineProjection('БазаДанныхЛСL', 'i-i-s-kk-база-данных-л-с', {
    дата: attr('Дата', { index: 0 }),
    iDжильца: attr('I dжильца', { index: 1 })
  });
};
