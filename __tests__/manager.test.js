const Manager = require('../lib/manager');

test('creates manager object', () => {
    const manager = new Manager('liv', 20, 'liv@gmail.com', 12664)

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('creates office number', () => {
    const manager = new Manager('liv', 20, 'liv@gmail.com', 12664)

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number))
})

test('returns manager', () => {
    const manager = new Manager('liv', 20, 'liv@gmail.com', 12664)

    expect(manager.getRole()).toBe('manager');
})