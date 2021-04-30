import styles from './styles.module.scss'

type InputTextProps = {
  title: string
  value: string
  setValue: (string) => void
  placeholder: string
  error: string
  type?: string
}

export function InputText({
  title,
  setValue,
  value,
  placeholder,
  type = 'text',
  error
}: InputTextProps) {
  return (
    <div className={styles.container}>
      <div className={styles.inputText}>
        <span>{title}</span>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
        {error?.length > 0 && <span className={styles.error}>{error}</span>}
      </div>
    </div>
  )
}
