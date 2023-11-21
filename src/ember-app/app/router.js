import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kk-база-данных-л-с-l');
  this.route('i-i-s-kk-база-данных-л-с-e',
  { path: 'i-i-s-kk-база-данных-л-с-e/:id' });
  this.route('i-i-s-kk-база-данных-л-с-e.new',
  { path: 'i-i-s-kk-база-данных-л-с-e/new' });
  this.route('i-i-s-kk-должности-l');
  this.route('i-i-s-kk-должности-e',
  { path: 'i-i-s-kk-должности-e/:id' });
  this.route('i-i-s-kk-должности-e.new',
  { path: 'i-i-s-kk-должности-e/new' });
  this.route('i-i-s-kk-жилец-l');
  this.route('i-i-s-kk-жилец-e',
  { path: 'i-i-s-kk-жилец-e/:id' });
  this.route('i-i-s-kk-жилец-e.new',
  { path: 'i-i-s-kk-жилец-e/new' });
  this.route('i-i-s-kk-квитанция-l');
  this.route('i-i-s-kk-квитанция-e',
  { path: 'i-i-s-kk-квитанция-e/:id' });
  this.route('i-i-s-kk-квитанция-e.new',
  { path: 'i-i-s-kk-квитанция-e/new' });
  this.route('i-i-s-kk-организация-l');
  this.route('i-i-s-kk-организация-e',
  { path: 'i-i-s-kk-организация-e/:id' });
  this.route('i-i-s-kk-организация-e.new',
  { path: 'i-i-s-kk-организация-e/new' });
  this.route('i-i-s-kk-перерасчет-к-у-l');
  this.route('i-i-s-kk-перерасчет-к-у-e',
  { path: 'i-i-s-kk-перерасчет-к-у-e/:id' });
  this.route('i-i-s-kk-перерасчет-к-у-e.new',
  { path: 'i-i-s-kk-перерасчет-к-у-e/new' });
  this.route('i-i-s-kk-сотрудники-l');
  this.route('i-i-s-kk-сотрудники-e',
  { path: 'i-i-s-kk-сотрудники-e/:id' });
  this.route('i-i-s-kk-сотрудники-e.new',
  { path: 'i-i-s-kk-сотрудники-e/new' });
  this.route('i-i-s-kk-тариф-l');
  this.route('i-i-s-kk-тариф-e',
  { path: 'i-i-s-kk-тариф-e/:id' });
  this.route('i-i-s-kk-тариф-e.new',
  { path: 'i-i-s-kk-тариф-e/new' });
});

export default Router;
