function isOnlyNumbers(str: string): boolean {
    return !/\D/.test(str)
}

function isEmpty(str: string): boolean {
    return str === "" || str === undefined
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

export default validateUserId;