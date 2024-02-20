import axios from "axios"

export default  axios.create({
       baseURL:"https://api.rawg.io/api",
       params :{
              key:'f1f92136158b408686cabd20669a0e33'
       }
})