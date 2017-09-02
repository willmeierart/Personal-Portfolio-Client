const categories = {
  web:{
    title: "web",
    tagline: "design and development",
    href:"/tech",
    sublinks:[]
  },
  art:{
    title: "art",
    tagline: "painterly sculptures and sculptural paintings",
    href:"/art",
    sublinks:[
      {title:2017,
      href:"/art/2017"}
    ]
  },
  writing:{
    title: "txt",
    tagline: "writing about art and etc",
    href:"/writing",
    sublinks:[
      {title:"One Good Eye",
      href:"http://onegoodeyeonline.com/author/will-meier"}
    ]
  },
  process:{
    title:"etc",
    tagline:"design-thinking miscellania",
    href:"/process",
    sublinks:[
      {title:"videos",
      href:"/etc/videos"}
    ]
  },
  about:{
    title:"who",
    tagline:"about / contact / resume",
    href:"/about",
    sublinks:[
      {title:"resume",
      href:"/about/resume"},
      {title:"bio",
      href:"/about/bio"}
    ]
  },

}

export default categories
