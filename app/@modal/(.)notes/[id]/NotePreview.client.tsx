'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { fetchNoteById } from '../../../../lib/api';
import css from './NotePreview.module.css';
import ModalPreview from '@/components/ModalPreview/ModalPreview';

interface Props {
  id: string;
}

export default function NotePreview({ id }: Props) {
  const router = useRouter();
  const { data: note, isLoading } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  const handleClose = () => router.back();

  if (isLoading) return <div>Loading...</div>;
  if (!note) return null;

  return (
    <ModalPreview onClose={handleClose}>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
            <span className={css.tag}>{note.tag}</span>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>{new Date(note.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </ModalPreview>
  );
}
