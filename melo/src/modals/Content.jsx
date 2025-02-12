import React from 'react'

function Content() {
  return (
    <>
     <div className="content">
            <h2 className="heading1">NATIONAL INSTITUTE OF TECHNOLOGY ARUNACHAL PRADESH</h2>
            <h1 className="heading2">Welcome to the Music Club</h1>
            <p>Explore the latest events, photos, and videos!</p>
        </div>
        <div className="nitimg">
            <img srcSet={require("./images/campus.jpg")} alt="123"/>
        </div>
        <section className="music">
            <p id="para1">Music is a powerful language of emotions, blending rhythm, melody, and harmony to express the inexpressible.</p>
            <p id="para2"> It connects individuals across cultures, evokes memories, and shapes moods. Whether for joy, comfort, or reflection, music is a timeless, universal art form that transcends boundaries, inviting listeners into shared, meaningful experiences and personal introspection.
            </p>
        </section>
        <div id="about" className="about1">
            <h1>ABOUT US</h1>
            <p>Welcome to NIT ARUNACHAL PRADESH MUSIC CLUB, where music enthusiasts come together to celebrate the vibrant world of sound! Our club is dedicated to fostering a community for anyone who shares a love for music, whether you're a musician, a singer, a producer, or simply a fan.</p>
            <p>We believe music is a powerful way to connect, inspire, and create, and we strive to make our club a welcoming space for people of all skill levels and backgrounds. Join us and let’s make some noise!</p>
        </div>
        <div className="fest">
            <h1>ATULYAM</h1>
            <p>Atulyam, the cultural fest of NIT Arunachal Pradesh, celebrates creativity and diversity. The Music Club’s active participation adds rhythm and energy, with events like solo singing, group song, and open performances. It’s a dynamic platform for students to showcase their musical talent, connect with peers, and enjoy cultural experiences together.</p>
        </div>
        <div className="blackpage">
      {/* Faculty Coordinator Section */}
      <div className="faculty-container">
        <h1>MEET THE TEAM</h1>
        <h2>FACULTY COORDINATOR</h2>
        <img src={require("./images/kimmam.jpg")} alt="Faculty Coordinator" className='faculty-img' />
        <h4>Dr. Kimjolly Lhouvum</h4>
        <p>Assistant Professor & HOD (Bio-technology)</p>
        <p>Contact: +91 9402788406</p>
      </div>
      
      {/* Student Coordinators Section */}
      <div className="student-container">
        <h2>STUDENT COORDINATORS</h2>
        <div className="student-card student1">
          <img src={require("./images/dp.jpg")} alt="Hitesh Gupta" className='student-img' />
          <h5>Hitesh Gupta</h5>
          <p>4th Year ECE Student</p>
          <p>Contact :</p>
        </div>
        <div className="student-card student2">
          <img src={require("./images/dp.jpg")} alt="Bina Rai" className='student-img' />
          <h5>Bina Rai</h5>
          <p>4th Year CSE Student</p>
          <p>Contact :</p>
        </div>
        <div className="student-card student3">
          <img src={require("./images/dp.jpg")} alt="Pokli Kaye" className='student-img' />
          <h5>Pokli Kaye</h5>
          <p>4th Year Student</p>
          <p>Contact :</p>
        </div>
      </div>
    </div>
    <div className="contact">
        <h1>CONTACT</h1>
    </div>
    </>
  )
}

export default Content
