@echo off
:: Change this your git user name.
set user=wandering-sage
:: if no arguments are provided.
if [%1]==[] (
  echo Please specify a folder name
  echo eg. newproject folderName
  goto end
)
if exist "%1" (
  echo Folder already exists. Please enter another name.
  goto end
)
mkdir "%1"
cd "%1"
echo Coping Boilerplate Code...
:: Copy command, change the location of boilerplate folder accordingly.
xcopy c:\boilerplate /e /Q
echo Done
:: This for git initialization, you need to have an empty git repo same name as folder.
:: You can delete these lines if you dont want to connect to github.
git init
git add .
git commit -m "init"
git remote add origin "https://github.com/%user%/%1.git"
git branch -M main
git push -u origin main
echo.
npm i
:: Command to launch your coding editor.
code ./
:end
echo.

