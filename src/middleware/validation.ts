function isOnlyNumbers(str: string): boolean {
    return !/\D/.test(str);
}

function isEmpty(str: string): boolean {
    return str === "" || str === undefined;
}

function isURL(str : string): boolean {
    return /http(s*):\/\/(www\.)*([A-Za-z0-9]+).[a-z][a-z][a-z]?(\/[\S]+)+/.test(str);
}

function isDateFormat(str : string): boolean {
    return /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/.test(str);
}

function isCorrectDate(str : string): boolean {
    return !isNaN(new Date(str).getTime());
}

function isCorrectTeam(str : string): boolean {
    return str == '0' || str == '1' || str == '2';
}

interface validationType {
    isCorrect: boolean;
    errorMessage?: string;
}

function validateUserId(id: string): validationType {
    let validation: validationType = {} as validationType;
    if (!isOnlyNumbers(id)) {
        validation.isCorrect = false;
        validation.errorMessage = "id not contain only numbers."
    }
    else if (isEmpty(id)) {
        validation.isCorrect = false;
        validation.errorMessage = "id is missing."
    }
    else {
        validation.isCorrect = true;
    }
    return validation
}

function validateUserName(name: string): validationType {
    let validation: validationType = {} as validationType;
    if (isEmpty(name)) {
        validation.isCorrect = false;
        validation.errorMessage = "name is missing."
    }
    else {
        validation.isCorrect = true;
    }
    return validation
}

function validateTeamId(teamId: string): validationType {
    let validation: validationType = {} as validationType;
    if (isEmpty(teamId)) {
        validation.isCorrect = false;
        validation.errorMessage = "avatarURL is missing."
    }
    else if (!isOnlyNumbers(teamId)) {
        validation.isCorrect = false;
        validation.errorMessage = "teamId must contain only numbers."
    }
    else if (!isCorrectTeam(teamId)) {
        validation.isCorrect = false;
        validation.errorMessage = "teamId must be 0, 1 or 2."
    }
    else {
        validation.isCorrect = true;
    }
    return validation
}

function validateUserAvatarURL(avatarURL: string): validationType {
    let validation: validationType = {} as validationType;
    if (isEmpty(avatarURL)) {
        validation.isCorrect = false;
        validation.errorMessage = "avatarURL is missing."
    }
    else if (!isURL(avatarURL)) {
        validation.isCorrect = false;
        validation.errorMessage = "avatarURL must be a valid URL."
    }
    else {
        validation.isCorrect = true;
    }
    return validation
}

function validateUserArrivalDate(arrivalDate: string): validationType {
    let validation: validationType = {} as validationType;
    if (isEmpty(arrivalDate)) {
        validation.isCorrect = false;
        validation.errorMessage = "arrivalDate is missing."
    }
    else if (!isDateFormat(arrivalDate)) {
        validation.isCorrect = false;
        validation.errorMessage = "Incorrect Format Date for arrivalDate, Expected YYYY-MM-DD."
    }
    else if (!isCorrectDate(arrivalDate)) {
        validation.isCorrect = false;
        validation.errorMessage = "Incorrect Date for arrivalDate"
    }
    else {
        validation.isCorrect = true;
    }
    return validation
}

export {validateUserId, validateUserName, validateTeamId, validateUserAvatarURL, validateUserArrivalDate};