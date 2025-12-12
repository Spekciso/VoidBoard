<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/512px-YouTube_full-color_icon_%282017%29.svg.png" alt="" align="center" width="225" height="150"><h1 align="center">VoidBoard</h1>
<p align="center"><a href="#project-description">Project Description</a> - <a href="#key-features">Key Features</a> - <a href="#technology-stack">Tech Stack</a></p>

## Project Description

Void. Implemented with a unique password-based Global Unique Pseudonym (GUP) system. Preserves board anonymity while enabling verified authorship without registration. Lightweight, fast, and asynchronous

## Key Features

**GUP (Global Unique Pseudonym) System:**

Password-Based Anonymity: Users gain a persistent, verifiable identity (GUP, e.g., ABC-123) by entering a secret password, without the need for traditional registration or email.

**Guaranteed Uniqueness:** Each password generates a globally unique identifier (across all boards), preventing pseudonym squatting and ensuring authorship proof.

**Stateless Identity:** No permanent user profile data is stored beyond the secure password hash, maintaining the core spirit of anonymity.

**Efficient Cryptography:** Secure hashing (e.g., SHA-256) is used for GUP generation, ensuring the security and integrity of pseudonyms.

**Anonymous Posting:** Ability to post entirely anonymously (if the GUP password field is left empty).

**Threading & Replies:** Standard imageboard structure supporting thread creation and subsequent replies.

**(Future) File Uploads:** Designed to handle media files (images, webms) efficiently, a fundamental requirement for imageboards.
