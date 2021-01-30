import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Top_Navbar.css";



export default class Top_Navbar extends Component {
    render() {
        return (
          
      //       <Navbar className="sticky content sticky-element" collapseOnSelect expand="lg" variant="light">
      //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      //       <Navbar.Collapse id="responsive-navbar-nav">
      //         <Nav className="mr-auto">
      //           <Nav.Link eventKey={1} componentClass={Link} href="/" to="/">HOME</Nav.Link>
      //           <Dropdown as={ButtonGroup}>
      //                 <Button variant="dropdown-toggle" href="/what_we_do">WHAT WE DO</Button>

      //         <Dropdown.Toggle
      //           split
      //           variant="dropdown-toggle"
      //           id="dropdown-split-basic"
      //         />

      //         <Dropdown.Menu>
      //           <Dropdown.Item
      //             eventKey={3}
      //             componentClass={Link}
      //             href="/Strategies"
      //             to="/Strategies"
      //           >
      //             Strategies
      //           </Dropdown.Item>
      //           <Dropdown.Item
      //             eventKey={4}
      //             componentClass={Link}
      //             href="/Classroom"
      //             to="/Classroom"
      //           >
      //             Classroom Activties
      //           </Dropdown.Item>
      //         </Dropdown.Menu>
      //       </Dropdown>
      //       <Dropdown as={ButtonGroup}>
      //         <Button variant="dropdown-toggle" href="/get_involved">
      //           GET INVOLVED
      //         </Button>

      //         <Dropdown.Toggle
      //           split
      //           variant="dropdown-toggle"
      //           id="dropdown-split-basic"
      //         />

      //         <Dropdown.Menu>
      //           <Dropdown.Item
      //             eventKey={3}
      //             componentClass={Link}
      //             href="/get_involved/#Volunteer"
      //             to="/get_involved/#Volunteer"
      //           >
      //             Be a Volunteer
      //           </Dropdown.Item>
      //           <Dropdown.Item
      //             eventKey={4}
      //             componentClass={Link}
      //             href="/get_involved/#Partner"
      //             to="/get_involved/#Partner"
      //           >
      //             Be our Partner
      //           </Dropdown.Item>
      //         </Dropdown.Menu>
      //       </Dropdown>
      //     </Nav>
      //   </Navbar.Collapse>
      //   <Navbar.Brand href="/" to="/">
      //     <img
      //       id="logo-navbar-middle"
      //       src="/assets/HeaderLogo.png"
      //       width="300"
      //       alt=""
      //     />
      //   </Navbar.Brand>
      //   <Navbar.Collapse id="responsive-navbar-nav">
      //     <Nav>
      //       <Dropdown as={ButtonGroup}>
      //         <Button variant="dropdown-toggle" href="/about">
      //           ABOUT
      //         </Button>

      //         <Dropdown.Toggle
      //           split
      //           variant="dropdown-toggle"
      //           id="dropdown-split-basic"
      //         />

      //         <Dropdown.Menu>
      //           <Dropdown.Item
      //             eventKey={5}
      //             componentClass={Link}
      //             href="/news"
      //             to="/news"
      //           >
      //             News
      //           </Dropdown.Item>
      //           <Dropdown.Item
      //             eventKey={6}
      //             componentClass={Link}
      //             href="/volunteers"
      //             to="/volunteers"
      //           >
      //             Volunteers
      //           </Dropdown.Item>
      //           <Dropdown.Item
      //             eventKey={7}
      //             componentClass={Link}
      //             href="/BOD"
      //             to="/BOD"
      //           >
      //             Board of Directors
      //           </Dropdown.Item>
      //         </Dropdown.Menu>
      //       </Dropdown>
      //       <Nav.Link
      //         eventKey={8}
      //         componentClass={Link}
      //         href="/contact"
      //         to="/contact"
      //       >
      //         CONTACT
      //       </Nav.Link>
      //       <Nav.Link
      //         eventKey={9}
      //         componentClass={Link}
      //         href="/donate"
      //         to="/donate"
      //       >
      //         DONATE
      //       </Nav.Link>
      //     </Nav>
      //   </Navbar.Collapse>
      // </Navbar>



//       <Navbar className="color-nav" collapseOnSelect expand="lg" variant="dark" sticky="top">
//   <Navbar.Brand href="/" to="/">
//   <img
//         src="/assets/HeaderLogo.png"
//         width="300"
//         className="d-inline-block align-top"
//         alt="AASEE Home Logo"
//       />
//   </Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="mr-auto">
//     <Nav.Link eventKey={1} componentClass={Link} href="/" to="/">HOME</Nav.Link>
//                 <Dropdown as={ButtonGroup}>
//                       <Button variant="dropdown-toggle" href="/what_we_do">WHAT WE DO</Button>

//               <Dropdown.Toggle
//                 split
//                 variant="dropdown-toggle"
//                 id="dropdown-split-basic"
//               />

//               <Dropdown.Menu>
//                 <Dropdown.Item
//                   eventKey={3}
//                   componentClass={Link}
//                   href="/Strategies"
//                   to="/Strategies"
//                 >
//                   Strategies
//                 </Dropdown.Item>
//                 <Dropdown.Item
//                   eventKey={4}
//                   componentClass={Link}
//                   href="/Classroom"
//                   to="/Classroom"
//                 >
//                   Classroom Activties
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//             <Dropdown as={ButtonGroup}>
//               <Button variant="dropdown-toggle" href="/get_involved">
//                 GET INVOLVED
//               </Button>

//               <Dropdown.Toggle
//                 split
//                 variant="dropdown-toggle"
//                 id="dropdown-split-basic"
//               />

//               <Dropdown.Menu>
//                 <Dropdown.Item
//                   eventKey={3}
//                   componentClass={Link}
//                   href="/get_involved/#Volunteer"
//                   to="/get_involved/#Volunteer"
//                 >
//                   Be a Volunteer
//                 </Dropdown.Item>
//                 <Dropdown.Item
//                   eventKey={4}
//                   componentClass={Link}
//                   href="/get_involved/#Partner"
//                   to="/get_involved/#Partner"
//                 >
//                   Be our Partner
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//     </Nav>
//     <Nav className="mr-auto">

//     <Dropdown as={ButtonGroup}>
//               <Button variant="dropdown-toggle" href="/about">
//                 ABOUT
//               </Button>

//               <Dropdown.Toggle
//                 split
//                 variant="dropdown-toggle"
//                 id="dropdown-split-basic"
//               />

//               <Dropdown.Menu>
//                 <Dropdown.Item
//                   eventKey={5}
//                   componentClass={Link}
//                   href="/news"
//                   to="/news"
//                 >
//                   News
//                 </Dropdown.Item>
//                 <Dropdown.Item
//                   eventKey={6}
//                   componentClass={Link}
//                   href="/volunteers"
//                   to="/volunteers"
//                 >
//                   Volunteers
//                 </Dropdown.Item>
//                 <Dropdown.Item
//                   eventKey={7}
//                   componentClass={Link}
//                   href="/BOD"
//                   to="/BOD"
//                 >
//                   Board of Directors
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//             <Nav.Link
//               eventKey={8}
//               componentClass={Link}
//               href="/contact"
//               to="/contact"
//             >
//               CONTACT
//             </Nav.Link>
//             <Nav.Link
//               eventKey={9}
//               componentClass={Link}
//               href="/donate"
//               to="/donate"
//             >
//               DONATE
//             </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
<nav class="navbar bg-custom navbar-expand-lg navbar-dark sticky-top">
  <a class="navbar-brand" href="/" to="/">
     <img
         src="/assets/HeaderLogo.png"
         width="300"
         className="d-inline-block align-top"
         alt="AASEE Home Logo"
       />
  </a>
  <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
    <span class="navbar-toggler-icon custom-toggler"></span>
  </button>
  <div class="collapse navbar-collapse" id="main_nav">
<ul class="navbar-nav">
  

<div class="dropdown btn-group mr-auto">
<a href="/" class="btn blackhover btn-primary " role="button" aria-pressed="true">Home</a>
</div>

<div class="dropdown btn-group mr-auto">

  <a href="/what_we_do" class="btn blackhover btn-primary " role="button" aria-pressed="true">What We Do</a>
  <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" eventKey={2} componentClass={Link} href="/Strategies" to="/Strategies">Strategies</a>
    <a class="dropdown-item" eventKey={4} componentClass={Link} href="/Classroom"  to="/Classroom">Classroom Activties</a>
  </div>
</div>


<div class="dropdown btn-group mr-auto">

  <a href="/get_involved" class="btn blackhover btn-primary " role="button" aria-pressed="true">Get Involved</a> 
  <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" eventKey={3} componentClass={Link} href="/get_involved/#Volunteer" to="/get_involved/#Volunteer">Be a Volunteer</a>
    <a class="dropdown-item" eventKey={4} componentClass={Link} href="/get_involved/#Partner"   to="/get_involved/#Partner">Be our Partner</a>
  </div>
</div>

<div class="dropdown btn-group mr-auto">

  <a href="/about" class="btn blackhover btn-primary " role="button" aria-pressed="true">About</a>
  <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" eventKey={5} componentClass={Link} href="/news" to="/news">News</a>
    <a class="dropdown-item" eventKey={6} componentClass={Link} href="/volunteers" to="/volunteers">Volunteers</a>
    <a class="dropdown-item" eventKey={7} componentClass={Link} href="/BOD" to="/BOD">Board Of Directors</a>
  </div>
</div>

<div class="dropdown btn-group mr-auto">
<a eventKey={8} componentClass={Link} href="/contact" class="btn blackhover btn-primary " role="button" aria-pressed="true">Contact</a>
</div>

<div class="dropdown btn-group">
<a eventKey={9} componentClass={Link} href="/donate" class="btn yellowhover btn-success" role="button" aria-pressed="true">Donate</a>
</div>


	{/* <li class="nav-item active"> <a class="nav-link" eventKey={1} componentClass={Link} href="/" to="/"> Home </a> </li>
  <li class="nav-item active dropdown">
	   <a class="nav-link  dropdown-toggle" href="/what_we_do" id="dropdownMenuLink" data-toggle="dropdown"> What We Do </a>
	    <ul class="dropdown-menu fade-up">
		    <li><a class="dropdown-item" eventKey={2} componentClass={Link} href="/Strategies" to="/Strategies"> Strategies</a></li>
		    <li><a class="dropdown-item" eventKey={4} componentClass={Link} href="/Classroom"  to="/Classroom"> Classroom Activties </a></li>
	    </ul>
	</li>
	<li class="nav-item dropdown">
	   <a class="nav-link  dropdown-toggle" href="/get_involved"> Get Involved </a>
	    <ul class="dropdown-menu fade-up">
		    <li><a class="dropdown-item" eventKey={3} componentClass={Link} href="/get_involved/#Volunteer" to="/get_involved/#Volunteer"> Be a Volunteer </a></li>
		    <li><a class="dropdown-item" eventKey={4} componentClass={Link} href="/get_involved/#Partner"   to="/get_involved/#Partner"> Be our Partner </a></li>
	    </ul>
	</li>
  <li class="nav-item dropdown">
	   <a class="nav-link  dropdown-toggle" href="/about"> About </a>
	    <ul class="dropdown-menu fade-up">
		    <li><a class="dropdown-item" eventKey={5} componentClass={Link} href="/news" to="/news"> News </a></li>
		    <li><a class="dropdown-item" eventKey={6} componentClass={Link} href="/volunteers" to="/volunteers"> Volunteers </a></li>
        <li><a class="dropdown-item" eventKey={7} componentClass={Link} href="/BOD" to="/BOD"> Board of Directors </a></li>
	    </ul>
	</li>
  <li class="nav-item active"> <a class="nav-link" eventKey={8} componentClass={Link} href="/contact" to="/contact"> Contact </a> </li>
  <li class="nav-item active"> <a class="nav-link" eventKey={9} componentClass={Link} href="/donate" to="/donate"> Donate </a> </li> */}


</ul>
  </div>
</nav>

    );
  }
}



