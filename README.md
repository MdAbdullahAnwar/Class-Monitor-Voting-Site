# 🗳️ Class Monitor Voting System

A real-time voting application for electing class monitors, featuring live results tracking, modular components, smooth state management, and a clean, colorful UI.

## ✨ Features

- **🗳️ Voting System**: Add new votes with student name and candidate selection
- **🔥 Live Counter**: Real-time total vote counter
- **🏆 Instant Results**: View current winner or tie status
- **🗑️ Vote Management**: Delete individual votes to update counts
- **📋 Voter Tracking**: See who voted for each candidate
- **🎨 Responsive UI**: Works on all devices with smooth animations

## 🛠 Tech Stack

| Category          | Technologies Used                     |
|-------------------|---------------------------------------|
| Frontend          | React, React Hooks                    |
| Styling           | CSS Modules, CSS Gradients            |
| State Management  | Context API                           |
| Build Tool        | Vite                                  |

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher) or yarn

### Installation
```
git clone https://github.com/your-username/class-monitor-voting.git
cd class-monitor-voting
npm install
npm run dev
```

## 📖 How to Use
Cast a Vote
Click the "Add New Vote" button

Enter your name and select a candidate

Submit your vote and watch it appear instantly

View Results
Click "Show Result" button

Instantly view the winner or if there's a tie

Manage Votes
Click "Delete" next to any vote

Watch the total vote counter update automatically

## 🏗️ Project Structure
```
src/
├── components/
│   ├── Candidate/          # Individual candidate UI
│   ├── CandidateList/      # All candidates display
│   ├── Result/            # Results calculation
│   ├── VoteModal/         # Voting interface
│   └── VotingApp/         # Main application shell
│
├── context/
│   ├── ModalProvider.jsx  # Modal state management
│   └── VotingProvider.jsx # Voting state management
│
├── App.jsx                # Root component
└── main.jsx               # Entry point
```

## 📂 Folder Structure
```
class-monitor-voting-site/
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── Candidate.jsx
│   │   ├── Candidate.module.css
│   │   ├── CandidateList.jsx
│   │   ├── CandidateList.module.css
│   │   ├── Result.jsx
│   │   ├── Result.module.css
│   │   ├── VoteModal.jsx
│   │   ├── VoteModal.module.css
│   │   ├── VotingApp.jsx
│   │   └── VotingApp.module.css
│   │
│   ├── context/
│   │   ├── ModalProvider.jsx
│   │   └── VotingProvider.jsx
│   │
│   ├── App.jsx
│   ├── App.module.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
└── README.md
```

## 🧪 Testing
To run tests (if configured):

```
npm test
```
You can also manually test by adding, deleting votes, and checking real-time updates.

## 📱 Responsiveness

📱 Mobile Devices

💻 Tablets

🖥️ Desktops

The app is fully optimized for all screen sizes.

## 📄 License
This project is open-source and free to use under the MIT License.