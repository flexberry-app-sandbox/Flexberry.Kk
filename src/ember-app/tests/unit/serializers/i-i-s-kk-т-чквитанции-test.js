import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kk-т-чквитанции', 'Unit | Serializer | i-i-s-kk-т-чквитанции', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kk-т-чквитанции',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kk-комм-услуги',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
