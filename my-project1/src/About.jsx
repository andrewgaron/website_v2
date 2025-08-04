
function About(){

    const para1 = "My name is Andrew Garon, and I'm from Houston, Texas. When I was younger, I began swimming and have continued to do so through this day. I went to Clear Springs High School swam both on varsity as well as a club team, and was endorsed in STEM. My senior year I committed to swim and study at Louisiana State University, where I currently attend. As a junior, I am studying Computer Engineering, and on the LSU Men's Swimming and Diving Team."
    const para2 = "I'm interested in learning both hardware and software. I enjoy the challenges and problem-solving that comes with the Work I do in the classroom, and eventually in the field. Persistent, determined, and willing to learn through failure. I am always looking for ways to improve, succeed, and make a positive difference."

    return(
        <>
            <h2>About Me</h2>
            <div>{para1}</div>
            <div>{para2}</div>
        </>
    );
}

export default About