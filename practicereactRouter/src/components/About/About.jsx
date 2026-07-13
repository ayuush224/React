import React from "react";

function About(){
    return (
        <>
        <div className="grid grid-cols-2 h-147">
            <div className="border-r-2 h-full p-5 flex items-center">
                <img src="https://images.unsplash.com/photo-1780194229245-fbc966399418?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Reading"
                className="rounded-2xl"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 p-5">
                <h1 className="text-justify w-full text-2xl font-bold">
                    React development is carried out by passionate developers
                </h1>
                <p className="text-justify font-medium">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                </p>
                <p className="text-justify font-medium">
                    Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                </p>
            </div>
        </div>
        </>
    )
}

export default About;