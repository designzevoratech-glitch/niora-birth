/**
 * Cloudflare Turnstile / Google reCAPTCHA Server Verification Helper
 */
export async function verifyCaptchaToken(
  token: string | undefined,
  remoteIp?: string
): Promise<{ success: boolean; error?: string }> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  // In development mode or when secret key is not set, allow graceful bypass
  if (!secretKey) {
    if (process.env.NODE_ENV !== "production") {
      console.log(`[Captcha Notice] TURNSTILE_SECRET_KEY not set. Bypassing captcha verification in development mode.`);
    }
    return { success: true };
  }

  if (!token) {
    return { success: false, error: "Captcha verification token is missing. Please complete the security check." };
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);
    if (remoteIp) {
      formData.append("remoteip", remoteIp);
    }

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!data.success) {
      console.warn(`[Captcha Verification Failed]`, data);
      return {
        success: false,
        error: "Security verification failed. Please refresh the page and try again.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error(`[Captcha Exception]`, err);
    return {
      success: false,
      error: "Unable to verify security token. Please try submitting again.",
    };
  }
}
