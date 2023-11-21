import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as БазаДанныхЛСMixin
} from '../mixins/regenerated/models/i-i-s-kk-база-данных-л-с';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(БазаДанныхЛСMixin, Validations, {
});

defineProjections(Model);

export default Model;
