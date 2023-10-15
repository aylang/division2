import {
    isDivided10,
    isDivided2,
    isDivided3,
    isDivided4,
    isDivided5,
    isDivided6,
    isDivided7,
    isDivided8,
    isDivided9
} from "./sign-of-division";

describe('Признаки деления.', () => {
    it('Признак деления на 2', function () {
        expect(isDivided2(2)).toBe(true);
        expect(isDivided2(4)).toBe(true);
        expect(isDivided2(6)).toBe(true);
        expect(isDivided2(8)).toBe(true);
        expect(isDivided2(10)).toBe(true);
        expect(isDivided2(12)).toBe(true);
        expect(isDivided2(20)).toBe(true);
        expect(isDivided2(500)).toBe(true);
        expect(isDivided2(691)).toBe(false);
        expect(isDivided2(753)).toBe(false);
        expect(isDivided2(1534943)).toBe(false);
    });

    it('Признак деления на 3', function () {
        expect(isDivided3(1)).toBe(false);
        expect(isDivided3(2)).toBe(false);
        expect(isDivided3(3)).toBe(true);
        expect(isDivided3(4)).toBe(false);
        expect(isDivided3(5)).toBe(false);
        expect(isDivided3(6)).toBe(true);
        expect(isDivided3(7)).toBe(false);
        expect(isDivided3(8)).toBe(false);
        expect(isDivided3(9)).toBe(true);
        expect(isDivided3(10)).toBe(false);
        expect(isDivided3(11)).toBe(false);
        expect(isDivided3(12)).toBe(true);
        expect(isDivided3(13)).toBe(false);
        expect(isDivided3(14)).toBe(false);
        expect(isDivided3(15)).toBe(true);
        expect(isDivided3(16)).toBe(false);
        expect(isDivided3(17)).toBe(false);
        expect(isDivided3(18)).toBe(true);
        expect(isDivided3(19)).toBe(false);
        expect(isDivided3(20)).toBe(false);
        expect(isDivided3(21)).toBe(true);

        expect(isDivided3(123)).toBe(true);
        expect(isDivided3(124)).toBe(false);
    });

    it('Признак деления на 4', function () {
        expect(isDivided4(400)).toBe(true);
        expect(isDivided4(1)).toBe(false);
        expect(isDivided4(2)).toBe(false);
        expect(isDivided4(3)).toBe(false);
        expect(isDivided4(4)).toBe(true);
        expect(isDivided4(5)).toBe(false);
        expect(isDivided4(6)).toBe(false);
        expect(isDivided4(8)).toBe(true);
        expect(isDivided4(9)).toBe(false);
        expect(isDivided4(10)).toBe(false);
        expect(isDivided4(11)).toBe(false);
        expect(isDivided4(12)).toBe(true);
        expect(isDivided4(13)).toBe(false);
        expect(isDivided4(14)).toBe(false);
        expect(isDivided4(15)).toBe(false);
        expect(isDivided4(16)).toBe(true);
        expect(isDivided4(17)).toBe(false);
        expect(isDivided4(18)).toBe(false);
        expect(isDivided4(19)).toBe(false);
        expect(isDivided4(20)).toBe(true);

        expect(isDivided4(123448)).toBe(true);
    });

    it('Признак деления на 5', function () {
        expect(isDivided5(1)).toBe(false);
        expect(isDivided5(2)).toBe(false);
        expect(isDivided5(3)).toBe(false);
        expect(isDivided5(4)).toBe(false);
        expect(isDivided5(5)).toBe(true);
        expect(isDivided5(6)).toBe(false);
        expect(isDivided5(7)).toBe(false);
        expect(isDivided5(8)).toBe(false);
        expect(isDivided5(9)).toBe(false);
        expect(isDivided5(10)).toBe(true);
    });

    it('Признак деления на 6', function () {
        expect(isDivided6(1)).toBe(false);
        expect(isDivided6(6)).toBe(true);
        expect(isDivided6(120)).toBe(true);
    });

    it('Признак деления на 7', function () {
        expect(isDivided7(1)).toBe(false);
        expect(isDivided7(7)).toBe(true);
        expect(isDivided7(14)).toBe(true);
        expect(isDivided7(210)).toBe(true);
        expect(isDivided7(427)).toBe(true);
        expect(isDivided7(1102283)).toBe(true);
    });

    it('Признак деления на 8', function () {
        expect(isDivided8(1)).toBe(false);
        expect(isDivided8(7)).toBe(false);
        expect(isDivided8(8)).toBe(true);
        expect(isDivided8(16)).toBe(true);
        expect(isDivided8(123000)).toBe(true);
        expect(isDivided8(123008)).toBe(true);
        expect(isDivided8(123088)).toBe(true);
        expect(isDivided8(123888)).toBe(true);
        expect(isDivided8(123889)).toBe(false);
    });

    it('Признак деления на 9', function () {
        expect(isDivided9(1)).toBe(false);
        expect(isDivided9(9)).toBe(true);
        expect(isDivided9(81)).toBe(true);
        expect(isDivided9(333)).toBe(true);
        expect(isDivided9(334)).toBe(false);
    });

    it('Признак деления на 10', function () {
        expect(isDivided10(1)).toBe(false);
        expect(isDivided10(10)).toBe(true);

    });
})