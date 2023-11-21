import { Serializer as ТарифSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kk-тариф';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТарифSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
