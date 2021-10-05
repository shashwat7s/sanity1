import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function NavBar() {
    return (
        <header className="bg-blue-500">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                                          activeClassName="text-red-100 bg-green-700">
                        Home
                    </NavLink>
                    <NavLink to="post" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                                       activeClassName="text-red-100 bg-green-700">
                        Posts
                    </NavLink>
                    <NavLink to="project" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                                          activeClassName="text-red-100 bg-green-700">
                        Projects
                    </NavLink>
                    <NavLink to="about" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                                        activeClassName="text-red-100 bg-green-700">
                        About
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/shashwatsikarwar/" className="mr-4" target="_blank" fgColor="#fff" style={{height:30, width:30 }} />
                    <SocialIcon url="https://github.com/shashwat7s" className="mr-4" target="_blank" fgColor="#fff" style={{height:30, width:30 }} />

                </div>
            </div>
        </header>


    )
}