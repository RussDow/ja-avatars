# Start the React development server with npm run dev
Start-Process "npm" -ArgumentList "run dev" -NoNewWindow

# Wait a few seconds to ensure the server has started
Start-Sleep -Seconds 5

# Open the default web browser to the server's address
Start-Process "http://localhost:5173/ja-avatars/"
