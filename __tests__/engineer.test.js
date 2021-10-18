const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Carson', 20, 'carson@gmail.com', 'CarsonK')

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('creates github', () => {
    const engineer = new Engineer('Carson', 20, 'carson@gmail.com', 'CarsonK')

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('returns engineer', () => {
    const engineer = new Engineer('Carson', 20, 'carson@gmail.com', 'CarsonK')

    expect(engineer.getRole()).toBe('engineer');
})