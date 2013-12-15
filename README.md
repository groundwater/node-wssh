# WSSH

> Websocket Shell Server and Client
> Like SSH but over HTTP

## Install

**Server Install**
```
git clone https://github.com/jacobgroundwater/node-wssh.git
cd node-wssh
npm start
```

**Client Install**
```
npm i -g wssh
wssh $SERVER
```

## NodeOS Install

<a href="http://nodeos.github.io"><img src="http://i.imgur.com/pIJu2TS.png" width=200 height=79/></a>

**Run the Server**
```
npkg install wssh
npkg start wssh
```

**Client**
```
npkg install wssh
wssh $SERVER
```

## Version 0 Anti-Features

1. no authentication
2. poor error handling
3. no tests

## Roadmap

1. fixing the above
