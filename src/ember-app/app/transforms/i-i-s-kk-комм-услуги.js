import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КоммУслугиEnum from '../enums/i-i-s-kk-комм-услуги';

export default FlexberryEnum.extend({
  enum: КоммУслугиEnum,
  sourceType: 'IIS.Kk.КоммУслуги'
});
