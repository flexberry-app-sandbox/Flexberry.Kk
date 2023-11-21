import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КвитанцияMixin
} from '../mixins/regenerated/models/i-i-s-kk-квитанция';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КвитанцияMixin, Validations, {
});

defineProjections(Model);

export default Model;
