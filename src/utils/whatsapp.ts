/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FormField {
  label: string;
  value: string | number | undefined | null;
}

export interface WhatsAppEnquiryPayload {
  whatsappNumber: string;
  formType: string;
  fields: FormField[];
}

/**
 * Builds a properly formatted, URL-encoded WhatsApp message matching the specification:
 * 
 * New Website Enquiry
 * 
 * Form Type: [Form Type]
 * Name: [Customer Name]
 * Mobile: [Customer Mobile]
 * Email: [Customer Email]
 * Message: [Customer Message]
 */
export function buildWhatsAppMessage(formType: string, fields: FormField[]): string {
  const lines: string[] = [
    'New Website Enquiry',
    '',
    `Form Type: ${formType}`,
    ''
  ];

  fields.forEach(({ label, value }) => {
    if (value !== undefined && value !== null && String(value).trim() !== '') {
      lines.push(`${label}: ${String(value).trim()}`);
    }
  });

  return lines.join('\n');
}

/**
 * Generates the universal WhatsApp redirect URL supporting mobile app & desktop web.
 */
export function getWhatsAppUrl(whatsappNumber: string, formType: string, fields: FormField[]): string {
  const cleanNumber = whatsappNumber.replace(/\D/g, '');
  const message = buildWhatsAppMessage(formType, fields);
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Automatically redirects the user to WhatsApp with the pre-filled enquiry.
 */
export function redirectToWhatsApp(whatsappNumber: string, formType: string, fields: FormField[]): void {
  const url = getWhatsAppUrl(whatsappNumber, formType, fields);

  try {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch {
    window.location.href = url;
  }
}
