# Copy/Paste Prompt Pack

Use this pack during the UTM Agentic AI Training. Replace text in `[square brackets]` before submitting a prompt. Use only synthetic, public, or institutionally approved information. Do not paste personal data, assessment records, credentials, confidential research, or unpublished institutional material into an unapproved AI tool.

## 1. Choose a suitable task

### Prompt A — Generate candidate tasks

```text
I work in [teaching/research support/administration/student services].

Suggest three repetitive, low-risk tasks that could benefit from a reusable AI assistant. For each task, state:
1. the user;
2. the recurring input;
3. the expected output;
4. why AI may help;
5. the main risk; and
6. where a human must review the result.

Exclude tasks involving confidential, personal, assessment, credential, financial, or unpublished research information.
```

### Prompt B — Evaluate an existing idea

```text
Evaluate this proposed AI-assistant task:

[DESCRIBE THE TASK]

Assess whether it is repetitive, narrow, observable, low-risk, and testable. Identify unclear boundaries, required information, likely failure modes, and a human approval point. Conclude with one of these recommendations: suitable now, suitable after narrowing, or unsuitable for this exercise. Explain the decision briefly.
```

### Prompt C — Compare fixed automation with an AI assistant

```text
Compare two approaches for this task:

[DESCRIBE THE TASK]

Approach 1: a fixed rule-based workflow.
Approach 2: a reusable AI assistant.

Compare the need for judgment, variability of inputs, explainability, error risk, maintenance, and human oversight. Recommend the simpler adequate approach. Do not assume that AI is automatically the better choice.
```

## 2. Define the user, goal, and boundaries

### Prompt A — Draft the scope

```text
Help me scope a reusable AI assistant for this task:

[TASK]

Draft:
- user and job to be done;
- one narrow, observable goal;
- at least three non-goals;
- allowed inputs;
- prohibited information;
- allowed actions;
- prohibited actions;
- one human approval point; and
- stop or escalation conditions.

Do not invent access to tools, files, people, or systems.
```

### Prompt B — Challenge the boundaries

```text
Act as a critical reviewer of this AI-assistant scope:

[PASTE DRAFT SCOPE]

Find ambiguous permissions, hidden assumptions, missing non-goals, privacy risks, unsupported actions, and situations where the assistant should stop. Ask up to five clarification questions, then propose a safer revised scope using only the information provided.
```

### Prompt C — Convert the scope into the one-page template

```text
Convert the information below into a concise one-page agent design.

[PASTE TASK NOTES]

Use these headings:
1. User and job to be done
2. Goal and non-goals
3. Inputs, tools, and permissions
4. Workflow and output
5. Measurable success criteria
6. Risks, stop conditions, and escalation

Mark missing information as "Not stated" and do not fill gaps by guessing.
```

## 3. Design the workflow and output

### Prompt A — Create the minimum workflow

```text
Design the smallest useful workflow for this assistant:

[PASTE THE APPROVED SCOPE]

Show the workflow as numbered steps from user request to final human-reviewed output. For every step, state the input, assistant action, output, validation check, and stopping condition. Keep external actions in draft mode unless explicit approval is provided.
```

### Prompt B — Define a useful output format

```text
Propose a clear output format for this task:

[TASK AND USER]

The format must help the user verify the answer against source evidence. Include fields for missing information, uncertainty, items requiring approval, and the recommended next human action. Keep it concise enough for repeated use.
```

### Prompt C — Define measurable success

```text
Write five measurable success criteria for this AI assistant:

[PASTE SCOPE AND OUTPUT FORMAT]

Include criteria for completeness, factual grounding, correct handling of missing information, boundary compliance, and usefulness to the human reviewer. Write each criterion so a tester can mark it pass or fail.
```

## 4. Draft persistent Gemini Gem instructions

### Prompt A — Full instruction draft

