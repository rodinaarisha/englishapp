import React from 'react';
import data from '../../components/data.json';

import CardContainer from '../../components/CardContainer/CardContainer';

const CardPage = () => {
    return (
        <div style={{ marginTop: '10%' }}>
            <CardContainer words={data} />

        </div>
    );
};

export default CardPage;
