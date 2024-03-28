import React from 'react'
import Accordian from './Accordian'
import { Link } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';



function Questions() {
  return (
    <div className='py-20' >
      <div className='flex ml-10'>
       <Link to={'/'} className='text-white my-3 hover:text-slate-500 text-center transition-all '>Ana səhifə</Link>
       <MdChevronRight className='text-white my-4 text-center hover:text-slate-500' size={20}></MdChevronRight>
       <Link to={'/questions'}  className='text-slate-500 my-3 hover:text-white transition-all ml-4'>Tez-tez soruşulan suallar</Link>
      </div>
      <h2 className='text-center text-gray-200 py-10 font-bold text-3xl'>Tez-tez verilən suallar</h2>
      
      <div className="p-4 bg-gray-200 rounded-lg ml-40 mr-40">
       <Accordian 
        title="How do I watch movies on your website?"
        answer="lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans"
       />
      </div>

      <div className="p-4 bg-gray-200 rounded-lg ml-40 mr-40 my-4">
       <Accordian
        title="Are there any legal considerations regarding the content on your website?"
        answer="lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans"
       />
      </div>
      
      <div className="p-4 bg-gray-200 rounded-lg ml-40 mr-40 my-4">
      <Accordian 
        title="What genres of movies are available on your website?" 
        answer="lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans"
      />
      </div>
      
      <div className="p-4 bg-gray-200 rounded-lg ml-40 mr-40 my-4">
      <Accordian 
        title="Are there any age restrictions for certain movies?" 
        answer="lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans"
      />
      </div>
      
      <div className="p-4 bg-gray-200 rounded-lg ml-40 mr-40 my-4">
      <Accordian 
        title="How can I request a movie that is not currently available on your website?" 
        answer="lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans"
      />
      </div>
      <div className="p-4 bg-gray-200 rounded-lg ml-40 mr-40 my-4">
      <Accordian 
        title="Can I download movies to watch offline?" 
        answer="lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans"
      />
      </div>
      <div className="p-4 bg-gray-200 rounded-lg ml-40 mr-40 my-4">
      <Accordian 
        title="Do you provide reviews or ratings for the movies on your website?" 
        answer="lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans"
      />
      </div>
      <div className="p-4 bg-gray-200 rounded-lg ml-40 mr-40 my-4">
      <Accordian 
        title="Is the streaming quality HD, and what are the data requirements?" 
        answer="lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans"
      />
     </div>
     
      
    </div>
  )
}

export default Questions