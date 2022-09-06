// @flow

import { resources } from 'src/shared/i18n/configuration';

const configuration = [
  {
    question: resources.t('ONBOARDING.QUESTION_1'),
    answers: [
      {
        key: '1_1',
        value: resources.t('ONBOARDING.ANSWERS.UNDERSTAND_YOURSELF'),
        event: '1 question',
        answer: 'myself',
      },
      {
        key: '1_2',
        value: resources.t('ONBOARDING.ANSWERS.UNDERSTAND_OTHER_PEOPLE'),
        event: '1 question',
        answer: 'people',
      },
      {
        key: '1_3',
        value: resources.t('ONBOARDING.ANSWERS.LEARN_COMPATIBILITY'),
        event: '1 question',
        answer: 'compatibility',
      },
      {
        key: '1_4',
        value: resources.t('ONBOARDING.ANSWERS.FIND_SOUL_MATE'),
        event: '1 question',
        answer: 'soul',
      },
    ],
  },
  {
    question: resources.t('ONBOARDING.QUESTION_2'),
    answers: [
      {
        key: '2_1',
        value: resources.t('ONBOARDING.ANSWERS.UNDERSTAND_YOURSELF'),
        event: '2 question',
        answer: 'myself',
      },
      {
        key: '2_2',
        value: resources.t('ONBOARDING.ANSWERS.UNDERSTAND_OTHER_PEOPLE'),
        event: '2 question',
        answer: 'people',
      },
      {
        key: '2_3',
        value: resources.t('ONBOARDING.ANSWERS.LEARN_COMPATIBILITY'),
        event: '2 question',
        answer: 'compatibility',
      },
      {
        key: '2_4',
        value: resources.t('ONBOARDING.ANSWERS.FIND_SOUL_MATE'),
        event: '2 question',
        answer: 'soul',
      },
    ],
  },
  {
    question: resources.t('ONBOARDING.QUESTION_3'),
    answers: [
      {
        key: '3_1',
        value: resources.t('ONBOARDING.ANSWERS.EXCELLENT'),
        event: '3 question',
        answer: 'excellent',
      },
      {
        key: '3_2',
        value: resources.t('ONBOARDING.ANSWERS.GOOD'),
        event: '3 question',
        answer: 'good',
      },
      {
        key: '3_3',
        value: resources.t('ONBOARDING.ANSWERS.FAIR'),
        event: '3 question',
        answer: 'fair',
      },
      {
        key: '3_4',
        value: resources.t('ONBOARDING.ANSWERS.POOR'),
        event: '3 question',
        answer: 'poor',
      },
    ],
  },
];

export default configuration;
