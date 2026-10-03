* {
  box-sizing: border-box;
}

:root {
  --primary: #1d3557;
  --secondary: #e63946;
  --accent: #f1faee;
  --text: #1a1a1a;
  --muted: #6b7280;
  --card: #ffffff;
  --shadow: 0 14px 35px rgba(15, 23, 42, 0.12);
  --radius: 18px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  background: linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
  color: var(--text);
  direction: rtl;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(29, 53, 87, 0.96);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(15, 23, 42, 0.15);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 78px;
}

.brand {
  color: white;
  font-size: 1.7rem;
  font-weight: 800;
}

.nav-links {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

.hero {
  padding: 72px 0 32px;
  background: radial-gradient(circle at top, rgba(59, 130, 246, 0.12), rgba(14, 116, 144, 0.04));
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 24px;
  align-items: center;
}

.hero-copy h1 {
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  line-height: 1.2;
  margin: 0 0 16px;
  color: var(--primary);
}

.hero-copy p {
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.9;
  margin: 0 0 22px;
}

.btn-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 14px 22px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn.primary {
  background: var(--secondary);
  color: white;
}

.btn.secondary {
  background: var(--primary);
  color: white;
}

.hero-card {
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 24px;
}

.stats {
  display: grid;
  gap: 18px;
}

.stat-box {
  background: linear-gradient(135deg, #f8fafc, #eef2ff);
  border-radius: 14px;
  padding: 18px;
  border: 1px solid rgba(148, 163, 184, 0.18);
}

.stat-box .label {
  display: block;
  color: var(--muted);
  margin-bottom: 4px;
  font-size: 0.9rem;
}

.stat-box strong {
  font-size: 1.35rem;
  color: var(--primary);
}

.section {
  padding: 48px 0;
}

.section-title {
  text-align: center;
  font-size: clamp(1.7rem, 3vw, 2.6rem);
  color: var(--primary);
  margin-bottom: 28px;
}

.grid {
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.card {
  background: var(--card);
  border-radius: var(--radius);
  padding: 22px;
  box-shadow: var(--shadow);
  border: 1px solid rgba(148, 163, 184, 0.18);
}

.category-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 210px;
}

.category-icon {
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: linear-gradient(135deg, #dbeafe, #fce7f3);
  font-size: 2rem;
  margin-bottom: 18px;
}

.category-card h3 {
  margin: 0 0 10px;
  color: var(--primary);
  font-size: 1.35rem;
}

.category-card p {
  color: var(--muted);
  margin: 0 0 16px;
  line-height: 1.8;
}

.link-btn {
  display: inline-flex;
  padding: 12px 18px;
  border-radius: 12px;
  background: var(--primary);
  color: white;
  font-weight: 700;
  justify-content: center;
}

.pricing-box {
  background: linear-gradient(135deg, #0f172a, #1d3557);
  color: white;
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: var(--shadow);
}

.pricing-box h3 {
  margin-top: 0;
  font-size: 1.7rem;
}

.price-list {
  display: grid;
  gap: 18px;
  margin-top: 20px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 10px;
}

.price-row:last-child {
  border-bottom: 0;
}

.price-row strong {
  color: #fbbf24;
  font-size: 1.2rem;
}

.audio-list {
  display: grid;
  gap: 20px;
}

.audio-item {
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: var(--shadow);
  border: 1px solid rgba(148, 163, 184, 0.14);
}

.audio-item h4 {
  margin: 0 0 12px;
  color: var(--primary);
  font-size: 1.3rem;
}

audio {
  width: 100%;
  margin-bottom: 12px;
}

.request-row {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  align-items: center;
  flex-wrap: wrap;
}

.tag {
  display: inline-flex;
  background: #ecfeff;
  color: #0f766e;
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.8rem;
  font-weight: 700;
}

.artist-list {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.artist-item {
  background: white;
  border-radius: 14px;
  padding: 18px;
  box-shadow: var(--shadow);
  color: var(--primary);
  font-weight: 700;
  text-align: center;
}

.form-shell {
  width: min(720px, calc(100% - 24px));
  margin: 40px auto;
  background: white;
  border-radius: 22px;
  box-shadow: var(--shadow);
  padding: 30px;
}

.form-shell h2 {
  color: var(--primary);
  margin-bottom: 18px;
}

.form-grid {
  display: grid;
  gap: 18px;
}

label {
  display: block;
  color: var(--primary);
  font-weight: 700;
  margin-bottom: 8px;
}

input, select, textarea {
  width: 100%;
  padding: 13px 14px;
  border-radius: 12px;
  border: 1px solid #d6d9e0;
  font-size: 1rem;
  font-family: inherit;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.file-input {
  padding: 12px;
  background: #f8fafc;
}

.alert {
  padding: 14px 16px;
  border-radius: 12px;
  margin-bottom: 18px;
  font-weight: 600;
}

.alert.error {
  background: #fee2e2;
  color: #991b1b;
  border: 1px solid #fca5a5;
}

.alert.success {
  background: #dcfce7;
  color: #166534;
  border: 1px solid #86efac;
}

.admin-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  margin-top: 22px;
}

.table-list {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
}

.table-list th,
.table-list td {
  border-bottom: 1px solid #e5e7eb;
  padding: 12px 8px;
  text-align: right;
}

.small-btn {
  display: inline-block;
  border: none;
  background: var(--secondary);
  color: white;
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
}

.footer {
  text-align: center;
  padding: 28px 0 40px;
  color: var(--muted);
}

@media (max-width: 820px) {
  .hero-grid,
  .admin-grid {
    grid-template-columns: 1fr;
  }

  .navbar {
    flex-direction: column;
    justify-content: center;
    padding: 16px 0;
  }

  .nav-links {
    justify-content: center;
    padding-bottom: 10px;
  }
}
