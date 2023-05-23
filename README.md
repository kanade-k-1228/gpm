# GPM - General purpose Package Manager <!-- omit in toc -->

Simple and Universal package manager.

- [1. Installation](#1-installation)
  - [1.1. Install](#11-install)
  - [1.2. Build](#12-build)
- [2. Usage](#2-usage)
- [3. Mannual](#3-mannual)
  - [3.1. FIles](#31-files)
    - [3.1.1. Project File](#311-project-file)
    - [3.1.2. Package File](#312-package-file)
  - [3.2. Commands](#32-commands)
    - [3.2.1. Install dependencies](#321-install-dependencies)

# 1. Installation

## 1.1. Install

## 1.2. Build

1. Install Deno

[Installation | Manual | Deno](https://deno.com/manual/getting_started/installation)

2. Clone this repository

```
~$ git clone git@github.com:kanade-k-1228/gpm.git
~$ cd gpm
```

3. Run compile task

```
~/gpm$ deno task compile
```

4. Add PATH

```
~$ export PATH=$PATH:~/gpm/bin/
```

# 2. Usage

1. Create project directory & Init project

```
~$ mkdir your_project
~$ cd your_project
~/your_project$ echo "packages:" > project.yaml
```

# 3. Mannual

## 3.1. FIles

### 3.1.1. Project File

```yaml:
packages:
  hoge: ~/test/hoge/package.yaml
  fuga: http://example.com/package.yaml
  baba:
  keke:
```

### 3.1.2. Package File

Write all files in this package.

```yaml:
mod.cpp
mod.hpp
CMakeLists.txt
```

## 3.2. Commands

### 3.2.1. Install dependencies

`gpm install`
