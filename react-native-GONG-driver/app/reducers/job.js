import * as Action from '../constants/actionsJob';

const initialState = {
    timerFindJob: false,
    job: false,
    service: {
        id: '',
        service_field_id: 0,
        service_field_name: false,
        key: '',
        value: 0,
        name: false
    },
    jobWithoutAnswer: false
};

export default function job(state = initialState, action = {}) {
    let service = state.service;

    switch (action.type) {
        case Action.UPDATE_SERVICE:
            service.id = action.serviceId;
            service.key = action.serviceKey;
            service.name = action.serviceName;
            //console.log(state, 'service state');
            return {
                ...state,
                service
            };
        case Action.UPDATE_TIMER_FIND_JOB:
            return {
                ...state,
                timerFindJob: action.status,
            };
        case Action.CHANGE_NEW_JOB:
            return {
                ...state,
                job: action.job,
            };
        case Action.CHANGE_JOB_WITHOUT_ANSWER:
            return {
                ...state,
                jobWithoutAnswer: action.jobId,
            };
        case Action.CLEAN_JOB_WITHOUT_ANSWER:
            setTimeout(() => {
                return {
                    ...state,
                    jobWithoutAnswer: false
                };
            }, 120000);

        default:
            return state;
    }
}