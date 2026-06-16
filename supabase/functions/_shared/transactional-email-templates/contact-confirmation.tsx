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
  tour?: string
  groupSize?: string
  preferredDate?: string
  message?: string
}

const Email = ({ name, tour, groupSize, preferredDate, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>We received your inquiry — PEARAING Birding Trails</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Thank you for your inquiry</Heading>
        <Text style={text}>
          {name ? `Dear ${name},` : 'Hello,'}
        </Text>
        <Text style={text}>
          We have received your message and our team guide will be in touch within 24 hours
          to help plan your birding adventure in Cambodia.
        </Text>
        <Hr style={hr} />
        <Section>
          <Text style={label}>Your inquiry</Text>
          {tour && <Text style={text}><strong>Tour:</strong> {tour}</Text>}
          {groupSize && <Text style={text}><strong>Group size:</strong> {groupSize}</Text>}
          {preferredDate && <Text style={text}><strong>Travel period:</strong> {preferredDate}</Text>}
          {message && <Text style={text}><strong>Message:</strong> {message}</Text>}
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          PEARAING Birding Trails · Siem Reap, Cambodia
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'We received your inquiry — PEARAING Birding Trails',
  displayName: 'Contact Confirmation',
  previewData: {
    name: 'Jane',
    tour: 'Russey Treb 3-day',
    groupSize: '2',
    preferredDate: 'Jan 10 – Jan 13, 2027',
    message: 'Hoping to see the Giant Ibis.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }
const container = { padding: '24px', maxWidth: '560px' }
const h1 = { fontSize: '24px', color: '#3d4a2a', margin: '0 0 16px' }
const text = { fontSize: '15px', lineHeight: '1.6', color: '#2a2a2a', margin: '8px 0' }
const label = { fontSize: '13px', textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#6b7a4a', margin: '16px 0 4px' }
const hr = { borderColor: '#e6e2d6', margin: '20px 0' }
const footer = { fontSize: '12px', color: '#888', marginTop: '16px' }