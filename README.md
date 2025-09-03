# Database Setup Guide

This project now uses **Upstash Redis** as a free database for storing GitHub profile view counts.

## Setup Steps

### 1. Create Upstash Account

- Go to [https://console.upstash.com/](https://console.upstash.com/)
- Sign up for a free account
- Create a new Redis database

### 2. Get Database Credentials

- In your Upstash console, find your Redis database
- Copy the `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`
- These are your database connection credentials

### 3. Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
UPSTASH_REDIS_REST_URL=your_redis_rest_url_here
UPSTASH_REDIS_REST_TOKEN=your_redis_rest_token_here
```

### 4. Free Tier Limits

- **10,000 requests per day** (perfect for personal projects)
- **256 MB storage** (more than enough for view counts)
- **Global edge locations** for fast response times

## How It Works

- **GET `/api/[username]`**: Increments view count and returns SVG badge
- **Redis Key Format**: `profile_views:{username}`
- **Automatic Fallback**: If Redis fails, falls back to manual increment
- **Error Handling**: Graceful degradation with console logging

## Benefits Over File System

✅ **Scalable**: Handles multiple concurrent requests  
✅ **Reliable**: No file corruption or I/O issues  
✅ **Fast**: Redis is extremely fast for simple key-value operations  
✅ **Free**: Generous free tier for personal projects  
✅ **Global**: Works from any deployment location

## Testing

After setup, test your API:

```bash
curl "http://localhost:3000/api/yourusername"
```

This should return an SVG badge with incremented view count.
