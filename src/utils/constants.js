export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR="https://occ-0-3195-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZumJ3wvSKM7od-r3UjhVF9j3yteWlQYA-51F3SNoI682llhul1Xf_CUkMnfP_17Md2lpOOhbwHeGufvo8kOTjptoS_bcwtniHKz.png?r=e6e";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWQ3ZDc3ZGQxZjgyYjNkNmFlNThlYzA4ZmEzMzkzZiIsIm5iZiI6MTczNjk5MzQ5Ni4zMTMsInN1YiI6IjY3ODg2YWQ4OTRkOTU4MzlmM2FkMTEwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZLFJHGf9jx4nAZ2J1-XKb-A894KCSpmpSg9rUIhzFhw'
    }
  };
  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";
  export const BG_URL ="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg";

export  const SUPPORTED_LANGUAGES = [
  {identifier:"en",name:"English"},
  {identifier:"hindi",name:"Hindi"},
  {identifier:"malayalam",name:"Malayalam"},
  {identifier:"spanish",name:"Spanish"},
  {identifier:"japanese",name:"Japanese"},
  {identifier:"tamil",name:"Tamil"},
  {identifier:"telugu",name:"Telugu"},
  {identifier:"kannada",name:"Kannada"},
];

export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;