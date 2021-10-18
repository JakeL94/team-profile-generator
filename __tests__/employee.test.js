const Employee = require('../lib/employee');

test('Creates new employee', () => {
    // create local variable for object test
    const employee = new Employee('Jake', 21, 'jake@gmail.com')

    // tests each part of the object 
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('creates a name', () => {
    // create a local varialble with just name since thats all thats being tested
    const employee = new Employee('Jake', 21, 'jake@gmail.com')

    // tests the constructor function
    expect(employee.getName()).toEqual(expect.any(String))
})

// tests the id constructor
test('creates an id', () => {
    const employee = new Employee('Jake', 21, 'jake@gmail.com')

    expect(employee.getId()).toEqual(expect.any(Number))
})

// tests email constructor
test('creates an email', () => {
    const employee = new Employee('Jake', 21, 'jake@gmail.com')

    expect(employee.getEmail()).toEqual(expect.any(String))
})

// makes sure employee role gets given when returned
test('returns employee', () => {
    const employee = new Employee('Jake', 21, 'jake@gmail.com')

    expect(employee.getRole()).toBe('employee');
})