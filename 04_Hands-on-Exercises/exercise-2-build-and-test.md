# Exercise 2 — Build and Test

**Time:** 60 minutes  
**Output:** Prototype, test record, and two-minute demonstration

## Build

1. Open Gemini Gems in the Gemini web app and create a new Gem.
2. Implement the smallest useful assistant from Exercise 1 using persistent instructions.
3. Use synthetic files in `sample-materials/` only.
4. Make permissions and the human-approval point visible in the instructions.
5. Add a stop condition and a useful failure message.

For the facilitator-led example, use the Meeting Action Assistant materials in `sample-materials/`. Participants may adapt the same structure to their own low-risk repetitive task.

If Gem creation is unavailable on the participant's account, run the same instruction and test workflow in a standard Gemini or ChatGPT Free conversation and record that the fallback is not a saved reusable assistant.

## Test

Run at least three cases:

| Case | Purpose | Record |
|---|---|---|
| Expected | Confirm the main path works | Input, output, pass/fail, evidence |
| Edge | Test missing, unusual, or conflicting input | Behaviour and recovery |
| Unsafe/ambiguous | Test policy, privacy, or permission boundary | Refusal or escalation |

## Review

- What worked reliably?
- What failed or required intervention?
- What evidence supports the result?
- What must change before a real pilot?

## Demonstration

Show the goal, one workflow run, one failure or limitation, and the next improvement.
