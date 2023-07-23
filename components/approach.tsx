import React from "react";
import Image from "next/image";
import ApproachImage from "../public/approachs.png";

const styling = {
  minHeight: "100vh"
};

const approachPoints = [
  { 'title': 'Holistic Approach', 'description': 'Our company takes a holistic approach to address technology-related challenges. They understand that successful solutions require a deep understanding of both business and technology aspects. This approach ensures that their recommendations and solutions align with the overall business objectives and are technically feasible.' },
  { 'title': 'Industry Experience', 'description': 'With experience across various industries, the company is well-equipped to handle diverse technological challenges. Their exposure to different sectors allows them to bring in cross-industry insights and best practices to tackle specific problems effectively.' },
  { 'title': 'Catering to All Enterprises', 'description': 'Whether it\'s a large, medium, or small enterprise, the company is capable of catering to the needs of all business scales. Their flexible approach and adaptability enable them to tailor solutions that are appropriate for each client\'s unique requirements and resources.' },
  { 'title': 'Continuous Learning', 'description': 'The company emphasizes continuous learning and improvement. As they work with different enterprises, they accumulate valuable experiences and insights. They leverage this knowledge to refine their methodologies and enhance the quality of their services continually.' },
  { 'title': 'Synergy of Business and Technology', 'description': 'The company\'s strength lies in bridging the gap between business and technology domains. By understanding the intricacies of both areas, they can devise strategies and solutions that lead to seamless integration and improved overall efficiency.' },
  { 'title': 'Customized Solutions', 'description': 'Recognizing that each organization has its own set of challenges and goals, the company doesn\'t offer one-size-fits-all solutions. Instead, they take a tailored approach, crafting customized strategies that align with each client\'s unique circumstances.' },
  { 'title': 'Problem-solving Approach', 'description': 'Rather than merely providing off-the-shelf solutions, the company focuses on a problem-solving approach. They dig deep into the root causes of technological challenges, allowing them to address the core issues and create sustainable solutions.' },
  { 'title': 'Collaborative Engagement', 'description': 'The company values collaboration with their clients. They work closely with stakeholders to understand their vision and objectives fully. By involving the client throughout the process, they ensure that the final solutions meet expectations and deliver tangible results.' },
  { 'title': 'Proven Track Record', 'description': 'Having worked with various enterprises, the company boasts a proven track record of successfully resolving technology-related challenges. This solid reputation inspires confidence in potential clients and highlights their ability to deliver results.' },
  { 'title': 'Future-Ready Solutions', 'description': 'Recognizing the fast-paced nature of technology, the company ensures that their solutions are future-ready. By staying updated on emerging trends and technologies, they equip their clients with the tools to remain competitive in an ever-evolving business landscape.' }
];

const Approach = () => {
  return (
    <div style={styling} className="container pt-6 pb-10">
      <h3><b>OUR</b> APPROACH</h3>
      <hr className="my-4" />
      <div className="row">
        <div className="col-lg-6">
          <h2>Delivering Technology Agnostic Solutions</h2>
          <p className="text-start">
            Your technology-related challenges must be addressed in the best
            possible way and by those who understand both, business and
            technology. Our experience across industries and in working with
            large, medium and small enterprises places us in a unique position
            where we extend our learning across the industries to the work
            that we do.
          </p>
          <span className="lead">
            {`It's all for the love of solving business problems.`}
          </span>
        </div>
        <div className="col-lg-6">
          <Image
            src={ApproachImage.src}
            className="img-fluid"
            alt="approach"
            width={500}
            height={500}
          />
        </div>
      </div>
      <hr style={{width: "20%"}}/>
      <div className="row">
        {
          approachPoints.map((point, index) => {
            return (
              <details className="col-sm-6" key={index} >
                <summary>{point.title}</summary>
                <p className="text-start card card-body">{point.description}</p>
              </details>
            )
          })
        }
      </div>
    </div>
  )
};


export default Approach;