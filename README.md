# Grok Build App

**Indigo** multi-provider local proxy + dashboard — Grok-first coding gateway.

Forked from [OpenCodex](https://github.com/lidge-jun/opencodex) (MIT). Upstream remains `upstream` for pull merges; this product is **not** published as `@bitkyc08/opencodex`.

| | |
|--|--|
| **Package** | `@indigoai-us/grok-build-app` (private until intentional publish) |
| **CLI** | `gba` · `grok-build-app` (legacy aliases: `ocx`, `opencodex`) |
| **Config** | `~/.grok-build-app` (override: `GROK_BUILD_APP_HOME` / `GBA_HOME` / `OPENCODEX_HOME`) |
| **Default provider** | `xai` · model `grok-4.5` |
| **Repo** | https://github.com/indigoai-us/grok-build-app |
| **HQ project** | `companies/indigo/projects/grok-build-app/` |

## Relationship to Grok Build Desktop

| Product | Repo | Role |
|---------|------|------|
| **Grok Build App** (this) | `indigoai-us/grok-build-app` | Proxy + dashboard; multi-provider routing |
| **Grok Build Desktop** | `indigoai-us/groq-hq-app` | Native Tauri shell + ACP — download at [getindigo.ai/build](https://www.getindigo.ai/build) |

Hybrid product boundary: see HQ `design/product-boundary.md`. Desktop download page is **preserved**.

## Quick start

```bash
cd repos/public/grok-build-app
# Prefer: HQ secrets (see below). Local dev also accepts XAI_API_KEY in the environment.
bun install
bun run dev:proxy    # start proxy API (default port 10100)
bun run dev:gui      # dashboard (separate terminal)
```

CLI after link/install:

```bash
gba init             # interactive setup
gba start            # start proxy
gba gui              # open dashboard
gba status
```

### Config migration from OpenCodex

Default home is **`~/.grok-build-app`**, not `~/.opencodex`.

```bash
# One-time migrate
cp -R ~/.opencodex ~/.grok-build-app
# Or keep using the legacy path explicitly:
export OPENCODEX_HOME=~/.opencodex
# Preferred:
export GROK_BUILD_APP_HOME=~/.grok-build-app
```

If `~/.grok-build-app` does not exist but `~/.opencodex` does, the app reads the legacy directory until you migrate.

## HQ-native secrets & run

Required / common secrets (vault names — never commit values):

| Secret / env | Purpose |
|--------------|---------|
| `XAI_API_KEY` | xAI API key for default Grok provider |
| `OPENAI_API_KEY` | Optional OpenAI API tier |
| `ANTHROPIC_API_KEY` | Optional Anthropic |
| `OPENCODEX_API_AUTH_TOKEN` / LAN token | Only if binding beyond loopback |

`.env.schema` in this repo lists names for `hq run` / schema-driven inject.

```bash
# One-off (does not print secret values)
hq secrets exec -- XAI_API_KEY -- bun run dev:proxy

# Or with env already injected by hq run when schema is wired:
hq run -- bun run dev:proxy
```

See HQ skill `/hq-secrets`. Do not paste keys into chat, commits, or the canvas.

## License

MIT — includes OpenCodex contributors copyright. Indigo product branding and packaging are separate from upstream npm publish.

## Development

```bash
bun install
bun x tsc --noEmit
bun test --isolate ./tests/
```

HQ supply-chain policy may require pnpm with `minimum-release-age` for installs outside audited bypass; this tree is Bun-native.
