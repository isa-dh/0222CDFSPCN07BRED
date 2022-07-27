#!/usr/bin/zsh

# Criando model da Company
npx sequelize model:generate --name Company --attributes name:STRING

# Criando model do User
npx sequelize model:generate --name User --attributes email:STRING,firstName:STRING,lastName:STRING,companyID:INTEGER

# Criando model do Working Day
npx sequelize model:generate --name WorkingDay --attributes weekDay:STRING,workingDate:DATE,isWorking:BOOLEAN

# Criando model do UsersWorkingDay, tabela de join
npx sequelize model:generate --name UsersWorkingDay --attributes userId:INTEGER,workingDayId:INTEGER

# Sincroniza as migrations com o nosso banco
npx sequelize-cli db:migrate

# Desfazer todas
npx sequelize-cli db:migrate:undo:all

# Fazer uma migration especifica
npx sequelize-cli db:migrate --to 20220628235716-create-company.js

# Desfazer uma migration especifica
npx sequelize-cli db:migrate:undo:all --to 20220628235716-create-company.js

# Desfaz a última migration que foi feita
npx sequelize-cli db:migrate:undo
