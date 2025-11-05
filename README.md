# 🌍 RunMyWorld — AI Agents That Execute Things for You

### 🚀 Overview

**RunMyWorld** is an AI-powered automation platform that lets users create and manage intelligent **agents** — such as a Fitness Coach, Travel Planner, or Productivity Assistant — that can run tasks **locally or in the cloud**.

This project is being developed as part of **VibeState ’25**, a week-long AI Vibeathon organized by **Singularity** in collaboration with **RunAnywhere** and **Firebender**.

---

### 💡 Project Vision

We aim to build a **hybrid ecosystem** that combines a **Web Dashboard** (for creating and managing agents) and a **Mobile App** (that executes them using the **RunAnywhere SDK**).

The goal is to demonstrate how autonomous AI agents can perform everyday tasks seamlessly across devices.

---

### 🧩 Core Features

* 🧠 **Custom AI Agents** – Create specialized agents with unique goals and personalities.
* ⚡ **RunAnywhere SDK Integration** – Execute agent scripts either locally or via the cloud.
* 🔄 **Web + Mobile Sync** – Real-time synchronization between dashboard and mobile app.
* 🔔 **Activity Notifications** – Alerts for task completions or agent updates.
* 🔒 **Secure Data Storage** – Encrypted local storage using AndroidX Security Crypto.

---

### 🛠️ Tech Stack

| Layer              | Technology                     |
| ------------------ | ------------------------------ |
| Mobile Framework   | Jetpack Compose (Kotlin)       |
| Backend AI Runtime | RunAnywhere SDK                |
| API Gateway        | Firebender Enterprise Platform |
| Networking         | Ktor, OkHttp                   |
| Local DB           | Room Database                  |
| Background Tasks   | WorkManager                    |
| Security           | AndroidX Crypto                |

---

### ⚙️ Setup Guide

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AYUSH-KUMAR02/RunMyWorld.git
cd RunMyWorld
```

#### 2️⃣ Open in Android Studio

* Use **Android Studio Hedgehog or newer**.
* Open the `RunMyWorld` folder directly.

#### 3️⃣ Verify SDK Integration

Check `app/libs/` for:

```
RunAnywhereKotlinSDK-release.aar
runanywhere-llm-llamacpp-release.aar
```

If missing, copy them from the official Hackss base repo.

#### 4️⃣ Run the App

Click **▶ Run** in Android Studio.
If everything is configured correctly, the app should build and open in your emulator.

---

### 🧱 Architecture Overview

```
MainActivity.kt  → App Entry Point (Jetpack Compose)
|
|-- AgentListScreen.kt  → Displays available agents
|-- AgentDetailScreen.kt → Run / Manage agent scripts
|-- RunAnywhereClient    → Executes AI code
|-- FirebenderSession    → Handles enterprise access
|-- RoomDB               → Local storage for agent info
```

---

### 🧑‍💻 Team RunMyWorld

| Name                  | Role                          | Responsibilities                            |
| --------------------- | ----------------------------- | ------------------------------------------- |
| **Ayush Kumar**       | Android Developer / Team Lead | Project setup, RunAnywhere SDK integration  |
| **[Teammate 2 Name]** | Backend & SDK Engineer        | Firebender API, agent runtime logic         |
| **[Teammate 3 Name]** | UI/UX Designer                | Compose UI design, user flows               |
| **[Teammate 4 Name]** | Web Dashboard Developer       | Agent management dashboard, API integration |

🫱 *Together, we’re building the future of personalized AI automation.*

---

### 🧠 Event Info

**Hackathon:** VibeState ’25
**Organizers:** Singularity x RunAnywhere x Firebender
**Category:** AI / Automation / Cross-platform Agent Systems
**Duration:** 1 Week

---

### 📜 License

This project is developed for **educational and hackathon purposes only**.
All rights to RunAnywhere SDK and Firebender API belong to their respective owners.

---

### 🌐 Useful Links

* 🔗 [RunAnywhere SDK GitHub](https://github.com/RunanywhereAI/runanywhere-sdks)
* 🔗 [Firebender Platform](https://firebender.ai/)
* 🔗 [VibeState ’25 Discord](https://discord.gg/DCyf4MU7)

---

### ❤️ Acknowledgements

Special thanks to the **RunAnywhere**, **Firebender**, and **Singularity** teams for organizing VibeState ’25 and providing the tools to build next-gen AI experiences.

---
