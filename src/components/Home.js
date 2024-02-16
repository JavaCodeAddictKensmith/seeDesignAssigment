import "./HomeStyles.css";

function Home() {
  return (
    <>
      {/* <div className="home">
        <h1>React Navbar</h1>
        <h3>Difficulty Level: 0;</h3>
      </div> */}
      <main >
        <section className="section">
          <section className="section-1">
            <div className="img-bo">
            <img
                      src={require("../images/image-web-3-desktop.jpg")}
                      className="mine"
                      alt="firstpostimg"
                    />
                    <div className="madiv">
                      <div className="unitRestyle">
                        <h2 className="topSideTopic">
                          The Bright  Future of Web 3.0?
                        </h2>
                      </div>
                      <div  className="best-appstyle">
                        <div>
                          <p style={{wordSpacing: 5,fontFamily: 'Inter-Regular',color:'#6C7A9B'}}>We dive into the next evolution of web that claims to put the power of platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        </div>

                        <div>
                          <div className="checkBtn" >
                          <p style={{textAlign:'center', fontWeight:"bold", color:'white', fontSize: 14, letterSpacing: 1}}>READ MORE</p>
                          </div>
                        </div>
                      </div>

                    </div>

            </div>
            <div className="section1-text-part">
              <div>
              <h2 className="h-class">New</h2>
              <h3 className="sideTopic">Hydrogen Vs Electric Cars</h3> 
              <p style={{color:'#6C7A9B', fontFamily: 'Inter-Regular'}}>
              Will Hydrogen fueled cars ever catch-up to EVS?
              </p>
              </div>
              <br/>
              <div style={{width:'100%', height: 1 , backgroundColor:'#6C7A9B'}}></div>
              <div style={{marginTop: 70}}>
             
              <h3 className="sideTopic">The Downside of AI Artistry</h3> 
              <p style={{color:'#6C7A9B', fontFamily: 'Inter-Regular'}}>
               What are the possible effect of on demand AI Image generation?
              </p>
              </div>
              <br/>
              <div style={{width:'100%', height: 1 , backgroundColor:'#6C7A9B'}}></div>
              <div style={{marginTop: 70}}>
             
              <h3  className="sideTopic">Is VC Funding Drying Up?</h3> 
              <p style={{color:'#6C7A9B', fontFamily: 'Inter-Regular'}}>
               Private funding by VC firms is down 50% YOY. We take a look at what that means.
              </p>
              </div>
              <br/>
           




            </div>
            
          </section>
        
        <section className="cocktails-center">
          <div className="cocktail ">
            <img src={require("../images/image-retro-pcs.jpg")}
            style={{height:'100%', width: '100%'}}
                     
                      alt="firstpostimg" />

                      <div style={{marginLeft: 30}}>
                        <p style={{fontSize: 30, color:'#C7C5C9', fontWeight:"bold", fontFamily: 'Inter-Regular'}}>01</p>
                        <p style={{fontWeight: 700, fontSize: 18, color:'#47474D', fontFamily: 'Inter-Regular'}}>Reviving Retro PCs</p>
                        <p style={{fontWeight: 500, fontSize: 15, color:'#6C7A9B', fontFamily: 'Inter-Regular'}}>What happens when old pcs are given modern upgrades?</p>
                      </div>

          </div>
          <div className="cocktail ">
            <img src={require("../images/image-top-laptops.jpg")}
            style={{height:'100%', width: '100%'}}
                     
                      alt="firstpostimg" />

                      <div style={{marginLeft: 30}}>
                        <p style={{fontSize: 30, color:'#C7C5C9', fontWeight:"bold", fontFamily: 'Inter-Regular'}}>02</p>
                        <p style={{fontWeight: 700, fontSize: 18, color:'#47474D', fontFamily: 'Inter-Regular'}}>Top 10 Laptop of 2022</p>
                        <p style={{fontWeight: 500, fontSize: 15, color:'#6C7A9B', fontFamily: 'Inter-Regular'}}>Our best picks for various needs and budgets</p>
                      </div>

          </div>
          <div className="cocktail ">
            <img src={require("../images/image-gaming-growth.jpg")}
            style={{height:'100%', width: '100%'}}
                     
                      alt="firstpostimg" />

                      <div style={{marginLeft: 30}}>
                        <p style={{fontSize: 30, color:'#C7C5C9',fontWeight:"bold",  fontFamily: 'Inter-Regular'}}>03</p>
                        <p  style={{fontWeight: 700, fontSize: 18, color:'#47474D' ,fontFamily: 'Inter-Regular'}}>The Growth of Gaming</p>
                        <p  style={{fontWeight: 500, fontSize: 15, color:'#6C7A9B',fontFamily: 'Inter-Regular'}}>How the pandemic has sparked fresh opportunities</p>
                      </div>

          </div>

        </section>

        </section>
        {/* <p> HHjsjjs</p> */}

      </main>
    </>
  );
}

export default Home;
