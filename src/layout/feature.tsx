import React from "react";
export interface featureProps {}

const feature: React.FunctionComponent<featureProps> = (props) => {
  return (
    <>
      <section id="features">
        <div className="container flex flex-col px-2 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              what's different about manager ?
            </h2>
            <p className="max-w-sm text-center text-dark md:text-left">
              Manage provides all the functionality your team needs. without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* list item1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>
                  <h3 className="text-base font-bold  md:mb-0 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden text-lg font-bold  mb-4 md:block">
                  Track company-wide progress
                </h3>
                <p className="text-darkGrayishBlue">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                  rerum modi autem ab deleniti repellat quis voluptatem debitis
                  repudiandae dolores atque quod harum aliquid alias, accusamus
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>
                  <h3 className="text-base font-bold  md:mb-0 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden text-lg font-bold  mb-4 md:block">
                  Track company-wide progress
                </h3>
                <p className="text-darkGrayishBlue ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                  rerum modi autem ab deleniti repellat quis voluptatem debitis
                  repudiandae dolores atque quod harum aliquid alias, accusamus
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>
                  <h3 className="text-base font-bold  md:mb-0 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden text-lg font-bold  mb-4 md:block">
                  Track company-wide progress
                </h3>
                <p className="text-darkGrayishBlue">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                  rerum modi autem ab deleniti repellat quis voluptatem debitis
                  repudiandae dolores atque quod harum aliquid alias, accusamus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default feature;
