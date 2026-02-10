import BlogLayout from "../blog/BlogLayout";

export default function FeedbackPage() {
  return (
    <BlogLayout>
      <div className="container">
        <h1>Send Feedback</h1>
        <p>
          Have thoughts, suggestions, or found an issue? I’d love to hear from you.
        </p>

        <form
          name="blog-feedback"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          {/* Required hidden input for Netlify */}
          <input type="hidden" name="form-name" value="blog-feedback" />

          {/* Honeypot */}
          <p style={{ display: "none" }}>
            <label>
              Don’t fill this out if you’re human:
              <input name="bot-field" />
            </label>
          </p>

          <p>
            <label>
              Name
              <input
                type="text"
                name="name"
                className="inputClass"
                placeholder="Your name"
                required
              />
            </label>
          </p>

          <p>
            <label>
              Email
              <input
                type="email"
                name="email"
                className="inputClass"
                placeholder="Enter your Email ID"
                required
              />
            </label>
          </p>

          <p>
            <label>
              Feedback
              <textarea
                name="message"
                className="inputClass"
                rows={5}
                placeholder="Your feedback"
                required
              />
            </label>
          </p>

          <p>
            <button
              type="submit"
              style={{
                padding: "10px 16px",
                backgroundColor: "#0070f3",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Submit Feedback
            </button>
          </p>
        </form>
      </div>
    </BlogLayout>
  );
}
