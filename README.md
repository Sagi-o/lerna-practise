# Lerna common commands

Install lerna on root monorepo folder:
``npm i -D lerna ``
or globally
``npm install --global lerna``


Init lerna monorepo:
``npx lerna init``

- Create all packages on packages/ folder

- Or create lib with
``npx lerna create {library name}``

Clean all packages node_modules and hoist to the root:
``npx lerna clean -y``

Install package.json dependencies for all packages:
``npx lerna bootstrap --hoist``

npm run commands on all pacages
``lerna run start --scope={app1, app2}``
``lerna run test --scope={app1, app2}``

See differece between commits
``lerna diff``
