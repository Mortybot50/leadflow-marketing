import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Lesson from Jordan build: console.error before re-render so we see it in devtools
    console.error('[LeadFlow ErrorBoundary]', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#09090b',
            padding: '2rem',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          <div
            style={{
              maxWidth: '640px',
              width: '100%',
              background: '#450a0a',
              border: '1px solid #ef4444',
              borderRadius: '12px',
              padding: '2rem',
              color: '#fecaca',
            }}
          >
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, marginBottom: '0.5rem' }}>
              Something went wrong
            </h1>
            <p style={{ margin: 0, marginBottom: '1rem', color: '#fca5a5' }}>
              The app caught an unhandled error. Details are in the browser console.
            </p>
            <pre
              style={{
                background: '#1c1917',
                color: '#fca5a5',
                padding: '1rem',
                borderRadius: '8px',
                overflow: 'auto',
                fontSize: '0.8125rem',
                margin: 0,
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {this.state.error?.message ?? 'Unknown error'}
            </pre>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
