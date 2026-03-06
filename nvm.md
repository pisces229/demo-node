# nvm (https://github.com/coreybutler/nvm-windows)

```bash
# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# check nvm version
nvm -v
# list installed node versions
nvm list
# install node
nvm install 20
nvm use 20
# check node version
node -v
# create .nvmrc file
node -v > .nvmrc
# use node version from .nvmrc file
nvm use $(Get-Content .nvmrc).Trim()
```
