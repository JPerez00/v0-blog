interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "40px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid #e5e5e5",
          paddingBottom: "20px",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            margin: "0",
            fontSize: "24px",
            fontWeight: "600",
            color: "#0a0a0a",
          }}
        >
          New Contact Form Submission
        </h1>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <div style={{ marginBottom: "20px" }}>
          <p
            style={{
              margin: "0 0 4px 0",
              fontSize: "12px",
              fontWeight: "500",
              color: "#737373",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Name
          </p>
          <p
            style={{
              margin: "0",
              fontSize: "16px",
              color: "#0a0a0a",
            }}
          >
            {name}
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <p
            style={{
              margin: "0 0 4px 0",
              fontSize: "12px",
              fontWeight: "500",
              color: "#737373",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Email
          </p>
          <p
            style={{
              margin: "0",
              fontSize: "16px",
              color: "#0a0a0a",
            }}
          >
            <a href={`mailto:${email}`} style={{ color: "#0a0a0a" }}>
              {email}
            </a>
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <p
            style={{
              margin: "0 0 4px 0",
              fontSize: "12px",
              fontWeight: "500",
              color: "#737373",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Message
          </p>
          <p
            style={{
              margin: "0",
              fontSize: "16px",
              color: "#0a0a0a",
              lineHeight: "1.6",
              whiteSpace: "pre-wrap",
            }}
          >
            {message}
          </p>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #e5e5e5",
          paddingTop: "20px",
          marginTop: "30px",
        }}
      >
        <p
          style={{
            margin: "0",
            fontSize: "12px",
            color: "#737373",
          }}
        >
          This email was sent from your website contact form.
        </p>
      </div>
    </div>
  )
}
