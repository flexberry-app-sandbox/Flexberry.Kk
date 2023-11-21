import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kk-перерасчет-к-у', 'Unit | Model | i-i-s-kk-перерасчет-к-у', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kk-база-данных-л-с',
    'model:i-i-s-kk-должности',
    'model:i-i-s-kk-жилец',
    'model:i-i-s-kk-квитанция',
    'model:i-i-s-kk-организация',
    'model:i-i-s-kk-перерасчет-к-у',
    'model:i-i-s-kk-сотрудники',
    'model:i-i-s-kk-т-ч-перерасчета-к-у',
    'model:i-i-s-kk-т-чквитанции',
    'model:i-i-s-kk-тариф',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
