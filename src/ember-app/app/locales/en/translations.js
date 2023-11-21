import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKkБазаДанныхЛСLForm from './forms/i-i-s-kk-база-данных-л-с-l';
import IISKkДолжностиLForm from './forms/i-i-s-kk-должности-l';
import IISKkЖилецLForm from './forms/i-i-s-kk-жилец-l';
import IISKkКвитанцияLForm from './forms/i-i-s-kk-квитанция-l';
import IISKkОрганизацияLForm from './forms/i-i-s-kk-организация-l';
import IISKkПерерасчетКУLForm from './forms/i-i-s-kk-перерасчет-к-у-l';
import IISKkСотрудникиLForm from './forms/i-i-s-kk-сотрудники-l';
import IISKkТарифLForm from './forms/i-i-s-kk-тариф-l';
import IISKkБазаДанныхЛСEForm from './forms/i-i-s-kk-база-данных-л-с-e';
import IISKkДолжностиEForm from './forms/i-i-s-kk-должности-e';
import IISKkЖилецEForm from './forms/i-i-s-kk-жилец-e';
import IISKkКвитанцияEForm from './forms/i-i-s-kk-квитанция-e';
import IISKkОрганизацияEForm from './forms/i-i-s-kk-организация-e';
import IISKkПерерасчетКУEForm from './forms/i-i-s-kk-перерасчет-к-у-e';
import IISKkСотрудникиEForm from './forms/i-i-s-kk-сотрудники-e';
import IISKkТарифEForm from './forms/i-i-s-kk-тариф-e';
import IISKkБазаДанныхЛСModel from './models/i-i-s-kk-база-данных-л-с';
import IISKkДолжностиModel from './models/i-i-s-kk-должности';
import IISKkЖилецModel from './models/i-i-s-kk-жилец';
import IISKkКвитанцияModel from './models/i-i-s-kk-квитанция';
import IISKkОрганизацияModel from './models/i-i-s-kk-организация';
import IISKkПерерасчетКУModel from './models/i-i-s-kk-перерасчет-к-у';
import IISKkСотрудникиModel from './models/i-i-s-kk-сотрудники';
import IISKkТЧПерерасчетаКУModel from './models/i-i-s-kk-т-ч-перерасчета-к-у';
import IISKkТЧквитанцииModel from './models/i-i-s-kk-т-чквитанции';
import IISKkТарифModel from './models/i-i-s-kk-тариф';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kk-база-данных-л-с': IISKkБазаДанныхЛСModel,
    'i-i-s-kk-должности': IISKkДолжностиModel,
    'i-i-s-kk-жилец': IISKkЖилецModel,
    'i-i-s-kk-квитанция': IISKkКвитанцияModel,
    'i-i-s-kk-организация': IISKkОрганизацияModel,
    'i-i-s-kk-перерасчет-к-у': IISKkПерерасчетКУModel,
    'i-i-s-kk-сотрудники': IISKkСотрудникиModel,
    'i-i-s-kk-т-ч-перерасчета-к-у': IISKkТЧПерерасчетаКУModel,
    'i-i-s-kk-т-чквитанции': IISKkТЧквитанцииModel,
    'i-i-s-kk-тариф': IISKkТарифModel
  },

  'application-name': 'Kk',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kk',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kk',
          title: 'Kk'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kk: {
          caption: 'Kk',
          title: 'Kk',
          'i-i-s-kk-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-kk-тариф-l': {
            caption: 'Тариф',
            title: ''
          },
          'i-i-s-kk-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-kk-квитанция-l': {
            caption: 'Квитанция',
            title: ''
          },
          'i-i-s-kk-база-данных-л-с-l': {
            caption: 'База данных ЛС',
            title: ''
          },
          'i-i-s-kk-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-kk-перерасчет-к-у-l': {
            caption: 'Перерасчет КУ',
            title: ''
          },
          'i-i-s-kk-жилец-l': {
            caption: 'Жилец',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kk-база-данных-л-с-l': IISKkБазаДанныхЛСLForm,
    'i-i-s-kk-должности-l': IISKkДолжностиLForm,
    'i-i-s-kk-жилец-l': IISKkЖилецLForm,
    'i-i-s-kk-квитанция-l': IISKkКвитанцияLForm,
    'i-i-s-kk-организация-l': IISKkОрганизацияLForm,
    'i-i-s-kk-перерасчет-к-у-l': IISKkПерерасчетКУLForm,
    'i-i-s-kk-сотрудники-l': IISKkСотрудникиLForm,
    'i-i-s-kk-тариф-l': IISKkТарифLForm,
    'i-i-s-kk-база-данных-л-с-e': IISKkБазаДанныхЛСEForm,
    'i-i-s-kk-должности-e': IISKkДолжностиEForm,
    'i-i-s-kk-жилец-e': IISKkЖилецEForm,
    'i-i-s-kk-квитанция-e': IISKkКвитанцияEForm,
    'i-i-s-kk-организация-e': IISKkОрганизацияEForm,
    'i-i-s-kk-перерасчет-к-у-e': IISKkПерерасчетКУEForm,
    'i-i-s-kk-сотрудники-e': IISKkСотрудникиEForm,
    'i-i-s-kk-тариф-e': IISKkТарифEForm
  },

});

export default translations;
