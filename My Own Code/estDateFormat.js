export const estDateFormat = (date) => {
    const dateSplit = date.split("T")
    const time = dateSplit[1].split(".")[0]
    const dateSpreader = dateSplit[0].split("-")
    var dd = (dateSpreader && dateSpreader[2])
    var month = Number(dateSpreader && dateSpreader[1])
    var yyyy = (dateSpreader && dateSpreader[0])
    const timezone = moment(date).tz('America/New_York').format('z')
    return `${monthNames[month - 1]} ${dd}, ${yyyy} ${time} ${timezone}`;
}

export const estDateFormat1 = (date) => {
    const dateSplit = date.split("T")
    const time = dateSplit[1].split(".")[0]
    const dateSpreader = dateSplit[0].split("-")
    var dd = (dateSpreader && dateSpreader[2])
    var month = Number(dateSpreader && dateSpreader[1])
    var yyyy = (dateSpreader && dateSpreader[0])
    const timezone = moment(date).tz('America/New_York').format('z')
    // return `${monthNames[month - 1]} ${dd}, ${yyyy} ${time} ${timezone}`;
    return `${monthNames[month - 1]} ${dd}, ${yyyy} ${time} ${'EST'}`;
}