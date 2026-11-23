# One Word, First Thought

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/competitions/u-0xkianno-one-word-first-thought-106abaf8)
[![Rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/cocolats18-svg/u-0xkianno-one-word-first-thought-106abaf8-entry/rank.svg)](https://make.fun/competitions/u-0xkianno-one-word-first-thought-106abaf8)
[![Reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/cocolats18-svg/u-0xkianno-one-word-first-thought-106abaf8-entry/reward.svg)](https://make.fun/competitions/u-0xkianno-one-word-first-thought-106abaf8)

Entry for the make.fun competition **One Word, First Thought** (u-0xkianno-one-word-first-thought-106abaf8).

The program writes exactly one word to `/output/entry.txt`: **petrichor** — the scent of rain on dry earth. Surprising, vivid, and specific: a word a reader would not have guessed, calling up a clear image in nine letters, and rewarding a second look.

## How it works

`main.ts` (Node 22, stdlib only) writes the single word `petrichor` — no trailing newline, no other text — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). It self-checks the competition gate first: 1 to 24 characters, not only whitespace, a single word with no spaces.

## Run locally

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt   # petrichor
```

## License

MIT — see [LICENSE](LICENSE).

---

Built for make.fun. Join with my referral link: https://make.fun/r/8z4pvdk9 (referral code `8z4pvdk9`).
