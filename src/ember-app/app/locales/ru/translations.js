import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kk',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kk',
          title: 'Kk'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
