import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'con',
});
// Added some comment here s
export default () =>{
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};