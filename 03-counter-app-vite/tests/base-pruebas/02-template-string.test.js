import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('Pruebas en 02-templete-string', () => { 
    test('getSaludo debe retornar "Hola Fernando"', () => {
        const name = 'Mario';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }`)
    });
})