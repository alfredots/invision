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
        <span data-testid="input-text-title">{title}</span>
        <input
          data-testid="input-text"
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          className={`${styles.input} ${
            error?.length > 0 ? styles.inputError : ''
          }`}
        />
        {error?.length > 0 && (
          <span data-testid="input-text-error" className={styles.error}>
            {error}
          </span>
        )}
      </div>
    </div>
  )
}
