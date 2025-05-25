# TODO FRONTEND - SETUP INSTRUCTIONS

This is the frontend for the Todo Summary Assistant, built using **React**, **Vite**, and **Tailwind CSS**.  
It allows users to manage todo items, submit them for LLM summarization, and send results to Slack.

---

### Video

[![Watch the video]](https://youtu.be/WVsADLZt3-E)


## REQUIREMENTS

- Node.js (v16 or above recommended)  
- npm  
- Backend API running (see backend setup)

---

## FOLDER STRUCTURE (example)

```
todo-frontend/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   └── TodoItem.jsx
│   ├── App.jsx
│   ├── api.js
│   └── index.js
├── public/
├── .env
├── package.json
├── tailwind.config.js
├── postcss.config.js
```

---

## ENVIRONMENT VARIABLES (.env)

Create a `.env` file in the root of your frontend folder with the following:

```
VITE_API_URL=http://localhost:5000/api
```

> Replace the URL if your backend runs on a different port or host.

---

## INSTALL DEPENDENCIES

Run the following command inside the frontend folder:

```
npm install
```

**Dependencies used:**
- react  
- react-dom  
- axios  
- react-toastify  
- tailwindcss  
- vite  

---

## TAILWIND CSS SETUP

To isntall Tailwind CSS:

```
npm install tailwindcss @tailwindcss/vite
```

Ensure your `tailwind.config.js` is correctly configured to scan the `src` directory.

---

## RUNNING THE FRONTEND SERVER

To start the development server:

```
npm run dev
```

The frontend will be available at:  
[http://localhost:5173](http://localhost:5173)

---

## MAIN FEATURES

- Add, delete, and view todos  
- Summarize all todos using Gemini (Google Generative AI)  
- Send the summary to a Slack channel  
- Allow setting Slack webhook URL via UI  

---

## SECURITY NOTES

- Never expose sensitive keys in frontend `.env`  
- All actual API keys should be stored in the backend  
- Ensure CORS is properly configured on backend  

---

## LICENSE

This frontend is provided under the **MIT License**.
