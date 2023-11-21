import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧквитанцииMixin
} from '../mixins/regenerated/models/i-i-s-kk-т-чквитанции';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧквитанцииMixin, Validations, {
});

defineProjections(Model);

export default Model;
