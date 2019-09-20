class Utils {
    static onlyNumbers = value => {
        if (!value) return undefined;
        value = value.toString();
        return value.replace(/[^0-9]/g, '');
    }

    static isEmptyJson = json => {
        return JSON.stringify(json) === '{}';
    }
}

export default Utils;