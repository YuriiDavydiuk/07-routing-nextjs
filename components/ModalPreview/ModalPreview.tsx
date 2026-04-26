'use client';

import css from '../Modal/Modal.module.css'; //

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export default function ModalPreview({ children, onClose }: Props) {
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
