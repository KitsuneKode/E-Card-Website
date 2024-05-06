import PropTypes from 'prop-types';
import "./style/card.css"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export default function Card(props){
 
    
    return <div className='CardContainer'>
            <h1>{props.name}</h1><br />
            <div className='banner-image'>
            <p>{props.description}</p><br />
            </div>

            <h3>Interests</h3>
            <div className='Interest'>
                <ol className='interests-list'>

            {props.interests.map((interest, index)=>{
                return <><li className='interestdetails' key={index}>{interest}</li></>
            })}
            </ol>
            </div>
                <h3 className='socialsClass'>Socials</h3>
            <div className='button-wrapper'>
                <FaInstagram className='gradient' onClick={()=>handletag(props.handles[0].url)} />
                <FaTwitter className='fill' onClick={()=>handletag(props.handles[1].url)}/>
                <FaGithub className='outline' onClick={()=>handletag(props.handles[2].url)}/>
            
            </div>
</div>



}


function handletag(url){
    window.location.href = url;

}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    interests: PropTypes.arrayOf(PropTypes.string).isRequired,
    handles: PropTypes.arrayOf(
        PropTypes.shape({
            platform: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    )
};