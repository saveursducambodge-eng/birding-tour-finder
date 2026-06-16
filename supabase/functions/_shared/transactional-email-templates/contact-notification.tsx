import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  tour?: string
  groupSize?: string
  preferredDate?: string
  message?: string
}

const Email = ({ name, email, tour, groupSize, preferredDate, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New tour inquiry from {name || 'website visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New tour inquiry</Heading>
        <Section>
          <Text style={text}><strong>Name:</strong> {name || '—'}</Text>
          <Text style={text}><strong>Email:</strong> {email || '—'}</Text>
          <Text style={text}><strong>Tour:</strong> {tour || 'Not specified'}</Text>
          <Text style={text}><strong>Group size:</strong> {groupSize || 'Not specified'}</Text>
          <Text style={text}><strong>Travel period:</strong> {preferredDate || 'Not specified'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={label}>Message</Text>
        <Text style={text}>{message || 'No additional message.'}</Text>
        <Hr style={hr} />
        <Text style={footer}>Submitted via pearaing.com contact form</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `Tour Inquiry – ${data?.tour || 'General Inquiry'} (${data?.name || 'visitor'})`,
  displayName: 'Contact Notification (Owner)',
  to: 'pearaingbirdingtrails@gmail.com',
  previewData: {
    name: 'Jane',
    email: 'jane@example.com',
    tour: 'Russey Treb 3-day',
    groupSize: '2',
    preferredDate: 'Jan 10 – Jan 13, 2027',
    message: 'Hoping to see the Giant Ibis.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }
const container = { padding: '24px', maxWidth: '560px' }
const h1 = { fontSize: '22px', color: '#3d4a2a', margin: '0 0 16px' }
const text = { fontSize: '15px', lineHeight: '1.6', color: '#2a2a2a', margin: '6px 0' }
const label = { fontSize: '13px', textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#6b7a4a', margin: '16px 0 4px' }
const hr = { borderColor: '#e6e2d6', margin: '20px 0' }
const footer = { fontSize: '12px', color: '#888', marginTop: '16px' }