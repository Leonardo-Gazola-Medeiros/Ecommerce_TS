import React, { useState, useEffect, useRef } from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface FormInfo{
    id: string;
    value: string;
    label: string;
}

const Form_Field : React.FC<FormInfo> = (id, label) => {

    return(
        <>
        
        </>
    )
};

export default Form_Field;