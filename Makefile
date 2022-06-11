start-backend:
	cd ./server && npx fastify start plugin.js -l info -P -a localhost -p 5001

start-frontend:
	npm start

install:
	npm ci