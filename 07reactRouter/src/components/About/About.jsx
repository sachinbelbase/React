import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            My Journey in Technology
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Good morning everyone, my name is Sachin Belbase.
                            I am a technology enthusiast and an aspiring software engineer
                            with a strong interest in software development and problem-solving.
                            I am currently focused on improving my programming skills and gaining practical
                            knowledge in areas such as web development, database management,
                            and software engineering.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Along with my interest in technology, I am also interested in entrepreneurship
                             and building innovative solutions that can create value. My long-term goal
                              is to become a skilled software engineer and contribute to impactful projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}