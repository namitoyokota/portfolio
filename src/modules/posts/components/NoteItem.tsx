import { RevealCard } from '@/components/RevealCard';
import { RevealNotation } from '@/components/RevealNotation';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Note } from '../lib/note';

interface NoteItemProps {
  note: Note;
}

export const NoteItem = ({ note }: NoteItemProps) => {
  const renderNoteLink = () => (
    <a href={note.url} target="_blank" rel="noreferrer">
      {note.title}
    </a>
  );

  return (
    <RevealCard>
      <li className="flex items-center gap-3 py-1">
        <div className="flex items-center rounded-md bg-gray-200 px-1.5 py-1 text-gray-600">
          <FontAwesomeIcon icon={faArrowRight} className="rotate-315" />
        </div>
        <div className="flex flex-col gap-1">
          <div>{note.reactionCount > 0 ? <RevealNotation>{renderNoteLink()}</RevealNotation> : renderNoteLink()}</div>
          <span className="text-sm text-gray-400">{note.subtitle}</span>
        </div>
      </li>
    </RevealCard>
  );
};
