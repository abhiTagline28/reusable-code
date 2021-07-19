const getDatePickerData = (event) => {
    if (event.value !== null) {
        const fromDate = new Date(event?.value[0].toISOString());
        const toDate = new Date(event?.value[1].toISOString());
        const fdd = fromDate.getDate();
        const fmm = fromDate.getMonth() + 1;
        const fyyyy = fromDate.getFullYear();

        let sDayDate;

        let sMonthDate;

        let sDate;
        fdd < 10 ? (sDayDate = `${0}${fdd}`) : (sDayDate = `${fdd}`);
        fmm < 10 ? (sMonthDate = `${0}${fmm}`) : (sMonthDate = `${fmm}`);
        sDate = `${sDayDate}-${sMonthDate}-${fyyyy}`;
        const tdd = toDate.getDate();
        const tmm = toDate.getMonth() + 1;
        const tyyyy = toDate.getFullYear();

        let eDayDate;

        let eMonthDate;

        let eDate;
        tdd < 10 ? (eDayDate = `${0}${tdd}`) : (eDayDate = `${tdd}`);
        tmm < 10 ? (eMonthDate = `${0}${tmm}`) : (eMonthDate = `${tmm}`);
        eDate = `${eDayDate}-${eMonthDate}-${tyyyy}`;
        setDateStatus({
            ...dateStatus,
            fromDate: sDate,
            toDate: eDate,
        });
    }
};

const getDatePickerData1 = (event) => {
    if (event !== null) {
        const fromDate = new Date(event[0]?._d.toISOString());
        const toDate = new Date(event[1]?._d.toISOString());

        const fdd = fromDate.getDate();
        const fmm = fromDate.getMonth() + 1;
        const fyyyy = fromDate.getFullYear();


        let sDayDate;

        let sMonthDate;
        let sDate;
        fdd < 10 ? (sDayDate = `${0}${fdd}`) : (sDayDate = `${fdd}`);
        fmm < 10 ? (sMonthDate = `${0}${fmm}`) : (sMonthDate = `${fmm}`);

        sDate = `${sDayDate}-${sMonthDate}-${fyyyy}`;
        const tdd = toDate.getDate();
        const tmm = toDate.getMonth() + 1;
        const tyyyy = toDate.getFullYear();


        let eDayDate;

        let eMonthDate;

        let eDate;
        tdd < 10 ? (eDayDate = `${0}${tdd}`) : (eDayDate = `${tdd}`);
        tmm < 10 ? (eMonthDate = `${0}${tmm}`) : (eMonthDate = `${tmm}`);
        eDate = `${eDayDate}-${eMonthDate}-${tyyyy}`;

        setDateStatus({
            ...dateStatus,
            fromDate: sDate,
            toDate: eDate,
        });
    }
};