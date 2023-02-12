import React from 'react'
import { useState } from 'react'
import "../styles/SearchBox.css"
import { AiOutlineSearch } from "react-icons/ai";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { AiFillStar } from "react-icons/ai"
import Highlighter from "react-highlight-words";


const SearchBox = () => {
  const [search, setSearch] = useState("smell");

  const smellClick = "smell";
  const skinClick = "skin";
  const fragClick = "fragrance"
  const tonerClick = "toner";
  const hydrClick = "hydrating";
  const faceClick = "face";
  const mistClick = "mist";
  const glowClick = "glow";
  const boostClick = "boost"


  const smellHandler = (e) => {
    setSearch(smellClick)
  }

  const skinHandler = (e) => {
    setSearch(skinClick)
  }

  const fragClickHandler = (e) => {
    setSearch(fragClick)
  }

  const tonerHnadler = (e) => {
    setSearch(tonerClick)
  }

  const hydraHnadler = () => {
    setSearch(hydrClick);
  }

  const faceClickHandler = () => {
    setSearch(faceClick);
  }

  const mistClickHandler = () => {
    setSearch(mistClick);
  }

  const glowClickHandler = () => {
    setSearch(glowClick);
  }

  const boostClickHnadler = () => {
    setSearch(boostClick);
  }


  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  }






  const names = [
    // 1 - 5 smell
    {
      id: "1",
      name: "Bailey C",
      type: "smell",
      heading: "A very delicate and nice smelling toner",
      description: "This toner is very soft on the skin. It does not cause tightness or redness at all. I use it after cleansing and before moisturizer, but also just when I am hot or sweaty and need a refresh after a long walk or bike ride! So far it has not caused any breakouts or anything like that either.      ",
      stars: 5,
    },

    {
      id: "2",
      name: "Kimberly",
      type: "smell",
      heading: "In Love with The Smell",
      description: "I love how this makes me feel hydrated and clean. It has a fresh smell too. I love using it all over my face and body. I use it right when I get out of the shower and my skin is clean and fresh. I’m glad I bought this product.      ",
      stars: 5,
    },


    {
      id: "3",
      name: "Christen",
      type: "smell",
      heading: "Very Nice toner",
      description: "Very nice toner. I used the Rose one before but I think I like this one better. The smell is nice and it doesn't overdo it's job. It's light and my face is left looking and feeling hydrated.",
      stars: 4,
    },

    {
      id: "4",
      name: "Vincent ",
      type: "smell",
      heading: "It is a great toner",
      description: "It is a great toner, smell fresh and hope it is good for skin growth  ",
      stars: 5,
    },

    {
      id: "5",
      name: "Morikawa",
      type: "smell",
      heading: "This is third bottle",
      description: "This is third bottle I have used and I love it! Smell is amazing and whenever I feel, I just spray couple on me, and super refreshing…",
      stars: 5,
    },

    // 6 - 10  SKIN


    {
      id: "6",
      name: "Joanne ",
      type: "skin",
      heading: "My favourite! I use it",
      description: "My favourite! I use it all the time just to refresh my skin and hydrate my face. Its exfoliating properties makes me purchase the product again and again. Excellent product    ",
      stars: 4,
    },


    {
      id: "7",
      name: "Irene C.",
      type: "skin",
      heading: "It gives me a feeling...",
      description: " It gives me a feeling of instant refresment and moisture in my face, especially when I feel my skin hot or dry in the middle of the day.Only once that my skin was too dry and a bit sensitive, I felt a bit of stinging. ",
      stars: 4,
    },

    {
      id: "8",
      name: "Julia P",
      type: "skin",
      heading: "Love this product. So easy to use",
      description: "Love this product. So easy to use and my skin feels great      ",
      stars: 5,
    },


    {
      id: "9",
      name: "Rachel V.",
      type: "skin",
      heading: "Nver felt so great",
      description: "My skin has been so amazing using these products! And love the toner! My skin isn’t dried out and my pores got smaller.      ",
      stars: 5,
    },


    {
      id: "10",
      name: "Kimberly P.",
      type: "skin",
      heading: "I love how this makes      ",
      description: "I love how this makes me feel hydrated and clean. It has a fresh smell too. I love using it all over my face and body. I use it right when I get out of the shower and my skin is clean and fresh. I’m glad I bought this product.      ",
      stars: 4,
    },


    // fragnance

    {
      id: "11",
      name: "Michelle ",
      type: "fragnance",
      heading: "Quite refreshing and...",
      description: "Nice fragrance, I use this on a daily basis and it has improved my skin texture and tone! it is not oily or sticky. It is light-weight and super hydrating! It doesn't have any fragrance or harsh chemicals which is GREAT+++ I      ",
      stars: 5,
    },

    {
      id: "12",
      name: "Kaori",
      type: "fragnance",
      heading: "No 1 ♥️",
      description: "I love sukin products and this is my go to. My skin feels amazing.It doesn't have a strong artificial fragrance, smells natural.I even spray it all over my face after makeup. This can go out of stock quickly so I always stock some.",
      stars: 5,
    },

    {
      id: "13",
      name: "Pratheba ",
      type: "fragnance",
      heading: "It is very refreshing and ",
      description: "It is very refreshing and I love the fragrance as it reminds me of my childhood. I am glad that I finally found skincare products that contain fewer chemicals and more natural ingredients.      ",
      stars: 4,
    },

    {
      id: "14",
      name: "Ethel",
      type: "fragnance",
      heading: "Healthy face every morning",
      description: "Sometimes i just need a wake up for my skin, not wanting to wash again. This mist helps to add moisture or provide a freshen layer to an already clean face. Fragant is lovely too.",
      stars: 4,
    },

    {
      id: "15",
      name: "Kelly",
      type: "fragnance",
      heading: "Easy to use toner",
      description: "I have recently switched to this toner and I’ve noticed my skin has less breakouts, even tone with no tightness or tingly feeling. Prior toners that I have used have made my skin dry, irritated, red patches and felt like it burned my skin. I’m happy this has no harsh fragrance in this as well, I like the cooling feeling",
      stars: 5,
    },


    // TONNER

    {
      id: "16",
      name: "Kelly",
      type: "toner",
      heading: "A very delicate and nice smelling toner ",
      description: "This toner is very soft on the skin. It does not cause tightness or redness at all. I use it after cleansing and before moisturizer, but also just when I am hot or sweaty and need a refresh after a long walk or bike ride! So far it has not caused any breakouts or anything like that either.      ",
      stars: 5,
    },

    {
      id: "17",
      name: "Laurie",
      type: "toner",
      heading: "Beautifully refreshing!",
      description: " I really do love this product. I typically use it after I've cleansed my skin in the morning, before applying make up, and/or at the end of the day ",
      stars: 5,
    },

    {
      id: "18",
      name: "Christen",
      type: "toner",
      heading: "Very Nice toner      ",
      description: "Very nice toner. I used the Rose one before but I think I like this one better. The smell is nice and it doesn't overdo it's job. It's light and my face is left looking and feeling hydrated. the Exfoliating properties of the product makes me but it again and again     ",
      stars: 4,
    },

    {
      id: "19",
      name: "Angela",
      type: "toner",
      heading: "This is my favourite toner      ",
      description: "This is my favourite toner Have used for years Also used in hospital to refresh and feel good I have one at my desk also to refresh during work. Highly recommend ",
      stars: 5,
    },

    {
      id: "20",
      name: "Rachel",
      type: "toner",
      heading: "My skin has been so good after using the product ",
      description: "My skin has been so amazing using these products! And love the toner! My skin isn’t dried out and my pores got smaller. This toner leaves a gorgeous fresh feeling to my skin  This is super refreshing, and smells amazing. In the past I thought toner was useless, until I tried this!      ",
      stars: 5,
    },

    // hydaration

    {
      id: "21",
      name: "Kizzy",
      type: "hydrating",
      heading: "Refreshing and instantly hydrating  ",
      description: "Works amazingly well and is great value. The original smells great too. But it's probably not for people with very sensitive skin (like eczema prone skin - which my lips are prone to, as I found it irritating on my lips).      ",
      stars: 5,
    },

    {
      id: "22",
      name: "Melanie",
      type: "hydrating",
      heading: "This is very refreshing and ",
      description: "This is very refreshing and lightly hydrating! The smell is a bit strong for me, but I do really like it despite that, and it fades quickly. I like the convenience of just being able to pick up the bottle and give myself a quick pick-me-up spray :-)      ",
      stars: 4,
    },

    {
      id: "23",
      name: "Renee",
      type: "hydrating",
      heading: "Great product but I don't like the spray bottle.      ",
      description: "I really love this product. It's light and refreshing. I find it really does hydrate my skin well. I just wish the spray bottle wasn't quite so difficult to use. I find it kind of hard to depress the nozzle and the spray is a little too fine to get a good amount of the mist. I have to spray a lot.      ",
      stars: 4,
    },


    {
      id: "24",
      name: "Carla",
      type: "hydrating",
      heading: "Lovely Fragrance Hydrating Mist",
      description: "This toner smells amazing!! Great instant hydration any time of day! This toner smells amazing!! Great instant hydration any time of day!      ",
      stars: 5,
    },


    {
      id: "25",
      name: "Blezz",
      type: "hydrating  ",
      heading: "Lovely Fragrance Hydrating Mist",
      description: "I use this on a daily basis and it has improved my skin texture and tone! it is not oily or sticky. It is light-weight and super hydrating! It doesn't have any fragrance or harsh chemicals which is GREAT+++ I      ",
      stars: 5,
    },

    // face

    {
      id: "26",
      name: "Lea ",
      type: "face",
      heading: "Okay not a day goes...      ",
      description: "Okay not a day goes by that I don’t use this product lol. I am  Truly in love with this toner. Omg I use it during my morning routine . Right after using my foaming facial cleanser.    ",
      stars: 5,
    },

    {
      id: "27",
      name: "Ethel",
      type: "face",
      heading: "Healthy face wake up      ",
      description: "Sometimes i just need a wake up for my skin, not wanting to wash again. This mist helps to add moisture or provide a freshen layer to an already clean face. Fragant is lovely too.      ",
      stars: 4,
    },


    {
      id: "28",
      name: "Ajay",
      type: "face",
      heading: "Refreshing      ",
      description: "I love this toner soooooo much, every morning I use this and I completely refreshes my face while also giving me a matte finish",
      stars: 5,
    },

    {
      id: "29",
      name: "milan",
      type: "face",
      heading: "Great anywhere...      ",
      description: "Great little bottle of wonder. Anywhere my face gets hot, or needs refreshing it's a good thing to have without having to find a water tap somewhere and wind up having a face full of water. And it smells great !      ",
      stars: 5,
    },

    // MIST


    {
      id: "30",
      name: "Natalie",
      type: "mist",
      heading: "Easy to use and mists...      ",
      description: "Easy to use and mists nicely on my face. Other products are easy to use over the toner. Feels nice and hydrates well. the exfoliating properties makes the prodyct buy worthy     ",
      stars: 5,
    },

    {
      id: "31",
      name: "alice",
      type: "mist",
      heading: "This by far is my best purchase      ",
      description: "This by far is my favorite hydrating mist for my face. It wakes up my skin with a good feeling glow.  ",
      stars: 5,
    },

    {
      id: "32",
      name: "Ash",
      type: "mist",
      heading: "Best mist!...      ",
      description: "It is the perfect mist. Helps with dryness and doesn’t burn or cause redness. I use it all the time. helps fight dryness      ",
      stars: 4,
    },

    {
      id: "33",
      name: "Jade",
      type: "mist",
      heading: "Makeup setting spray!      ",
      description: "The best makeup setting spray! Love the scent! Sets my powder foundation in place all day! Just wish the spray nozzle was a finer mist      ",
      stars: 4,
    },

    {
      id: "34",
      name: "Lauren",
      type: "mist",
      heading: "The hydrating mist is lovely,      ",
      description: "The hydrating mist is lovely, it feels fresh and smells pleasant. Will probably buy again. helps me avoid dandruff  ",
      stars: 5,
    },

    // glow


    {
      id: "35",
      name: "Ali",
      type: "glow",
      heading: "This by far is my      ",
      description: "This by far is my favorite hydrating mist for my face.It wakes up my skin with a good feeling glow.",
      stars: 5,
    },

    {
      id: "36",
      name: "Mena",
      type: "glow",
      heading: "Refreshing and moisturising      ",
      description: "Since I really love their moisturising cream I wanted to give this toner a chance and I was gratefully surprised. It feels so refreshing and it really moisturises my skin. I apply it both after washing my face to give it a bit of moisture and also after doing my make up since it gives me a really nice healthy.",
      stars: 5,
    },

    // BOOST

    {
      id: "37",
      name: "rena",
      type: "boost",
      heading: "Misty Freshness      ",
      description: "I LOVE THIS TONER! I use it on my face, neck and décolletage straight after a shower, after cleansing, or even in the middle of the day for a refreshing boost. I've run out of this much faster than the cleanser or moisturiser (perhaps a larger option could someday be available?).      ",
      stars: 4,
    },

    {
      id: "38",
      name: "erice",
      type: "boost",
      heading: "Hydrating toner      ",
      description: "I'm not sure if I've figured out when to use this product, but it seems to be a nice boost of moisture after cleansing my face and before using my moisturizer! It has a nice rose smell to it and feels great on my face. I've seen suggestions to put it in the",
      stars: 4,
    },

    {
      id: "39",
      name: "ally",
      type: "boost",
      heading: "My skin has never felt do refreshed      ",
      description: "My skin has been so amazing using these products! And love the toner! My skin isn’t dried out and my pores got smaller.      ",
      stars: 5,
    },


    {
      id: "40",
      name: "jake",
      type: "boost",
      heading: "Awesome product! Since using a      ",
      description: "Awesome product! Since using a Sukin skin care routine my skin has been noticeably softer, more even and my pores are smaller. I love this line! the exfoliating properties always makes me re-buy the product. AMAZING!!      ",
      stars: 5,
    },



  ]




  return (
    <div>


      <div className='flex flex-col gap-7 filterRevHold relative'>
        <p className='frText text-3xl relative fof'> Filter Reviews </p>

        <input type="text" placeholder="Search" className='bg-black fof searchBox relative text-gray-400 pl-3' onChange={e => setSearch(e.target.value)} />
      </div>


      <div className='searchItemsHold'>{names.filter(val => {
        if (search === "") {
          return val;
        }
        else if (val.description.toLowerCase().includes(search.toLowerCase())) {
          return val;
        }
      }).slice(0, 6).map(i => {
        return (<div key={i.id} className="searchList relative">
          <p className='font-semibold text-md mb-1 capitalize'> {i.name}</p>
          <p className='text-md mb-1'>  {i.stars === 4 ? <div className='flex'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : <div className='flex'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div>} </p>
          <p className=' text-gray-500 font-semibold mb-1 capitalize'> {i.heading} </p>
            <Highlighter
              className='fof mb-1 w50rem capitalize mobdesc'
              highlightClassName="YourHighlightClass highlightWord"
              searchWords={[search]}
              autoEscape={true}
              textToHighlight={i.description}
            > {i.description}
            </Highlighter>

          <p className='firstLetterHold rounded-full text-center pt-1 relative mb-1 capitalize'> {i.name.charAt(0)} </p>

        </div>
        )
      })} </div>


      <p className='popularKeyWordsText absolute text-2xl fof'> POPULAR KEYWORDS </p>


      <div className='keyWordHold w40rem uppercase flex fof flex-wrap gap-11'>
        <p className='keyWord hover:bg-slate-200' onClick={smellHandler}>SMELL</p>
        <p className='keyWord hover:bg-slate-200' onClick={skinHandler}> Skin </p>
        <p className='keyWord hover:bg-slate-200' onClick={fragClickHandler}> Fragrance </p>
        <p className='keyWord hover:bg-slate-200' onClick={tonerHnadler}> Toner </p>
        <p className='keyWord hover:bg-slate-200' onClick={hydraHnadler}> Hydration </p>
        <p className='keyWord hover:bg-slate-200' onClick={faceClickHandler}> Face </p>
        <p className='keyWord hover:bg-slate-200' onClick={mistClickHandler}> Mist </p>
        <p className='keyWord hover:bg-slate-200' onClick={glowClickHandler}> Glow </p>
        <p className='keyWord hover:bg-slate-200' onClick={boostClickHnadler}> Boost </p>

      </div>

    </div>
  )
}

export default SearchBox;

//   .substring(0 , 32)) + "\n" + (i.description.substring(33  , 60)) + "\n" + (i.description.substring(34 , 64))