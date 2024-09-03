PowerShell -Command "Set-ExecutionPolicy Unrestricted" >> "%TEMP%\StartupLog.txt" 2>&1
PowerShell Unblock-File -Path C:\ja-avatars-main\scripts\deploy-ja.ps1
PowerShell C:\ja-avatars-main\scripts\deploy-ja.ps1