import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kk.caption'),
          title: i18n.t('forms.application.sitemap.kk.title'),
          children: [{
            link: 'i-i-s-kk-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.kk.i-i-s-kk-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.kk.i-i-s-kk-сотрудники-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-kk-тариф-l',
            caption: i18n.t('forms.application.sitemap.kk.i-i-s-kk-тариф-l.caption'),
            title: i18n.t('forms.application.sitemap.kk.i-i-s-kk-тариф-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kk-должности-l',
            caption: i18n.t('forms.application.sitemap.kk.i-i-s-kk-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.kk.i-i-s-kk-должности-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-kk-квитанция-l',
            caption: i18n.t('forms.application.sitemap.kk.i-i-s-kk-квитанция-l.caption'),
            title: i18n.t('forms.application.sitemap.kk.i-i-s-kk-квитанция-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-kk-база-данных-л-с-l',
            caption: i18n.t('forms.application.sitemap.kk.i-i-s-kk-база-данных-л-с-l.caption'),
            title: i18n.t('forms.application.sitemap.kk.i-i-s-kk-база-данных-л-с-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kk-организация-l',
            caption: i18n.t('forms.application.sitemap.kk.i-i-s-kk-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.kk.i-i-s-kk-организация-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kk-перерасчет-к-у-l',
            caption: i18n.t('forms.application.sitemap.kk.i-i-s-kk-перерасчет-к-у-l.caption'),
            title: i18n.t('forms.application.sitemap.kk.i-i-s-kk-перерасчет-к-у-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-kk-жилец-l',
            caption: i18n.t('forms.application.sitemap.kk.i-i-s-kk-жилец-l.caption'),
            title: i18n.t('forms.application.sitemap.kk.i-i-s-kk-жилец-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})