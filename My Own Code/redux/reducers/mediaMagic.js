import { MODE, API_USAGE, SUB_PROJECT, STATISTICS, REAL_AI, ACCOUNT_EARNING, SUMMARY, SERVER_LOAD } from "../constants";

const initialState = {
    mode: "dark",
    api_usage_data: [],
    sub_project: [],
    statistics: [],
    real_ai: [],
    account_earning: [],
    summary: [],
    server_load: []
}

const mediaMagic = (state = initialState, action) => {
    switch (action.type) {
        case MODE:
            return {
                ...state,
                mode: action.payload
            };
        case API_USAGE:
            return {
                ...state,
                api_usage_data: action.payload
            }
        case SUB_PROJECT:
            return {
                ...state,
                sub_project: action.payload
            }
        case STATISTICS:
            return {
                ...state,
                statistics: action.payload
            }
        case REAL_AI:
            return {
                ...state,
                real_ai: action.payload
            }
        case ACCOUNT_EARNING:
            return {
                ...state,
                account_earning: action.payload
            }
        case SUMMARY:
            return {
                ...state,
                summary: action.payload
            }
        case SERVER_LOAD:
            return {
                ...state,
                server_load: action.payload
            }

        default:
            return state;
    }
}

export default mediaMagic;