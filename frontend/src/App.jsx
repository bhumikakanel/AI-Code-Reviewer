import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import EditorModule from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import axios from 'axios'
import './App.css'

function App() {
  const Editor = EditorModule.default || EditorModule
  const [code, setCode] = useState(` function sum() {
  return 1 + 1
}`)
  const [review, setReview] = useState("")

  useEffect(() => {
    prism.highlightAll();
  }, []);


  async function reviewCode() {
  console.log(" Review button clicked");

  try {
    console.log("Sending code for review...");

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/ai/get-review`,
      { code }
    );

    console.log("Review received:", response.data);

    setReview(response.data);

  } catch (error) {
    console.error("Review error:", error);

    if (error.response?.status === 429) {
      setReview(
        "Gemini is temporarily rate-limited. Please try again in a moment."
      );
    } else {
      setReview(
        "Something went wrong while reviewing the code. Please try again."
      );
    }
  }
}

  return (


    <>
      <main>


        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div
           onClick={reviewCode} 
           className="review">Review</div>
        </div>

        <div className="right">
          <Markdown
            rehypePlugins={[rehypeHighlight]}
          >{review}</Markdown>
        </div>
      </main>
    </>

  )
}

export default App
