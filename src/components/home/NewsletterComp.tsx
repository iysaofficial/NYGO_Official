const NewsletterComp = () =>{
    return(
        <>
        <section className="newsletter-section">
            <div className="newsletter-main_wrapper">
                <div className="newsletter-subscribe_wrapper">
                    <h2>Subscribe Sekarang!</h2>
                    <p>Subscribe newsletter kami untuk menerima berita terbaru</p>
                    <form action="https://formspree.io/f/xoqgjrok" method="POST">
                        <div className="inner">
                            <input type="email" name="email" placeholder="Masukan Email Anda" />
                        </div>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default NewsletterComp