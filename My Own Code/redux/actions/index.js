import { MODE, API_USAGE, SUB_PROJECT, STATISTICS, REAL_AI, ACCOUNT_EARNING, SUMMARY, SERVER_LOAD } from "../constants";
import axiosApi from '../../components/axios'

export const changeMode = (data) => {
    return (dispatch) => {
        dispatch({
            type: MODE,
            payload: data
        })
    }
};

const getApiUsageDataSuccess = gets => ({
    type: API_USAGE,
    payload: gets
})

const getSubProjectSuccess = gets => ({
    type: SUB_PROJECT,
    payload: gets
})

const getStatisticSuccess = gets => ({
    type: STATISTICS,
    payload: gets
})

const getRealAiSuccess = gets => ({
    type: REAL_AI,
    payload: gets
})

const getAccountEarningSuccess = gets => ({
    type: ACCOUNT_EARNING,
    payload: gets
})

const getSummarySuccess = gets => ({
    type: SUMMARY,
    payload: gets
})
const getServerLoadSuccess = gets => ({
    type: SERVER_LOAD,
    payload: gets
})

export const getApiUsageData = () => {
    return async dispatch => {
        try {
            let apiData = await axiosApi("get", "/api-usage", [])
            let subProject = await axiosApi("get", "/sub-project", [])
            let statistic = await axiosApi("get", "/statistics", [])
            let realAi = await axiosApi("get", "/real-ai", [])
            let accountEarning = await axiosApi("get", "/account-earnings", [])
            let summary = await axiosApi("get", "/summary", [])
            let serverLoad = await axiosApi("get", "/server-load", [])
            dispatch(getApiUsageDataSuccess(apiData.data))
            dispatch(getSubProjectSuccess(subProject.data))
            dispatch(getStatisticSuccess(statistic.data))
            dispatch(getRealAiSuccess(realAi.data))
            dispatch(getAccountEarningSuccess(accountEarning.data))
            dispatch(getSummarySuccess(summary.data))
            dispatch(getServerLoadSuccess(serverLoad.data))
        }
        catch (e) {
            console.log(e)
        }
    }
}