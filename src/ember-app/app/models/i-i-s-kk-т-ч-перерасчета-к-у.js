import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧПерерасчетаКУMixin
} from '../mixins/regenerated/models/i-i-s-kk-т-ч-перерасчета-к-у';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧПерерасчетаКУMixin, Validations, {
});

defineProjections(Model);

export default Model;