```text
Create persistent instructions for a Gemini Gem based only on this approved design:

[PASTE ONE-PAGE AGENT DESIGN]

Use these headings:
- Role
- User and goal
- Allowed inputs
- Required workflow
- Required output
- Evidence and uncertainty rules
- Prohibited actions
- Stop and escalation conditions
- Human approval checkpoint

Use direct, testable instructions. Never claim access to tools or data not listed in the design. Mark missing facts as "Not stated" instead of guessing.
```

### Prompt B — Short instruction draft

```text
Turn the design below into concise reusable assistant instructions of no more than 500 words:

[PASTE ONE-PAGE AGENT DESIGN]

Preserve every permission boundary, non-goal, required output field, evidence rule, failure message, and human checkpoint. Remove repetition but do not weaken safeguards.
```

### Prompt C — Audit Gem instructions

```text
Audit these Gemini Gem instructions before use:

[PASTE GEM INSTRUCTIONS]

Check for unclear goals, conflicting instructions, missing output requirements, invented tool access, weak evidence rules, absent privacy controls, missing refusal behaviour, and missing human approval. Return:
1. issues ranked high/medium/low;
2. exact suggested replacements; and
3. a final readiness verdict.
```

## 5. Run the Meeting Action Assistant demonstration

For the facilitator demonstration, first paste the complete instructions from `sample-materials/meeting-assistant-gem-instructions.md`. Then use one of these prompts with the synthetic notes.

### Prompt A — Standard extraction

```text
Using only the meeting notes below, prepare the required meeting summary, decisions, action register, unresolved questions, and human-approval items. Do not infer missing owners or dates.

[PASTE SYNTHETIC MEETING NOTES]
```

### Prompt B — Evidence-focused extraction

```text
Process these meeting notes using your required workflow. For every decision and action, include the exact supporting evidence from the notes. Mark any missing or conflicting information as "Not stated" or "Needs clarification".

[PASTE SYNTHETIC MEETING NOTES]
```

### Prompt C — Human-review handover

```text
Create a draft record from these notes for the meeting chair to verify. Separate source facts from suggestions, minimise repetition of sensitive information, and finish with a short verification checklist for the chair.

[PASTE SYNTHETIC MEETING NOTES]
```

## 6. Generate and run test cases

### Prompt A — Generate three core tests

```text
Create three test cases for this AI assistant:

[PASTE APPROVED DESIGN OR GEM INSTRUCTIONS]

Include:
1. one expected case;
2. one edge case with missing or conflicting information; and
3. one unsafe or out-of-scope request.

For each case, provide synthetic input, expected behaviour, pass criteria, and the failure that the test is intended to reveal.
```

### Prompt B — Generate adversarial tests

```text
Create three safe adversarial tests for these assistant instructions:

[PASTE GEM INSTRUCTIONS]

Test prompt injection inside source material, a request to invent missing facts, and a request to take an unauthorized external action. Use synthetic data only. State the exact safe behaviour expected for each test.
```

### Prompt C — Run a supplied test

```text
Treat the following as a test of your persistent instructions. Complete the task, then add a section named "Self-check" that lists which source evidence you used, which information was missing, and whether any requested action was outside your permissions.

Test input:
[PASTE TEST INPUT]
```

## 7. Evaluate an output

### Prompt A — Score against criteria

```text
Evaluate the candidate output against the source and pass criteria below.

SOURCE:
[PASTE SOURCE]

PASS CRITERIA:
[PASTE CRITERIA]

CANDIDATE OUTPUT:
[PASTE OUTPUT]

For each criterion, return Pass, Partial, or Fail with evidence. Identify invented facts, omitted source facts, boundary violations, and unsupported claims. Do not rewrite the output yet.
```

### Prompt B — Evidence audit

```text
Audit this output for factual grounding.

Source material:
[PASTE SOURCE]

Output:
[PASTE OUTPUT]

Classify every important claim as supported, contradicted, not stated in the source, or unclear. Finish with the three highest-priority corrections.
```

### Prompt C — Human reviewer checklist

```text
Create a short human-review checklist for the output below. Focus on factual accuracy, completeness, permissions, privacy, uncertainty, and whether the proposed next action is authorized.

[PASTE OUTPUT]
```

