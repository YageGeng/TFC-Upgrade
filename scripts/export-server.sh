#!/usr/bin/env bash
set -euo pipefail

# Resolve the repository root from this script location.
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PACK_DIR="${ROOT_DIR}/pack"
RELEASE_DIR="${ROOT_DIR}/releases/server"

rm -rf "${RELEASE_DIR}"
mkdir -p "${RELEASE_DIR}"

# Refresh metadata before producing the service-side manifest snapshot.
cd "${PACK_DIR}"
packwiz refresh
packwiz list > "${RELEASE_DIR}/modlist.txt"

cp "${ROOT_DIR}/server/README.md" "${RELEASE_DIR}/README.md"
cp "${ROOT_DIR}/server/server.properties.example" "${RELEASE_DIR}/server.properties.example"

printf 'Server release skeleton exported: %s\n' "${RELEASE_DIR}"
