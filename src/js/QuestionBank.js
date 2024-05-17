// Object { type: "multiple",
// difficulty: "easy",
// category: "General Knowledge",
// question: "Who invented the first ever chocolate bar, in 1847?",
// correct_answer: "Joseph Fry",
// incorrect_answers: (3) […] }

//

// 0: "Entertainment: Comics"
// 1: "Entertainment: Japanese Anime &amp; Manga"
// 2: "Entertainment: Film"
// 3: "Entertainment: Video Games"
// 4: "History"
// 5: "Entertainment: Television" ​​
// 6: "Geography"
// 7: "Vehicles"
// 8: "Mythology"
// 9: "Entertainment: Music"
// 10: "Animals"
// 11: "Science: Computers"
// 12: "General Knowledge"
// 13: "Entertainment: Musicals &amp; Theatres"
// 14: "Science &amp; Nature"
// 15: "Science: Mathematics"
// 16: "Entertainment: Cartoon &amp; Animations"
// 17: "Sports"

// GENERAL QUESTIONS

const sports = [];
const generalKnowledge = [];
const animals = [];
const mythology = [];
const scienceMaths = [];
const entertainmentCartoon = [];
const scienceNature = [];
const entertainmentMusicals = [];
const entertainmentMusic = [];
const scienceComp = [];
const vehicles = [];
const geography = [];
const entertainmentTv = [];
const history = [];
const entertainmentGames = [];
const entertainmentFilms = [];
const entertainmentAnime = [];
const entertainmentComics = [];
const randQues = [];

// EASY QUESTIONS
const sportsE = [];
const generalKnowledgeE = [];
const animalsE = [];
const mythologyE = [];
const scienceMathsE = [];
const entertainmentCartoonE = [];
const scienceNatureE = [];
const entertainmentMusicalsE = [];
const entertainmentMusicE = [];
const scienceCompE = [];
const vehiclesE = [];
const geographyE = [];
const entertainmentTvE = [];
const historyE = [];
const entertainmentGamesE = [];
const entertainmentFilmsE = [];
const entertainmentAnimeE = [];
const entertainmentComicsE = [];
const randQuesE = [];

// MEDIUM QUESTIONS
const sportsM = [];
const generalKnowledgeM = [];
const animalsM = [];
const mythologyM = [];
const scienceMathsM = [];
const entertainmentCartoonM = [];
const scienceNatureM = [];
const entertainmentMusicalsM = [];
const entertainmentMusicM = [];
const scienceCompM = [];
const vehiclesM = [];
const geographyM = [];
const entertainmentTvM = [];
const historyM = [];
const entertainmentGamesM = [];
const entertainmentFilmsM = [];
const entertainmentAnimeM = [];
const entertainmentComicsM = [];
const randQuesM = [];

// HARD QUESTIONS
const sportsH = [];
const generalKnowledgeH = [];
const animalsH = [];
const mythologyH = [];
const scienceMathsH = [];
const entertainmentCartoonH = [];
const scienceNatureH = [];
const entertainmentMusicalsH = [];
const entertainmentMusicH = [];
const scienceCompH = [];
const vehiclesH = [];
const geographyH = [];
const entertainmentTvH = [];
const historyH = [];
const entertainmentGamesH = [];
const entertainmentFilmsH = [];
const entertainmentAnimeH = [];
const entertainmentComicsH = [];
const randQuesH = [];

