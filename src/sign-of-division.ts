// Признак деления на 2
export function isDivided2(value: number): boolean {
    const lastDigital = +value.toString().slice(-1);
    return [0, 2, 4, 6, 8].includes(lastDigital);
}

// Признак деления на 3
export function isDivided3(value: number): boolean {
    const sum = sumOfDigits(value);
    const count = countDigits(value);
    if (count === 1) {
        if ([3,6,9].includes(sum)) return true;
        return false;
    }
    return isDivided3(sum);

}

// Признак деления на 4
export function isDivided4(value: number): boolean {
    const last2Digital = value.toString().slice(-2);
    if (last2Digital === '00') return true;
    if (last2Digital.length === 1) {
        if ([4, 8].includes(+last2Digital)) return true;
        return false;
    }
    if (isDivided2(+last2Digital) && isDivided2(+last2Digital / 2)) return true;
    return false;
}

// Признак деления на 5
export function isDivided5(value: number): boolean {
    const lastDigital = +value.toString().slice(-1);
    return [0, 5].includes(lastDigital);
}

// Признак деления на 6
export function isDivided6(value: number): boolean {
    return isDivided2(value) && isDivided3(value);
}

// Признак деления на 7
export function isDivided7(value: number): boolean {
    const count = countDigits(value);
    if (count === 1) {
        if (Math.abs(value) === 7) return true;
        return false;
    }
    if (count === 2) {
        if ([14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98].includes(value)) return true;
        return false;
    }
    const lastDigital = +value.toString().slice(-1);
    const otherDigitals = +value.toString().slice(0, -1);
    return isDivided7(+otherDigitals - lastDigital * 2);
}

// Признак деления на 8
export function isDivided8(value: number): boolean {
    const last3Digital = value.toString().slice(-3);
    if (last3Digital === '000') return true;
    if (isDivided2(+last3Digital)) {
        const half = +last3Digital / 2;
        if (isDivided2(half) && isDivided2(half / 2)) return true;
        return false;
    }
    return false;
}

// Признак деления на 9
export function isDivided9(value: number): boolean {
    const sum = sumOfDigits(value);
    const count = countDigits(value);
    if (count === 1) {
        if ([9].includes(sum)) return true;
        return false;
    }
    return isDivided9(sum);
}

// Признак деления на 10
export function isDivided10(value: number): boolean {
    const lastDigital = +value.toString().slice(-1);
    return [0].includes(lastDigital);
}

// Количество цифр в числе. countDigits(123) -> 3
function countDigits(value: number): number {
    return Math.abs(value).toString().split('').length;
}

// Сумма цифр в числе. sumOfDigits(123) -> 6
function sumOfDigits(value: number): number {
    let result = 0;
    const digits = Math.abs(value).toString().split('')
    if (digits.length) {
        for (const digit of digits) {
            result += +digit;
        }
    }
    return result;
}