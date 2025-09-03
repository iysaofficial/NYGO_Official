"use client";
import React, { useEffect } from "react";

const NewsletterComp = () =>{
    useEffect(() => {
        const scriptURL =
        "https://script.google.com/macros/s/AKfycbwfw1dAhzyY6p6crVCCuoEXzb_E7hBOi8cYuIBu_-JZzz2a25h-tCvT6Xd3dUH9Mx2fQA/exec";

        const form = document.forms.namedItem("home-newsletter");

        if (form) {
        const handleSubmit = async (e: Event) => {
            e.preventDefault();
            try {
            await fetch(scriptURL, {
                method: "POST",
                body: new FormData(form),
            });
            alert("Data berhasil dikirim!");
            form.reset();
            } catch (error) {
            console.error("Error:", error);
            alert("Gagal mengirim data.");
            }
        };

        form.addEventListener("submit", handleSubmit);

        // cleanup listener
        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
        }
    }, []);
    
    return(
        <>
        <section className="newsletter-section">
            <div className="newsletter-main_wrapper">
                <div className="newsletter-subscribe_wrapper">
                    <h2>Subscribe Sekarang!</h2>
                    <p>Subscribe newsletter kami untuk menerima berita terbaru</p>
                    <form action="" method="POST" name="home-newsletter">
                        <div className="inner">
                            <input type="email" name="Email" placeholder="Masukan Email Anda" />
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