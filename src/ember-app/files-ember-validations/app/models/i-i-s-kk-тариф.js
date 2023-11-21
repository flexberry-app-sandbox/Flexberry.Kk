import {
  defineNamespace,
  defineProjections,
  Model as ТарифMixin
} from '../mixins/regenerated/models/i-i-s-kk-тариф';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТарифMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
