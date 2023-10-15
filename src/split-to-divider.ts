// Разделить на делители
import {primeNumbers} from "./prime-numbers";
import {isDivided2, isDivided3, isDivided5, isDivided7} from "./sign-of-division";

export function splitToDivider(value: number): number[] {
    const prime = primeNumbers(value);
    const result = find(value);
    return result

    function find(value: number): number[] {
        if (prime.includes(value)) return [value, 1];
        if (isDivided2(value)) {
            const other = find(value / 2);
            const result = [2, ...other];
            return result;
        }
        if (isDivided3(value)) {
            const other = find(value / 3);
            const result = [3, ...other];
            return result;
        }
        if (isDivided5(value)) {
            const other = find(value / 5);
            const result = [5, ...other];
            return result;
        }
        if (isDivided7(value)) {
            const other = find(value / 7);
            const result = [7, ...other];
            return result;
        }
        return [];
    }
}