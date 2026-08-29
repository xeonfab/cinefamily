#!/usr/bin/env bash
# Usage: ./scripts/download_profile.sh <instagram_username>
set -euo pipefail

USERNAME="${1:?Usage: $0 <instagram_username>}"

instaloader --no-videos --no-captions "$USERNAME"
