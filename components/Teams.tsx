"use client";

import { teamMembers } from "@/data";

const Teams = () => {
  return (
    <div className="py-12">
      <h1 className="heading">
        Meet our <span className="text-[#CBACF9]">development team</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-8 mt-10">
        {teamMembers.map((member) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={member.id}
          >
            <div
              className="relative w-full h-full overflow-hidden lg:rounded-3xl border border-white/[.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-8 space-y-4">
                {/* Developer Picture */}
                <div className="relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-2 border-white/[.2] group-hover/bento:border-white/[.4] transition duration-200"
                  />
                </div>

                {/* Name and Experience */}
                <div className="text-center space-y-2">
                  <h2 className="font-bold lg:text-2xl md:text-xl text-base text-white">
                    {member.name}
                  </h2>
                  <p className="text-[#CBACF9] lg:text-lg md:text-base text-sm font-medium">
                    {member.experience} Experience
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 justify-center max-w-xs">
                  {member.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs lg:text-sm rounded-full bg-[#10132E] text-[#C1C2D3] border border-white/[.1] group-hover/border-white/[.2] transition duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
