import React, { useState }  from 'react';
import {Modal} from './Modal/Modal'

export const Home = (initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const handleCloseModal = (e:any) => {
        setValues ({
                //voy aqui
        })
    }


    return (
        <section className="upload">
        <div className="upload__form">
            <input className="upload__files" type="file" />
            <Modal isOpen={true} onClose={handleCloseModal}  />
        </div>
        <p>Only jpg, png, gif, svg,</p>
        </section>

    )
}
