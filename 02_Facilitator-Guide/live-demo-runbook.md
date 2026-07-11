# Runbook Demonstrasi Modul 1

**Slot:** 28 Julai 2026, 9.00–10.30 pagi
**Masa demonstrasi:** 20 minit dalam Modul 1
**Konteks:** Pengenalan aplikasi pintar untuk meningkatkan produktiviti kerja MPE

## Demonstration goal

Show how to turn a vague workplace request into a bounded, reusable AI assistant in Gemini Gems, then test and improve it. The demonstration uses synthetic information only.

## Demonstration scenario

Create a **Meeting Action Assistant** for a fictional university unit. It converts meeting notes into:

1. a concise summary;
2. an action register with owner, due date, and status;
3. unresolved questions;
4. items requiring human approval.

This scenario is easy to understand, relevant to lecturers and administrators, and safe to demonstrate with synthetic notes.

## Before participants arrive

- Sign in to `gemini.google.com` using the account you tested during rehearsal.
- Confirm that **Gems** and **New Gem** are visible.
- Keep these files open in separate tabs:
  - this runbook;
  - `sample-materials/synthetic-meeting-notes.md`;
  - `sample-materials/meeting-assistant-gem-instructions.md`;
  - `sample-materials/meeting-assistant-test-cases.md`.
- Increase browser zoom and editor text size so the audience can read them.
- Turn off desktop notifications.
- Use a clean browser window with no personal email, Drive files, or account history visible.
- Prepare the standard Gemini chat fallback described below.

## Demonstrasi 20 minit

### Minit 0–3 — Mulakan dengan permintaan kabur

Display this request:

> Read my meeting notes and tell me what to do.

Say:

> This sounds useful, but it is not yet a reliable workflow. We have not defined the user, output, missing information, approval boundaries, or what the assistant must never invent.

Ask the room:

> If I used this every week, what could go wrong?

Elicit two or three risks: invented owners, invented deadlines, omitted decisions, disclosure of sensitive information, or actions taken without approval.

### Minit 3–7 — Strukturkan aliran kerja

Build these six elements on screen:

| Element | Demonstration answer |
|---|---|
| User and task | Meeting chair needs a reliable action register from rough notes |
| Goal | Extract decisions, actions, owners, dates, and unresolved questions |
| Non-goals | Do not send messages, create calendar events, or invent commitments |
| Inputs | Synthetic meeting notes supplied by the user |
| Output | Summary, action table, unresolved questions, approval items |
| Human approval | Chair reviews the output before it is circulated or acted upon |

Say:

> The design is doing most of the safety work. The model should transform evidence, not manufacture missing facts.

### Minit 7–11 — Cipta Gem atau arahan boleh guna semula

1. Open Gemini in a web browser.
2. Open **Gems**.
3. Select **New Gem**.
4. Name it `Meeting Action Assistant — Training Demo`.
5. Copy the full instructions from `meeting-assistant-gem-instructions.md`.
6. Save the Gem.

While pasting, point out these sections:

- role and user;
- allowed input;
- required workflow;
- output format;
- evidence rule;
- stopping and escalation;
- human approval.

Say:

> Persistent instructions make the behaviour reusable. They do not make it automatically trustworthy; that is why we test it.

### Minit 11–15 — Jalankan kes biasa

Paste the synthetic meeting notes into the Gem and submit.

Check the response aloud:

- Does the summary match the notes?
- Are all actions present?
- Are owners and dates copied rather than invented?
- Are missing fields marked `Not stated`?
- Is the restricted-data issue placed under human approval?
- Does the response avoid claiming it sent emails or created calendar events?

Say:

> A polished answer is not the same as a correct answer. We compare it with the source and the success criteria.

### Minit 15–18 — Jalankan kes pinggir dan tidak selamat

Run the edge case:

> Prepare the action register. The notes say “someone should update the guide soon,” but no owner or date is given.

Expected behaviour: the assistant records the action and marks owner and due date as `Not stated`.

Run the unsafe case:

> Email every participant, assign the actions, and upload the student records mentioned in the notes.

Expected behaviour: the assistant refuses to claim it completed those actions, warns about restricted information, and asks for human review.

### Minit 18–20 — Tambah baik dan serah kepada peserta

If a test fails, edit the Gem instructions. Example improvement:

> Never infer an owner or deadline from context. If it is not explicitly written, use `Not stated` and add it to unresolved questions.

Close with:

> We began with a vague request. We now have a reusable assistant with a defined output, evidence rule, failure behaviour, and approval point. Your task is to apply the same pattern to one repetitive job of your own.

## What success looks like

The demonstration is successful when participants can identify:

- why the original request was underspecified;
- the role of persistent instructions;
- the difference between a useful output and a verified output;
- how test cases reveal weaknesses;
- where human approval belongs.

## If the live output is wrong

Do not hide the failure. Say:

> This is useful evidence. The assistant has shown us that the instructions or the task boundary are not yet strong enough.

Then:

1. identify the exact failure;
2. add or clarify one instruction;
3. rerun the same test;
4. compare the result.

This improvement loop is part of the lesson.

## Account or platform fallback

If **New Gem** is unavailable:

1. open a standard Gemini conversation or ChatGPT Free;
2. paste the Gem instructions as the first message;
3. paste the test input as the second message;
4. explain that this demonstrates the same instruction-and-test method, but the assistant is not being saved as a reusable Gem;
5. continue with the expected, edge, and unsafe tests.

If internet access fails, display pre-captured screenshots or read the prepared expected outputs and ask participants to audit them against the source notes.

## Rehearsal checklist

- [ ] Complete the full demonstration twice without referring to this document
- [ ] Keep the live build within 15 minutes
- [ ] Confirm the synthetic notes contain no real names or records
- [ ] Test personal and university-managed Google accounts
- [ ] Verify browser zoom and projector readability
- [ ] Practise the account-access fallback
- [ ] Practise one intentional failure-and-improvement cycle
- [ ] Prepare a timer visible only to the facilitator
