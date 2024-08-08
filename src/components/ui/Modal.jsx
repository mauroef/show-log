'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className='modal fixed inset-0 z-50 flex items-center justify-center'>
      <div
        className='fixed inset-0 backdrop-blur-sm bg-neutral-700/70'
        onClick={onClose}
      ></div>
      <div className='bg-neutral-700 text-white/90 rounded-xl overflow-hidden shadow-lg z-10 max-w-7xl w-full mx-4'>
        <div className='p-4 max-h-[calc(100dvh-70px)] overflow-y-auto'>{children}</div>
        <button
          className='absolute top-0 right-0 mt-2 mr-2 text-gray-500'
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
