# syntax=docker.io/docker/dockerfile:1

FROM node:22-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
# Omit --production flag for TypeScript devDependencies
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
  # Allow install without lockfile, so example works even without Node.js installed locally
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi


COPY src ./src
COPY public ./public
COPY tsconfig.json .
COPY next.config.ts .
COPY postcss.config.mjs .
COPY components.json .
COPY messages ./messages

# Environment variables must be present at build time
# https://github.com/vercel/next.js/discussions/14030
ARG NEXT_PUBLIC_LINKEDIN
ENV NEXT_PUBLIC_LINKEDIN=${NEXT_PUBLIC_LINKEDIN}
ARG NEXT_PUBLIC_GITHUB
ENV NEXT_PUBLIC_GITHUB=${NEXT_PUBLIC_GITHUB}


ARG NEXT_PUBLIC_SMTP_SERVER_USERNAME
ENV NEXT_PUBLIC_SMTP_SERVER_USERNAME=${NEXT_PUBLIC_SMTP_SERVER_USERNAME}

ARG NEXT_PUBLIC_SMTP_SERVER_PASSWORD
ENV NEXT_PUBLIC_SMTP_SERVER_PASSWORD=${NEXT_PUBLIC_SMTP_SERVER_PASSWORD}

ARG NEXT_PUBLIC_SMTP_SERVER_HOST
ENV NEXT_PUBLIC_SMTP_SERVER_HOST=${NEXT_PUBLIC_SMTP_SERVER_HOST}

ARG NEXT_PUBLIC_SITE_MAIL_RECIEVER
ENV NEXT_PUBLIC_SITE_MAIL_RECIEVER=${NEXT_PUBLIC_SITE_MAIL_RECIEVER}
# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at build time
# ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js based on the preferred package manager
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build; \
  else npm run build; \
  fi

# Note: It is not necessary to add an intermediate step that does a full copy of `node_modules` here

# Step 2. Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Environment variables must be redefined at run time
ARG NEXT_PUBLIC_LINKEDIN
ENV NEXT_PUBLIC_LINKEDIN=${NEXT_PUBLIC_LINKEDIN}
ARG NEXT_PUBLIC_GITHUB
ENV NEXT_PUBLIC_GITHUB=${NEXT_PUBLIC_GITHUB}


ARG NEXT_PUBLIC_SMTP_SERVER_USERNAME
ENV NEXT_PUBLIC_SMTP_SERVER_USERNAME=${NEXT_PUBLIC_SMTP_SERVER_USERNAME}

ARG NEXT_PUBLIC_SMTP_SERVER_PASSWORD
ENV NEXT_PUBLIC_SMTP_SERVER_PASSWORD=${NEXT_PUBLIC_SMTP_SERVER_PASSWORD}

ARG NEXT_PUBLIC_SMTP_SERVER_HOST
ENV NEXT_PUBLIC_SMTP_SERVER_HOST=${NEXT_PUBLIC_SMTP_SERVER_HOST}

ARG NEXT_PUBLIC_SITE_MAIL_RECIEVER
ENV NEXT_PUBLIC_SITE_MAIL_RECIEVER=${NEXT_PUBLIC_SITE_MAIL_RECIEVER}

# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

CMD ["node", "server.js"]