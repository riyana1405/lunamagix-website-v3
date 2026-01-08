# Lunamagix Website - Digital Ocean Deployment Guide

This guide provides step-by-step instructions for deploying the Lunamagix website to Digital Ocean.

## Prerequisites

Before deploying, ensure you have:

1. A Digital Ocean account
2. A domain name (lunamagix.app) with DNS access
3. Git installed on your local machine
4. Node.js 18+ installed locally for testing

## Option 1: Deploy via Digital Ocean App Platform (Recommended)

Digital Ocean App Platform provides the simplest deployment experience with automatic builds and SSL certificates.

### Step 1: Push to GitHub

First, push your code to a GitHub repository:

```bash
# If not already connected to a remote
git remote add origin https://github.com/your-username/lunamagix-website.git
git branch -M main
git push -u origin main
```

### Step 2: Create App on Digital Ocean

1. Log in to Digital Ocean Console
2. Navigate to **Apps** in the left sidebar
3. Click **Create App**
4. Select **GitHub** as the source
5. Authorize Digital Ocean to access your GitHub account
6. Select the `lunamagix-website` repository
7. Select the `main` branch

### Step 3: Configure Build Settings

Digital Ocean should auto-detect Next.js. Verify these settings:

| Setting | Value |
|---------|-------|
| Build Command | `npm run build` |
| Run Command | `npm run start` |
| HTTP Port | `3000` |
| Environment | Node.js |

### Step 4: Configure Environment Variables

Add these environment variables if needed:

| Variable | Value |
|----------|-------|
| `NODE_ENV` | `production` |
| `NEXT_TELEMETRY_DISABLED` | `1` |

### Step 5: Select Plan and Deploy

1. Choose the **Basic** plan ($5/month) for initial deployment
2. Select a region close to your target audience (e.g., Singapore for India)
3. Click **Create Resources**

### Step 6: Configure Custom Domain

1. After deployment, go to **Settings** > **Domains**
2. Add your custom domain: `lunamagix.app` and `www.lunamagix.app`
3. Update your DNS records as instructed:
   - Add an A record pointing to the provided IP
   - Add a CNAME record for `www` pointing to your app URL

## Option 2: Deploy via Droplet (Manual Setup)

For more control, deploy to a Digital Ocean Droplet.

### Step 1: Create a Droplet

1. Create a new Droplet with Ubuntu 22.04
2. Select at least 2GB RAM / 1 vCPU ($12/month)
3. Add your SSH key for secure access

### Step 2: Connect and Setup

```bash
# SSH into your droplet
ssh root@your-droplet-ip

# Update system
apt update && apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt install -y nodejs

# Install PM2 for process management
npm install -g pm2

# Install Nginx
apt install -y nginx
```

### Step 3: Clone and Build

```bash
# Create app directory
mkdir -p /var/www/lunamagix
cd /var/www/lunamagix

# Clone repository
git clone https://github.com/your-username/lunamagix-website.git .

# Install dependencies
npm install

# Build for production
npm run build
```

### Step 4: Configure PM2

```bash
# Start the application
pm2 start npm --name "lunamagix" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

### Step 5: Configure Nginx

Create `/etc/nginx/sites-available/lunamagix`:

```nginx
server {
    listen 80;
    server_name lunamagix.app www.lunamagix.app;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:

```bash
ln -s /etc/nginx/sites-available/lunamagix /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

### Step 6: Setup SSL with Certbot

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d lunamagix.app -d www.lunamagix.app
```

## Post-Deployment Checklist

After deployment, verify the following:

| Item | Status |
|------|--------|
| Homepage loads correctly | ☐ |
| All navigation links work | ☐ |
| Product pages display images | ☐ |
| Team photos load on About page | ☐ |
| Contact form is functional | ☐ |
| Assessment tool works | ☐ |
| Mobile responsiveness | ☐ |
| SSL certificate active | ☐ |
| Custom domain configured | ☐ |

## Updating the Website

To deploy updates:

### App Platform
Push to GitHub and App Platform will auto-deploy.

### Droplet
```bash
cd /var/www/lunamagix
git pull origin main
npm install
npm run build
pm2 restart lunamagix
```

## Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Verify all dependencies are in package.json
- Check for TypeScript errors: `npm run build`

### Images Not Loading
- Verify images are in the `public/images` directory
- Check file permissions
- Clear browser cache

### 502 Bad Gateway
- Check if the Node.js app is running: `pm2 status`
- Restart the app: `pm2 restart lunamagix`
- Check logs: `pm2 logs lunamagix`

## Support

For deployment assistance, contact the development team or refer to Digital Ocean's documentation at https://docs.digitalocean.com/
