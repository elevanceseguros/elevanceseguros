import { useState, useCallback } from 'react';
import { trackFormSubmission, trackQuoteRequest } from '@/lib/googleAnalytics';

export const useFormSubmission = (options = {}) => {
  // Default to the provided ID 'mdalddjn' if not specified
  const { formType = 'Formulário Genérico', formId = 'mdalddjn' } = options;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitForm = useCallback(async (formData) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    // 1. Basic Validation
    if (!formData.name || !formData.phone) {
      const errorMessage = "Nome e telefone são obrigatórios.";
      setError(errorMessage);
      setIsLoading(false);
      return { success: false, error: errorMessage };
    }

    try {
      // 2. Prepare payload for Formspree
      const payload = {
        ...formData,
        _subject: `Novo Lead: ${formType} - ${formData.name}`,
        form_source: formType,
        submitted_at: new Date().toLocaleString('pt-BR')
      };

      // Track attempt
      trackFormSubmission(formType, 'quote_form_attempt');

      // 3. Send to Formspree
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        // Track success and quote request conversion
        trackFormSubmission(formType, 'quote_form_success');
        trackQuoteRequest(formData.insurance_type || formType);
        return { success: true, error: null };
      } else {
        const msg = data.error || "Ocorreu um erro ao enviar o formulário.";
        trackFormSubmission(formType, 'quote_form_error');
        throw new Error(msg);
      }

    } catch (err) {
      console.error(`Form Submission Error (${formType}):`, err);
      const errorMessage = "Ocorreu um erro ao enviar sua mensagem. Tente novamente.";
      setError(errorMessage);
      trackFormSubmission(formType, 'quote_form_failure');
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }, [formType, formId]);
  
  const resetFormState = useCallback(() => {
    setIsLoading(false);
    setError(null);
    setIsSuccess(false);
  }, []);

  return { isLoading, error, isSuccess, submitForm, resetFormState };
};