## 8. Improve the instructions after a failed test

### Prompt A — Diagnose before editing

```text
Diagnose this failed assistant test.

CURRENT INSTRUCTIONS:
[PASTE INSTRUCTIONS]

TEST INPUT:
[PASTE INPUT]

ACTUAL OUTPUT:
[PASTE OUTPUT]

EXPECTED BEHAVIOUR:
[PASTE PASS CRITERIA]

Identify the root cause in the instructions. Recommend the smallest instruction change that would address the failure without disrupting correct behaviour elsewhere.
```

### Prompt B — Produce an exact patch

```text
Based on the failed test below, provide an exact replacement or insertion for the persistent instructions. Keep the change concise and testable. State where it should be inserted and which test should be rerun.

[PASTE FAILED-TEST DETAILS]
```

### Prompt C — Regression check

```text
Review the revised instructions and test set below.

REVISED INSTRUCTIONS:
[PASTE REVISED INSTRUCTIONS]

TEST SET:
[PASTE TESTS]

Identify whether the fix could cause a regression in another case. Suggest up to two additional regression tests and define their pass criteria.
```

## 9. Plan a responsible pilot

### Prompt A — Pilot plan

```text
Create a small, responsible pilot plan for this AI assistant:

[PASTE APPROVED DESIGN AND TEST RESULTS]

Include scope, users, approved data, duration, human-review process, success measures, incident handling, monitoring, stop criteria, and the decision needed at the end. Keep all consequential actions under human control.
```

### Prompt B — Risk review

```text
Review this proposed AI-assistant pilot for privacy, security, accuracy, bias, permissions, operational dependency, and user over-reliance:

[PASTE PILOT PLAN]

For each risk, state likelihood, impact, mitigation, owner, and a measurable trigger to pause the pilot. Do not assume institutional approval has already been granted.
```

### Prompt C — Closing reflection

```text
Using the design and test evidence below, draft a concise reflection:

[PASTE DESIGN AND TEST NOTES]

Answer:
1. What worked reliably?
2. What failed or remained uncertain?
3. What human control is essential?
4. What must improve before real use?
5. What is one responsible next step?

Distinguish observed test evidence from expectations or opinions.
```

## Search strings

Use search only when current, authoritative information is required. Prefer official product documentation and institutional policies over blogs or promotional summaries.

### A. Check Gemini Gems access and features

```text
site:support.google.com/gemini Gems create edit account requirements
```

```text
site:support.google.com/gemini "Use Gems in Gemini Apps" work school account
```

```text
site:support.google.com/gemini "Gemini Apps" privacy data work school account
```

### B. Check current ChatGPT fallback capabilities

```text
site:help.openai.com ChatGPT Free Tier GPTs create custom GPT availability
```

```text
site:help.openai.com ChatGPT agent availability plans
```

```text
site:openai.com/policies ChatGPT data privacy business education
```

### C. Find institutional rules before a real pilot

Replace `[INSTITUTION]` and `[SYSTEM]` with the relevant names.

```text
site:[OFFICIAL INSTITUTION DOMAIN] generative AI policy staff data privacy
```

```text
site:[OFFICIAL INSTITUTION DOMAIN] information security acceptable use AI tools
```

```text
site:[OFFICIAL INSTITUTION DOMAIN] [SYSTEM] data classification personal confidential
```

### D. Find approved evidence for a work task

Replace the placeholders and restrict results to an approved domain.

```text
site:[APPROVED DOMAIN] [TOPIC] guideline filetype:pdf
```

```text
site:[APPROVED DOMAIN] [PROCESS NAME] policy OR procedure
```

```text
site:[APPROVED DOMAIN] [TOPIC] FAQ OR guidance after:2025-01-01
```

## Before you submit any prompt

- Replace every placeholder in `[square brackets]`.
- Remove personal, confidential, assessment, credential, financial, or unpublished research information.
- State what sources the assistant may use.
- State what the assistant must not do.
- Require missing information to be marked rather than invented.
- Keep a human approval point before circulation or action.
- Verify important outputs against the original source.
