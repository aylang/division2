import {splitToDivider, splitToDivider12, splitToDivider13} from "./split-to-divider";
import {primeNumbers} from "./prime-numbers";

describe('Разделить число на делители', () => {

    it('Наименьшие положительные больше единицы.', () => {
        expect(splitToDivider(2)).toEqual([2,1]);
        expect(splitToDivider(3)).toEqual([3,1]);
        expect(splitToDivider(4)).toEqual([2,2,1]);
        expect(splitToDivider(5)).toEqual([5,1]);
        expect(splitToDivider(6)).toEqual([2,3,1]);
        expect(splitToDivider(7)).toEqual([7,1]);
        expect(splitToDivider(8)).toEqual([2,2,2,1]);
        expect(splitToDivider(9)).toEqual([3,3,1]);
        expect(splitToDivider(10)).toEqual([2,5,1]);
        expect(splitToDivider(11)).toEqual([11,1]);
        expect(splitToDivider(12)).toEqual([2,2,3,1]);
        expect(splitToDivider(13)).toEqual([13,1]);
        expect(splitToDivider(14)).toEqual([2,7,1]);
        expect(splitToDivider(15)).toEqual([3,5,1]);
        expect(splitToDivider(16)).toEqual([2,2,2,2,1]);
        expect(splitToDivider(17)).toEqual([17,1]);
        expect(splitToDivider(18)).toEqual([2,3,3,1]);
        expect(splitToDivider(19)).toEqual([19,1]);
        expect(splitToDivider(20)).toEqual([2,2,5,1]);
        expect(splitToDivider(21)).toEqual([3,7,1]);
        expect(splitToDivider(98)).toEqual([2,7,7,1]);
    });

    it('Частота применения признака делимости на чесло', () => {
        const map = new Map();
        for (let i = 2; i <= 10000; i++) {
            const split = splitToDivider(i);
            // Не смотрю последние два числа, тк последнее число = 1,
            // а предпоследнее простое число,
            // которое сравниваю с таблицей простых чисел,
            // те не подбираю по признаку делимости.
            for (let j = 0; j < (split.length - 1); j++) {
                map.set(split[j], (map.get(split[j]) ?? 0) + 1)
            }
        }
        console.log(map)
    })

    it('Не до конца разрбранные числа', () => {
        const result = [];
        for (let i = 2; i <= 10000; i++) {
            const split = splitToDivider(i);
            if (split[split.length - 1] !== 1) {
                result.push(`${i}: ${split}`)
            }
        }
        console.log(result)
    })
});

describe('Тест производительности больших чисел', () => {
    const tested = 100000000;
    const prime = primeNumbers(tested);

    it('Подбор делителей методом перебора', () => {
        const result = [];
        for (let i = 1; i <= tested; i++) {
            if (tested % i === 0) {
                result.push(i)
            }
        }
        console.log(result)
    })


    it('Подбор делителей функцией', () => {
        console.log(splitToDivider13(tested, prime))
    })
})