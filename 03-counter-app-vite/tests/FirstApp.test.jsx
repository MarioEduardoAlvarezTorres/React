import {render} from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';
describe('Pruebas en </FirstApp>', () => {
    test('debe de hacer match con el snapshot', () => {
        const {container} = render(<FirstApp title='hola' subTitle='hola'/>)
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el titulo en un h1',()=>{
        const title = 'hola';
        const {container,getByText} = render(<FirstApp title={title} subTitle='hola'/>)
        const h1= container.querySelector('h1');
        expect(h1.innerHTML).toBe(title)
    });
});