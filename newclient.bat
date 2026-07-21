@echo off

if "%1"=="" (
    echo Usage: newclient branch-name
    exit /b
)

git checkout -b %1
git add .
git commit -m "Initial customization for %1"
git push -u origin %1