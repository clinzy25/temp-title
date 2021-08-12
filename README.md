# temp-title

Focused, purposeful, invitation-only news feeds.

### Setup

1. Google cloud credentials
    - Use email and profile scopes
    - Add to Authorized JavaScript origins:
      - http://localhost:3000
      - https://localhost:YOUR_SERVER_PORT
    - Add to Authorized redirect URIs:
      - https://localhost:YOUR_SERVER_PORT/auth/google/callback
    - Set credentials as CLIENT_ID and CLIENT_SECRETS in .env.sample

2. MongoDB
    - Create new DB
    - Click connect and follow the prompts, connect with application
    - Set connection string as MONGO_URL in .env.sample
  
3. Create private key and certificate
    - Install openssl
    - Run in terminal
      - `openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365`
    - Copy files to `server/src`

4. Set preferred PORT in server and client .env.sample

5. Set any strings for COOKIE_KEYs in server .env.sample

6. Remove .sample from env files

7. In project root --
    - npm run install-all
    - npm run dev (development)
    - npm run deploy (production)
