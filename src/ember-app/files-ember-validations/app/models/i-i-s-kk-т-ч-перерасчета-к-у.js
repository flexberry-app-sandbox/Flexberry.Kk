import {
  defineNamespace,
  defineProjections,
  Model as ТЧПерерасчетаКУMixin
} from '../mixins/regenerated/models/i-i-s-kk-т-ч-перерасчета-к-у';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧПерерасчетаКУMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
