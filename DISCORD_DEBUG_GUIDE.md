# 🛠️ Discord Notification Debugging Guide

This guide explains how to verify that the Discord notification system is working correctly with the updated payload structure.

### 1. The Updated Architecture
1.  **Form Submission/SQL Insert** → Adds row to `contact_submissions`.
2.  **Postgres Trigger** (`on_new_contact_submission_send_email`) → Fires automatically.
3.  **Postgres Function** (`trigger_send_lead_email`) → Constructs a clean JSON payload: