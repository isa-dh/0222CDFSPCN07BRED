#!/usr/bin/zsh

npx sequelize model:generate --name Company --attributes name:STRING

npx sequelize model:generate --name User --attributes email:STRING,firstName:STRING,lastName:STRING,companyID:INTEGER

npx sequelize model:generate --name WorkingDay --attributes weekDay:STRING,workingDate:DATE,isWorking:BOOLEAN

npx sequelize model:generate --name UsersWorkingDay --attributes userId:INTEGER,workingDayId:INTEGER