export const QBank1 = (response) => {
  let responseData = response.map((value, index, arr) => {
    for (let i = 0; i < arr.length; i++) {
      try{
        if (
          index !== i &&
          decodeTextData(value.question) === decodeTextData(arr[i].question)
        ) {
          arr[i] = null;
        }
      }catch(e){

      }
    }

    return value;
  });

  // console.log(responseData.length)

  responseData = responseData.filter((value) => value);
  // console.log(responseData.length, 'filtered');
  responseData.forEach((value) => {
    switch (decodeTextData(value.category)) {
      case "Entertainment: Comics":
        entertainmentComics.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            entertainmentComicsE.push(analyzeData(value));
            break;
          case "medium":
            entertainmentComicsM.push(analyzeData(value));
            break;
          case "hard":
            entertainmentComicsH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "Entertainment: Japanese Anime & Manga":
        entertainmentAnime.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            entertainmentAnimeE.push(analyzeData(value));
            break;
          case "medium":
            entertainmentAnimeM.push(analyzeData(value));
            break;
          case "hard":
            entertainmentAnimeH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "Entertainment: Film":
        entertainmentFilms.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            entertainmentFilmsE.push(analyzeData(value));
            break;
          case "medium":
            entertainmentFilmsM.push(analyzeData(value));
            break;
          case "hard":
            entertainmentFilmsH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "Entertainment: Video Games":
        entertainmentGames.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            entertainmentGamesE.push(analyzeData(value));
            break;
          case "medium":
            entertainmentGamesM.push(analyzeData(value));
            break;
          case "hard":
            entertainmentGamesH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "History":
        history.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            historyE.push(analyzeData(value));
            break;
          case "medium":
            historyM.push(analyzeData(value));
            break;
          case "hard":
            historyH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "Entertainment: Television":
        entertainmentTv.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            entertainmentTvE.push(analyzeData(value));
            break;
          case "medium":
            entertainmentTvM.push(analyzeData(value));
            break;
          case "hard":
            entertainmentTvH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "Geography":
        geography.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            geographyE.push(analyzeData(value));
            break;
          case "medium":
            geographyM.push(analyzeData(value));
            break;
          case "hard":
            geographyH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "Vehicles":
        vehicles.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            vehiclesE.push(analyzeData(value));
            break;
          case "medium":
            vehiclesM.push(analyzeData(value));
            break;
          case "hard":
            vehiclesH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "Mythology":
        mythology.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            mythologyE.push(analyzeData(value));
            break;
          case "medium":
            mythologyM.push(analyzeData(value));
            break;
          case "hard":
            mythologyH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "Entertainment: Music":
        entertainmentMusic.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            entertainmentMusicE.push(analyzeData(value));
            break;
          case "medium":
            entertainmentMusicM.push(analyzeData(value));
            break;
          case "hard":
            entertainmentMusicH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "Animals":
        animals.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            animalsE.push(analyzeData(value));
            break;
          case "medium":
            animalsM.push(analyzeData(value));
            break;
          case "hard":
            animalsH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "Science: Computers":
        scienceComp.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            scienceCompE.push(analyzeData(value));
            break;
          case "medium":
            scienceCompM.push(analyzeData(value));
            break;
          case "hard":
            scienceCompH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "General Knowledge":
        generalKnowledge.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            generalKnowledgeE.push(analyzeData(value));
            break;
          case "medium":
            generalKnowledgeM.push(analyzeData(value));
            break;
          case "hard":
            generalKnowledgeH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "Entertainment: Musicals & Theatres":
        entertainmentMusicals.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            entertainmentMusicalsE.push(analyzeData(value));
            break;
          case "medium":
            entertainmentMusicalsM.push(analyzeData(value));
            break;
          case "hard":
            entertainmentMusicalsH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "Science & Nature":
        scienceNature.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            scienceNatureE.push(analyzeData(value));
            break;
          case "medium":
            scienceNatureM.push(analyzeData(value));
            break;
          case "hard":
            scienceNatureH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "Science: Mathematics":
        scienceMaths.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            scienceMathsE.push(analyzeData(value));
            break;
          case "medium":
            scienceMathsM.push(analyzeData(value));
            break;
          case "hard":
            scienceMathsH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "Entertainment: Cartoon & Animations":
        entertainmentCartoon.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            entertainmentCartoonE.push(analyzeData(value));
            break;
          case "medium":
            entertainmentCartoonM.push(analyzeData(value));
            break;
          case "hard":
            entertainmentCartoonH.push(analyzeData(value));
            break;
          default:
        }
        break;
      case "Sports":
        sports.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            sportsE.push(analyzeData(value));
            break;
          case "medium":
            sportsM.push(analyzeData(value));
            break;
          case "hard":
            sportsH.push(analyzeData(value));
            break;
          default:
        }
        break;
      default: {
        randQues.push(analyzeData(value));
        switch (decodeTextData(value.difficulty)) {
          case "easy":
            randQuesE.push(analyzeData(value));
            break;
          case "medium":
            randQuesM.push(analyzeData(value));
            break;
          case "hard":
            randQuesH.push(analyzeData(value));
            break;
          default:
        }
      }
    }
  });

  // console.log("history",history);
  // console.log("anime",entertainmentAnime);
  // console.log("films",entertainmentFilms);
  // console.log("games",entertainmentGames)
  // console.log("sports",sports)
  // console.log("vehicles",vehicles)
  // console.log("animals",animals)
  // console.log("computers",scienceComp)
  // console.log("mythology",mythology)
  // console.log("maths",scienceMaths)
  // console.log("nature",scienceNature)
  // console.log("comics",entertainmentComics)
  // console.log("cartoon",entertainmentCartoon)
  // console.log("general",generalKnowledge)
  // console.log("musicals",entertainmentMusicals)
  // console.log("tv",entertainmentTv)
  // console.log("music",entertainmentMusic)
  // console.log("computers",scienceComp)
  // console.log("geography",geography)
  // console.log("random", randQues)
  // return randomiseQuestion(entertainmentGames);

  // 0: "Entertainment: Comics"
  // 1: "Entertainment: Japanese Anime &amp; Manga"
  // 2: "Entertainment: Film"
  // 3: "Entertainment: Video Games"
  // 4: "History"
  // 5: "Entertainment: Television" ​​
  // 6: "Geography"
  // 7: "Vehicles"
  // 8: "Mythology"
  // 9: "Entertainment: Music"
  // 10: "Animals"
  // 11: "Science: Computers"
  // 12: "General Knowledge"
  // 13: "Entertainment: Musicals &amp; Theatres"
  // 14: "Science &amp; Nature"
  // 15: "Science: Mathematics"
  // 16: "Entertainment: Cartoon &amp; Animations"
  // 17: "Sports"

  const obj = {
    Sports_easy: {
      data: sportsE,
      name: "Sports_easy",
      tag: "Easy",
      imgUrl:
        "https://images.pexels.com/photos/2115874/pexels-photo-2115874.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "",
      title: "Sports",
      duration: 40,
    },
    Sports_medium: {
      data: sportsM,
      name: "Sports_medium",
      tag: "Medium",
      imgUrl:
        "https://img.freepik.com/free-vector/soccer-volleyball-baseball-rugby-equipment_1441-4026.jpg?t=st=1715422735~exp=1715426335~hmac=27a46b0291f814311254081c6a48faceb304179ffddcb6f99228c623a7215ef3&w=996",
      quote: "",
      title: "Sports",
      duration: 30,
    },
    Sports_hard: {
      data: sportsH,
      name: "Sports_hard",
      tag: "Hard",
      imgUrl:
        "https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?t=st=1715422702~exp=1715426302~hmac=c2deaaf8ed9b86d1be01ce19761386bc9c298e9fe7beae24b5e99a3578160ac3&w=740",
      quote: "",
      title: "Sports",
      duration: 25,
    },
    GeneralKnowledge_easy: {
      data: generalKnowledgeE,
      name: "GeneralKnowledge_easy",
      tag: "Easy",
      imgUrl:
        "https://img.freepik.com/free-vector/hand-drawn-cartoon-brain-illustration_23-2150556254.jpg?w=740&t=st=1715422646~exp=1715423246~hmac=6eb16ab08a518e22d1dd6e5557a5b560a9094bada400cd7c4db9c047614b2709",
      quote: "",
      title: "General Knowledge",
      duration: 40,
    },
    GeneralKnowledge_medium: {
      data: generalKnowledgeM,
      name: "GeneralKnowledge_medium",
      tag: "Medium",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQxdqm9bq6QC4IKdwv-BUP9GZ5p0ipplXcQ&s",
      quote: "",
      title: "General Knowledge",
      duration: 35,
    },
    GeneralKnowledge_hard: {
      data: generalKnowledgeH,
      name: "GeneralKnowledge_hard",
      tag: "Hard",
      imgUrl:
        "https://images.unsplash.com/photo-1513001900722-370f803f498d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3N8ZW58MHwxfDB8fHww",
      quote: "",
      title: "General Knowledge",
      duration: 30,
    },
    History_easy: {
      data: historyE,
      name: "History_easy",
      tag: "Easy",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhP49LYugh17dsMAPadGRZmR-p0dUTEQxz8A&s",
      quote: "",
      title: "History",
      duration: 40,
    },
    History_medium: {
      data: historyM,
      name: "History_medium",
      tag: "Medium",
      imgUrl:
        "https://images.pexels.com/photos/3185488/pexels-photo-3185488.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "",
      title: "History",
      duration: 30,
    },
    History_hard: {
      data: historyH,
      name: "History_hard",
      tag: "Hard",
      imgUrl:
        "https://images.pexels.com/photos/3185480/pexels-photo-3185480.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "",
      title: "History",
      duration: 15,
    },
    Games_easy: {
      data: entertainmentGamesE,
      name: "Games_easy",
      tag: "Easy",
      imgUrl:
        "https://images.pexels.com/photos/1657328/pexels-photo-1657328.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "",
      title: "Games",
      duration: 40,
    },
    Games_medium: {
      data: entertainmentGamesM,
      name: "Games_medium",
      tag: "Medium",
      imgUrl:
        "https://images.pexels.com/photos/4523020/pexels-photo-4523020.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "",
      title: "Games",
      duration: 30,
    },
    Games_hard: {
      data: entertainmentGamesH,
      name: "Games_hard",
      tag: "Hard",
      imgUrl:
        "https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "",
      title: "Games",
      duration: 20,
    },
    Anime_easy: {
      data: entertainmentAnimeE,
      name: "Anime_easy",
      tag: "Easy",
      imgUrl:
        "https://wallpapers.com/images/high/keigo-takami-1486-x-2160-5d1ou62k8lhuuj78.webp",
      quote: "",
      title: "Anime",
      duration: 40,
    },
    Anime_medium: {
      data: entertainmentAnimeE,
      name: "Anime_medium",
      tag: "Medium",
      imgUrl:
        "https://wallpapers.com/images/high/cool-anime-phone-ouma-shu-guilty-crown-f9folwc77klyi39p.webp",
      quote: "",
      title: "Anime",
      duration: 30,
    },
    Anime_hard: {
      data: entertainmentAnimeE,
      name: "Anime_hard",
      tag: "Hard",
      imgUrl:
        "https://as2.ftcdn.net/v2/jpg/05/39/50/89/1000_F_539508993_hMmYwC93zCk5ZV8wQNGeWfk78UDsJRVY.jpg",
      quote: "",
      title: "Anime",
      duration: 20,
    },
    Animals_easy: {
      data: animalsE,
      name: "Animals_easy",
      tag: "Easy",
      imgUrl:
        "https://images.pexels.com/photos/52509/penguins-emperor-antarctic-life-52509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "",
      title: "Animals",
      duration: 40,
    },
    Animals_medium: {
      data: animalsM,
      name: "Animals_medium",
      tag: "Medium",
      imgUrl:
        "https://images.pexels.com/photos/208821/pexels-photo-208821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "",
      title: "Animals",
      duration: 30,
    },
    Animals_hard: {
      data: animalsH,
      name: "Animals_hard",
      tag: "Hard",
      imgUrl:
        "https://images.pexels.com/photos/53581/bald-eagles-bald-eagle-bird-of-prey-adler-53581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "",
      title: "Animals",
      duration: 25,
    },
    Mythology_easy: {
      data: mythologyE,
      name: "Mythology_easy",
      tag: "Easy",
      imgUrl:
        "https://t3.ftcdn.net/jpg/05/44/32/72/240_F_544327232_3fYpbEnnwqHqWZTAjbeBYjbVhSDsXT0a.jpg",
      quote: "",
      title: "Mythology",
      duration: 40,
    },
    Mythology_medium: {
      data: mythologyM,
      name: "Mythology_medium",
      tag: "Medium",
      imgUrl:
        "https://t3.ftcdn.net/jpg/06/91/75/64/360_F_691756444_z2gyjZ1ueufxbpY4xMagPX0NkMuzKyVy.jpg",
      quote: "",
      title: "Mythology",
      duration: 30,
    },
    Mytholgy_hard: {
      data: mythologyH,
      name: "Mythology_hard",
      tag: "Hard",
      imgUrl:
        "https://t4.ftcdn.net/jpg/05/50/83/85/240_F_550838504_ANHPHo3wTH16tMl9lZ5Zqh2n7cTtBcyJ.jpg",
      quote: "",
      title: "Mythology",
      duration: 20,
    },
    Default: {
      data: defaultQuestions,
      name: "Default",
      tag: "Hard",
      imgUrl: "https://media.istockphoto.com/id/1426470621/vector/crash-comic-speech-bubble-with-cloud-rays-and-halftone-effect-red-background-pop-art-vector.jpg?s=612x612&w=0&k=20&c=YcZJdb6F2l7DbDCw6CsibOHu2UPB5oZnoYVxmNqtXdY=",
      quote: "",
      title: "Default",
      duration: 20,
    },
    science_mathematics_easy: {
      data: scienceMathsE,
      name: "science_mathematics_easy",
      tag: "Easy",
      imgUrl: "https://media.istockphoto.com/id/827250184/vector/set-of-black-math-symbol-background-for-education-and-business.jpg?s=612x612&w=0&k=20&c=vjp_rIuhxBbTLrTDydLBWwS6vsUrk53h0dOebFrnDeg=",
      quote: "",
      title: "Science & Maths",
      duration: 40,
    },
    science_mathematics_medium: {
      data: scienceMathsM,
      name: "",
      tag: "Medium",
      imgUrl: "https://media.istockphoto.com/id/1005900252/vector/school-doodle-illustration-set-back-to-school-elements-and-icons-children-education-hand.jpg?s=612x612&w=0&k=20&c=ApZjn6PW0Q1L1vMft_a9GuUJfRPCM0ZaqooPLx_ZUVw=",
      quote: "",
      title: "Science & Maths",
      duration: 30,
    },
    science_mathematics_hard: {
      data: scienceMathsH,
      name: "science_mathematics_hard",
      tag: "Hard",
      imgUrl: "https://media.istockphoto.com/id/1307911540/photo/mathematics.jpg?s=612x612&w=0&k=20&c=M-x7hevouxySK6zL0stGbW44ar293fF3iVSfmA665Ek=",
      quote: "",
      title: "Science & Maths",
      duration: 20,
    },
    Cartoon_easy: {
      data: entertainmentCartoonE,
      name: "Cartoon_easy",
      tag: "Easy",
      imgUrl: "https://media.istockphoto.com/id/920975208/vector/cartoon-pair-of-eyes.jpg?s=612x612&w=0&k=20&c=MVB5zHgqDwGtgMr8zUNlcEDIGRbzeyg39MbrUaEMrEQ=",
      quote: "",
      title: "Cartoons",
      duration: 40
    },
    Cartoon_medium: {
      data: entertainmentCartoonM,
      name: "Cartoon_medium",
      tag: "Medium",
      imgUrl: "https://media.istockphoto.com/id/1188195584/vector/gold-fish-or-goldfish-cartoon-character.jpg?s=612x612&w=0&k=20&c=twmpjx7OZPkGAQ2oTigHoeU-ZXrhZAAoC15p2xI8xK8=",
      quote: "",
      title: "Cartoons",
      duration: 30
    },
    Cartoon_hard: {
      data: entertainmentCartoonH,
      name: "Cartoon_hard",
      tag: "Hard",
      imgUrl: "https://media.istockphoto.com/id/954726306/vector/dabbing-unicorn-vector-design.jpg?s=612x612&w=0&k=20&c=boKMfeylXKy4UI8u1jxdH9k-WxwfAsoG_Yb72hMHVG8=",
      quote: "",
      title: "Cartoons",
      duration: 20
    },
    Nature_easy: {
      data: scienceNatureE,
      name: "Nature_easy",
      tag: "Easy",
      imgUrl: "https://media.istockphoto.com/id/1316957061/vector/nature-and-landscape-vector-illustration-of-trees-forest-mountains-flowers-plants-fields.jpg?s=612x612&w=0&k=20&c=YevMgTMNeVT8lzI4fisX-BhGmJImezOcV01J7FflUDE=",
      quote: "",
      title: "Science & Nature",
      duration: 40
    },
    Nature_medium: {
      data: scienceNatureM,
      name: "Nature_medium",
      tag: "Medium",
      imgUrl: "https://media.istockphoto.com/id/177034402/photo/trees.jpg?s=612x612&w=0&k=20&c=UJNHkMHylW4XtskSPfu9TneVfcaaDUvOg3UrSw7HqIU=",
      quote: "",
      title: "Science & Nature",
      duration: 30
    },
    Nature_hard: {
      data: scienceNatureH,
      name: "Nature_hard",
      tag: "Hard",
      imgUrl: "https://media.istockphoto.com/id/1399856226/photo/magical-forest-landscape-with-sunbeam-lighting-up-the-golden-foliage.jpg?s=612x612&w=0&k=20&c=oDRyepvw4f-Jb0lfupNnJv4FgqIujeDc9t4p7t6MlvI=",
      quote: "",
      title: "Science & Nature",
      duration: 25
    },
    Musicals_easy: {
      data: entertainmentMusicalsE,
      name: "",
      tag: "",
      imgUrl: "https://media.istockphoto.com/id/911313800/vector/abstract-background-with-gold-color-music-notes-vector-illustration.jpg?s=612x612&w=0&k=20&c=UGEf7ugmqc63X6HI2_W2xujEeQ3bQWb0W3289TCA7vU=",
      quote: "",
      title: "Musicals",
      duration: 40
    },
    Musicals_medium: {
      data: entertainmentMusicalsM,
      name: "Musicals_medium",
      tag: "Medium",
      imgUrl: "https://media.istockphoto.com/id/1064032478/photo/red-seats-in-theather.jpg?s=612x612&w=0&k=20&c=3PGy5ugMHdQ930mxh6VExXkjuhF7Mjqx_5klTZ4r_Eg=",
      quote: "",
      title: "Musicals",
      duration: 35
    },
    Musicals_hard: {
      data: entertainmentMusicalsH,
      name: "Musicals_hard",
      tag: "Hard",
      imgUrl: "https://media.istockphoto.com/id/616107294/vector/creative-music-style-template-vector-illustration-colorful-piano-keys.jpg?s=612x612&w=0&k=20&c=SKHww2tBskM4JmeGW_q3nfRPlle6zW-FBlo3EJStte8=",
      quote: "",
      title: "Musicals",
      duration: 25
    },
    Music_easy: {
      data: entertainmentMusicE,
      name: "Music_easy",
      tag: "Easy",
      imgUrl: "https://media.istockphoto.com/id/896244724/photo/digital-sound-mixing-console.jpg?s=612x612&w=0&k=20&c=oflVHc2VTr5udXhJeVjpe1Ww5x8LgDlp-KhVSMGjT04=",
      quote: "",
      title: "Music",
      duration: 40
    },
    Music_medium: {
      data: entertainmentMusicM,
      name: "Music_medium",
      tag: "Medium",
      imgUrl: "https://media.istockphoto.com/id/1174274826/vector/acoustic-guitar-hand-drawn-flat-retro-color-musical-vector.jpg?s=612x612&w=0&k=20&c=IRZrD0pLxleBSYSnQMJidXh_fwCo_wBO0i8mQetFGKE=",
      quote: "",
      title: "Music",
      duration: 30
    },
    Music_hard: {
      data: entertainmentMusicalsH,
      name: "Music_hard",
      tag: "Hard",
      imgUrl: "https://media.istockphoto.com/id/1083599488/vector/golden-musical-key.jpg?s=612x612&w=0&k=20&c=Z2AlE23JNSs1t7cWr-MTrDG-V-vvRzh9FBRoeZ_Ff2E=",
      quote: "",
      title: "Music",
      duration: 25
    },
    Computers_easy: {
      data: scienceCompE,
      name: "Computers_easy",
      tag: "Easy",
      imgUrl: "https://media.istockphoto.com/id/1366231924/photo/mockup-image-of-a-man-using-laptop-with-blank-screen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=xCewbXCp-l9HmHGJhtjGzRG_989g6q0SUl4AtQDmCGA=",
      quote: "",
      title: "Science & Computers",
      duration: 40
    },
    Computers_medium: {
      data: scienceCompM,
      name: "Computers_medium",
      tag: "Medium",
      imgUrl: "https://media.istockphoto.com/id/1257998329/vector/young-afro-american-man-sitting-on-the-chair-at-home-interior-and-working-with-laptop-vector.jpg?s=612x612&w=0&k=20&c=HHHYOCX39w0GCoyqRTfOorDBkLxPT2DhLzN8_B1bAv4=",
      quote: "",
      title: "Science & Computers",
      duration: 30
    },
    Computers_hard: {
      data: scienceCompH,
      name: "Computers_hard",
      tag: "Hard",
      imgUrl: "https://media.istockphoto.com/id/1143910377/photo/trader-at-work.jpg?s=612x612&w=0&k=20&c=JdIDjG8Fgu-2DHzm-5WIkojO7Oa9-S5BPSPjcnp2N9Y=",
      quote: "",
      title: "Science & Computers",
      duration: 25
    },
    Vehicles_easy: {
      data: vehiclesE,
      name: "Vehicles_easy",
      tag: "Easy",
      imgUrl: "https://media.istockphoto.com/id/610584282/photo/concept-illustration-for-auto-braking-lane-keeping-functions.jpg?s=612x612&w=0&k=20&c=nf5YIxX8oENwOVJvQRe5U75oiwDjK97PbjQbv9sP3f4=",
      quote: "",
      title: "Vehicles",
      duration: 40
    },
    Vehicles_medium: {
      data: vehiclesM,
      name: "Vehicles_medium",
      tag: "Medium",
      imgUrl: "https://media.istockphoto.com/id/1220133152/vector/vector-courier-delivery-service-app-illustration.jpg?s=612x612&w=0&k=20&c=qFpn-FbDunMMPK1ZVYx3LcdQxcS_03g92yuDcONaYXY=",
      quote: "",
      title: "Vehicles",
      duration: 30
    },
    Vehicles_hard: {
      data: vehiclesH,
      name: "Vehicles_hard",
      tag: "Hard",
      imgUrl: "https://media.istockphoto.com/id/1474628141/photo/nissan-gtr.jpg?s=612x612&w=0&k=20&c=-aLTKwj9JxIK6jTnXzR-waIyPd0MNjb3NWxXGgGpMSc=",
      quote: "",
      title: "Vehicles",
      duration: 18
    },
    Geography_easy: {
      data: geographyE,
      name: "Geography_easy",
      tag: "Easy",
      imgUrl: "https://media.istockphoto.com/id/517678941/photo/desk-globe.jpg?s=612x612&w=0&k=20&c=GRn-cHCkkob5Yh8CkDLy8Bk1MRXEA4_S6RWMnpaExzg=",
      quote: "",
      title: "Geography",
      duration: 40
    },
    Geography_medium: {
      data: geographyM,
      name: "Geography_medium",
      tag: "Medium",
      imgUrl: "https://media.istockphoto.com/id/1000013230/vector/paris-city-structure-illustration.jpg?s=612x612&w=0&k=20&c=sSyJ-gVwOjSGrGz2AT5NVihCKkZypUBjGthEwoxpBrU=",
      quote: "",
      title: "Geography",
      duration: 30
    },
    Geography_hard: {
      data: geographyH,
      name: "Geography_hard",
      tag: "Hard",
      imgUrl: "https://media.istockphoto.com/id/1332664687/vector/street-roads-map-of-lyon-france.jpg?s=612x612&w=0&k=20&c=0nw6xAgiMhBomvqrktH0XS3qCWoWKc5wBLsE8WqWzL8=",
      quote: "",
      title: "Geography",
      duration: 20
    },
    EntertainmentTv_easy: {
      data: entertainmentTvE,
      name: "EntertainmentTv_easy",
      tag: "Easy",
      imgUrl: "https://media.istockphoto.com/id/1124436825/photo/streets-of-manhattan-in-new-york-city.jpg?s=612x612&w=0&k=20&c=gzbtxaJJmxpXDwK1jsX2_9S0uNroJ1htQxDIo8DexWE=",
      quote: "",
      title: "Entertainment & TV",
      duration: 40
    },
    EntertainmentTv_medium: {
      data: entertainmentTvM,
      name: "EntertainmentTv_medium",
      tag: "Medium",
      imgUrl: "https://media.istockphoto.com/id/1334141443/photo/manhattanhenge-crowds.jpg?s=612x612&w=0&k=20&c=CvQyDWBKtteAEmJ9RBcOmUz6D2hWNRrAKzEEJj6-fO4=",
      quote: "",
      title: "Entertainment & TV",
      duration: 25
    },
    EntertainmentTv_hard: {
      data: entertainmentTvH,
      name: "EntertainmentTv_hard",
      tag: "Hard",
      imgUrl: "https://media.istockphoto.com/id/458464247/photo/simpsons-dvd-set.jpg?s=612x612&w=0&k=20&c=yvuGKgAYZNKX2d2y390yZpZQyRTlAC03UezdxOFCiKw=",
      quote: "",
      title: "Entertainment & TV",
      duration: 18
    },
    Entertainment_Films_easy: {
      data: entertainmentFilmsE,
      name: "Entertainment_Films_easy",
      tag: "Easy",
      imgUrl: "https://media.istockphoto.com/id/1226615013/vector/film-strip-on-the-way-with-silhouette-of-cinema-projector-on-a-tripod-and-film-roll-cinema.jpg?s=612x612&w=0&k=20&c=vM6eopp99-JgNHuiBmBwHHLbBjh7_E6iDTb3QQCSFyU=",
      quote: "",
      title: "Entertainment & Films",
      duration: 40
    },
    Entertainment_Films_medium: {
      data: entertainmentFilmsM,
      name: "Entertainment_Films_medium",
      tag: "Medium",
      imgUrl: "https://media.istockphoto.com/id/1309508880/vector/movie-and-film-poster-design-template-background-with-vintage-retro-filmstrip.jpg?s=612x612&w=0&k=20&c=m0ECNP9TNq1_PnJnGsJxZqHo04r54EGZkcr9nGbFzCI=",
      quote: "",
      title: "Entertainment & Films",
      duration: 30
    },
    Entertainment_Films_hard: {
      data: entertainmentFilmsH,
      name: "Entertainment_Films_hard",
      tag: "Hard",
      imgUrl: "https://media.istockphoto.com/id/995815438/vector/movie-and-film-modern-retro-vintage-poster-background.jpg?s=612x612&w=0&k=20&c=UvRsJaKcp0EKIuqDKp6S7Dwhltt0D5rbegPkS-B8nDQ=",
      quote: "",
      title: "Entertainment & Films",
      duration: 18
    },
    Comics_easy: {
      data: entertainmentComicsE,
      name: "Comics_easy",
      tag: "Easy",
      imgUrl: "https://media.istockphoto.com/id/868669090/vector/retro-magazine-cover-vintage-comic-book-vector-template.jpg?s=612x612&w=0&k=20&c=scv2-rP9_2Vj-zrD8q82rbtnwxjxyFoL14M42Vd0TdI=",
      quote: "",
      title: "Entertainment & Comics",
      duration: 40
    },
    Comics_medium: {
      data: entertainmentComicsM,
      name: "Comics_medium",
      tag: "Medium",
      imgUrl: "https://media.istockphoto.com/id/1358051308/vector/vintage-horror-comic-book-illustration.jpg?s=612x612&w=0&k=20&c=vvG8rrK5glJA0WskqUr99SrR0sH68fR0ILnl6Op5lgs=",
      quote: "",
      title: "Entertainment & Comics",
      duration: 35
    },
    Comics_hard: {
      data: entertainmentComicsH,
      name: "Comics_hard",
      tag: "Hard",
      imgUrl: "https://media.istockphoto.com/id/1356349474/vector/motorcycle-poster.jpg?s=612x612&w=0&k=20&c=wiTacSvRk__-PNCe61SlNXXvSyi7w0jgvJmBTICpfcI=",
      quote: "",
      title: "Entertainment & Comics",
      duration: 20
    },
    Random_Question_easy: {
      data: randQuesE,
      name: "Random_Question_easy",
      tag: "Easy",
      imgUrl: "https://media.istockphoto.com/id/1324933770/vector/green-star-burst-background.jpg?s=612x612&w=0&k=20&c=U4xOP9EelDi_sWQiKdvJwSOdTasiVDJIQk8uI0msYWI=",
      quote: "",
      title: "Random Question",
      duration: 40
    },
    Random_Question_medium: {
      data: randQuesM,
      name: "Random_Question_medium",
      tag: "Medium",
      imgUrl: "https://media.istockphoto.com/id/1439829723/vector/blast-zap-excitement-explosion-abstract-background.jpg?s=612x612&w=0&k=20&c=-9qakepd92NcD4Hix6DlTgzmE7SRj3Pddan7jUBqasI=",
      quote: "",
      title: "Random Question",
      duration: 30
    },
    Random_Question_hard: {
      data: randQuesH,
      name: "Random_Question_hard",
      tag: "Hard",
      imgUrl: "https://media.istockphoto.com/id/1364792675/vector/comic-book-fantastic-fire-flames-smoke-backgrounds-design-template-page-hand-drawn-vector.jpg?s=612x612&w=0&k=20&c=apC-u5iayd6k7wAl5JSb3vLYvk3dQfkk0xIj0zejfgU=",
      quote: "",
      title: "Random Question",
      duration: 18
    },

  };
  // console.log(obj);
  if(response) return obj;
  else return {
    data: defaultQuestions,
    name: "Default",
    tag: "Hard",
    imgUrl: "",
    quote: "",
    title: "Default",
    duration: 20,
  }
};

