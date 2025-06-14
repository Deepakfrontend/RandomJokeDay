cat > README.md << EOF
# 🎭 Joke of the Day - React App

This is a fun and interactive React application that fetches random jokes from the [Official Joke API](https://official-joke-api.appspot.com/). Users can view jokes, add new ones, and delete any they don't want to see.

## 🖼️ Features

- 🃏 Fetches random jokes on button click  
- 🚀 Automatically loads one joke on first render  
- 🧹 Delete jokes from the list  
- 🌈 Colorful and responsive UI with TailwindCSS  
- 🔄 Loading spinner for smooth UX  
- ❌ Error handling in case the API fails  

## 🧑‍💻 Tech Stack

- React  
- Axios  
- Tailwind CSS  
- Official Joke API  

## 🚀 Getting Started

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/your-username/joke-of-the-day.git
cd joke-of-the-day
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Start the development server

\`\`\`bash
npm start
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

\`\`\`
src/
├── components/
│   └── JokeComponent.jsx
├── App.js
└── index.js
\`\`\`

## 📦 API Reference

**Endpoint:**  
https://official-joke-api.appspot.com/random_joke

Example:

\`\`\`json
{
  "id": 123,
  "type": "general",
  "setup": "Why did the chicken cross the road?",
  "punchline": "To get to the other side!"
}
\`\`\`

## 📸 Preview

*(You can add a screenshot named preview.png in your repo if you'd like.)*

## 🙌 Contributing

Pull requests are welcome! For major changes, open an issue first.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 💡 Acknowledgements

- [Official Joke API](https://github.com/15Dkatz/official_joke_api)  
- [Tailwind CSS](https://tailwindcss.com/)
EOF
