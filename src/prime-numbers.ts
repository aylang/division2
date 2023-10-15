export function primeNumbers(value: number): number[] {
    const list = new Array(value + 1).fill(null).map((item, index) => index);
    let digital = 2;
    do {
        for (let i = Math.pow(digital, 2); i <= value; i = i + digital) {
            list[i] = null;
        }
    } while (next())
    const result = list.filter(item => item != null).slice(2);
    return result;

    function next(): boolean {
        for (let i = digital + 1; i <= Math.sqrt(value); i++) {
            if (list[i] !== null) {
                digital = i;
                return true;
            }
        }
        return false;
    }
}
