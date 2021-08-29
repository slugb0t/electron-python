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

# install zerorpc using python2
```javascript
$ python2 -m install zerorpc
```

# ensure you are using the correct Node version with NVM
we will be using 6.17.1 version of Node
on macOS install NVM using homebrew
if node is already installed delete it first
```javascript
$ brew uninstall --ignore-dependencies node 
$ brew uninstall --force node
```

install NVM and refresh terminals path
```javascript
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

$ source ~/.nvm/nvm.sh
```

NVM should now be installed
```javascript
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

electron application will run now
```javascript
./node_modules/.bin/electron .
```

