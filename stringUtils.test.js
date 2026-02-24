   ```javascript
   const { capitalize, reverse } = require('./stringUtils');
   
   test('capitalize first letter', () => {
       expect(capitalize('hello')).toBe('Hello');
   });
   
   test('reverse string', () => {
       expect(reverse('hello')).toBe('olleh');
   });
   ```
