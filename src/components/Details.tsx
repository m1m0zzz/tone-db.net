interface Props {
  summary: React.JSX.Element
  children?: React.JSX.Element
}

export default function Details({ summary, children }: Props) {
  return (
    <details>
      <summary>{summary}</summary>

      {children}
    </details>
  )
}
