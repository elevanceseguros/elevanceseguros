# 🕵️‍♂️ Data Recovery Guide: Sagrada Familia Leads

Since I cannot access your Supabase Dashboard directly, please follow these steps to locate and recover your missing lead data.

## 🟢 Option 1: Check Edge Function Logs (Most Likely Success)
If you have the `send-lead-email` function configured, every lead submission triggers a log entry containing the full data payload.

1.  Go to **Supabase Dashboard** > **Edge Functions**.
2.  Click on `send-lead-email`.
3.  Click on the **Logs** tab.
4.  Search for logs around the time of the deletion or the expected submission time.
5.  Look for lines starting with `Processing lead:` or the request body payload.
6.  **Copy the JSON data** for the missing leads (Name, Email, Phone, etc.).

## 🟡 Option 2: Database Backups (PITR)
If you have Point-in-Time Recovery enabled (Pro Plan):

1.  Go to **Supabase Dashboard** > **Database** > **Backups**.
2.  Look for **Point-in-Time Recovery**.
3.  If active, you can clone your database to a point *before* the table was deleted.
4.  Once cloned, query the `sagrada_familia_leads` table in the restored database to get the records.

## 🔴 Option 3: SQL Audit Logs
To find out *when* it was deleted:

1.  Go to **Supabase Dashboard** > **Reports** > **Query Performance** (or Logs Explorer).
2.  Search for `DROP TABLE` or `DELETE FROM`.
3.  This will confirm the timestamp, though it might not show the deleted data itself.

---

## 🛠️ Restoration Steps
Once you have retrieved the data (e.g., from the email logs), use the `restore_leads.sql` file included in this project to re-insert them into the main `contact_submissions` table.

1.  Open `restore_leads.sql`.
2.  Replace the placeholder values (`'Name'`, `'email@example.com'`, etc.) with the data you recovered.
3.  Run the query in your **Supabase SQL Editor**.