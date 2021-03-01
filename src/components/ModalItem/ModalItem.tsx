import React, { useState } from 'react'
import './styles.scss'

export const ModalItem = ({ImageUrl}: any) => {
  return (
    <div className="modalItem">
      <img src={ImageUrl} alt="" height='100px'/>
    </div>
  )
}