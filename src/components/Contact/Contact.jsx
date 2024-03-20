export default function Contact({
  contact: { id, username, phone },
  onDelete,
}) {
  return (
    <div>
      <ul>
        <li>{username}</li>
        <li>{phone}</li>
      </ul>
      <button type="button" onClick={() => onDelete(id)}>
        delete
      </button>
    </div>
  );
}
