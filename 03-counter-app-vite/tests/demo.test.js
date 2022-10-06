describe('Pruebas de <DemoComponent/>',()=>{
    test('Est prueba no debe fallar',()=>{
        //1.Inicialización
        const message1 = 'Hola Mundo';
        //2.estimulo
        const message2 = message1.trim();
        //3.Observar el comportamiento...esperable
        expect(message1).toBe(message2);
    });
});
