const CategoryComp = () => {
    return(
        <>
        <section className="main-category-section" id="main-category-section">
            <br />
            <br />
            {/* <h1>Category</h1> */}
            <div className="category-section">
            <div className="category-container">
                <div className="category-card">
                    <div className="category-imgBx" data-text="SMA">
                        <img src="/assets/images/icon/Senior High School.png" alt="" />
                    </div>
                    <div className="category-content">
                        <div>
                            <h3>Sekolah Menengah Atas</h3>
                            <p>Ayo daftarkan sekolah Anda dalam olimpiade geografi dan raih prestasi bersama</p>
                            {/* <a href="#">Read More</a> */}
                        </div>
                    </div>
                </div>

                {/* <div className="category-card">
                    <div className="category-imgBx" data-text="Universitas">
                        <img src="./assets/images/icon/University.png" alt="" />
                    </div>
                    <div className="category-content">
                        <div>
                            <h3>Universitas</h3>
                            <p>Bergabunglah dengan olimpiade geografi universitas dan tunjukkan kemampuan Anda</p>
                           
                        </div>
                    </div>
                </div> */}
            </div>
            </div>
        </section>
        </>
    )
}

export default CategoryComp