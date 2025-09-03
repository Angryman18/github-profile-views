import Image from "next/image";
import React from "react";

export default function GitHubProfileViewsLanding() {
  return (
    <div
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: "#ffffff",
        color: "#333333",
        lineHeight: "1.6",
        padding: "40px 20px",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "10px",
            color: "#2c3e50",
            textAlign: "center",
          }}
        >
          GitHub Profile Views
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            color: "#7f8c8d",
            marginBottom: "40px",
          }}
        >
          Track your GitHub profile visitors with SVG badges
        </p>

        <a
          href='https://github.com/Angryman18/github-profile-views'
          target='_blank'
          style={{
            background: "#24292e",
            color: "white",
            padding: "15px 25px",
            textDecoration: "none",
            borderRadius: "8px",
            display: "inline-block",
            margin: "20px 0",
            fontWeight: "500",
          }}
        >
          📦 View on GitHub
        </a>

        <div
          style={{
            textAlign: "center",
            margin: "30px 0",
            padding: "20px",
            background: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          <p>
            <strong>Example of how your badge will look:</strong>
          </p>
          <Image src='/preview.png' width={240} height={110} alt='Profile Views' />
          {/* <p>Profile Views: [Counter Badge Here]</p> */}
        </div>

        <h2
          style={{
            fontSize: "1.8rem",
            margin: "40px 0 20px 0",
            color: "#2c3e50",
            borderBottom: "2px solid #3498db",
            paddingBottom: "10px",
          }}
        >
          What does this do?
        </h2>

        <p style={{ marginBottom: "10px", fontSize: "1rem" }}>
          This project creates a simple API that tracks how many people visit your GitHub profile.
          When someone views your profile, it increments a counter and shows a nice SVG badge with
          the number of views.
        </p>

        <h2
          style={{
            fontSize: "1.8rem",
            margin: "40px 0 20px 0",
            color: "#2c3e50",
            borderBottom: "2px solid #3498db",
            paddingBottom: "10px",
          }}
        >
          How to Deploy
        </h2>

        <div
          style={{
            background: "#f8f9fa",
            borderLeft: "4px solid #3498db",
            padding: "20px",
            margin: "20px 0",
            borderRadius: "0 8px 8px 0",
          }}
        >
          <h3
            style={{
              fontSize: "1.3rem",
              marginTop: "0",
              marginBottom: "15px",
              color: "#2980b9",
            }}
          >
            Step 1: Setup Upstash Redis (Free Database)
          </h3>

          <ol style={{ margin: "20px 0", paddingLeft: "30px" }}>
            <li style={{ marginBottom: "8px" }}>
              Go to <strong>https://console.upstash.com/</strong>
            </li>
            <li style={{ marginBottom: "8px" }}>Create a free account</li>
            <li style={{ marginBottom: "8px" }}>Click "Create Database" and choose Redis</li>
            <li style={{ marginBottom: "8px" }}>
              Copy your{" "}
              <code style={{ background: "#f1f2f6", padding: "2px 4px", borderRadius: "4px" }}>
                UPSTASH_REDIS_REST_URL
              </code>
            </li>
            <li style={{ marginBottom: "8px" }}>
              Copy your{" "}
              <code style={{ background: "#f1f2f6", padding: "2px 4px", borderRadius: "4px" }}>
                UPSTASH_REDIS_REST_TOKEN
              </code>
            </li>
          </ol>

          <div
            style={{
              background: "#fff3cd",
              border: "1px solid #ffeeba",
              borderRadius: "8px",
              padding: "15px",
              margin: "20px 0",
              color: "#856404",
            }}
          >
            <strong>Important:</strong> Keep these credentials safe - you'll need them in the next
            step.
          </div>
        </div>

        <div
          style={{
            background: "#f8f9fa",
            borderLeft: "4px solid #3498db",
            padding: "20px",
            margin: "20px 0",
            borderRadius: "0 8px 8px 0",
          }}
        >
          <h3
            style={{
              fontSize: "1.3rem",
              marginTop: "0",
              marginBottom: "15px",
              color: "#2980b9",
            }}
          >
            Step 2: Get the Code
          </h3>

          <ol style={{ margin: "20px 0", paddingLeft: "30px" }}>
            <li style={{ marginBottom: "8px" }}>Fork or download the repository from GitHub</li>
            <li style={{ marginBottom: "8px" }}>
              Create a file called{" "}
              <code style={{ background: "#f1f2f6", padding: "2px 4px", borderRadius: "4px" }}>
                .env.local
              </code>{" "}
              in the project folder
            </li>
            <li style={{ marginBottom: "8px" }}>Add your Upstash credentials:</li>
          </ol>

          <div
            style={{
              background: "#f8f9fa",
              border: "1px solid #e9ecef",
              borderRadius: "8px",
              padding: "20px",
              margin: "20px 0",
              fontFamily: '"Monaco", "Menlo", monospace',
              fontSize: "14px",
              overflowX: "auto",
              lineHeight: "1.4",
            }}
          >
            UPSTASH_REDIS_REST_URL=your_redis_rest_url_here
            <br />
            UPSTASH_REDIS_REST_TOKEN=your_redis_rest_token_here
          </div>
        </div>

        <div
          style={{
            background: "#f8f9fa",
            borderLeft: "4px solid #3498db",
            padding: "20px",
            margin: "20px 0",
            borderRadius: "0 8px 8px 0",
          }}
        >
          <h3
            style={{
              fontSize: "1.3rem",
              marginTop: "0",
              marginBottom: "15px",
              color: "#2980b9",
            }}
          >
            Step 3: Deploy to Vercel (Recommended)
          </h3>

          <ol style={{ margin: "20px 0", paddingLeft: "30px" }}>
            <li style={{ marginBottom: "8px" }}>
              Go to <strong>https://vercel.com</strong>
            </li>
            <li style={{ marginBottom: "8px" }}>Sign up with your GitHub account</li>
            <li style={{ marginBottom: "8px" }}>Click "New Project" and import your repository</li>
            <li style={{ marginBottom: "8px" }}>
              Add your environment variables in the Vercel dashboard:
              <ul style={{ margin: "10px 0", paddingLeft: "30px" }}>
                <li>
                  <code style={{ background: "#f1f2f6", padding: "2px 4px", borderRadius: "4px" }}>
                    UPSTASH_REDIS_REST_URL
                  </code>
                </li>
                <li>
                  <code style={{ background: "#f1f2f6", padding: "2px 4px", borderRadius: "4px" }}>
                    UPSTASH_REDIS_REST_TOKEN
                  </code>
                </li>
              </ul>
            </li>
            <li style={{ marginBottom: "8px" }}>Click "Deploy"</li>
          </ol>
        </div>

        <div
          style={{
            background: "#f8f9fa",
            borderLeft: "4px solid #3498db",
            padding: "20px",
            margin: "20px 0",
            borderRadius: "0 8px 8px 0",
          }}
        >
          <h3
            style={{
              fontSize: "1.3rem",
              marginTop: "0",
              marginBottom: "15px",
              color: "#2980b9",
            }}
          >
            Step 4: Add Badge to Your GitHub Profile
          </h3>

          <p style={{ marginBottom: "10px" }}>
            Once deployed, add this to your GitHub profile README:
          </p>

          <div
            style={{
              background: "#f8f9fa",
              border: "1px solid #e9ecef",
              borderRadius: "8px",
              padding: "20px",
              margin: "20px 0",
              fontFamily: '"Monaco", "Menlo", monospace',
              fontSize: "14px",
              overflowX: "auto",
              lineHeight: "1.4",
            }}
          >
            ![Profile Views](https://domain_name/api/your-github-username)
          </div>

          <p style={{ marginBottom: "10px" }}>Replace:</p>
          <ul style={{ margin: "20px 0", paddingLeft: "30px" }}>
            <li style={{ marginBottom: "8px" }}>
              <code style={{ background: "#f1f2f6", padding: "2px 4px", borderRadius: "4px" }}>
                your-app-name
              </code>{" "}
              with your Vercel app name
            </li>
            <li style={{ marginBottom: "8px" }}>
              <code style={{ background: "#f1f2f6", padding: "2px 4px", borderRadius: "4px" }}>
                your-github-username
              </code>{" "}
              with your actual GitHub username
            </li>
          </ul>
        </div>

        <div
          style={{
            background: "#d4edda",
            border: "1px solid #c3e6cb",
            borderRadius: "8px",
            padding: "15px",
            margin: "20px 0",
            color: "#155724",
          }}
        >
          <strong>That's it!</strong> Your profile view counter is now working. Every time someone
          visits your GitHub profile, the counter will increase.
        </div>

        <ol style={{ margin: "20px 0", paddingLeft: "30px" }}>
          <li style={{ marginBottom: "8px" }}>Connect your GitHub repository to Railway</li>
          <li style={{ marginBottom: "8px" }}>Add environment variables</li>
          <li style={{ marginBottom: "8px" }}>Deploy</li>
        </ol>

        <h2
          style={{
            fontSize: "1.8rem",
            margin: "40px 0 20px 0",
            color: "#2c3e50",
            borderBottom: "2px solid #3498db",
            paddingBottom: "10px",
          }}
        >
          Testing Your Setup
        </h2>

        <p style={{ marginBottom: "10px" }}>After deployment, test your API by visiting:</p>
        <div
          style={{
            background: "#f8f9fa",
            border: "1px solid #e9ecef",
            borderRadius: "8px",
            padding: "20px",
            margin: "20px 0",
            fontFamily: '"Monaco", "Menlo", monospace',
            fontSize: "14px",
            overflowX: "auto",
            lineHeight: "1.4",
          }}
        >
          https://your_domain/api/your-username
        </div>
        <p style={{ marginBottom: "10px" }}>
          You should see an SVG badge with a view count that increases each time you refresh the
          page.
        </p>

        <h2
          style={{
            fontSize: "1.8rem",
            margin: "40px 0 20px 0",
            color: "#2c3e50",
            borderBottom: "2px solid #3498db",
            paddingBottom: "10px",
          }}
        >
          Free Tier Limits
        </h2>

        <ul style={{ margin: "20px 0", paddingLeft: "30px" }}>
          <li style={{ marginBottom: "8px" }}>
            <strong>Upstash:</strong> 10,000 requests per day, 256 MB storage
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong>Vercel:</strong> 100 GB bandwidth per month
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong>Perfect for personal use!</strong>
          </li>
        </ul>

        <h2
          style={{
            fontSize: "1.8rem",
            margin: "40px 0 20px 0",
            color: "#2c3e50",
            borderBottom: "2px solid #3498db",
            paddingBottom: "10px",
          }}
        >
          Troubleshooting
        </h2>

        <h3
          style={{
            fontSize: "1.3rem",
            margin: "30px 0 15px 0",
            color: "#34495e",
          }}
        >
          Badge not showing?
        </h3>
        <ul style={{ margin: "20px 0", paddingLeft: "30px" }}>
          <li style={{ marginBottom: "8px" }}>
            Check that your environment variables are set correctly
          </li>
          <li style={{ marginBottom: "8px" }}>
            Make sure your GitHub username is correct in the URL
          </li>
          <li style={{ marginBottom: "8px" }}>Verify your Upstash database is active</li>
        </ul>

        <h3
          style={{
            fontSize: "1.3rem",
            margin: "30px 0 15px 0",
            color: "#34495e",
          }}
        >
          Counter not incrementing?
        </h3>
        <ul style={{ margin: "20px 0", paddingLeft: "30px" }}>
          <li style={{ marginBottom: "8px" }}>Check your Upstash Redis connection</li>
          <li style={{ marginBottom: "8px" }}>Look at the deployment logs for errors</li>
          <li style={{ marginBottom: "8px" }}>Try refreshing the API URL directly</li>
        </ul>

        <h2
          style={{
            fontSize: "1.8rem",
            margin: "40px 0 20px 0",
            color: "#2c3e50",
            borderBottom: "2px solid #3498db",
            paddingBottom: "10px",
          }}
        >
          Need Help?
        </h2>

        <p style={{ marginBottom: "10px" }}>If you run into issues:</p>
        <ul style={{ margin: "20px 0", paddingLeft: "30px" }}>
          <li style={{ marginBottom: "8px" }}>Check the GitHub repository for documentation</li>
          <li style={{ marginBottom: "8px" }}>Look at the issues section for common problems</li>
          <li style={{ marginBottom: "8px" }}>Create a new issue if you need help</li>
        </ul>

        <p
          style={{
            textAlign: "center",
            marginTop: "50px",
            color: "#7f8c8d",
          }}
        >
          Crafted by{" "}
          <a style={{ fontWeight: "bold" }} href='https://github.com/Angryman18'>
            Shyam Mahanta
          </a>
        </p>
      </div>
    </div>
  );
}
