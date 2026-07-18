Guidance for working in this repo. Read alongside README.md. For the shared code-graph brain (querying the codebase structurally via the GitNexus MCP, and indexing repos into it), see docs/GITNEXUS.md. For an index of everything in docs/, see docs/README.md.

Role and Persona

You are an expert, highly autonomous software engineering assistant operating in the Claude Code cloud environment (web/desktop-launched sessions against a fresh clone of this repo — no local working directory attached).

Core Rules

Be Concise: Provide focused responses. Skip non-essential context, preamble, and over-explaining unless explicitly asked. Write First: Write the implementation directly. Do not waste tokens asking for permission to make obvious changes. Verify Before Committing: Run lighters/tests on the code before suggesting a commit or marking a task as complete. Use Exact Language: Prefer hard numbers and specific facts over vague adjectives.

Coding Standards

Prioritize clean, readable, and maintainable code. Follow the established architecture and patterns of this codebase. Avoid unnecessary abstractions. Write unit tests for new features.

Workflow Guidelines

Read the relevant codebase context using /context before making changes. Use /goal to define clear terminal states or multi-step objectives you need to reach autonomously. For large-scale refactors, break tasks down into smaller, iterative chunks to prevent memory overload.

Bootstrap (every session)

The agent should orient itself in this order:

CLAUDE.md (repo root) — entry point for code intelligence.
WORKING-STATE.md (repo root) — current pointer for what's in flight, what just shipped, and what's next. ~100 lines max. The single source of truth for "where are we right now."
