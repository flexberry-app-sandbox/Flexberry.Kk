import {
  defineNamespace,
  defineProjections,
  Model as БазаДанныхЛСMixin
} from '../mixins/regenerated/models/i-i-s-kk-база-данных-л-с';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БазаДанныхЛСMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
