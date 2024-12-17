import React from "react";

const headerImage = 'https://i.pinimg.com/736x/93/cb/fc/93cbfc40b65aad51972857bd058855f1.jpg';
const sectionImage = 'https://i.pinimg.com/736x/3e/56/96/3e569617c036c136ba599dfddfbf313b.jpg';
const events = [
  {
    img: 'https://i.pinimg.com/736x/47/dc/4c/47dc4c01772834bf935754563692ab83.jpg',
    title: 'Elegant Wedding Catering',
    description: 'Our wedding catering service offers a sophisticated touch to your special day. From gourmet appetizers to elegant main courses, we create custom menus to suit every taste. Let us take care of the details while you enjoy your celebration with family and friends.',
  },
  {
    img: 'https://i.pinimg.com/736x/44/81/e4/4481e418327fce6c08836aa105d64634.jpg',
    title: 'Corporate Luncheons',
    description: 'Impress your clients and colleagues with a professional and delicious corporate luncheon experience. We offer a variety of menus tailored to your business needs, from light bites to full meals. Perfect for meetings, presentations, or corporate events, our catering ensures a seamless dining experience that enhances your professional gatherings.',
  },
  {
    img: 'https://i.pinimg.com/736x/ba/86/3c/ba863cd8d8826ca92df16ad7605c79c2.jpg',
    title: 'Gala Dinner Service',
    description: 'Elevate your event with a luxurious gala dinner service that includes a selection of exquisite dishes and impeccable presentation. Whether it\'s a charity event, awards ceremony, or celebration, we ensure a memorable dining experience that reflects your event\'s elegance.',
  }
];

function Eventpg() {
  return (
    <div className="bg-gray-100 min-h-screen" id="ExploreMoment">
      {/* Header */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">Experience the Magic of Unforgettable Moments.</h2>
          <p className="text-lg">
            From grand gatherings to intimate celebrations, we transform every occasion into something truly special.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="flex justify-center items-center w-5/6 mx-auto mt-16 mb-16">
        <img
          className="md:block w-full h-96 md:h-[400px] lg:h-[500px] rounded-lg shadow-lg object-cover"
          src={sectionImage}
          alt="Celebration Image"
        />
      </section>

      {/* Events Section */}
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <h2 className="text-center text-3xl font-bold mb-8 sm:text-2xl">Featured Catering Events</h2>
        {events.map((event, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start rounded-lg p-4 mb-8">
            {/* Event Image */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 rounded-lg object-cover"
              />
            </div>
            {/* Event Text */}
            <div className="flex flex-col bg-white rounded-lg shadow-md p-4 justify-between w-full md:ml-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                <p className="text-base text-gray-600 mt-1 line-clamp-2 md:line-clamp-3">{event.description}</p>
              </div>
              <a href="/luxury-services"><button className="bg-blue-500 text-white py-2 px-6 rounded-lg self-end mt-4 hover:bg-blue-600 text-sm">
                Savor the Experience
              </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eventpg;
