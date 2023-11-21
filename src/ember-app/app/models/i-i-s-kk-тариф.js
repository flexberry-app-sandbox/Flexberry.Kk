import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТарифMixin
} from '../mixins/regenerated/models/i-i-s-kk-тариф';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТарифMixin, Validations, {
});

defineProjections(Model);

export default Model;
