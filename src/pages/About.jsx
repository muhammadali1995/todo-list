import React from "react";

export default function About() {
    return (
        <div className="flex flex-col">
            <h1>This is how I made it</h1>
            <p>I have used the following libraries to implement the task</p>
            <ul>
                <li>
                    <a className="text-blue-500" href="https://reactrouter.com/">React router v6</a>
                    <p>
                        It helped to build the routing. I have implemented nested routes in the following way:
                        <h2 className="font-bold">Home</h2>
                        <ul className="ml-5">
                            <li className="font-bold">
                                Task List
                            </li>
                            <li className="font-bold">Completed List</li>
                            <li className="font-bold">About
                            </li>
                        </ul>
                    </p>
                </li>
            </ul>

        </div>
    )
}