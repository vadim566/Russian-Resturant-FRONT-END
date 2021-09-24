tags = {
    0:
        "hot"
    ,
    1:
        "meat"
    ,
    2:
        "diary"

    ,
    3:
        "soup"

    ,
    4:
        "authentic"

    ,


};//end of tags


meals = {
    0: {

        name:"Pirojki",
        description:"bakery with meat",
        price:7,
        specialPrice:5,
        picture:"pic/0.png",
        tag: {0: tags[4], 1:tags[1] }
    },
    1: {
        name:"Dolma",
        description:"meat rolled in wine leaves",
        price:13,
        specialPrice:11,
        picture: "pic/1.png",
        tag: { 0: tags[4], 1: tags[1] }
    },
    2: {
        name:"Julien",
        description:"Mushroms",
        price:15,
        specialPrice:13,
        picture: "pic/3.png",
        tag: { 0: tags[1],1:tags[2] }
    },
    3: {
        name:"Blini",
        description:"with red caviar and sour cream",
        price:16,
        specialPrice:13,
        picture: "pic/4.png",
        tag: { 0: tags[4], 1: tags[2] },
    },
    4: {
        name:"Lepeshki",
        description:"Pie stuffed with cheese mix",
        price:17,
        specialPrice:15,
        picture: "pic/5.png",
        tag: { 0: tags[4], 1: tags[2] },
    },
    5: {
        name:"Oladi",
        description:"smocked salmon and red caviar",
        price:17,
        specialPrice:15,
        picture: "pic/6.png",
        tag: { 0: tags[4], 1: tags[2] },
    },
     6: {
         name:"Borsch ",
        description:"red soup with cabbage",
        price:9,
        specialPrice:7,
         picture: "pic/7.png",
         tag: { 0: tags[4], 1: tags[3] },
    },

      7: {
          name:"Uha",
        description:"fishe soupe ",
        price:9,
        specialPrice:7,
          picture: "pic/8.png",
          tag: { 0: tags[4], 1: tags[3] },
    },
    8: {
        name:"Solyanka",
        description:"meat soupe",
        price:10,
        specialPrice:8,
        picture: "pic/9.png",
        tag: { 0: tags[4], 1: tags[1] },
    },
    9: {
        name:"Harcho",
        description:"lamb soup",
        price:8,
        specialPrice:6,
        picture: "pic/10.png",
        tag: { 0: tags[4], 1: tags[1] },
    },
};//end of meals
list_0 = { 0: meals[0], 1: meals[1], 2: meals[2], 3: meals[3], 4: meals[4], },
list_1 = { 0: meals[5], 1: meals[6], 2: meals[7], 3: meals[8], 4: meals[9], },
catagory = {
    0: {
        cat_name: "Hot entrees",
        meal_list: list_0,
        
     
    },
    1: {
        cat_name: "Soups",
        meal_list: list_1,
       
    },
 
};//end of catagory
