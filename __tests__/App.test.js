const greeting = guest => `Hello ${guest}!`;

describe('Greetings', () => {
    it('Testing greeting says hello', () => {
        expect(greeting('Luis')).toBe('Hello Luis!');
    })
});