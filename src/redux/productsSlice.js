import { createSlice } from '@reduxjs/toolkit';
import trainer12 from '../images/Adidas12trainer.jpg';
import adidas24 from '../images/Adidas24.jpg';
import air97 from '../images/Nike air 97.jpeg';
import airintrlk from '../images/AirIntrlkBW.jpeg';
import revolution from '../images/Nike revolution7.jpeg';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [
            {
                id: 1,
                name: 'Adidas Cushions',
                price: 'R800',
                image: trainer12,
            },
            {
                id: 2,
                name: 'Adidas Reco',
                price: 'R800',
                image: adidas24,
            },
            {
                id: 3,
                name: 'NIKE AirMax 97',
                price: 'R800',
                image: air97,
            },
            {
                id: 4,
                name: 'NIKE AIR Intrlnk',
                price: 'R800',
                image: airintrlk,
            },
            {
                id: 5,
                name: 'NIKE Revolution 7',
                price: 'R800',
                image: revolution,
            }
        ]
    },
});

export default productsSlice.reducer;
