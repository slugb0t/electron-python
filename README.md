# electron-python
electron gui communicating with python backend using zerorpc


create two python environments (one using python2 and other with python3)

# run python2 environment
```javascript
//for Windows
$ source env2.7/Scripts/activate
//macOS/Linux
$ source env2.7/bin/activate
```

# install dependencies for each virtual environment
```javascript
//dependencies for python2 env
$ pip install -r requirements2.txt
//dependencies for python3 env
$ pip install -r requirements3.txt
```

# ensure you are using the correct Node version with NVM
we will be using 6.17.1 version of Node
on macOS install NVM using homebrew
if node is already installed delete it first
```javascript
$ brew uninstall --ignore-dependencies node 
$ brew uninstall --force node
//on windows download nvm manager through their release page
https://github.com/coreybutler/nvm-windows/releases
```

install NVM and refresh terminals path
```javascript
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

$ source ~/.nvm/nvm.sh
```

NVM should now be installed
```javascript
//to check if it is installed
nvm --version
```

we will be using v6.17.1 of Node for this project
```javascript
//to see list of Node versions you have installed 
nvm list
nvm install 6.17.1
// change node version
nvm use 6.17.1
```

now install node_modules
```javascript
npm install
```

# CLEAN THE CACHES
# On Linux / OS X
```bash
$ rm -rf ~/.node-gyp
$ rm -rf ~/.electron-gyp
$ rm -rf ./node_modules
```

# On Window PowerShell
```powershell
Remove-Item "$($env:USERPROFILE)\.node-gyp" -Force -Recurse -ErrorAction Ignore
Remove-Item "$($env:USERPROFILE)\.electron-gyp" -Force -Recurse -ErrorAction Ignore
Remove-Item .\node_modules -Force -Recurse -ErrorAction Ignore
```

electron application will run now
```javascript
./node_modules/.bin/electron .
```

