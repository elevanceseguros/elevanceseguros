# ✅ Email System Verification Guide

This guide outlines the steps to test the end-to-end email notification system after a form submission.

### 1. How to Test the System

1.  **Navigate to a Page with a Contact Form**: Open your live website and go to any page that contains a contact form (e.g., the homepage, a specific service page, or a landing page like Sagrada Família).
2.  **Fill Out the Form**: Enter valid test information into the form fields.
    *   **Name**: `Test Lead`
    *   **Email**: Use a real email address you have access to (e.g., `your-personal-email@gmail.com`). This is crucial to verify the lead confirmation email.
    *   **Phone**: `(99) 99999-9999`
    *   **Other Fields**: Fill out any other required fields.
3.  **Submit the Form**: Click the "Solicitar Cotação" or "Enviar" button.
4.  **Check for Success Message**: You should see a "Sucesso!" toast notification on the screen confirming the submission.

---

### 2. Expected Email Recipients

Two separate emails should be sent almost instantly:

1.  **Admin Notification Email**:
    *   **Recipient**: `contato@elevanceseguros.com`
    *   **Subject**: Will contain the lead's name and the insurance type (e.g., `Lead: Test Lead - Plano de Saúde`).
    *   **Content**: A detailed HTML email containing all the information submitted in the form.

2.  **Lead Confirmation Email**:
    *   **Recipient**: The email address you entered in the form (e.g., `your-personal-email@gmail.com`).
    *   **Subject**: `✅ Contato Recebido | Elevance Seguros`
    *   **Content**: A confirmation message thanking the lead for their submission and letting them know your team will be in touch soon.

---

### 3. How to Verify in the Resend Dashboard

1.  **Log in to Resend**: Go to [https://resend.com/login](https://resend.com/login).
2.  **Navigate to the "Emails" Tab**: In the Resend dashboard, click on the "Emails" section in the sidebar.
3.  **Check the Logs**: You should see two new entries in the email log, corresponding to the two emails sent.
    *   Check the **"To"** column to confirm one was sent to the admin and one to the lead.
    *   The **"Status"** column should show `delivered`. If it shows `bounced` or `failed`, there may be an issue with the recipient email address.

---

### 4. Common Troubleshooting Steps

*   **Emails Not Arriving**:
    1.  **Check Resend Logs First**: This is the source of truth. If the email is logged as `delivered` in Resend, the issue is likely with the recipient's email provider (e.g., it went to spam).
    2.  **Check Spam/Junk Folder**: Ask the user to check their spam folder.
    3.  **Check Supabase Function Logs**: Go to **Supabase Dashboard > Edge Functions > send-lead-email > Logs**. Look for any errors. Red error messages will provide clues about what went wrong (e.g., "Resend API Error", "Missing 'record' in request body").

*   **"Error ao Enviar" Message on Website**:
    1.  **Check Supabase Trigger Logs**: Go to **Supabase Dashboard > Database > Functions**, click on `trigger_send_lead_email`, and check the logs for any `RAISE WARNING` messages. This indicates the trigger failed to call the Edge Function.
    2.  **Check `pg_net` Extension**: Ensure the `pg_net` extension is enabled in **Supabase Dashboard > Database > Extensions**.
    3.  **Check Edge Function Environment Variables**: Verify that the `RESEND_API_KEY` is correctly set in **Supabase Dashboard > Edge Functions > send-lead-email > Settings > Secrets**.