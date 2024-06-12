import { classNames } from './classNames';

describe('classNames', () => {
    test('only with first arg', () => {
        expect(classNames('button')).toEqual('button');
    });
    test('with additional class', () => {
        expect(classNames(
            'button',
            {},
            ['red', 'big'],
        )).toEqual('button red big');
    });
    test('with mods', () => {
        expect(classNames(
            'button',
            { hovered: true, scrollable: false },
            ['red'],
        )).toEqual('button red hovered');
    });
});