function analyzeData(value) {
  const obj = {};
  obj.question = decodeTextData(value.question);
  obj.category = decodeTextData(value.category);
  obj.difficulty = decodeTextData(value.difficulty);
  const answer = [];
  const correct = {};
  correct.ans = decodeTextData(value.correct_answer);
  correct.correct = true;
  correct.selectable = true;
  answer.push(correct);
  value.incorrect_answers.forEach((value1) => {
    const obj1 = {};
    obj1.ans = decodeTextData(value1);
    obj1.correct = false;
    answer.push(obj1);
  });
  obj.answer = answer;
  let rand;
  while (true) {
    const randA = Math.floor(Math.random() * answer.length);
    if (randA === 0) {
    } else {
      rand = randA;
      break;
    }
  }
  obj.answer[rand].selectable = true;
  obj.answer = randomiseQuestion(obj.answer);
  return obj;
}

const decodeTextData = (text) => {
  let htmlParser = document.createElement("textarea");
  htmlParser.innerHTML = text;

  return htmlParser.value;
};

export const defaultQuestions = randomiseQuestion([
  {
    question: "Which of these is a primary color?",
    category: "General Knowledge",
    difficulty: "easy",
    answer: randomiseQuestion([
      { ans: "Purple", correct: false, selectable: false },
      { ans: "Red", correct: true, selectable: true },
      { ans: "Black", correct: false, selectable: true },
      { ans: "Orange", correct: false, selectable: false },
    ]),
  },
  {
    question:
      "What is the name of the biggest country in the world by landmass?",
    category: "Geography",
    difficulty: "easy",
    answer: randomiseQuestion([
      { ans: "USA", correct: false, selectable: false },
      { ans: "China", correct: false, selectable: true },
      { ans: "Russia", correct: true, selectable: true },
      { ans: "Canada", correct: false, selectable: false },
    ]),
  },
  {
    question: "What is the capital of Australia?",
    category: "Geography",
    difficulty: "easy",
    answer: randomiseQuestion([
      { ans: "Canberra", correct: true, selectable: true },
      { ans: "Sydney", correct: false, selectable: false },
      { ans: "Queensland", correct: false, selectable: false },
      { ans: "Houston", correct: false, selectable: true },
    ]),
  },
  {
    question: "Pick the odd one out",
    category: "Geography",
    difficulty: "easy",
    answer: randomiseQuestion([
      { ans: "Chile", correct: true, selectable: true },
      { ans: "Estonia", correct: false, selectable: true },
      { ans: "Sweden", correct: false, selectable: false },
      { ans: "Luxemborg", correct: false, selectable: false },
    ]),
  },
  {
    question: "The first world war started in which year?",
    category: "History",
    difficulty: "easy",
    answer: randomiseQuestion([
      { ans: "1917", correct: false, selectable: false },
      { ans: "1940", correct: false, selectable: true },
      { ans: "1936", correct: false, selectable: false },
      { ans: "1914", correct: true, selectable: true },
    ]),
  },
  {
    question: "Which of these vitamins deficiency account for Scurvy?",
    category: "Science & Nature",
    difficulty: "easy",
    answer: randomiseQuestion([
      { ans: "Vitamin A", correct: false, selectable: false },
      { ans: "Vitamin B", correct: false, selectable: true },
      { ans: "Vitamin C", correct: true, selectable: true },
      { ans: "Vitamin D", correct: false, selectable: false },
    ]),
  },
]);

export function randomiseQuestion(arr) {
  let size = arr.length;
  for (let i = size - 1; i > 0; i--) {
    let temp = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[temp]] = [arr[temp], arr[i]];
  }
  return arr;
}
