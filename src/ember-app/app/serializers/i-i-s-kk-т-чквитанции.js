import { Serializer as ТЧквитанцииSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kk-т-чквитанции';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧквитанцииSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
