interface DialogDescription {
  text: string;
}

export function DialogDescription({ text }: DialogDescription) {
  return (
    <p className="card-text" style={{ whiteSpace: 'pre' }}>
      {text}
    </p>
  );
}
