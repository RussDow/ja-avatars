Place JAstart.cmd in the system start up folder. From the AVANADE user account open up File Explorer and type shell:startup in the address bar to quickly get there.

ja-avatars-main folder should be located directly in the C: drive (should be "c:\ja-avatars-main") for JAstart.cmd to work and find the appropriate powershell script. 

Once JAstart.cmd is in the system start up folder, every time the machine is rebooted and they sign in with the AVANADE account it will automatically run "npm run dev" in powershell, launch Microsoft Edge in kiosk mode, and goes to the site.  

