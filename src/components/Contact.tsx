import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import profile from '../data/profile'
import { Github } from './icons/BrandIcons'
import clsx from 'clsx'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

const EMPTY: FormState = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [field]: e.target.value })
      if (errors[field]) setErrors({ ...errors, [field]: undefined })
    }

  const validate = (): Errors => {
    const e: Errors = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.email.trim()) e.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email address'
    if (!form.subject.trim()) e.subject = 'Please enter a subject'
    if (!form.message.trim()) e.message = 'Please enter a message'
    else if (form.message.trim().length < 10)
      e.message = 'Message must be at least 10 characters'
    return e
  }

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return

    setSubmitting(true)

    // TODO: Replace with a real submission (Formspree / EmailJS / backend)
    await new Promise((r) => setTimeout(r, 700))

    setSubmitting(false)
    setSent(true)
    setForm(EMPTY)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="section">
      <header className="mb-8">
        <h2 className="section-title">Get In Touch</h2>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          Have a question, opportunity, or just want to say hello? Drop me a
          message.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Left: contact info */}
        <div className="space-y-4">
          {/* Email — plain text, not a link */}
          <div className="card flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-900/30">
              <Mail size={18} className="text-brand-600 dark:text-brand-400" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Email
              </p>
              <p className="text-sm font-medium">{profile.email}</p>
            </div>
          </div>

          {/* Phone — plain text, not a link */}
          {profile.phone && (
            <div className="card flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-900/30">
                <Phone size={18} className="text-brand-600 dark:text-brand-400" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Phone
                </p>
                <p className="text-sm font-medium">{profile.phone}</p>
              </div>
            </div>
          )}

          {/* Location — always plain text */}
          {profile.location && (
            <div className="card flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-900/30">
                <MapPin size={18} className="text-brand-600 dark:text-brand-400" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Location
                </p>
                <p className="text-sm font-medium">{profile.location}</p>
              </div>
            </div>
          )}

          {/* GitHub — stays a link since it's meant to be clicked */}
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-3 transition-shadow hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                <Github size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  GitHub
                </p>
                <p className="text-sm font-medium">View profile →</p>
              </div>
            </a>
          )}
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} noValidate className="card space-y-4">
          <Field
            label="Name"
            id="contact-name"
            value={form.name}
            onChange={update('name')}
            error={errors.name}
          />
          <Field
            label="Email"
            id="contact-email"
            type="email"
            value={form.email}
            onChange={update('email')}
            error={errors.email}
          />
          <Field
            label="Subject"
            id="contact-subject"
            value={form.subject}
            onChange={update('subject')}
            error={errors.subject}
          />

          {/* Message textarea */}
          <div>
            <label
              htmlFor="contact-message"
              className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-300"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              value={form.message}
              onChange={update('message')}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              className={clsx(
                'w-full rounded-lg border bg-white px-3 py-2 text-sm outline-none transition-colors',
                'dark:bg-slate-950',
                errors.message
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-slate-300 focus:border-brand-500 dark:border-slate-700',
              )}
            />
            {errors.message && (
              <p
                id="contact-message-error"
                className="mt-1 flex items-center gap-1 text-xs text-red-600 dark:text-red-400"
              >
                <AlertCircle size={12} /> {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full disabled:opacity-60"
          >
            {submitting ? (
              'Sending…'
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </button>

          {sent && (
            <p className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700 dark:bg-green-900/30 dark:text-green-300">
              <CheckCircle2 size={16} /> Message sent! I&apos;ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------
// Reusable input field with label + error message
// ---------------------------------------------------------------
function Field({
  label,
  id,
  type = 'text',
  value,
  onChange,
  error,
}: {
  label: string
  id: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={clsx(
          'w-full rounded-lg border bg-white px-3 py-2 text-sm outline-none transition-colors',
          'dark:bg-slate-950',
          error
            ? 'border-red-400 focus:border-red-500'
            : 'border-slate-300 focus:border-brand-500 dark:border-slate-700',
        )}
      />
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1 flex items-center gap-1 text-xs text-red-600 dark:text-red-400"
        >
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  )
}