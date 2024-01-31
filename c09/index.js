const express = require("express");

const app = express();

// koga sakame da imame dinamicni podatoci
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let data = {
    ime: "Pero",
    prezime: "Перовски",
    niza: ["Скопје", "Битола", "Куманово", "Тетово", "Охрид", "Велес"],
    studenti: [
      { ime: "Перо", prezime: "Перовски", prosek: 9.2 },
      { ime: "Јанко", prezime: "Јанковски", prosek: 7.1 },
      { ime: "Станко", prezime: "Станковски", prosek: 8.4 },
      { ime: "Иван", prezime: "Ивановски", prosek: 7.0 },
    ],
    recepti: [
      {
        id: 1,
        recipe: "Pancakes",
        ingredients: {
          flower: "600",
          eggs: 4,
          milk: "700ml",
          sunflowerOil: "3tspn",
        },
        method: {
          firstStep:
            "Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.",
          secondStep:
            "Set aside for 30 mins to rest if you have time, or start cooking straight away.",
          thirdStep:
            "Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.",
          forthStep:
            "When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.",
          fifthStep:
            "Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.",
        },
      },
      {
        id: 2,
        recipe: "Creamy lasagne",
        ingredients: {
          "lasagne sheets": 9,
          sunflowerOil: "1tspn",
          onion: 1,
          courgette: "700g",
          garlic: "2 claves",
          cheddar: "50g",
          tomatoSauce: "350g",
          ricotta: "250g",
        },
        method: {
          firstStep:
            "Heat oven to 220C/fan 200C/gas 7. Put a pan of water on to boil, then cook the lasagne sheets for about 5 mins until softened, but not cooked through. Rinse in cold water, then drizzle with a little oil to stop them sticking together.",
          secondStep:
            "Meanwhile, heat the oil in a large frying pan, then fry the onion. After 3 mins, add the courgettes and garlic and continue to fry until the courgette has softened and turned bright green. Stir in 2/3 of both the ricotta and the cheddar, then season to taste. Heat the tomato sauce in the microwave for 2 mins on High until hot.",
          thirdStep:
            "In a large baking dish, layer up the lasagne, starting with half the courgette mix, then pasta, then tomato sauce. Repeat, top with blobs of the remaining ricotta, then scatter with the rest of the cheddar. Bake on the top shelf for about 10 mins until the pasta is tender and the cheese is golden.",
        },
      },
    ],
  };
  //index se odnesuva na /view/index.ejs
  res.render("index", data);

  //parseTemplate("calculator_post", data)
});

app.listen(3000, () => console.log("Server started at port 3000!"));

//index.ejs note
// <!-- Dali ova moze da se napravi -->
// <!-- <% recept.ingredients.forEach(ingredient => { %>
//     <li>
//         <%= ingredient %>
//         <%=ingredient.eggs%> ,
//         <%=ingredient.milk%> ,
//         <%=ingredient.sunflowerOil%>
//     </li>
// <% }); %> -->
