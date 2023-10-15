import {splitToDivider} from "./split-to-divider";

describe('Разделить число на делители', () => {
    it('Наименьшие положительные больше единицы.', () => {
        // expect(splitToDivider(2)).toEqual([2,1]);
        // expect(splitToDivider(3)).toEqual([3,1]);
        // expect(splitToDivider(4)).toEqual([2,2,1]);
        // expect(splitToDivider(5)).toEqual([5,1]);
        // expect(splitToDivider(6)).toEqual([2,3,1]);
        // expect(splitToDivider(7)).toEqual([7,1]);
        // expect(splitToDivider(8)).toEqual([2,2,2,1]);
        // expect(splitToDivider(9)).toEqual([3,3,1]);
        // expect(splitToDivider(10)).toEqual([2,5,1]);
        // expect(splitToDivider(11)).toEqual([11,1]);
        // expect(splitToDivider(12)).toEqual([2,2,3,1]);
        // expect(splitToDivider(13)).toEqual([13,1]);
        // expect(splitToDivider(14)).toEqual([2,7,1]);
        // expect(splitToDivider(15)).toEqual([3,5,1]);
        // expect(splitToDivider(16)).toEqual([2,2,2,2,1]);
        // expect(splitToDivider(17)).toEqual([17,1]);
        // expect(splitToDivider(18)).toEqual([2,3,3,1]);
        // expect(splitToDivider(19)).toEqual([19,1]);
        // expect(splitToDivider(20)).toEqual([2,2,5,1]);
        // expect(splitToDivider(21)).toEqual([3,7,1]);
        // expect(splitToDivider(98)).toEqual([2,11,1]);
        const map = new Map();
        for (let i = 2; i <= 1000; i++) {
            // console.log(i)
            // console.log(splitToDivider(i))
            const split = splitToDivider(i);
            for (let j = 0; j < (split.length - 2); j++) {
                map.set(split[j], (map.get(split[j]) ?? 0) + 1)
            }
            // split.forEach(divider => {
            //     map.set(divider, (map.get(divider) ?? 0) + 1)
            // })
        }
        console.log(map)
    });

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
