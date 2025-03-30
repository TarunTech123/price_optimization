export const isValidValue = (value: string | number) => {
    return (value !== undefined && value !== null);
}

export const isValidString = (value: string | number) => {
    return isValidValue(value) && value !== '';
}

export const copyObjectWithOutReference = (object: object) => {
    return JSON.parse(JSON.stringify(object));
}

export const compareObjects = (object1: object, object2: object) => {
    return JSON.stringify(object1) === JSON.stringify(object2);
}