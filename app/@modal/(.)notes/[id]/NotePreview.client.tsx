import { fetchNoteById } from '../../../../lib/api';
import css from './NotePreview.module.css';
import ModalPreview from '@/components/ModalPreview/ModalPreview';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NotePreview({ params }: Props) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <ModalPreview btnClassName={css.backBtn}>
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
