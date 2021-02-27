interface ButtonProps {
  color: string;
}

export function Button(props: ButtonProps) {
  return(
    <button type="button" style={{ backgroundColor: props.color }}>
      Botão
      <strong>Teste</strong>
    </button>
  );
} 