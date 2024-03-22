import React from 'react';
import Asosiy from './Asosiy';
import Boglanish from './Boglanish';
import Haqimizda from './Haqimizda';
import Xizmatlar from './Xizmatlar';

const RootPage = () => {
    return (
        <div>
            <Asosiy/>
            <Haqimizda/>
            <Xizmatlar/>
            <Boglanish/>
        </div>
    );
}

export default RootPage;
