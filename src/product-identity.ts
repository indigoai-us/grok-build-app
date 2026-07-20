/**
 * Grok Build App product identity (Indigo fork of OpenCodex).
 * Keep MIT attribution to upstream OpenCodex; this file is the single
 * source for user-facing product names and config-home defaults.
 */

export const PRODUCT_NAME = "Grok Build App";
export const PRODUCT_SHORT = "GBA";
/** npm / package scope name — do not publish under @bitkyc08/opencodex */
export const PACKAGE_NAME = "@indigoai-us/grok-build-app";
/** Primary CLI binaries */
export const CLI_BINS = ["gba", "grok-build-app"] as const;
/** Legacy CLI aliases retained for smooth migration from OpenCodex installs */
export const LEGACY_CLI_BINS = ["ocx", "opencodex"] as const;

/** Default config directory under the user home (not ~/.opencodex). */
export const DEFAULT_CONFIG_DIRNAME = ".grok-build-app";
/** Legacy OpenCodex home — still readable via OPENCODEX_HOME or migration. */
export const LEGACY_CONFIG_DIRNAME = ".opencodex";

/**
 * Env vars that select the config home, in priority order.
 * OPENCODEX_HOME remains supported so existing scripts keep working.
 */
export const CONFIG_HOME_ENV_KEYS = [
  "GROK_BUILD_APP_HOME",
  "GBA_HOME",
  "OPENCODEX_HOME",
] as const;

/** Default provider for fresh installs — xAI Grok (fleet default model grok-4.5). */
export const DEFAULT_PROVIDER_ID = "xai";
export const DEFAULT_MODEL_ID = "grok-4.5";

export const REPOSITORY_URL = "https://github.com/indigoai-us/grok-build-app";
export const UPSTREAM_URL = "https://github.com/lidge-jun/opencodex";
