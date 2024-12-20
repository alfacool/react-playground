export function ResultField({ amount, from, to }) {
    if (amount && from && to) {
        let rateBase = to.rate / from.rate;
        let result = amount * rateBase;
        return result;
    } else {
        return '';
    }
}
