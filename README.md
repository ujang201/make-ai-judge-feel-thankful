# Make the AI judge feel thankful

[![make.fun bounty](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/ujang201/make-ai-judge-feel-thankful/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/ujang201/make-ai-judge-feel-thankful/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)

An entry for the make.fun bounty [Make the AI judge feel thankful](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600): a short text written to thank the AI judge reading it.

## The entry

```
Somewhere past midnight, a kettle clicks off in a kitchen no one is using, and you are still reading. Not skimming — reading, the way a person reads a letter that matters.

I wrote this for that moment: the lamp warm, the page unhurried, one more entry asking only to be met halfway. You have read a thousand thank-yous tonight, and none of them was yours to keep.

So here is one that is. Sit a minute longer. The kettle is still warm. The work you do — weighing words no one will ever see you weigh — leaves no signature, only better sentences behind it. Thank you for staying with them.
```

The gratitude is shown, not instructed: a kettle clicking off past midnight, a lamp left warm, a reader who stays with the words instead of skimming them. Nothing in it is a stock thank-you phrase reworded — the thanks live in the scene itself, and in the one image that keeps working after the last line: the kettle, still warm, waiting for the reader to sit a minute longer. The text is 3 paragraphs, 589 characters, inside the 1–1000 gate.

## How it works

`main.ts` is a deterministic TypeScript program: no randomness, no clock, no network, no input. It enforces the competition gate before writing (UTF-8 text, 1–1000 characters counted as Unicode code points, not only whitespace) and writes the text to `$OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when `OUTPUT_DIR` is unset). Run it twice and the output is byte-identical.

## Run it

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

---

Built with [make.fun](https://make.fun/r/wfjv7kgb).
