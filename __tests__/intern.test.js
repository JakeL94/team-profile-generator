const { test, expect } = require('@jest/globals');
const Intern = require('../lib/intern');

test('creates intern object', () => {
    const intern = new Intern('Landon M', 34, 'Landon@gmail.com', 'WTCU')

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('creates school', () => {
    const intern = new Intern('Landon M', 34, 'Landon@gmail.com', 'WTCU')
    
    expect(intern.getSchool()).toEqual(expect.any(String))
})

test('returns intern', () => {
    const intern = new Intern('Landon M', 34, 'Landon@gmail.com', 'WTCU')

    expect(intern.getRole()).toBe('intern');
})