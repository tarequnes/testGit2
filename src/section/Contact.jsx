import style from "./Contact.module.css";

function Contact () {
    return(
        <section id="contact" className={style.contact} >
          <h1>Contact Us</h1>
          <div className={style.container}>
            <div className={style.map}> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54755.9954551157!2d-6.9737894833149205!3d30.935589491681053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdbb104077422057%3A0x26b3cb529b37ab00!2sOuarzazate%2045000!5e0!3m2!1sfr!2sma!4v1771328791576!5m2!1sfr!2sma" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         
            </div>
            <form className={style.form}>
             <input type="text"placeholder="Nom" required />
             <input type="email"placeholder="Email" required />
              <textarea name="text" id="text" placeholder="Message" rows="5"></textarea>
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </section>
    )
}

export default Contact;