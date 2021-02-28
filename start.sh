#!/bin/bash

docker-compose up -d
echo "Tabulka poslouchá na portu 3000 a api na portu 8080"

#skript je nutné spustit přes příkazový řádek - do cmd zadat chmod +x start.sh a poté ./start.sh
#skript spustí docker-compose up
#do tabulky jdou přidat nebo upravovat položky přes funkce api, pro zkoušku funkcí api používám tool Postman


