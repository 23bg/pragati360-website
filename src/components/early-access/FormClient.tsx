"use client"

import React from 'react'

type Props = {
    language: 'en' | 'hi'
    strings: Record<string, string>
}

export default function FormClient({ language, strings }: Props) {
    const [loading, setLoading] = React.useState(false)
    const [message, setMessage] = React.useState<string | null>(null)

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setMessage(null)
        setLoading(true)

        const form = new FormData(e.currentTarget)

        const payload = {
            businessName: form.get('business-name')?.toString() || undefined,
            contactName: form.get('your-name')?.toString() || undefined,
            businessEmail: form.get('email')?.toString() || undefined,
            phone: form.get('phone')?.toString() || undefined,
            whatsappNumber: form.get('whatsapp-number')?.toString() || undefined,
            numOutlets: form.get('num-locations')?.toString() || undefined,
            usesGBP: form.get('uses-gbp') === 'on' ? true : false,
            platformsUsed: [],
            currentManagement: form.get('current-management')?.toString() || undefined,
            whyInterested: form.get('why-interested')?.toString() || undefined,
            language,
            honeypot: form.get('hp')?.toString() || undefined,
        }

        try {
            // Basic client-side validation
            if (!payload.businessName || !payload.businessEmail || !payload.numOutlets || payload.usesGBP !== true) {
                setMessage(strings['form.clientValidation'] || 'Please complete required fields and confirm GBP usage.')
                setLoading(false)
                return
            }

            const res = await fetch('/api/early-access', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })

            const data = await res.json()
            if (res.ok) {
                setMessage(strings['form.success'] || 'Thanks — your request has been received.')
                e.currentTarget.reset()
            } else if (data?.errors) {
                setMessage(data.errors.map((e: any) => e.message).join('; '))
            } else if (data?.error) {
                setMessage(data.message || data.error)
            } else {
                setMessage('Unexpected error')
            }
        } catch (err) {
            setMessage((err as Error).message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form className="space-y-6 max-w-2xl" onSubmit={onSubmit}>
            <input type="hidden" name="hp" value="" />

            <div>
                <label htmlFor="business-name" className="block text-sm font-medium mb-2">
                    {strings['form.businessName']} <span className="text-red-500">*</span>
                </label>
                <input type="text" id="business-name" name="business-name" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary" />
            </div>

            <div>
                <label htmlFor="your-name" className="block text-sm font-medium mb-2">
                    {strings['form.yourName']}
                </label>
                <input type="text" id="your-name" name="your-name" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary" />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {strings['form.email']} <span className="text-red-500">*</span>
                </label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary" />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    {strings['form.phone']}
                </label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary" />
            </div>

            <div>
                <label htmlFor="num-locations" className="block text-sm font-medium mb-2">
                    {strings['form.numLocations.label']} <span className="text-red-500">*</span>
                </label>
                <select id="num-locations" name="num-locations" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary">
                    <option value="">{strings['form.numLocations.label']}</option>
                    <option value="1">{strings['form.numLocations.option1']}</option>
                    <option value="2-5">{strings['form.numLocations.option2']}</option>
                    <option value="6-10">{strings['form.numLocations.option3']}</option>
                    <option value="11+">{strings['form.numLocations.option4']}</option>
                </select>
            </div>

            <div>
                <label htmlFor="current-management" className="block text-sm font-medium mb-2">
                    {strings['form.currentManagement']}
                </label>
                <textarea id="current-management" name="current-management" rows={3} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary" />
            </div>

            <div>
                <label htmlFor="why-interested" className="block text-sm font-medium mb-2">
                    {strings['form.whyInterested']}
                </label>
                <textarea id="why-interested" name="why-interested" rows={3} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary" />
            </div>

            <div className="flex items-center gap-2">
                <input id="uses-gbp" name="uses-gbp" type="checkbox" className="h-4 w-4" />
                <label htmlFor="uses-gbp" className="text-sm">{strings['form.usesGBP'] || 'I confirm we manage our Google Business Profile (required)'}</label>
            </div>

            <div>
                <button type="submit" disabled={loading} className="inline-flex items-center justify-center px-6 py-3 rounded border border-zinc-700 bg-zinc-950 text-zinc-100 hover:bg-zinc-900 dark:border-zinc-300 dark:bg-zinc-200 dark:text-zinc-950 dark:hover:bg-zinc-300">
                    {loading ? strings['form.submitting'] || 'Submitting...' : strings['form.submitButton']}
                </button>
            </div>

            {message && <p className="text-sm text-muted-foreground">{message}</p>}
        </form>
    )
}
