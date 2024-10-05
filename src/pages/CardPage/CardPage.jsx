import { observer } from 'mobx-react';
import React, { useEffect } from "react";
import wordStore from '../../store/WordStore';

import CardContainer from '../../components/CardContainer/CardContainer';

const CardPage = observer(() => {
    useEffect(() => {
        wordStore.fetchWords();
    }, []);

    return (
        <div style={{ marginTop: '10%' }}>
            <CardContainer words={wordStore.words} />

        </div>
    );
});

export default CardPage;
