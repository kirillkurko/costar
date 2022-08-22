import axios from 'axios';
import moment from 'moment';
import I18n from 'src/shared/i18n/configuration';

export function doubleMatchUpRequest(womanBirthDate, manBirthDate) {
    return axios({
        method: 'get',
        url: `http://match-up.me/api/compatibility/calculate/${manBirthDate}/${womanBirthDate}/${I18n.t(
            'PREFERENCES.REQUEST_LANGUAGE',
        )}`,
    });
}

export function singleMatchUpRequest(userBirthDate) {
    return axios({
        method: 'get',
        url: `http://match-up.me/api/psychomatrix/${userBirthDate}/${I18n.t(
            'PREFERENCES.REQUEST_LANGUAGE',
        )}`,
    });
}

export function getSkillsRequest(userBirthDate) {
    return axios({
        method: 'get',
        url: `http://match-up.me/api/profession/${userBirthDate}/${I18n.t(
            'PREFERENCES.REQUEST_LANGUAGE',
        )}`,
    });
}

export function getPrognosisRequestToday(userBirthDate) {
    const date = moment().format('DDMMYYYY');
    return axios({
        method: 'get',
        url: `http://match-up.me/api/DayPrognosis/${userBirthDate}/${date}/${I18n.t(
            'PREFERENCES.REQUEST_LANGUAGE',
        )}`,
    });
}
export function getPrognosisRequestTomorrow(userBirthDate) {
    const date = moment()
        .add(1, 'days')
        .format('DDMMYYYY');
    return axios({
        method: 'get',
        url: `http://match-up.me/api/DayPrognosis/${userBirthDate}/${date}/${I18n.t(
            'PREFERENCES.REQUEST_LANGUAGE',
        )}`,
    });
}
export function getPrognosisRequestYesterday(userBirthDate) {
    const date = moment()
        .subtract(1, 'days')
        .format('DDMMYYYY');
    return axios({
        method: 'get',
        url: `http://match-up.me/api/DayPrognosis/${userBirthDate}/${date}/${I18n.t(
            'PREFERENCES.REQUEST_LANGUAGE',
        )}`,
    });
}

export const getFeedbackLinksRequest = () =>
    axios({
        method: 'get',
        url: 'https://match-up.me/api/feedbacklink/getall',
    });

export const getFAQRequest = () =>
    axios({
        method: 'get',
        url: 'https://match-up.me/api/faq/getall',
    });
