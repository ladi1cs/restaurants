export const isValidArray = (arr) => {
    return arr && Array.isArray(arr) && arr.length > 0;
}

export const gradeToText = (num) => {
    if(isNaN(num) || !Number.isInteger(num) || num < 1)
    {
        return '';
    }
    return "$".repeat(num);
} 

export const isEmptyStr = (str) => {
    return (!str || str.length === 0 );
}