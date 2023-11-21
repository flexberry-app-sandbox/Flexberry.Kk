import {
  defineNamespace,
  defineProjections,
  Model as ТЧквитанцииMixin
} from '../mixins/regenerated/models/i-i-s-kk-т-чквитанции';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧквитанцииMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
