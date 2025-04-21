import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";

export default function Index() {
  return (
    <main>
      <HeroSection
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/164cfaedf0efb7e3cde235071a566d0591ad6b86?placeholderIfAbsent=true"
        overlayImage="https://cdn.builder.io/api/v1/image/assets/TEMP/75246c5b84e66b0d3683e4a39d9c88bb728b3b7c?placeholderIfAbsent=true"
        logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d60cb336835a5533f8e1da253be8bdc540905e7e?placeholderIfAbsent=true"
        title="Start here"
        subtitle="Using Figma to Code Plugin"
      />

      {/* Features Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[rgba(202,248,41,1)] rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Pixel Perfect</h3>
              <p className="text-gray-300">
                Convert your Figma designs to code with pixel-perfect accuracy,
                maintaining the exact look and feel of your designs.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[rgba(202,248,41,1)] rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Lightning Fast</h3>
              <p className="text-gray-300">
                Save hours of development time by automatically generating
                clean, production-ready code from your designs.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[rgba(202,248,41,1)] rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Multiple Frameworks
              </h3>
              <p className="text-gray-300">
                Generate code for various frameworks including React, Vue,
                Angular, and more with customizable output options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 order-2 md:order-1">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[rgba(202,248,41,1)] flex items-center justify-center flex-shrink-0 text-black font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Design in Figma
                    </h3>
                    <p className="text-gray-300">
                      Create your designs in Figma as you normally would,
                      focusing on the user experience and visual appeal.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[rgba(202,248,41,1)] flex items-center justify-center flex-shrink-0 text-black font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Install the Plugin
                    </h3>
                    <p className="text-gray-300">
                      Add the Figma to Code plugin to your Figma workspace with
                      just a few clicks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[rgba(202,248,41,1)] flex items-center justify-center flex-shrink-0 text-black font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Generate Code
                    </h3>
                    <p className="text-gray-300">
                      Select your design elements and generate clean,
                      production-ready code with a single click.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <div className="bg-gray-800 p-1 rounded-lg">
                <div className="aspect-video bg-gray-900 rounded overflow-hidden">
                  {/* Placeholder for video or screenshot */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-[rgba(202,248,41,1)] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-300">Watch how it works</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[rgba(21,25,52,0.9)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Transform your Figma designs into production-ready code in minutes,
            not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[rgba(202,248,41,1)] text-black font-bold rounded-lg hover:bg-opacity-90 transition-all">
              Install Plugin
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Stay Updated
            </h2>
            <p className="text-center mb-8">
              Subscribe to our newsletter for the latest updates, tips, and
              tutorials.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(202,248,41,1)]"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[rgba(202,248,41,1)] text-black font-bold rounded-lg hover:bg-opacity-90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
