# Project rules
- Keep featured tour content and enquiry URL helpers in `src/lib/featured-tour-details.ts`; one shared source preserves displayed prices and selected-tour handoff.
- Accept enquiry tour query parameters only when listed among available tours; this prevents arbitrary URLs from creating tour options.