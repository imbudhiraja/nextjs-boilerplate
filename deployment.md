### Server Setup 
Follow guide - [Server Setup](https://gist.github.com/imbudhiraja/8215398b89066d4cf53e58a784d850c5)

#### [STAGING](https://nextjs-boilerplate.development.limited/)
1. Login to server -> 
username - ssh username@domain-name
password - xxxxxx
2. sudo su
3. cd /home
4. ls, then If nextjs-boilerplate  is there then follow step (a) else (b).
  a). cd nextjs-boilerplate
  b). git clone https://github.com/imbudhiraja/nextjs-bolierplate.git && cd nextjs-boilerplate
5. git checkout development && git reset --hard origin/development
6. npm i && npm run dev-build
7. run pm2 ls, then If web is running then follow step (a) else (b).
  a). pm2 restart web && pm2 logs web.
  b). pm2 start npm --name "web" -- start
8. If no errors on console. code is deployed. Close the terminal.


#### [TESTING](https://nextjs-boilerplate.development.limited/)
1. Login to server -> 
username - ssh username@domain-name
password - xxxxx
2. sudo su
3. cd /home
4. ls, then If nextjs-boilerplate  is there then follow step (a) else (b).
  a). cd nextjs-boilerplate
  b). git clone https://github.com/imbudhiraja/nextjs-bolierplate.git && cd nextjs-boilerplate
5. git checkout development && git reset --hard origin/development
6. npm i && npm run staging-build
7. run pm2 ls, then If web is running then follow step (a) else (b).
  a). pm2 restart web && pm2 logs web.
  b). pm2 start npm --name "web" -- start
8. If no errors on console. code is deployed. Close the terminal.

#### [PRODUCTION](https://web.example.com/)
1. Login to server -> 
username - ssh username@domain-name
password - xxxxx
2. sudo su
3. cd /home
4. ls, then If nextjs-boilerplate  is there then follow step (a) else (b).
  a). cd nextjs-boilerplate
  b). git clone https://github.com/imbudhiraja/nextjs-bolierplate.git && cd nextjs-boilerplate
5. git checkout master && git reset --hard origin/master
6. npm i && npm run prod-build
7. run pm2 ls, then If web is running then follow step (a) else (b).
  a). pm2 restart web && pm2 logs web.
  b). pm2 start npm --name "web" -- start
8. If no errors on console. code is deployed. Close the terminal.
