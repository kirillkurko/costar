// @flow

export const getMonthPrice = (totalPrice: string, price: number) => {
    const clearTotalPrice = totalPrice.replace(/\s/g, '');
    const match = /[0-9.,]+/.exec(clearTotalPrice)[0];
    const dot = match.indexOf('.');
    const comma = match.indexOf(',');
    let separator = null;
    if (dot >= 0) {
        separator = '.';
    } else if (comma >= 0) {
        separator = ',';
    }
    const currency = clearTotalPrice.split(match);
    let monthPrice = Number(price / 12).toFixed(2);
    if (separator) {
        monthPrice = monthPrice.replace('.', separator);
    }
    const result = `${currency[0]}${monthPrice} ${currency[1]}`.trim();

    return result;
};
