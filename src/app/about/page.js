import styles from "./about.css";
import Image from 'next/image';
import image from '../../images/jadyn_smiling.png';

export default function About() {
    
    return (
            <div>
                <div className="shit-tester">
                    <Image src={image} width={900} ></Image>
                    
                </div>

                
                <div className="about-title"> 
                ABOUT ME 
                <hr></hr>
                
                <p className="about-text-wrapper">
                    Jadyn Lam is a 21-year-old Australian born chinky jew person that has grown up following life to the rulebook. 
                    This rulebook dictated the way that he thought about life, that was to: finish high school with a stellar ATAR, 
                    attend a prestigious university and make a living from there. Quickly realising that this was not the case, 
                    Jadyn reignited the ‘Life With Lam’ podcast - a small hobby that was created at the ripe age of 16 years old. 
                    The podcast shifted its focus from adolescent and juvenile conversations, to becoming a platform for notable 
                    individuals to share their journeys and how they have arrived to where they are today.
                </p>
                
                <p className="about-text-wrapper">
                    Aiming to inspire and pave a different narrative, Jadyn advocates passionately to those struggling to find their 
                    ‘why’ to take the time to assess options before diving headfirst into something that they are told to do. Jadyn aims 
                    to provide a safe, humorous and entertaining environment for anyone listening and participating in the podcast. 
                    Besides podcasting, you will find Jadyn enjoying the rigorous journey in Powerlifting, chatting to many people at 
                    his retailing job and hanging out with his grandma and grandpa next door.
                </p>
                </div>


                
                <div className="about-title">
                What is “Life With Lam”?
                <hr></hr>
                <p className="about-text-wrapper">
                Hosted by Jadyn Chun Kit How Yang Lam, "Life With Lam" is a podcast that aims to shed light towards the vast opportunities, 
                experiences and pathways that the world has to offer. As a student that is growing up in a system that encourages a linear, 
                streamline, and at times, rigid, career trajectory - Life With Lam invites those that have explored their 'why' and champions 
                their journey to where they are today. 
                </p>

                <p className="about-text-wrapper-bottom">
                The podcast invites an entertaining and safe space for anyone to chat all things about their life and all its twists and 
                curvatures along the way!
                </p>
                
                </div>
                
                
                
                
                
           </div>
    )
    
}