import {articles} from '../../../data'
import article from '../../article/[id]'

export default function handler({query : {id}}, res) {
   const filtered = articles.filter(article => article.id === id)

   if(filtered.length > 0 ){
       res.status(200).json(filtered[0])
   }else {
       res.status(404).json({message: `Article number ${id} is not found`})   }
}