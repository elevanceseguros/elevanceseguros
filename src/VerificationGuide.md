# Verification Guide: WhatsApp Notification System

This guide explains how to verify that the WhatsApp lead notification system is working correctly.

## 1. System Overview
The system consists of:
1. **Frontend Forms**: Capture lead data (Name, Email, Phone, Insurance Type).
2. **Supabase Database**: Stores the lead in `contact_submissions` table.
3. **Edge Function (`notify-whatsapp-lead`)**: Receives lead data and calls Twilio API.
4. **Trigger Mechanism**: The frontend automatically invokes the Edge Function immediately after a successful database insertion.

## 2. How to Test Manually

### Step 1: Submit a Form
1. Open the application in your browser (`npm run dev` typically at `http://localhost:3000`).
2. Navigate to the **Contact** section or any page with the `ContactForm`.
3. Fill in the required fields:
   - **Name**: Test User
   - **Email**: test@example.com
   - **Phone**: 11999999999
   - **Insurance Type**: Seguro Auto
4. Click "Solicitar Cotação".

### Step 2: Verify Frontend Success
- You should see a **Green Toast Notification**: "Mensagem enviada! Recebemos sua solicitação com sucesso."
- The form fields should clear automatically.

### Step 3: Verify WhatsApp Receipt
- Check the WhatsApp number: **+5511920144864**.
- You should receive a message from the Twilio Sandbox Number (+14155238886).
- **Message Format**: