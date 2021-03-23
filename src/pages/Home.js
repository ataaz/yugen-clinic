import React, { useEffect, useState, Component } from "react";

const homeAPI = "http://yugen.local/wp-json/wp/v2/pages/8";

function Home() {
  const [homepageData, setUserData] = useState({});

  useEffect(async () => {
    const b=await gethomeData();
  }, []);

  const gethomeData = async () => {
    const response = await fetch(homeAPI);
    const jsonData = await response.json();
    setUserData(jsonData);
  };
  return (
    <div className="Home">
      <div className="hero">
        <div className="container h-100">
	        <div className="row align-items-center h-100">
	        	<div className="col-xl-6">
		        	<div className="hero_text" dangerouslySetInnerHTML={{
					    __html: homepageData.acf.hero_text
					  }}></div>
	        	</div>
			</div>
		</div>
        <img src={homepageData.acf.hero_image}/>
      </div>
    </div>
  );
}

export default Home;