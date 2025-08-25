import Link from "next/link"

const HeroComp = () =>{
    return(
        <>
        <section className="hero-section" id="hero-section">
            <div className="hero-img">
                <img src="/assets/images/logo/NYGO.png" alt="" />
            </div>
            <div className="hero-content">
                <h1>NYGO</h1>
                <h3>National Youth Geography Olympiad</h3>
                {/* <p>Pendaftaran National Youth Geography Olympiad telah dibuka! <br /> Bergabunglah 
                    dengan acara bergengsi ini dan dapatkan pengalaman yang tak terlupakan!
                </p> */}
                    <br />
                    <div className="hero-social-icon">   
                        <Link href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></Link>
                        <Link href="https://www.instagram.com/nygo.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i className='fab fa-instagram instagram-bg'></i></Link>
                        <Link href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></Link>
                        <Link href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></Link>
                        <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></Link>
                    </div>
                    <br />
                    <br />
                    <Link href="#" className="btn">Segera Hadir 2026</Link>
            </div>
        </section>
        </>
    )
}

export default HeroComp