import '../style/footer.css';
import phone from "../image/icon/phone-call.png"
import whatsapp from "../image/icon/whatsapp.png"
import vk from "../image/icon/vk.png"
import instagram from "../image/icon/instagram.png"
import telegram from "../image/icon/telegram.png"

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer_container'>
                    <div className='footer_messengers'>
                        <div className='footer_item'>
                            <img src={phone} alt='Телефон' />
                            <a href='tel:79896817945' className='footer_link'>+7 (989) 681-79-45</a>
                        </div>
                        <div className='footer_item'>
                            <img src={whatsapp} alt='WhatsApp' />
                            <a href='wa.me/+79896817945' className='footer_link'>+7 (989) 681-79-45</a>
                        </div>
                    </div>
                    <div className='footer_socials'>
                        <div className='footer_item'>
                            <a href='#' className='footer_link'>ВКонтакте</a>
                            <img src={vk} alt='ВК' />
                        </div>
                        <div className='footer_item'>
                            <a href='#' className='footer_link'>Instagram</a>
                            <img src={instagram} alt='Instagram' />
                        </div>
                        <div className='footer_item'>
                            <a href='#' className='footer_link'>Telegram</a>
                            <img src={telegram} alt='Telegram' />
                        </div>
                    </div>  
                </div>
            </div>
        </footer>
    );
}

export default Footer;