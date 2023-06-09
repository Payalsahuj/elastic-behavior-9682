import WithSubnavigation from "./Navitem"
import {
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Divider,
    Link,
} from '@chakra-ui/react'
import facebook from "../Images/icons8-facebook-f-50.png"
import twitter from "../Images/icons8-twitter-30.png"
import insta from '../Images/icons8-instagram-old-50.png'
import linkedin from '../Images/icons8-linkedin-2-30.png'
import youtube from '../Images/icons8-youtube-24.png'
import sidetwitter from "../Images/icons8-twitter-squared-48.png"
import sidefacebook from '../Images/icons8-facebook-48.png'
import sidelinkedin from '../Images/icons8-linkedin-48.png'
import styled from "styled-components"
// import { hover } from "@testing-library/user-event/dist/hover"
function Navbar() {
    return (
        <DIV>
        <div style={{ width: '100%', position: 'fixed', zIndex: '5',top:'0%' }}>

            <div style={{ display: 'flex', justifyContent: 'flex-end',paddingTop:'8px',paddingRight:'20px' ,backgroundColor:'#DAEFF4',zIndex:''}}>
                <div style={{marginRight:'30px'}}>
                <Breadcrumb separator=''>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='https://www.facebook.com/login.php?skip_api_login=1&api_key=140586622674265&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv10.0%2Fdialog%2Fshare%3Fredirect_uri%3Dhttp%253A%252F%252Fs7.addthis.com%252Fstatic%252Fthankyou.html%26display%3Dpopup%26href%3Dhttps%253A%252F%252Fwww.taxtim.com%252Fza%252Fcalculators%252F%2523.ZFKpRmZQT7Q.facebook%26client_id%3D140586622674265%26ret%3Dlogin&cancel_url=https%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html%3Ferror_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%23_%3D_&display=popup&locale=en_GB'> 
                            <img width={'20px'} src={facebook} alt="" /> 
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='https://twitter.com/intent/tweet?text=Tax%20Calculators%20%7C%20TaxTim%20SA&url=https%3A%2F%2Fwww.taxtim.com%2Fza%2Fcalculators%2F%23.ZFKpIUrzyDc.twitter&related='>
                                <img width={'20px'} src={twitter} alt="" />
                                </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem >
                            <BreadcrumbLink href='https://www.instagram.com/taxtim_za/'><img width={'20px'} src={insta} alt="" /></BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem >
                            <BreadcrumbLink href='https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.taxtim.com%2Fza%2Fcalculators%2F%23.ZFKo_fo-0X8.linkedin'>
                                <img width={'20px'} src={linkedin} alt="" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem >
                            <BreadcrumbLink href='https://www.bing.com/videos/riverview/relatedvideo?&q=taxtim+youtube&qpvt=taxtim+youtube&mid=08F441C97AE6C230C69408F441C97AE6C230C694&&FORM=VRDGAR'>
                                <img width={'20px'} src={youtube} alt="" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
               
                <div >
                    <Breadcrumb fontSize={'13px'} separator='|'>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/faq'>FAQ</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                        <a href='/blog'> <BreadcrumbLink >Blog</BreadcrumbLink></a>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                           <a href='/about'> <BreadcrumbLink >About</BreadcrumbLink></a>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
            <WithSubnavigation />
            <div style={{position:'fixed',right:'-10px',width:'60px',top:'25%'}}>
                <div className="sideconnectiondiv" ><a href='https://twitter.com/intent/tweet?text=Tax%20Calculators%20%7C%20TaxTim%20SA&url=https%3A%2F%2Fwww.taxtim.com%2Fza%2Fcalculators%2F%23.ZFKpIUrzyDc.twitter&related'><img src={sidetwitter}  alt="" /></a></div>
                <div className="sideconnectiondiv"><a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=140586622674265&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv10.0%2Fdialog%2Fshare%3Fredirect_uri%3Dhttp%253A%252F%252Fs7.addthis.com%252Fstatic%252Fthankyou.html%26display%3Dpopup%26href%3Dhttps%253A%252F%252Fwww.taxtim.com%252Fza%252Fcalculators%252F%2523.ZFadKsUaero.facebook%26client_id%3D140586622674265%26ret%3Dlogin&cancel_url=https%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html%3Ferror_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%23_%3D_&display=popup&locale=en_GB"><img src={sidefacebook} alt="" /></a></div>
                <div className="sideconnectiondiv" ><a href='https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.taxtim.com%2Fza%2Fcalculators%2F%23.ZFKo_fo-0X8.linkedin'><img src={sidelinkedin} alt="" /></a></div>
            </div>
        </div>
        </DIV>
    )
}

export default Navbar


const DIV = styled.div`
    .sideconnectiondiv:hover{
        /* transform:scale(1.1); */
        transform:scaleX(1.2);
        cursor:pointer;
        /* margin-right:40px; */
    }
`