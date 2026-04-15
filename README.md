# [KeenKeeper – Your Personal Friendship Manager](https://keen-keeper-zeta.vercel.app/)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-2d5a4e?style=for-the-badge&logo=vercel)](https://keen-keeper-zeta.vercel.app/)

---

## 📸 Screenshots

### Home
<img width="900" height="951" alt="Home" src="https://github.com/user-attachments/assets/7dd048c4-545c-4470-9e80-658acf02683a" />


### Friend Detail
<img width="938" height="850" alt="FriendDetails" src="https://github.com/user-attachments/assets/0aac1250-39ed-404b-a3ca-e70403de18f8" />


### Timeline
<img width="920" height="854" alt="Timeline" src="https://github.com/user-attachments/assets/5f9d77dd-85dd-4f28-a5fe-be1e17b2293e" />


### Stats
<img width="944" height="852" alt="Statistics" src="https://github.com/user-attachments/assets/4bb3783b-0af3-4e8e-a0b5-3f4b584a1d37" />


---

## 📌 About The Project
KeenKeeper is a relationship management app that helps you stay connected with the people who matter most. It tracks when you last contacted each friend, reminds you when you're overdue, and logs every interaction — calls, texts, and video chats — so no important relationship slips through the cracks.

---

## 🛠️ Technologies Used
- Next.js 15 (App Router)
- React 19
- Tailwind CSS
- DaisyUI
- JavaScript (ES6+)
- Recharts
- React Icons
- Context API

---

## ✨ Key Features

- 👥 **Friend Dashboard**  
  Browse all your friends with their contact status, tags, and days since last contact at a glance.

- 📊 **Stats & Analytics**  
  Visual pie chart breakdown of your interactions by type — calls, texts, and video — powered by Recharts.

- 🕐 **Interaction Timeline**  
  A full log of every check-in with filtering by interaction type, search by name, and sorting by date.

- 🔍 **Friend Detail Page**  
  Each friend has a dedicated page showing their contact goal, next due date, bio, and quick check-in actions.

- ⚡ **Quick Check-In**  
  Instantly log a call, text, or video interaction directly from a friend's detail page.

- ⏳ **Loading Skeletons**  
  Smooth skeleton screens while data loads — the banner stays visible and only the content area shows a skeleton.

- ❌ **Custom 404 Pages**  
  A general page-not-found and a friend-specific not-found page, each with animated indicators.

- 📱 **Fully Responsive**  
  Mobile-first layout with a collapsing drawer navbar on small screens and a full nav on desktop.

---

## ⚙️ How It Works
- Friend data is fetched from a hosted `data.json` file using Next.js server components
- `React.cache()` is used to deduplicate fetch calls between `generateMetadata` and the page component
- Interaction history is managed globally using React Context API and persists across pages during a session
- `Suspense` boundaries isolate loading states so the banner always renders immediately
- The timeline filters and search are handled with `useEffect` and local state on the client

---

## 📁 Project Structure
```
src/
├── app/
│   ├── page.js               # Home — friend grid + stats
│   ├── not-found.jsx         # Global 404
│   ├── friend/
│   │   └── [id]/
│   │       ├── page.jsx      # Friend detail
│   │       ├── loading.jsx   # Detail skeleton
│   │       └── not-found.jsx # Friend-specific 404
│   ├── stats/
│   │   └── page.jsx          # Pie chart analytics
│   └── timeline/
│       └── page.jsx          # Interaction timeline
├── components/
│   ├── homepage/             # Banner, Friends feed
│   ├── shared/               # Navbar, Footer
│   └── ui/                   # FriendCard, DataCard, TimelineItem, Skeletons
├── context/
│   └── checkIn.context.jsx   # Global interaction history
└── assets/                   # call.png, text.png, video.png, logo
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/keen-keeper.git

# Install dependencies
cd keen-keeper
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
