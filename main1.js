const pets = [
  {
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
  },
  {
    name: "Trouble",
    color: "Poop-Colored",
    specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/gray/ASWMJ3CKXFAPBFM3SBSV6DDO5U.jpg"
  },
  {
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
  },
  {
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg"
  },
  {
    name: "Sassy",
    color: "Poop-Colored",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl: "https://media.australian.museum/media/dd/images/Some_image.2e16d0ba.fill-600x400.fd58794.jpg"
  },
  {
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    name: "Chester",
    color: "Red",
    specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
  },
  {
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
  },
  {
    name: "Smokey",
    color: "Poop-Colored",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl: "http://www.dinopit.com/wp-content/uploads/2012/09/compsognathus.jpg"
  },
  {
    name: "Muffin",
    color: "Yellow",
    specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    name: "Salem",
    color: "Poop-Colored",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl: "https://i.natgeofe.com/n/b96b572c-98e2-4ec2-a714-08a6b95cf646/triceratopshorridus_hexdcb.jpg"
  },
  {
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
  },
  {
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "https://i1.wp.com/i.pinimg.com/736x/72/7a/fa/727afab386a2ecbf429c00b3a44e521d.jpg"
  },
  {
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl: "https://scx2.b-cdn.net/gfx/news/2020/famousjurass.jpg"
  },
  {
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl: "https://s36537.pcdn.co/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg.optimal.jpg"
  },
  {
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
    name: "George",
    color: "Brown",
    specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl: "https://s36700.pcdn.co/wp-content/uploads/2015/05/shutterstock_206706211.jpg.optimal.jpg"
  },
  {
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl: "https://cdn.statically.io/img/blazepress.com/.image/c_fit,h_600,w_600/MTI4OTkzNTkzOTIxOTQ3NjU4/funny-cat-halloween-costume-pumpkin.jpg?quality=100&f=auto"
  },
  {
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
    name: "Oscar",
    color: "Green",
    specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "https://media.vanityfair.com/photos/5ef0ba54e132b56358d73dcf/master/pass/GettyImages-1133517737.jpg"
  },
  {
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl: "https://daily.jstor.org/wp-content/uploads/2020/01/take_these_teenage_dinosaurs_seriously_alt_1050x700-600x400.jpg"
  }
]; 
 
 const catsBtn = document.querySelector("#catsBtn")
 const dogsBtn = document.querySelector("#dogsBtn")
 const dinoBtn = document.querySelector("#dinoBtn")
 const clearBtn = document.querySelector("#clearBtn")
 

 

const petCardBuilder = (petArray) => {
  let domString = "";
     petArray.forEach((petObj) => {
     domString += 
    `<div id="apply-class" class="card" style="width: 18rem;">
    <h5 class="card-title">${petObj.name}</h5>
    <section class="image">
    <img class="card-img-top" src=${petObj.imageUrl} alt="Card image cap">
    </section>
    <div class="card-body">
      <p class="card-text">${petObj.color}</p>
      <p class="card-text">${petObj.specialSkill}</p>  
    </div>
    <ul class="list-group list-group-flush">
    </ul>
    <div class="card-footer">
      <a href="#" class="card-link">${petObj.type}</a>
    </div>
  </div>`
     
  })

let putOnDom = document.querySelector(".allCards")
putOnDom.innerHTML = domString

};


petCardBuilder(pets)




const petFilter = (array, type) => {
  return array.filter(petObj => petObj.type === type);
};

const applyColor = (array) => {
  array.forEach((petObj) => {
    const applyClass= document.querySelector("#apply-class")
      console.log(applyClass)
    if (petObj.type === "dog") {
      applyClass.setAttribute("id","dog-pet-type");
    }
    if (petObj.type === "cat") {
      applyClass.setAttribute("id","cat-pet-type");
    }
    if (petObj.type === "dino") {
      applyClass.setAttribute("id","dino-pet-type");
    };  
})
}

catsBtn.addEventListener("click", function(){
  const catsFilter = petFilter(pets, "cat")
  petCardBuilder(catsFilter)
  applyColor(catsFilter)
})

dogsBtn.addEventListener("click", function(){
  const dogsFilter = petFilter(pets, "dog")
  petCardBuilder(dogsFilter)
  applyColor(dogsFilter)
})

dinoBtn.addEventListener("click", function(){
  const dinoFilter = petFilter(pets, "dino")
  petCardBuilder(dinoFilter)
  applyColor(dinoFilter)
})

clearBtn.addEventListener("click", function(){
  const clearFilter = pets
  petCardBuilder(clearFilter)
  applyColor(pets)
})

applyColor(pets)
