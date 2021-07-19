const mnthNameDate = (data) => {
    let dd = data.getDate();
    let mm = data.getMonth() + 1;
    const yyyy = data.getFullYear();
    const hrs = data.getHours();
    const min = data.getMinutes();
    const sec = '00';
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    return `${yyyy}/${mm}/${dd} ${hrs}:${min}`;
};