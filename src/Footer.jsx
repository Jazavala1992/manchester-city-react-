import React, { useLayoutEffect } from "react";
import styles from './Footer.module.css';


function Footer(props) {
    return (
    <footer className={styles.footer}>
        <div style={{ gridArea: 'uno' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/ezedy0oz/partner_logo_okx.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'dos' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/q4jfxkye/asahi_v2.png?width=240&height=120" alt="" /></div>
        <div style={{ gridArea: 'tres' }}> <img className={styles['footer-img']}  src="https://www.mancity.com/meta/media/b0fbwfng/partner_logo_nissan.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'cuatro' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/f01phxmd/etisalat.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'cinco' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/ywloxekq/partner_logo_abu-dhabi.png?width=240&height=120" alt="" /></div>
        <div style={{ gridArea: 'seis' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/e24fsr14/partner_logo_midea.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'siete' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/d5hkkfiy/partner_logo_nexen-tire.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'ocho' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/tbff5hsr/easports-blue.png?width=240&height=120" alt="" /></div>
        <div style={{ gridArea: 'nueve' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/1zkdtond/partner_logo_emirates-palace.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'diez' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/yoxiquis/wix_v2.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'once' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/byxkz5aq/partner_logo_aldar.png?width=240&height=120" alt="" /></div>
        <div style={{ gridArea: 'doce' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/om4ld3fx/partner_logo_xylem.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'trece' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/5yyjpqnp/rexona.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'catorce' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/zu4d1lxt/partner_logo_axi.png?width=240&height=120" alt="" /></div>
        <div style={{ gridArea: 'quince' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/u3ngdbgf/partner_logo_sony.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'dieciseis' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/i5yaoybe/jinko.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'diecisiete' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/ugaeefhq/partner_logo_gatorade.png?width=240&height=120" alt="" /></div>
        <div style={{ gridArea: 'dieciocho' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/upyelfh4/partner_logo_qnet.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'diecinueve' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/open1ujv/partner_logo_socios.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'veinte' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/zp3olf1t/partner_logo_taobao.png?width=240&height=120" alt="" /></div>
        <div style={{ gridArea: 'veintiuno' }}> <img className={styles['footer-img']} src="https://www.mancity.com/meta/media/ngikx410/cp-company.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'veintidos' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/1c5itxzu/corpay.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'veintitres' }}> <img className={styles['footer-img']} src="https://www.mancity.com/meta/media/hondgtsi/joie.png?width=240&height=120" alt="" /></div>
        <div style={{ gridArea: 'veinticuatro' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/5jxfs0xl/quidd.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'veinticinco' }}>  </div>
        <div style={{ gridArea: 'veintiseis' }}> </div>
        <div style={{ gridArea: 'veintisiete' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/mdsjxw3f/partner_logo_acronis.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'veintiocho' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/dh1o4deg/partner_logo_quatrics.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'veintinueve' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/m5zlnlu4/partner_logo_wework.png?width=240&height=120" alt="" /></div>
        <div style={{ gridArea: 'treinta' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/i03dbuj3/partner_logo_fold.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'treintauno' }}> <img  className={styles['footer-img']} src="https://www.mancity.com/meta/media/5jjfpqj2/stairmedia.png?width=240&height=120" alt="" /> </div>
        <div style={{ gridArea: 'treintados' }}></div>
    </footer>

    );
}
 export default Footer;

 