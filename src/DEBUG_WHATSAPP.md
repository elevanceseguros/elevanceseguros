# WhatsApp Notification Debugging Guide

This document outlines how to test and verify the WhatsApp notification system.

## 1. System Architecture
- **Trigger**: Client-side application (`ContactForm.jsx`, etc.) explicitly calls the Edge Function.
- **Function**: `notify-whatsapp-lead` (Supabase Edge Function).
- **Service**: Twilio API (sends message).

**Note on Database Triggers**: We are currently using a **Client-Side Trigger** (invoking the function from React immediately after DB insert) to ensure maximum reliability and speed without requiring complex SQL HTTP extensions configuration.

## 2. Troubleshooting the Edge Function

### View Logs
Check the Edge Function logs in the Supabase Dashboard:
1. Go to **Edge Functions**.
2. Click on `notify-whatsapp-lead`.
3. View the **Logs** tab.

**What to look for:**
- `[notify-whatsapp-lead-TIMESTAMP] 🚀 START...`
- `[notify-whatsapp-lead-TIMESTAMP] 🔙 API RESPONSE: Status 201`
- `[notify-whatsapp-lead-TIMESTAMP] ✅ SUCCESS`

### Common Twilio Errors
- **21608**: This is a free/trial account, and you are trying to send to an unverified number. **Solution**: Verify the recipient number in Twilio console or use a paid account.
- **63015**: WhatsApp Sandbox template mismatch. **Solution**: If using sandbox, you MUST use the exact pre-approved template text (e.g., "Your appointment is coming up on..."). Our function uses a custom message, so you generally need a **WhatsApp Business Profile** approved, OR you must use the strict Sandbox phrase structure.
- **20003**: Authentication Error. Check `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN`.

## 3. Manual Testing via cURL
You can test the function directly from your terminal. Replace `[YOUR_ANON_KEY]` with your actual Supabase Anon Key found in `src/lib/customSupabaseClient.js`.