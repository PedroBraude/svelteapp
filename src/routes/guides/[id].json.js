// import db

export async function get({ params }) {
  // connect to db to fetch & parse data
 
  const guides = [
    { id: 1, title: 'Call of Duty: Modern Warfare', body: 'The stakes have never been higher as players take on the role of lethal Tier One operators in a heart-racing saga that will affect the global balance of power. Call of Duty: Modern Warfare engulfs fans in an incredibly raw, gritty, provocative narrative that brings unrivaled intensity and shines a light on the changing nature of modern war.Players will be thrust into an immersive narrative spanning the entire game. Experience the ultimate online playground with classic multiplayer or squad-up and play cooperatively in a collection of elite operations, accessible to all skill levels.' },
    { id: 2, title: 'Persona 5 Royal', body: 'An enhanced version of Persona 5 with some new characters and a third semester added to the game. Released Internationally in 2020.' },
    { id: 3, title: 'The Cat Lady', body: 'Susan Ashworth, known in her neighbourhood as the crazy Cat Lady, is a lonely 40- year old on the verge of suicide. She has no family, no friends and no hope for a better future.One day she discovers that five strangers will come along and change everything.But those five, "The Parasites", are also the most ruthless, deranged and cold-blooded bunch of psychopaths the city has ever known. They will stop at nothing to hurt Susan. Unless, she hurts them first...' },
    { id: 4, title: 'Elden Ring', body: 'Elden Ring is a fantasy, action and open world game with RPG elements such as stats, weapons and spells. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.' },
    { id: 5, title: 'Disco Elyseum', body: 'A CRPG in which, waking up in a hotel room a total amnesiac with highly opinionated voices in his head, a middle-aged detective on a murder case inadvertently ends up playing a part in the political dispute between a local labour union and a larger international body, all while struggling to piece together his past, diagnose the nature of the reality around him and come to terms with said reality.' },
    { id: 6, title: 'The Witcher 3: wild hunt', body: 'RPG and sequel to The Witcher 2 (2011), The Witcher 3 follows witcher Geralt of Rivia as he seeks out his former lover and his young subject while intermingling with the political workings of the wartorn Northern Kingdoms. Geralt has to fight monsters and deal with people of all sorts in order to solve complex problems and settle contentious disputes, each ranging from the personal to the world-changing.' },
    { id: 7, title: 'God Of War', body: 'God of War is the sequel to God of War III as well as a continuation of the canon God of War chronology. Unlike previous installments, this game focuses on Norse mythology and follows an older and more seasoned Kratos and his son Atreus in the years since the third game. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.' },

  ]

  const guide = guides.find((g) => g.id == params.id)

  if (guide) {
    return {
      status: 200,
      body: { guide } 
    }
  }

  return {
    status: 404
  }
}