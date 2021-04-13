<p align="center"><img src="images/ic-logo.png" width="30px" alt="Product Launch"></p>

**Product Launch** is an open-source marketplace for entrepreneurs, to present startup ideas to investors.

# Express Starter

This starter repo will be used for building applications using React, Material-UI, React-Router, Node, & Express.js.

# Getting started

The project is broken down into a **client** and **server** folder.

# How to install and run the application (server)

## Clone the repository

```bash
$git clone git@github.com:hatchways/team-thor.git
$cd team-thor
```

## Install NodeJS using the NVM (Node Version Manager)

### Ubuntu and macOS

- Download the install script and parse to bash

```bash
$curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

- Reload bash configurations

```bash
$source ~/.bashrc
```

- Installing the latest LTS version

```bash
$nvm install lts/Fermium
```

- Check the instalation

```bash
$node -v
v14.16.1
```

### Windows

Hit the [Node.js website](https://nodejs.org/en/) and click the big green Install button for the LTS (long-term-stable) version. It'll detect your OS and give you the appropriate installer. Run the installer.

## Installing the MongoDB

### Ubuntu

- Installing mongodb

```bash
$sudo apt install -y mongodb
```

- Enable the mongodb service on startup

```bash
$sudo systemctl enable mongodb
```

### macOS

Instaling using Homebrew

```bash
$brew update
$brew install mongodb
```

- Creating a directory in which to store your data

```bash
$mkdir -p /data/db
```

- Start MongoDB up as a service

```bash
$brew services start mongodb
```

### Windows

- Please follow the [MongoDB documentation](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/), on How to Install MongoDB Community Edition on Windows install.
