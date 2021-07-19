import axios from "axios";

export default (endpoint, method, body, header, token) => new Promise((resolve, reject) => {

    let url = "";

    url += process.env.REACT_APP_API_SERVER_URL + endpoint;

    let setHeaders = { "Content-Type": "application/json" };
    if (header) {
        setHeaders = { authorization: "bearer " + header };
    }

    axios({
        method,
        url,
        data: body,
        headers: setHeaders,
    }).then(res => {
        const { data, message, token, clanDetail, isenrolled, clanmembersDetail, groupsIds, clansPositionDetail, iseditable, isCompleted } = res.data
        let status = false
        if (res.status === 200) {
            status = true
        }
        resolve({ data, message, token, status, isenrolled, clanDetail, clanmembersDetail, status, groupsIds, clansPositionDetail, iseditable, isCompleted })

    }).catch((err) => {
        if (err?.response?.status === 401) {
            localStorage.clear()
            window.location.reload()
        }
        const errorMsg = (err.response && err.response.data && err.response.data.message) || ""
        const resData = (err.response && err.response.data && err.response.data.data) || {}
        const data = resData || []
        const msg = errorMsg || "Something went wrong. Please try again."
        const status = false
        resolve({ data, msg, status })
    });
})