import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {userId} = useParams();
    return (
        <div>
            <>hello motherfucker{userId}</>
        </div>
    );
};

export default ServiceDetails;