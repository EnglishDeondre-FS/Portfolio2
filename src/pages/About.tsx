import React from "react";
import Header from "../components/header";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
        <Header />
      {/* Main Content Container */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">About Me</h1>

        <div className="text-gray-700 leading-relaxed">
          <p className="mb-4">
            My name is Deondre, and I've been programming for around 15 years
            now. Most of my experience, both professionally and personally, is
            in C++ and Python. I currently work in the rendering space,
            specifically in realtime rendering using Vulkan, so if you reach
            out; warning I may be busy.
          </p>

          <p className="mb-4">
            I love everything when it comes to learning new programming
            languages, or simply just a more efficient way to do something I
            thought was already fast. The programming industry is a fascinating industry and
            ever-evolving. My biggest tip for new people is to stay positive
            and always stay curious.
          </p>

          <p className="mb-4">
            The world of the web has been my recent works. I've been "trapped" at sys level for so long 
            sometimes we forget the tipical there is a library for that. In the same right most web people don't  understand the
            complexity that is the system. Which is why I really enjoy doing dicussions and having discussions with people about programming.
            Perspective is everything!
          </p>
          <p>
            Currently I'm working on <a href="/"></a> a library to make rendering 3d on the web simple, 
            and data oriented rather then the traditional object oriented.
          </p>

          <p className="text-blue-500 font-semibold">
            Any questions feel free to reach out directly!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
