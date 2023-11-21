import {
  defineNamespace,
  defineProjections,
  Model as ЖилецMixin
} from '../mixins/regenerated/models/i-i-s-kk-жилец';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЖилецMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
