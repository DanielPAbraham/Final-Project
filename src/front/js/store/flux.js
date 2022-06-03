const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      recipes: [],
      mealData: [],
      vegetarian: [],
      vegan: [],
      keto: [],
      glutenFree: [],
      paleo: [],
      pescaterian: [],
      complex: [],
      message: null,
      user: null,
      journeys: [
        { type: "muscle mass", nutrition: "", exercises: "", programs: "" },
        { type: "weight loss", nutrition: "", exercises: "", programs: "" },
      ],
      userAccounts: [
        {
          name: "John",
          email: "john@gmail.com",
          journey: "weight loss",
        },
        {
          name: "Tom",
          email: "tom@gmail.com",
          journey: "muscle mass",
        },
      ],
      key: "?apiKey=e23e7c5a9ff34fee9bfc874ea36bb9c1",
    },
    actions: {
      // Use getActions to call a function within a fuction
      addJourney: () => {},
      getRecipeData: () => {
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch${
            getStore().key
          }&&addRecipeInformation=true`
        )
          .then((response) => response.json())
          .then((responseAsJson) => {
            setStore({ complex: responseAsJson.results });
            console.log("These are my recipes", getStore().complex);
          })
          .catch((error) => {
            console.log("Looks like there was a problem: \n", error);
          });
      },

      loadRecipe: async (id) => {
        const response = await fetch(
          process.env.BACKEND_URL + `/api/guest/${id}`
        );
        if (response.status === 200) {
          const payload = await response.json();
          setStore({ recipes: payload });
          return payload;
        }
      },

      login: (email) => {
        let user = getStore().userAccounts.find((user) => user.email == email);
        setStore({ user: user });
        return true;
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
