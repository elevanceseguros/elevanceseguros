-- 🛠️ MIGRATION SCRIPT: Restore Missing Leads
-- Use this script to insert recovered data into the 'contact_submissions' table.
-- Replace the placeholder values below with the actual data retrieved from your Logs or Backups.

-- Lead #1
INSERT INTO public.contact_submissions (
    name,
    email,
    phone,
    insurance_type,
    message,
    created_at, -- Use original date if known, otherwise NOW()
    city,
    state,
    lives,
    ages,
    is_mei,
    profession
) VALUES (
    'Nome do Lead 1',           -- REPLACE with Name
    'email1@exemplo.com.br',    -- REPLACE with Email
    '(11) 99999-9999',          -- REPLACE with Phone
    'Saúde - Sagrada Família',  -- Insurance Type
    'Restaurado de backup',     -- Message (or original message)
    NOW(),                      -- Timestamp
    'Cidade',                   -- City
    'UF',                       -- State
    null,                       -- Lives (optional)
    null,                       -- Ages (optional)
    false,                      -- is_mei (optional)
    null                        -- Profession (optional)
);

-- Lead #2
INSERT INTO public.contact_submissions (
    name,
    email,
    phone,
    insurance_type,
    message,
    created_at,
    city,
    state
) VALUES (
    'Nome do Lead 2',
    'email2@exemplo.com.br',
    '(11) 88888-8888',
    'Saúde - Sagrada Família',
    'Restaurado de backup',
    NOW(),
    'Cidade',
    'UF'
);

-- Lead #3
INSERT INTO public.contact_submissions (
    name,
    email,
    phone,
    insurance_type,
    message,
    created_at,
    city,
    state
) VALUES (
    'Nome do Lead 3',
    'email3@exemplo.com.br',
    '(11) 77777-7777',
    'Saúde - Sagrada Família',
    'Restaurado de backup',
    NOW(),
    'Cidade',
    'UF'
);

-- Verify insertion
SELECT * FROM public.contact_submissions 
WHERE insurance_type = 'Saúde - Sagrada Família' 
ORDER BY created_at DESC 
LIMIT 3;