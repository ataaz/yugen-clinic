import React, { useEffect, useState, Component } from "react";

const headerAPI = "http://yugen.local/wp-json/acf/v2/options/";

function Header() {
  const [headerData, setUserData] = useState({});

  useEffect(async () => {
    const b=await getheaderData();
  }, []);

  const getheaderData = async () => {
    const response = await fetch(headerAPI);
    const jsonData = await response.json();
    setUserData(jsonData);
  };
  return (
    <header className="hdr">
    	<div className="container">
	    	<div className="row">
		    	<div className="col-xl-3">
			    	<img src={headerData.acf.header_logo}/>
		    	</div>
		    	<div className="col-xl-9">
			    	<nav class="navbar navbar-expand-sm">
				    	<ul className="list-inline d-flex top_menu">
					    	<li><a href="#">Home</a></li>
					    	<li><a href="#">About</a></li>
					    	<li><a href="#">Services</a></li>
					    	<li><a href="#">Blog</a></li>
					    	<li><a href="#">Shop</a></li>
					    	<li><a href="#">Appointment</a></li>
				    	</ul>
			    	</nav>
		    	</div>
	    	</div>
    	</div>
	</header>
  );
}

export default Header;