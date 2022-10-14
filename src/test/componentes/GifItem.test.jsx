import { render } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('Pruebas en <GifItem />', () => {

    test('debe de mostrar el componente correctamente', () => {
        render(<GifItem/>)
    });
});