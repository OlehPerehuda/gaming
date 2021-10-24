/** just for test rigth now */
import React from 'react';
import { CardDetails } from '../../app/components/CardDetails/CardDetails';
import { Comments } from '../../app/components/Comments/Comments';
import './index.scss';
const Details: React.FC = () => {
    return (
        <div className="details">
            <CardDetails />
            <Comments />
        </div>
    );
};

export default Details;
