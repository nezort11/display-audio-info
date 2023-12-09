# Display audio info bot

```sh
nvm use
pnpm

pnpm dev
```

Deploy to production

```sh
pnpm build
pnpm deploy
pnpm serverless info
pnpm webhook:set

# => MAKE FUNCTION - PUBLIC IN THE YANDEX CLOUD CONSOLE
open "https://console.cloud.yandex.ru/"
```

Clear resource and reset

```sh
pnpm purge
pnpm webhook:remove
```
