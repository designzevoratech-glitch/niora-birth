/**
 * Server-side memory-backed Rate Limiter & Phone Deduplication Tracker
 */

interface RateLimitStore {
  timestamps: number[];
}

interface PhoneSubmissionStore {
  timestamp: number;
}

const ipStore = new Map<string, RateLimitStore>();
const phoneStore = new Map<string, PhoneSubmissionStore>();

// Cleanup stale entries every 10 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  const fifteenMinutesAgo = now - 15 * 60 * 1000;
  const tenMinutesAgo = now - 10 * 60 * 1000;

  for (const [ip, data] of ipStore.entries()) {
    data.timestamps = data.timestamps.filter((ts) => ts > fifteenMinutesAgo);
    if (data.timestamps.length === 0) {
      ipStore.delete(ip);
    }
  }

  for (const [phone, data] of phoneStore.entries()) {
    if (data.timestamp < tenMinutesAgo) {
      phoneStore.delete(phone);
    }
  }
}, 10 * 60 * 1000);

export interface RateLimitResult {
  allowed: boolean;
  reason?: string;
}

/**
 * Checks if an IP is within the rate limit (Max 5 submissions per 15 mins)
 */
export function checkIpRateLimit(ip: string, limit = 5, windowMs = 15 * 60 * 1000): RateLimitResult {
  const now = Date.now();
  const userRecord = ipStore.get(ip) || { timestamps: [] };

  // Filter timestamps within the current window
  const validTimestamps = userRecord.timestamps.filter((ts) => now - ts < windowMs);

  if (validTimestamps.length >= limit) {
    return {
      allowed: false,
      reason: `Too many requests from this IP. Please wait 15 minutes before submitting again.`,
    };
  }

  validTimestamps.push(now);
  ipStore.set(ip, { timestamps: validTimestamps });

  return { allowed: true };
}

/**
 * Checks if a phone number was submitted within the last 10 minutes (Duplicate Prevention)
 */
export function checkPhoneDeduplication(phone: string, windowMs = 10 * 60 * 1000): RateLimitResult {
  if (!phone) return { allowed: true };

  const now = Date.now();
  const record = phoneStore.get(phone);

  if (record && now - record.timestamp < windowMs) {
    const minutesLeft = Math.ceil((windowMs - (now - record.timestamp)) / 60000);
    return {
      allowed: false,
      reason: `A consultation request for this phone number was already submitted. Please wait ${minutesLeft} minute(s) or contact us on WhatsApp directly.`,
    };
  }

  phoneStore.set(phone, { timestamp: now });
  return { allowed: true };
}
