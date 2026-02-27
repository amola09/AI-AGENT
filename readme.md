# 🤖 QA Job AI Agent (Playwright + Cypress)

An AI-powered job search agent that automatically collects and filters **QA Automation jobs** from multiple platforms.

Built using **Node.js + Playwright** to help testers find relevant job openings quickly.

---

## 🚀 Features

✅ Scrapes QA jobs from:

* Indeed
* Naukri
* Instahyre
* LinkedIn

✅ Detects skills automatically:

* Playwright
* Cypress
* Selenium
* JavaScript

✅ Filters junior & relevant roles
✅ Exports results to Excel
✅ Easy to extend with more platforms

---

## 🏗 Project Structure

```
qa_job_agent/
│
├── index.js              # Main controller
├── aiProcessor.js        # Skill detection logic
├── keywords.js           # Search keywords
│
├── scrapers/
│   ├── indeed.js
│   ├── naukri.js
│   └── instahyre.js
│
├── utils/
│   └── saveResults.js    # Save results to Excel
│
└── output/
    └── jobs.xlsx
```

---

## ⚙️ Installation

### 1️⃣ Clone repository

```
git clone https://github.com/yourusername/qa-job-ai-agent.git
cd qa-job-ai-agent
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run the agent

```
node index.js
```

---

## 📊 Sample Output

| Title                  | Company  | Skills               | Source |
| ---------------------- | -------- | -------------------- | ------ |
| QA Automation Engineer | ABC Tech | Cypress              | Indeed |
| Automation Tester      | XYZ Ltd  | Playwright, Selenium | Naukri |

---

## 🎯 Why This Project?

This project demonstrates:

✔ Web scraping with Playwright
✔ Automation & AI filtering
✔ Real-world job aggregation
✔ JavaScript backend architecture

Perfect for **QA Automation Engineer / SDET roles**.

---

## 🔮 Future Improvements

* LinkedIn job integration
* Daily job alerts via Telegram
* Job match scoring system
* Auto-apply assistant

---

## 👨‍💻 Author

**Amol Anpat**

Aspiring QA Automation Engineer transitioning into tech.

---

⭐ If you found this helpful, consider giving it a star!
