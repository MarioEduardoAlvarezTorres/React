import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsyc debe retornar un heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero =>{
                expect(hero).toEqual({
                    id:1,
                    name:'Batman',
                    owner:'DC'
                });
                done();
            })
    });

    test('getHeroeByIdAsyc debe obtener error si el heroe no existe', (done) => {
        const id = 2;
        getHeroeByIdAsync(id)
            .then(hero=>{
                expect(hero).toBeFalsy();
                done();
            })
            .catch(error =>{
                expect(error).toBe('No se pudo encontrar el héroe')
                done();
            })
    })
})