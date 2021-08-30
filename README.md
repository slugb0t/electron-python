# electron-python
electron gui communicating with python backend using zerorpc


## create two python environments (one using python2 and other with python3)
```bash
//for python2 environment
py -2 -m virtualenv env2
//for python3 environment
py -2 -m venv env3
```

### run python environments to install dependencies
```bash
//for Windows
$ source env2.7/Scripts/activate
//macOS/Linux
$ source env2.7/bin/activate
```

## install dependencies for each virtual environment then exit
### it is important to deactivate virtual environments before running electron
```bash
//dependencies for python2 env
$ pip install -r pycal/requirements2.txt
//exit virtual env
$ deactivate
//dependencies for python3 env
$ pip install -r pycalc/requirements3.txt
//exit virtual env
$ deactivate
```

## ensure you are using the correct Node version with NVM
we will be using 7.9.0 version of Node
on macOS install NVM using homebrew
if node is already installed delete it first
```bash
$ brew uninstall --ignore-dependencies node 
$ brew uninstall --force node
//on windows download nvm manager through their release page
https://github.com/coreybutler/nvm-windows/releases
```

### install NVM and refresh terminals path
```bash
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

$ source ~/.nvm/nvm.sh
```

### NVM should now be installed
```bash
//to check if it is installed
$ nvm --version
```

we will be using v7.9.0 of Node for this project
```bash
//to see list of Node versions you have installed 
$ nvm install 7.9.0
$ nvm list
// change node version
$ nvm use 7.9.0
```

now install node_modules
```bash
$ npm install
```

# CLEAN THE CACHES
## On Linux / OS X
```bash
$ rm -rf ~/.node-gyp
$ rm -rf ~/.electron-gyp
$ rm -rf ./node_modules
```

## On Window PowerShell
```powershell
$ Remove-Item "$($env:USERPROFILE)\.node-gyp" -Force -Recurse -ErrorAction Ignore
$ Remove-Item "$($env:USERPROFILE)\.electron-gyp" -Force -Recurse -ErrorAction Ignore
$ Remove-Item .\node_modules -Force -Recurse -ErrorAction Ignore
```

## electron application will run now
```bash
$ ./node_modules/.bin/electron .
```

## to run automated testing run:
```bash
$ npm run
```