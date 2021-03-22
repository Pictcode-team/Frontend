import React, { ReactText } from 'react';
import { toast, ToastOptions } from 'material-react-toastify';

export function useNotification() {
  const defaultOptions: ToastOptions = {
    position: 'bottom-left',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const successNotification = (
    message: string,
    options: ToastOptions = defaultOptions
  ): ReactText => toast.success(message, options);

  const errorNotification = (
    message: string,
    options: ToastOptions = defaultOptions
  ): ReactText => toast.error(message, options);

  const infoNotification = (
    message: string,
    options: ToastOptions = defaultOptions
  ): ReactText => toast.info(message, options);

  return { successNotification, errorNotification, infoNotification };
}
