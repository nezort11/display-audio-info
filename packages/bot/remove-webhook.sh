#!/bin/sh

set -a
source .env
set +a

# Execute the "pnpm set-webhook" command with the extracted URL value
pnpm telegraf -m setWebhook -t $BOT_TOKEN -D "{ \"url\": \"\" }"
