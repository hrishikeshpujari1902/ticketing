# ticketing
Mico Services project for a ticketing platform

# commans
1. npm install typescript ts-node-dev express @types/express
2. tsc --init  <!-- to generate config files  for this to work install typescript in global  npm install -g typescript-->

# creating a secret to set environment variables for all the pods
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=qwerty