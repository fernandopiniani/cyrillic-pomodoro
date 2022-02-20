![Cyrillic Pomodoro Logo](./public/logo192.png?raw=true)
# Cyrillic Pomodoro

Take 25 minutes working and 5 minutes learning cyrillic alphabet. 

## How to run

Clone this repository.
```
git clone https://github.com/fernandopiniani/cyrillic-pomodoro.git
```

### Command-line version

On cloned directory, install dependencies.

```
npm i
```

Run start command.

```
npm start
```

Application should automatically open on the following url: http://localhost:3000/

### Docker version

On cloned directory, build the image.

```
docker build . -t cyrillic-pomodoro
```

Run the image mapping on the desired port.

```
docker run -p <port>:3000 -d cyrillic-pomodoro
```

Application should be running on the following url: http://localhost:3000/

