#!/usr/bin/env bash
set -euo pipefail

# Resolve the repository root from this script location.
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PACK_DIR="${ROOT_DIR}/pack"
RELEASE_DIR="${ROOT_DIR}/releases"

# Read the pack version from pack.toml without requiring extra tooling.
PACK_VERSION="$(awk -F ' = ' '$1 == "version" { gsub(/"/, "", $2); print $2; exit }' "${PACK_DIR}/pack.toml")"
OUTPUT_FILE="${RELEASE_DIR}/TFC-Upgrade-${PACK_VERSION}.zip"

mkdir -p "${RELEASE_DIR}"

# Refresh metadata before export so index.toml matches the current files.
cd "${PACK_DIR}"
packwiz refresh
packwiz curseforge export --output "${OUTPUT_FILE}"

printf 'Client pack exported: %s\n' "${OUTPUT_FILE}"
