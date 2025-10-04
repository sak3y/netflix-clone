import { useState } from "react";
import { BsVolumeUp, BsVolumeMute, BsFillPlayFill } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
import ReactPlayer from "react-player";

const Trailer: React.FC = () => {
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const video_id = "1031660584";
  const title = "Five Night at Freddy's";
  const overview =
    "A troubled security guard begins working at Freddy Fazbear's Pizzeria. While spending his first night on the job, he realizes the late shift at Freddy's won't be so easy to make it through.";
  const overview_sm = "A troubled security guard begins working at Freddy Fazbear's Pizzeria...";

  return (
    <div className="relative w-full aspect-video mb-20">
      {/* Video Background */}
      <div className="absolute overflow-hidden inset-0">
        <ReactPlayer
          playing={true}
          loop={true}
          volume={1}
          width="100%"
          height="100%"
          muted={isMuted}
          className="object-cover scale-y-115"
          src={`https://vimeo.com/${video_id}`}
        />
        {/* Bottom Gradient */}
        <div className="absolute -bottom-5 w-full h-50 bg-gradient-to-b from-transparent to-neutral-950" />
      </div>

      {/* Hero section */}
      <article className="absolute flex flex-col gap-4 sm:gap-6 top-1/4 text-white px-6 sm:px-12">
        {/* Title */}
        <h1 className="mt-4 text-2xl sm:text-4xl lg:text-6xl font-bold">{title}</h1>

        {/* Descriptions */}
        <div className="leading-relaxed text-neutral-300 max-w-11/12 sm:max-w-3/4 text-sm md:text-lg lg:text-xl">
          <p className="md:block hidden">{overview}</p>
          <p className="block md:hidden">{overview_sm}</p>
        </div>
        {/* Trailer button group */}
        <div className="flex gap-4">
          {/* Play btn */}
          <button
            onClick={() => {
              alert("Can't play");
            }}
            className="btn bg-white text-black hover:bg-neutral-200"
          >
            <BsFillPlayFill className="text-xl sm:text-xl" />
            Play
          </button>
          {/* More info btn */}
          <button className="btn bg-neutral-700 hover:bg-neutral-600">
            <BiInfoCircle className=" text-xl sm:text-xl" />
            More Info
          </button>
        </div>
      </article>

      {/* Volume controls */}
      {/* Issue: button needs to be clicked twice for sound to unmute */}
      <div className="absolute bottom-4 right-6 lg:bottom-40">
        {isMuted ? (
          <button className="sound-btn" onClick={() => setIsMuted(false)}>
            <BsVolumeMute size={16} />
          </button>
        ) : (
          <button className="sound-btn" onClick={() => setIsMuted(true)}>
            <BsVolumeUp size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Trailer;
