import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Uzair Ali',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux. Improving open-source projects, one commit at a time.',
      test: 'As a developer and a problem solver, I think Ali is a great collaborative partner to have. I met Meri in some basic javascript & react projects and since then she has drastically progressed in her understanding of the development process. She always has a professional environment and has good audio and video quality which makes it easier to communicate with her.',
    },
    {
      id: 2,
      
      name: 'Hamza Shaikh',
      
      test: "There’s people who get the job done fast, others who take a lot of time but produce great results… and then there’s Ali. He’s truly a master of his craft producing incredible results in a time frame that only someone with a lot of experience and practice could pull off. He’s creative, has great communication and really listens to what you’re looking for then makes it happen. I couldn’t be happier with the logos he created for my small business and I’ll be coming back to him with any graphic/web design work I need done in the future!”",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/akuu-khan/',
      name: 'Ryan perez',
      role: 'Full Stack Developer| Ruby on Rails | PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: 'An Absolute joy to work with this guy. he involves in the project in a very positive way and im beyond pleased with his designing skill. he is always responsive to any query and pays close attention to the details. I will have no hesitation in recomending Ali to all my contacts if they need any kind of designing or web services. ',
    },
    {
      id: 4,
      
      name: 'sai lokesh',
      
      test: "I mentored Ali some months ago, and I can say that he is one of those people that you love to work with. He was always interested in what I was trying to teach him, paying attention and always asking questions if something was not clear. When it comes to professional skills, he is really committed to work, always doing his best and going beyond the requirements of the project he's building.",
    },
    {
      id: 5,
     
      name: 'Shiza Noor',
  
      test: "Throughout all our collaborations, Ali has always conducted himself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish himself. He's not only someone I highly recommend but is also someone I greatly respect.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsInstagram />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials