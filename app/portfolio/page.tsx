'use client'
import { useState } from 'react'
import Link from 'next/link'

function HvacAfter() {
  return (
    <div className="hv-a">
      <nav className="hv-a-nav">
        <div className="hv-a-brand">
          <div className="hv-a-mark">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" stroke="#56b6e6" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="3" fill="#56b6e6"/>
            </svg>
          </div>
          <div>
            <div className="hv-a-brandname">Houston Cool Air</div>
            <div className="hv-a-brandsub">Licensed HVAC · TACLA00123</div>
          </div>
        </div>
        <ul className="hv-a-menu"><li>Services</li><li>Repair</li><li>Maintenance</li><li>Reviews</li><li>About</li></ul>
        <a className="hv-a-navcta">☎ (713) 555-COOL</a>
      </nav>
      <div className="hv-a-hero">
        <div className="hv-a-left">
          <span className="hv-a-eye"><span className="hv-a-dot"></span>24/7 emergency service · Houston metro</span>
          <h1 className="hv-a-h1">AC repair in<br/><em>under 60 minutes.</em></h1>
          <p className="hv-a-sub">Licensed Houston techs, flat-rate transparent pricing, and a 5-year parts warranty on every repair. Se habla español.</p>
          <div className="hv-a-row">
            <a className="hv-a-ctaA"><span className="hv-a-ctaIco">☎</span><span><small>Call now</small><b>(713) 555-COOL</b></span></a>
            <a className="hv-a-ctaB"><span className="hv-a-ctaIco hv-a-wa"><svg viewBox="0 0 24 24" width="20" height="20" fill="#fff"><path d="M20 3.5A9.9 9.9 0 0 0 4.1 15.6L3 21l5.5-1.4A9.9 9.9 0 1 0 20 3.5z"/></svg></span><span><small>Message</small><b>WhatsApp</b></span></a>
          </div>
          <div className="hv-a-trust">
            <div><b>4.9★</b><span>612 reviews</span></div>
            <div><b>20+ yrs</b><span>in Houston</span></div>
            <div><b>EPA</b><span>certified</span></div>
            <div><b>$0</b><span>service call</span></div>
          </div>
        </div>
        <div className="hv-a-right">
          <div className="hv-a-dial">
            <svg viewBox="0 0 240 240">
              <defs><linearGradient id="hva-ring" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7ed0f0"/><stop offset="1" stopColor="#56b6e6"/></linearGradient></defs>
              <circle cx="120" cy="120" r="105" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="20"/>
              <circle cx="120" cy="120" r="105" fill="none" stroke="url(#hva-ring)" strokeWidth="20" strokeDasharray="660" strokeDashoffset="200" strokeLinecap="round" transform="rotate(-100 120 120)"/>
              <circle cx="120" cy="120" r="78" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
              <text x="120" y="118" textAnchor="middle" fill="#fff" fontSize="56" fontWeight="800" fontFamily="Bricolage Grotesque">72°</text>
              <text x="120" y="146" textAnchor="middle" fill="#56b6e6" fontSize="11" fontWeight="600" letterSpacing="3">COOLING</text>
              {Array.from({length:24}).map((_,i)=>{const a=(i/24)*Math.PI*2-Math.PI/2,r1=92,r2=i%3===0?84:88,x1=120+Math.cos(a)*r1,y1=120+Math.sin(a)*r1,x2=120+Math.cos(a)*r2,y2=120+Math.sin(a)*r2;return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.2)" strokeWidth={i%3===0?2:1}/>})}
            </svg>
            <div className="hv-a-dial-card">
              <div><b>98°</b><span>Outside</span></div>
              <div><b>72°</b><span>Indoor</span></div>
              <div><b>43%</b><span>Humidity</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HvacBefore() {
  return (
    <div className="hv-b">
      <div className="hv-b-banner"><div className="hv-b-banner-title">HOUSTON COOL AIR, INC.</div><div className="hv-b-banner-sub">&quot;Your Comfort Is Our Business!&quot;</div></div>
      <div className="hv-b-nav-strip"><span>Home</span><span>|</span><span>About Us</span><span>|</span><span>Services</span><span>|</span><span>FAQ</span><span>|</span><span>Contact Us</span></div>
      <div className="hv-b-grid">
        <aside className="hv-b-side">
          <div className="hv-b-side-title">★ MAIN MENU ★</div>
          <ul><li>» Home Page</li><li>» About Our Company</li><li>» Our Services</li><li>» Service Area Map</li><li>» Photo Gallery</li><li>» Customer Reviews</li><li>» Contact Information</li></ul>
          <div className="hv-b-stamp"><div>BBB</div><div className="hv-b-stamp-sub">MEMBER<br/>SINCE 2003</div></div>
        </aside>
        <main className="hv-b-main">
          <h1 className="hv-b-h1">Welcome to our website!</h1>
          <p>Houston Cool Air, Inc. is a family-owned and operated heating and air conditioning company serving the greater Houston area since 1998.</p>
          <ul className="hv-b-bullets"><li>Air Conditioning Repair &amp; Installation</li><li>Heating &amp; Furnace Services</li><li>Duct Cleaning &amp; Inspection</li><li>Preventative Maintenance Plans</li></ul>
          <p className="hv-b-call">Call us today at <span>(713) 555-2665</span> for a free estimate!</p>
        </main>
        <div className="hv-b-clip">
          <div className="hv-b-img-title">Our AC Unit</div>
          <div className="hv-b-ac"><div className="hv-b-ac-vents"><span></span><span></span><span></span><span></span><span></span></div><div className="hv-b-ac-logo">CoolMax</div></div>
          <div className="hv-b-ad"><div className="hv-b-ad-title">SPECIAL!</div><div className="hv-b-ad-body">$25 OFF<br/>any service<br/>over $100</div><div className="hv-b-ad-foot">Mention code: WEB</div></div>
        </div>
      </div>
      <div className="hv-b-foot"><span>Visitors: 04,382</span><span>Last updated: March 12, 2014</span><span>Best viewed in IE6</span></div>
    </div>
  )
}

function DentalAfter() {
  return (
    <div className="dn-a">
      <nav className="dn-a-nav">
        <div className="dn-a-brand">
          <div className="dn-a-mark"><svg viewBox="0 0 24 24" width="20" height="20" fill="#2d8a6e"><path d="M12 2c-3 0-5 1.5-6 4 0 4 1 7 2 10 .5 1.5 1 3 2 3 1 0 1-2 1.5-3.5.5-1.5 1-1.5 1.5 0 .5 1.5.5 3.5 1.5 3.5 1 0 1.5-1.5 2-3 1-3 2-6 2-10-1-2.5-3-4-6-4z"/></svg></div>
          <div><div className="dn-a-brandname">Smile Houston Dental</div><div className="dn-a-brandsub">General · Cosmetic · Family</div></div>
        </div>
        <ul className="dn-a-menu"><li>About</li><li>Services</li><li>New patients</li><li>Insurance</li><li>Contact</li></ul>
        <a className="dn-a-navcta">Book a visit →</a>
      </nav>
      <div className="dn-a-hero">
        <div className="dn-a-left">
          <span className="dn-a-eye">Houston Heights · Open today until 6pm</span>
          <h1 className="dn-a-h1">Your best smile,<br/><em>by Houston&apos;s most-loved</em><br/>dental team.</h1>
          <p className="dn-a-sub">General, cosmetic, and family dentistry. Same-day visits for cleanings and emergencies. Bilingual front desk, all major PPO insurance accepted.</p>
          <div className="dn-a-row">
            <a className="dn-a-ctaA"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.4 11.4 0 0 0 3.5.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.5 1 1 0 0 1-.2 1z"/></svg><span><small>Call today</small><b>(713) 555-7645</b></span></a>
            <a className="dn-a-ctaB"><svg viewBox="0 0 24 24" width="18" height="18" fill="#2d8a6e"><path d="M20 3.5A9.9 9.9 0 0 0 4.1 15.6L3 21l5.5-1.4A9.9 9.9 0 1 0 20 3.5z"/></svg><span><small>Send a message</small><b>WhatsApp</b></span></a>
          </div>
          <div className="dn-a-trust">
            <div className="dn-a-stars"><span className="dn-a-rating">4.9</span><span>★★★★★</span></div>
            <div className="dn-a-trust-text"><b>483 Google reviews</b><span>Insurance billed for you · Spanish &amp; English</span></div>
          </div>
        </div>
        <div className="dn-a-right">
          <div className="dn-a-card">
            <div className="dn-a-card-badge"><span>EST.</span><span>2009</span></div>
            <div className="dn-a-card-tooth">
              <svg viewBox="0 0 200 200">
                <defs><radialGradient id="dnt" cx="0.3" cy="0.2"><stop offset="0" stopColor="#fff"/><stop offset="1" stopColor="#f4f0e8"/></radialGradient></defs>
                <path d="M100 30c-22 0-38 11-44 30 0 30 8 53 15 75 4 11 8 23 15 23 8 0 8-15 12-26 4-11 8-11 12 0 4 11 4 26 12 26 8 0 11-11 15-23 7-22 15-45 15-75-6-19-22-30-44-30z" fill="url(#dnt)" stroke="#2d8a6e" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="dn-a-card-tags"><span>Invisalign®</span><span>Implants</span><span>Whitening</span><span>Cleanings</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DentalBefore() {
  return (
    <div className="dn-b">
      <div className="dn-b-top"><div className="dn-b-logo"><i>Smile</i><span>Houston Dental</span></div><div className="dn-b-top-right"><div className="dn-b-phone">📞 (713) 555-SMILE</div><div className="dn-b-hours">Mon-Fri 9am-5pm</div></div></div>
      <div className="dn-b-banner">✿ Welcome to our dental office! ✿ Now Accepting New Patients! ✿</div>
      <div className="dn-b-body">
        <div className="dn-b-collage">
          <div className="dn-b-photo dn-b-p1"><div className="dn-b-photo-emoji">😁</div><div className="dn-b-photo-cap">Happy Patient!</div></div>
          <div className="dn-b-photo dn-b-p2"><div className="dn-b-photo-emoji">🦷</div><div className="dn-b-photo-cap">Modern Equipment</div></div>
          <div className="dn-b-photo dn-b-p3"><div className="dn-b-photo-emoji">👨‍⚕️</div><div className="dn-b-photo-cap">Friendly Staff</div></div>
        </div>
        <div className="dn-b-welcome"><h2>Hello and Welcome!</h2><p>At Smile Houston Dental, we believe that everyone deserves a beautiful smile! We offer dental services for the whole family.</p></div>
        <div className="dn-b-buttons">
          <button className="dn-b-btn dn-b-btn1">📅 BOOK ONLINE!!</button>
          <button className="dn-b-btn dn-b-btn2">💌 Email Us</button>
          <button className="dn-b-btn dn-b-btn3">📋 New Patient Forms</button>
        </div>
      </div>
      <div className="dn-b-foot"><span>© 2011 Smile Houston Dental</span><span>Site by Sandra&apos;s Web Designs ♥</span></div>
    </div>
  )
}

function PlumbingAfter() {
  return (
    <div className="pl-a">
      <nav className="pl-a-nav">
        <div className="pl-a-brand"><div className="pl-a-mark">FF</div><div><div className="pl-a-brandname">Fast Flow Plumbing</div><div className="pl-a-brandsub"><span className="pl-a-dot"></span>24/7 emergency · Houston, TX</div></div></div>
        <ul className="pl-a-menu"><li>Emergency</li><li>Services</li><li>Pricing</li><li>About</li><li>Reviews</li></ul>
        <a className="pl-a-navcta">☎ (713) 555-FLOW</a>
      </nav>
      <div className="pl-a-hero">
        <div className="pl-a-left">
          <div className="pl-a-eye"><span className="pl-a-pulse"></span><span>EMERGENCY · LIVE DISPATCH RIGHT NOW</span></div>
          <h1 className="pl-a-h1">Burst pipe?<br/>Backed-up drain?<br/><em>We&apos;re 60 min away.</em></h1>
          <p className="pl-a-sub">Houston&apos;s fastest emergency plumbing. Licensed, insured, and on the road 24/7. Flat-rate quotes — pay after the job is done.</p>
          <div className="pl-a-row">
            <a className="pl-a-ctaA"><span className="pl-a-cta-ico">☎</span><span className="pl-a-cta-text"><small>CALL DISPATCH</small><b>(713) 555-FLOW</b></span></a>
            <a className="pl-a-ctaB"><svg viewBox="0 0 24 24" width="22" height="22" fill="#fff"><path d="M20 3.5A9.9 9.9 0 0 0 4.1 15.6L3 21l5.5-1.4A9.9 9.9 0 1 0 20 3.5z"/></svg><span className="pl-a-cta-text"><small>WHATSAPP</small><b>Send photo of leak</b></span></a>
          </div>
          <div className="pl-a-trust">
            <div className="pl-a-trust-item"><b>~60</b><span>min response</span></div>
            <div className="pl-a-divider"></div>
            <div className="pl-a-trust-item"><b>5.0★</b><span>814 reviews</span></div>
            <div className="pl-a-divider"></div>
            <div className="pl-a-trust-item"><b>15yr</b><span>licensed</span></div>
            <div className="pl-a-divider"></div>
            <div className="pl-a-trust-item"><b>$0</b><span>quotes</span></div>
          </div>
        </div>
        <div className="pl-a-right">
          <div className="pl-a-badge">
            <div className="pl-a-badge-ring">
              <svg viewBox="0 0 200 200">
                <defs><path id="pla-circle" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"/></defs>
                <text fontSize="13" fontWeight="700" letterSpacing="6" fontFamily="sans-serif" fill="#f4c724"><textPath href="#pla-circle">★ FAST FLOW PLUMBING ★ 24/7 EMERGENCY ★ HOUSTON TX ★</textPath></text>
              </svg>
            </div>
            <div className="pl-a-badge-core"><div className="pl-a-badge-247">24/7</div><div className="pl-a-badge-emer">EMERGENCY</div><div className="pl-a-badge-line"></div><div className="pl-a-badge-foot">ON CALL · NOW</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PlumbingBefore() {
  return (
    <div className="pl-b">
      <div className="pl-b-topstrip">★ ★ ★ HOUSTON&apos;S #1 PLUMBER SINCE 2008 ★ ★ ★ CALL TODAY ★ ★ ★</div>
      <div className="pl-b-header"><div className="pl-b-logo">FAST FLOW PLUMBING</div><div className="pl-b-phone-block"><div className="pl-b-phone-label">CALL NOW!!!</div><div className="pl-b-phone-number">(713) 555-FLOW</div><div className="pl-b-phone-sub">24 HOUR EMERGENCY SERVICE</div></div></div>
      <div className="pl-b-body">
        <div className="pl-b-left">
          <div className="pl-b-title">PLUMBING SERVICES &amp; PRICES</div>
          <table className="pl-b-table"><tbody>
            <tr><td>★</td><td>Drain Cleaning</td><td>from $89</td></tr>
            <tr><td>★</td><td>Water Heater Repair</td><td>from $145</td></tr>
            <tr><td>★</td><td>Toilet Installation</td><td>from $199</td></tr>
            <tr><td>★</td><td>Faucet Replacement</td><td>from $79</td></tr>
            <tr><td>★</td><td>Sewer Line Repair</td><td>CALL</td></tr>
          </tbody></table>
          <div className="pl-b-call-bar">☎ ☎ ☎ CALL (713) 555-FLOW NOW ☎ ☎ ☎</div>
        </div>
        <div className="pl-b-right">
          <div className="pl-b-coupon"><div className="pl-b-coupon-head">★ COUPON ★</div><div className="pl-b-coupon-big">$25 OFF</div><div className="pl-b-coupon-body">ANY SERVICE OVER $100</div><div className="pl-b-coupon-foot">PRINT THIS PAGE!<br/>Exp. 12/31/2018</div></div>
        </div>
      </div>
      <div className="pl-b-foot"><span>© 2018 Fast Flow Plumbing · Licensed &amp; Insured</span></div>
    </div>
  )
}

function RoofingAfter() {
  return (
    <div className="rf-a">
      <nav className="rf-a-nav">
        <div className="rf-a-brand"><div className="rf-a-mark"><svg viewBox="0 0 24 24" width="20" height="20" fill="#f0e6d2"><path d="M12 3 2 12h3v8h6v-5h2v5h6v-8h3z"/></svg></div><div><div className="rf-a-brandname">Texas Top Roofing</div><div className="rf-a-brandsub">Houston · est. 1998</div></div></div>
        <ul className="rf-a-menu"><li>Services</li><li>Storm damage</li><li>Insurance claims</li><li>Gallery</li><li>About</li></ul>
        <a className="rf-a-navcta">Free roof inspection</a>
      </nav>
      <div className="rf-a-hero">
        <div className="rf-a-left">
          <div className="rf-a-eye"><span className="rf-a-eye-line"></span><span>Insurance-claim specialists · GAF Master Elite®</span></div>
          <h1 className="rf-a-h1">Houston&apos;s most<br/>trusted roofers<br/><em>since 1998.</em></h1>
          <p className="rf-a-sub">Hail damage, insurance claims, and full replacements. 4,200+ Houston-area roofs and a lifetime workmanship warranty.</p>
          <div className="rf-a-row">
            <a className="rf-a-ctaA">Free roof inspection <span className="rf-a-ctaA-arrow">→</span></a>
            <a className="rf-a-ctaPhone"><svg viewBox="0 0 24 24" width="16" height="16" fill="#f0e6d2"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.4 11.4 0 0 0 3.5.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.5 1 1 0 0 1-.2 1z"/></svg>(713) 555-ROOF</a>
          </div>
          <div className="rf-a-trust">
            <div className="rf-a-trust-item"><div className="rf-a-trust-num">4,200+</div><div className="rf-a-trust-cap">roofs installed</div></div>
            <div className="rf-a-trust-item"><div className="rf-a-trust-num">A+</div><div className="rf-a-trust-cap">BBB accredited</div></div>
            <div className="rf-a-trust-item"><div className="rf-a-trust-num">Lifetime</div><div className="rf-a-trust-cap">workmanship warranty</div></div>
          </div>
        </div>
        <div className="rf-a-right">
          <div className="rf-a-quote-card">
            <div className="rf-a-q-stars">★★★★★</div>
            <p>&quot;Filed our insurance claim and replaced the whole roof in 4 days. Best contractor in Houston.&quot;</p>
            <div className="rf-a-q-author">— Maria L., Memorial</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RoofingBefore() {
  return (
    <div className="rf-b">
      <div className="rf-b-bar"><span>Home</span><span>Services</span><span>About</span><span>Gallery</span><span>Contact</span></div>
      <div className="rf-b-header"><div className="rf-b-logo">Texas Top Roofing</div><div className="rf-b-phone">Call: (713) 555-7663</div></div>
      <div className="rf-b-banner"><div className="rf-b-banner-tag">WE PROVIDE QUALITY ROOFING SERVICES</div><h2>Welcome to Texas Top Roofing</h2><p>Your local Houston roofing contractor.</p><button className="rf-b-banner-btn">Learn More</button></div>
      <div className="rf-b-boxes">
        <div className="rf-b-box"><div className="rf-b-box-ico">✓</div><div className="rf-b-box-title">Free Estimates</div><p>We provide free estimates for all roofing projects.</p></div>
        <div className="rf-b-box"><div className="rf-b-box-ico">★</div><div className="rf-b-box-title">Quality Work</div><p>Quality workmanship on every job.</p></div>
        <div className="rf-b-box"><div className="rf-b-box-ico">$</div><div className="rf-b-box-title">Affordable Prices</div><p>Competitive prices to fit any budget.</p></div>
      </div>
      <div className="rf-b-foot"><span>© 2019 Texas Top Roofing</span><span>Powered by SiteBuilder Pro™</span></div>
    </div>
  )
}

function LandscapingAfter() {
  return (
    <div className="ls-a">
      <nav className="ls-a-nav">
        <div className="ls-a-brand"><div className="ls-a-mark"><svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 21c-3-4-5-7-5-11a5 5 0 0 1 10 0c0 4-2 7-5 11z" fill="#7bc043"/></svg></div><div><div className="ls-a-brandname">Green Horizon</div><div className="ls-a-brandsub">Landscaping · Houston · Katy · Sugar Land</div></div></div>
        <ul className="ls-a-menu"><li>Services</li><li>Portfolio</li><li>Maintenance plans</li><li>About</li></ul>
        <a className="ls-a-navcta">Get free quote →</a>
      </nav>
      <div className="ls-a-hero">
        <div className="ls-a-left">
          <span className="ls-a-eye"><svg viewBox="0 0 12 12" width="10" height="10"><circle cx="6" cy="6" r="3" fill="#7bc043"/></svg>Booking Spring projects · Houston metro</span>
          <h1 className="ls-a-h1">Transform your<br/>Houston yard into<br/><em>a backyard escape.</em></h1>
          <p className="ls-a-sub">Full-service design, install, and weekly maintenance. Drought-smart Texas landscaping. Free quote in 24 hours.</p>
          <div className="ls-a-row">
            <a className="ls-a-ctaA">Get a free quote</a>
            <a className="ls-a-ctaPhone"><svg viewBox="0 0 24 24" width="16" height="16" fill="#1a5c2e"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.4 11.4 0 0 0 3.5.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.5 1 1 0 0 1-.2 1z"/></svg>(713) 555-YARD</a>
          </div>
          <div className="ls-a-trust">
            <div className="ls-a-trust-item"><span className="ls-a-trust-num">450+</span><span className="ls-a-trust-cap">Houston yards transformed</span></div>
            <div className="ls-a-trust-item"><span className="ls-a-trust-num">4.9★</span><span className="ls-a-trust-cap">Google &amp; Nextdoor</span></div>
            <div className="ls-a-trust-item"><span className="ls-a-trust-num">Insured</span><span className="ls-a-trust-cap">Residential &amp; commercial</span></div>
          </div>
        </div>
        <div className="ls-a-right">
          <div className="ls-a-stat-card">
            <div className="ls-a-stat-row"><span className="ls-a-stat-emoji">🌳</span><div><b>Drought-smart</b><span>Native Texas plants</span></div></div>
            <div className="ls-a-stat-divider"></div>
            <div className="ls-a-stat-row"><span className="ls-a-stat-emoji">💧</span><div><b>Smart irrigation</b><span>30% less water</span></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LandscapingBefore() {
  return (
    <div className="ls-b">
      <div className="ls-b-marquee"><div className="ls-b-marquee-inner">★★★ WELCOME TO GREEN HORIZON LANDSCAPING ★★★ FAMILY OWNED &amp; OPERATED ★★★ FREE ESTIMATES ★★★</div></div>
      <div className="ls-b-header"><h1 className="ls-b-title">Green Horizon Landscaping</h1><div className="ls-b-tag">&quot;We Make Your Yard Look Nice!&quot;</div></div>
      <div className="ls-b-body">
        <div className="ls-b-left">
          <div className="ls-b-construction"><div className="ls-b-cons-stripe"></div><div className="ls-b-cons-text">⚠ THIS PAGE IS UNDER<br/>CONSTRUCTION ⚠</div><div className="ls-b-cons-stripe"></div></div>
          <div className="ls-b-welcome"><p>Hi there!! We are a family owned landscaping business in HOUSTON, TEXAS!!</p><p className="ls-b-call">For a FREE estimate call:</p><p className="ls-b-num">(713) 555-9273</p><p className="ls-b-blink">~ ASK FOR JIMMY ~</p></div>
        </div>
        <div className="ls-b-right">
          <div className="ls-b-photo-title">~ Photo Gallery ~</div>
          <div className="ls-b-photos">
            <div className="ls-b-photo"><div className="ls-b-photo-inner">🌳</div><span>lawn1.jpg</span></div>
            <div className="ls-b-photo"><div className="ls-b-photo-inner">🌷</div><span>flowers.jpg</span></div>
            <div className="ls-b-photo"><div className="ls-b-photo-inner">🌿</div><span>hedge.jpg</span></div>
          </div>
        </div>
      </div>
      <div className="ls-b-foot"><span>Last updated: 02/14/2009</span><span>© Green Horizon Landscaping</span></div>
    </div>
  )
}

function BrowserFrame({ url, tab, children }: { url: string; tab: string; children: React.ReactNode }) {
  return (
    <div style={{ borderRadius:14, overflow:'hidden', background:'#fff', boxShadow:'0 10px 30px -10px rgba(0,0,0,0.18)', border:'1px solid rgba(0,0,0,0.08)' }}>
      <div style={{ background:'linear-gradient(180deg,#f0eee9 0%,#e6e3dc 100%)', borderBottom:'1px solid rgba(0,0,0,0.08)', padding:'10px 14px 0' }}>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <div style={{ display:'flex', gap:6 }}><div style={{ width:12,height:12,borderRadius:'50%',background:'#ed6a5e' }}/><div style={{ width:12,height:12,borderRadius:'50%',background:'#f4bf4f' }}/><div style={{ width:12,height:12,borderRadius:'50%',background:'#61c554' }}/></div>
          <div style={{ display:'flex', gap:4, flex:1 }}>
            <div style={{ background:'#fff', borderRadius:'8px 8px 0 0', padding:'7px 12px 9px', fontSize:11.5, display:'flex', alignItems:'center', gap:8, border:'1px solid rgba(0,0,0,0.08)', borderBottom:'none', fontFamily:'sans-serif' }}>
              <div style={{ width:12,height:12,borderRadius:2,background:'#888',flexShrink:0 }}/>
              <span style={{ whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', maxWidth:200 }}>{tab}</span>
              <span style={{ color:'#888', marginLeft:'auto' }}>×</span>
            </div>
          </div>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:10, background:'#fff', borderRadius:8, padding:'8px 14px', margin:'8px 0 10px', fontSize:12.5, border:'1px solid rgba(0,0,0,0.08)', fontFamily:'sans-serif' }}>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><rect x="3" y="7" width="10" height="7" rx="1.5" fill="#5b8a3a" opacity="0.9"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="#5b8a3a" strokeWidth="1.5" fill="none"/></svg>
          <span style={{ color:'#6b6b6b' }}>https://www.<b style={{ color:'#1a1a1a' }}>{url}</b>/</span>
        </div>
      </div>
      <div style={{ position:'relative', height:520, overflow:'hidden', background:'#fff' }}>{children}</div>
    </div>
  )
}

const BUSINESSES = [
  { id:'hvac',        num:'01', name:'Houston Cool Air',     industry:'HVAC',        url:'houstoncoolair.com',     tab:'Houston Cool Air — AC Repair Houston, TX', Before:HvacBefore,        After:HvacAfter },
  { id:'dental',      num:'02', name:'Smile Houston Dental', industry:'Dental',       url:'smilehoustondental.com', tab:'Smile Houston Dental — General & Cosmetic', Before:DentalBefore,      After:DentalAfter },
  { id:'plumbing',    num:'03', name:'Fast Flow Plumbing',   industry:'Plomería',     url:'fastflowplumbing.com',   tab:'Fast Flow Plumbing — 24/7 Emergency',       Before:PlumbingBefore,    After:PlumbingAfter },
  { id:'roofing',     num:'04', name:'Texas Top Roofing',    industry:'Roofing',      url:'texastoproofing.com',    tab:'Texas Top Roofing — Houston Roofers',        Before:RoofingBefore,     After:RoofingAfter },
  { id:'landscaping', num:'05', name:'Green Horizon',        industry:'Landscaping',  url:'greenhorizonhouston.com',tab:'Green Horizon Landscaping — Houston',        Before:LandscapingBefore, After:LandscapingAfter },
]

function Card({ biz }: { biz: typeof BUSINESSES[0] }) {
  const [mode, setMode] = useState<'before'|'after'>('before')
  const Before = biz.Before
  const After = biz.After
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:16 }}>
        <div>
          <div style={{ fontFamily:'var(--mono)', fontSize:11, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--muted)' }}>{biz.num} — {biz.industry}</div>
          <h3 style={{ fontFamily:'var(--display)', fontWeight:700, fontSize:22, letterSpacing:'-.02em', margin:'4px 0 0', color:'var(--fg)' }}>{biz.name}</h3>
        </div>
        <div style={{ display:'inline-flex', padding:4, borderRadius:999, background:'var(--fg)', flexShrink:0 }}>
          {(['before','after'] as const).map(m => (
            <button key={m} onClick={() => setMode(m)} style={{ border:0, background: mode===m ? 'var(--accent)' : 'transparent', color: mode===m ? 'var(--accent-contrast)' : 'var(--bg)', fontWeight:700, fontSize:11, letterSpacing:'.08em', textTransform:'uppercase', padding:'8px 16px', borderRadius:999, cursor:'pointer', fontFamily:'var(--mono)' }}>
              {m === 'before' ? 'Antes' : 'Después'}
            </button>
          ))}
        </div>
      </div>
      <BrowserFrame url={biz.url} tab={biz.tab}>
        <div style={{ position:'absolute', inset:0, display: mode==='before' ? 'block' : 'none' }}><Before /></div>
        <div style={{ position:'absolute', inset:0, display: mode==='after' ? 'block' : 'none' }}><After /></div>
      </BrowserFrame>
      <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, color:'var(--muted)', padding:'0 4px' }}>
        <span>{mode==='before' ? 'Sitio actual — heredado, sin estrategia.' : 'Rediseño CECA — branding, CRO, tracking.'}</span>
        <span style={{ display:'inline-flex', alignItems:'center', padding:'4px 10px', background:'var(--fg)', color:'var(--bg)', borderRadius:999, fontFamily:'var(--mono)', fontWeight:600, fontSize:10, letterSpacing:'.1em', textTransform:'uppercase' }}>{mode==='before' ? 'Antes' : 'Después'}</span>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <>
      <link rel="stylesheet" href="/mockup-styles.css" />
      <div style={{ minHeight:'100vh', background:'var(--bg)', color:'var(--fg)', paddingTop:84 }}>
        <section style={{ padding:'80px 28px 64px', borderBottom:'1px solid var(--line)' }}>
          <div style={{ maxWidth:1320, margin:'0 auto' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingBottom:14, borderBottom:'1px solid var(--line)', marginBottom:40, fontFamily:'var(--mono)', fontSize:11, color:'var(--muted)', letterSpacing:'.1em', textTransform:'uppercase' }}>
              <span><span style={{ color:'var(--accent)', marginRight:8 }}>●</span>// Portafolio</span>
              <Link href="/" style={{ color:'var(--muted)' }}>← Volver al inicio</Link>
            </div>
            <h1 style={{ margin:0, fontFamily:'var(--display)', fontWeight:900, fontSize:'clamp(40px, 6vw, 96px)', lineHeight:0.92, letterSpacing:'-.035em' }}>
              Antes y<br/><span style={{ color:'var(--accent)', fontStyle:'italic' }}>después.</span>
            </h1>
            <p style={{ marginTop:28, fontSize:18, lineHeight:1.55, maxWidth:580, color:'var(--muted)' }}>
              Cinco negocios de Houston rediseñados de raíz. Cada uno con su propia voz y estrategia — con el mismo objetivo: convertir visitas en llamadas.
            </p>
            <div style={{ marginTop:16, fontFamily:'var(--mono)', fontSize:12, color:'var(--muted)', letterSpacing:'.06em', textTransform:'uppercase' }}>
              Activa el toggle en cada tarjeta para comparar →
            </div>
          </div>
        </section>

        <section style={{ padding:'80px 28px 120px' }}>
          <div style={{ maxWidth:1320, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'56px 40px' }}>
            {BUSINESSES.map(b => <Card key={b.id} biz={b} />)}
          </div>
        </section>

        <section style={{ padding:'64px 28px', borderTop:'1px solid var(--line)', background:'var(--panel)' }}>
          <div style={{ maxWidth:1320, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:24 }}>
            <div>
              <h2 style={{ margin:0, fontFamily:'var(--display)', fontWeight:900, fontSize:'clamp(28px,4vw,48px)', letterSpacing:'-.02em' }}>¿Tu negocio es el próximo?</h2>
              <p style={{ margin:'8px 0 0', color:'var(--muted)', fontSize:16 }}>Auditoría gratis — respondemos en menos de 24 horas.</p>
            </div>
            <Link href="/#contact" style={{ background:'var(--accent)', color:'var(--accent-contrast)', padding:'18px 28px', fontFamily:'var(--mono)', fontSize:13, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase' }}>
              Hablemos →
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}