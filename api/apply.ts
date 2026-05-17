import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = 'XCamModels <support@xcammodels.com>';
const ADMIN = 'support@xcammodels.com';

interface Payload {
  stageName: string;
  realName: string;
  email: string;
  phone?: string;
  dob: string;
  country: string;
  experience: string;
  hearAbout?: string;
  platforms: string;
  equipment: string;
  message?: string;
}

const EXPERIENCE_LABELS: Record<string, string> = {
  new: 'Brand new — no experience',
  some: 'Some experience (under 6 months)',
  experienced: 'Experienced (6+ months)',
  professional: 'Professional / full-time',
};

function confirmationHtml(d: Payload): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Application Received</title></head>
<body style="margin:0;padding:0;background:#07080f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#e5e7eb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#07080f;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="padding-bottom:32px;text-align:center;">
          <span style="font-size:28px;font-weight:900;background:linear-gradient(135deg,#ff1493,#a855f7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:-0.5px;">XCamModels</span>
        </td></tr>

        <!-- Card -->
        <tr><td style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:24px;padding:40px 36px;">

          <!-- Icon -->
          <div style="text-align:center;margin-bottom:28px;">
            <div style="display:inline-block;width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#ff1493,#a855f7);line-height:64px;font-size:28px;text-align:center;">✓</div>
          </div>

          <h1 style="margin:0 0 8px;text-align:center;font-size:28px;font-weight:800;color:#ffffff;">Application Received!</h1>
          <p style="margin:0 0 28px;text-align:center;color:#9ca3af;font-size:15px;">Hey <strong style="color:#fff;">${d.stageName}</strong>, we've got your application and will review it within 24 hours.</p>

          <!-- Summary box -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:16px;margin-bottom:28px;">
            <tr><td style="padding:24px 28px;">
              <p style="margin:0 0 16px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#6b7280;">Your Application Summary</p>
              ${row('Stage Name', d.stageName)}
              ${row('Country', d.country)}
              ${row('Experience', EXPERIENCE_LABELS[d.experience] ?? d.experience)}
              ${d.platforms ? row('Platforms', d.platforms) : ''}
            </td></tr>
          </table>

          <!-- Steps -->
          <p style="margin:0 0 16px;font-size:13px;font-weight:700;color:#ffffff;">What happens next?</p>
          ${step('1', 'Review', 'Our team reviews your application — usually within a few hours.')}
          ${step('2', 'Setup', 'We help you get registered on the platforms you selected.')}
          ${step('3', 'Earn', 'Go live and start earning daily payouts.')}

          <!-- CTA -->
          <div style="text-align:center;margin-top:32px;">
            <a href="https://xcammodels.com/guide" style="display:inline-block;padding:14px 36px;border-radius:999px;background:linear-gradient(135deg,#ff1493,#a855f7);color:#ffffff;font-weight:700;font-size:15px;text-decoration:none;">Read the Beginner's Guide →</a>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding-top:28px;text-align:center;color:#4b5563;font-size:12px;">
          <p style="margin:0 0 4px;">Questions? Reply to this email or contact <a href="mailto:support@xcammodels.com" style="color:#9ca3af;">support@xcammodels.com</a></p>
          <p style="margin:0;">© ${new Date().getFullYear()} XCamModels.com · All models are 18+</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function adminHtml(d: Payload): string {
  const field = (label: string, value: string) =>
    value ? `<tr><td style="padding:6px 0;color:#9ca3af;font-size:13px;width:150px;vertical-align:top;">${label}</td><td style="padding:6px 0;color:#ffffff;font-size:13px;">${value}</td></tr>` : '';
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New Application</title></head>
<body style="margin:0;padding:32px 16px;background:#07080f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#e5e7eb;">
  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;">
    <tr><td>
      <h2 style="margin:0 0 4px;font-size:22px;font-weight:800;color:#ff1493;">New Application</h2>
      <p style="margin:0 0 28px;color:#6b7280;font-size:13px;">${new Date().toLocaleString('en-US', { timeZone: 'UTC', dateStyle: 'full', timeStyle: 'short' })} UTC</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:24px 28px;margin-bottom:20px;">
        <tr><td>
          <table width="100%" cellpadding="0" cellspacing="0">
            ${field('Stage Name', d.stageName)}
            ${field('Real Name', d.realName)}
            ${field('Email', d.email)}
            ${field('Phone', d.phone ?? '')}
            ${field('Date of Birth', d.dob)}
            ${field('Country', d.country)}
            ${field('Experience', EXPERIENCE_LABELS[d.experience] ?? d.experience)}
            ${field('Platforms', d.platforms)}
            ${field('Equipment', d.equipment)}
            ${field('Heard About Us', d.hearAbout ?? '')}
            ${field('Message', d.message ?? '')}
          </table>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string): string {
  return `<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:10px;"><tr>
    <td style="font-size:12px;color:#6b7280;width:120px;">${label}</td>
    <td style="font-size:13px;color:#ffffff;font-weight:600;">${value}</td>
  </tr></table>`;
}

function step(n: string, title: string, desc: string): string {
  return `<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;"><tr>
    <td style="width:32px;vertical-align:top;">
      <div style="width:24px;height:24px;border-radius:50%;background:rgba(255,20,147,0.15);border:1px solid rgba(255,20,147,0.3);text-align:center;line-height:24px;font-size:11px;font-weight:700;color:#ff1493;">${n}</div>
    </td>
    <td style="padding-left:12px;vertical-align:top;">
      <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#ffffff;">${title}</p>
      <p style="margin:0;font-size:12px;color:#9ca3af;">${desc}</p>
    </td>
  </tr></table>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const data = req.body as Payload;
  if (!data?.email || !data?.stageName) return res.status(400).json({ error: 'Missing required fields' });

  try {
    await Promise.all([
      resend.emails.send({ from: FROM, to: data.email, subject: 'Your Application Was Received — XCamModels', html: confirmationHtml(data) }),
      resend.emails.send({ from: FROM, to: ADMIN, subject: `New Application: ${data.stageName} (${data.country})`, html: adminHtml(data) }),
    ]);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send emails' });
  }
}
