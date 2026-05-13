import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white border border-border rounded-2xl p-8 md:p-12 shadow-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <Icon name="ArrowLeftIcon" size={14} />
          Back to Home
        </Link>

        <h1 className="font-display text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-10">
          Last updated:{' '}
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground text-justify">
          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">1. Introduction</h2>
            <p>
              Welcome to the academic and professional portfolio of Dr. Mostaque Md. Morshedur
              Hassan. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">
              2. Information Collection
            </h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you
              express an interest in obtaining information about us or our services, or when you
              contact us via the contact form. The personal information that we collect depends on
              the context of your interactions with us and the website, and may include your name,
              email address, and the contents of your messages.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">
              3. Use of Your Information
            </h2>
            <p className="mb-2">
              Having accurate information about you permits us to provide you with a smooth,
              efficient, and customized experience. Specifically, we may use information collected
              about you via the site to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to your academic or professional inquiries.</li>
              <li>Improve the efficiency and operation of the website.</li>
              <li>Send you related academic or business communications, if requested.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">
              4. Cookies and Tracking Technologies
            </h2>
            <p>
              We may use cookies, web beacons, tracking pixels, and other tracking technologies on
              the site to help customize the site and improve your experience. When you access the
              site, your personal information is not collected through the use of tracking
              technology. Most browsers are set to accept cookies by default.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-foreground mb-3">5. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact Dr.
              Mostaque Hassan via the contact form on the home page or through linked professional
              platforms such as LinkedIn.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
