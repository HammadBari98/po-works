@echo off

if not ""%1"" == ""START"" goto stop

cmd.exe /C start /B /MIN "" "X:\Works\Works\PO\Websites\xamp\apache\bin\httpd.exe"

if errorlevel 255 goto finish
if errorlevel 1 goto error
goto finish

:stop
cmd.exe /C start "" /MIN call "X:\Works\Works\PO\Websites\xamp\killprocess.bat" "httpd.exe"

if not exist "X:\Works\Works\PO\Websites\xamp\apache\logs\httpd.pid" GOTO finish
del "X:\Works\Works\PO\Websites\xamp\apache\logs\httpd.pid"
goto finish

:error
echo Error starting Apache

:finish
exit
