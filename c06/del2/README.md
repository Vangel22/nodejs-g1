### Node.js vs Express.js

- Node.js - е отворен код (достапен за сите бесплатно), кој нуди серверска околина во која можеме да извршуваме Јаваскрипт.
- Express.js - е библиотека/framework за Node.js кој ни дава низа од функционалности вклучени по негово иницирање/инсталирање во нашиот Node.js проект.

### Routes

- Рутите во апликациите кои ги изработуваме претставуваат пристап однадвор (преку интернет) за секој кој пробува да ја пристапи до нашата апликација т.ш рутата која истиот пробува да ја пристапи нашата апликација ќе го пренасочи кон тој ресурс кој што го побарува клиентот.
  пример. Менаџер кој ви дава маса со претходна резервација
  - se javuvate na menadzerot /manager
  - menadzerot pisuva livce na masata /masa
  - vie doagjate i ja zemate svojata masa

### Handlers/Controllers

- Handlers/Controllers - претставуваат место каде што се справуваме со барањето на корисникот, внатре ја пишуваме логиката за одредено барање кое го има клиентот.

### Middlewares

- Битен е распоредот на инфраструктурниот код како ке се извршува линија по линија
- Middlewares во веб развојот се однесуваат на функции или делови од код што се извршуваат за време на обработка на HTTP барање или одговор. Играат критична улога во обработката на влезните барања, модифицирањето на нив или додавање на функционалности пред да стигнат до крајната рута handler/controller или да се пратат назад до клиентот. Middleware функциите се поставуваат во цевката за обработка на барање-одговор и се извршуваат во редоследот во кој се дефинирани.

### MVC - архитектура

Model
const user = {
name: "",
surname: ""
}

Controller

getUserFullName(user) {
return `${user.name} ${user.surname}`
}

View

Koga nasiot korisnik ke pristapi do
http://localhost:3000/user?name=John&surname=Doe

- Пример структура на MVC архитектура

      my-nodejs-project/
      |-- controllers/
      |   |-- userController.js
      |   |-- productController.js
      |
      |-- models/
      |   |-- userModel.js
      |   |-- productModel.js
      |
      |-- views/
      |   |-- userView.js
      |   |-- productView.js
      |
      |-- routes/
      |   |-- userRoutes.js
      |   |-- productRoutes.js
      |
      |-- index.js
