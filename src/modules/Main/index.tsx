import React from 'react';
import { Card } from '../../app/components/Card';
import './index.scss';

const Main = () => {
    return (
        <section className="games">
            <div className="games__cards-area">
            <Card />
            <Card />
            </div>
        </section>
    )
}

export default Main;