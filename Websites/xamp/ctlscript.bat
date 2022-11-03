@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop

if exist X:\Works\Works\PO\Websites\xamp\hypersonic\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\server\hsql-sample-database\scripts\ctl.bat START)
if exist X:\Works\Works\PO\Websites\xamp\ingres\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\ingres\scripts\ctl.bat START)
if exist X:\Works\Works\PO\Websites\xamp\mysql\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\mysql\scripts\ctl.bat START)
if exist X:\Works\Works\PO\Websites\xamp\postgresql\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\postgresql\scripts\ctl.bat START)
if exist X:\Works\Works\PO\Websites\xamp\apache\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\apache\scripts\ctl.bat START)
if exist X:\Works\Works\PO\Websites\xamp\openoffice\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\openoffice\scripts\ctl.bat START)
if exist X:\Works\Works\PO\Websites\xamp\apache-tomcat\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\apache-tomcat\scripts\ctl.bat START)
if exist X:\Works\Works\PO\Websites\xamp\resin\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\resin\scripts\ctl.bat START)
if exist X:\Works\Works\PO\Websites\xamp\jetty\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\jetty\scripts\ctl.bat START)
if exist X:\Works\Works\PO\Websites\xamp\subversion\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\subversion\scripts\ctl.bat START)
rem RUBY_APPLICATION_START
if exist X:\Works\Works\PO\Websites\xamp\lucene\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\lucene\scripts\ctl.bat START)
if exist X:\Works\Works\PO\Websites\xamp\third_application\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\third_application\scripts\ctl.bat START)
goto end

:stop
echo "Stopping services ..."
if exist X:\Works\Works\PO\Websites\xamp\third_application\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\third_application\scripts\ctl.bat STOP)
if exist X:\Works\Works\PO\Websites\xamp\lucene\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\lucene\scripts\ctl.bat STOP)
rem RUBY_APPLICATION_STOP
if exist X:\Works\Works\PO\Websites\xamp\subversion\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\subversion\scripts\ctl.bat STOP)
if exist X:\Works\Works\PO\Websites\xamp\jetty\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\jetty\scripts\ctl.bat STOP)
if exist X:\Works\Works\PO\Websites\xamp\hypersonic\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\server\hsql-sample-database\scripts\ctl.bat STOP)
if exist X:\Works\Works\PO\Websites\xamp\resin\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\resin\scripts\ctl.bat STOP)
if exist X:\Works\Works\PO\Websites\xamp\apache-tomcat\scripts\ctl.bat (start /MIN /B /WAIT X:\Works\Works\PO\Websites\xamp\apache-tomcat\scripts\ctl.bat STOP)
if exist X:\Works\Works\PO\Websites\xamp\openoffice\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\openoffice\scripts\ctl.bat STOP)
if exist X:\Works\Works\PO\Websites\xamp\apache\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\apache\scripts\ctl.bat STOP)
if exist X:\Works\Works\PO\Websites\xamp\ingres\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\ingres\scripts\ctl.bat STOP)
if exist X:\Works\Works\PO\Websites\xamp\mysql\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\mysql\scripts\ctl.bat STOP)
if exist X:\Works\Works\PO\Websites\xamp\postgresql\scripts\ctl.bat (start /MIN /B X:\Works\Works\PO\Websites\xamp\postgresql\scripts\ctl.bat STOP)

:end

