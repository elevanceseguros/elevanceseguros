-- =================================================================
-- TEST SCRIPT: Verify Discord Webhook Notification
-- =================================================================
--
-- Instructions:
-- 1. Open the Supabase SQL Editor.
-- 2. Copy and paste the content of this file into the editor.
-- 3. Click "Run".
--
-- This script inserts a dummy record into 'contact_submissions'.
-- The updated trigger should catch this INSERT and call the 'send-lead-email' 
-- function with the corrected payload structure:
-- { "record": { "name": "...", "email": "...", "phone": "...", "insurance_type": "...", "message": "..." } }

INSERT INTO public.contact_submissions (
    id, 
    name, 
    email, 
    phone, 
    insurance_type, 
    message, 
    created_at
)
VALUES (
    gen_random_uuid(),
    'Teste de Payload Fixo',
    'payload@teste.com',
    '11977776666',
    'Teste de Sistema',
    'Verificando se a trigger agora envia apenas os campos corretos para a Edge Function.',
    NOW()
)
RETURNING id, name, email, created_at;