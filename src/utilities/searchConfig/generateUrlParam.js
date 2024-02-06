export const setUrlParams = (searchUrl, paramName, valueOfParam) => {
    const queryParams = searchUrl.split("&");
    let paramUpdated = false;
    for (let i = 0; i < queryParams.length; i++) {
        const param = queryParams[i].split("=");
        if (param[0] === paramName) {
            param[1] = valueOfParam;
            queryParams[i] = param.join("=");
            paramUpdated = true;
            break;
        }
    }
    if (!paramUpdated) {
        queryParams.push(`${paramName}=${valueOfParam}`); // replace
    }

    const finalUrl = queryParams.join("&");
    return finalUrl;
};

export const joinParamsWithComa = (event, setValue, value, label) => {
    let tempValue = [...value];
    // this event is passed for make a url for search by checkbox
    if (event) {
        setValue([
            ...value,
            {
                _id: label._id,
                name: label.name,
                checked: true,
            },
        ]);
        tempValue.push(label);
    } else {
        // remove from list
        const remaining = value.filter((size) => size._id !== label._id);
        setValue(remaining);
        tempValue = remaining;
    }

    const stringUrl = [];

    tempValue.forEach((value) => {
        if (value.name.length > 0) {
            stringUrl.push(value.name);
        }
    });
    const joinUrl = stringUrl.join(",");
    return joinUrl;
};
