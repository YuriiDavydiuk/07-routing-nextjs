'use client';

import { useRouter } from 'next/navigation';
import css from '../Modal/Modal.module.css'; //

interface Props {
  children: React.ReactNode;
  btnClassName?: string;
}

export default function ModalPreview({ children, btnClassName }: Props) {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div className={css.backdrop} onClick={close}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        {children}
        <button className={btnClassName} onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
}
